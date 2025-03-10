/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow strict-local
 * @format
 * @oncall relay
 */

'use strict';

import type {VariablesOf} from 'relay-runtime/util/RelayRuntimeTypes';
import type {Options} from './useRefetchableFragmentInternal_REACT_CACHE';

import type {LoadMoreFn, UseLoadMoreFunctionArgs} from '../useLoadMoreFunction';
import type {RefetchFnDynamic} from './useRefetchableFragmentInternal_REACT_CACHE';
import type {
  FragmentType,
  GraphQLResponse,
  GraphQLTaggedNode,
  Observer,
  OperationType,
} from 'relay-runtime';

const useLoadMoreFunction = require('../useLoadMoreFunction');
const useStaticFragmentNodeWarning = require('../useStaticFragmentNodeWarning');
const useRefetchableFragmentInternal = require('./useRefetchableFragmentInternal_REACT_CACHE');
const {useCallback, useDebugValue, useState} = require('react');
const {
  getFragment,
  getFragmentIdentifier,
  getPaginationMetadata,
} = require('relay-runtime');
import useRelayEnvironment from '../useRelayEnvironment';

export type ReturnType<TQuery: OperationType, TKey, TFragmentData> = {
  data: TFragmentData,
  loadNext: LoadMoreFn<TQuery>,
  loadPrevious: LoadMoreFn<TQuery>,
  hasNext: boolean,
  hasPrevious: boolean,
  isLoadingNext: boolean,
  isLoadingPrevious: boolean,
  refetch: RefetchFnDynamic<TQuery, TKey>,
};

function usePaginationFragment<
  TQuery: OperationType,
  TKey: ?{+$data?: mixed, +$fragmentSpreads: FragmentType, ...},
>(
  fragmentInput: GraphQLTaggedNode,
  parentFragmentRef: TKey,
): ReturnType<
  TQuery,
  TKey,
  // NOTE: This $Call ensures that the type of the returned data is either:
  //   - nullable if the provided ref type is nullable
  //   - non-nullable if the provided ref type is non-nullable
  // prettier-ignore
  $Call<
    & (<TFragmentData>( { +$data?: TFragmentData, ... }) =>  TFragmentData)
    & (<TFragmentData>(?{ +$data?: TFragmentData, ... }) => ?TFragmentData),
    TKey,
  >,
> {
  const fragmentNode = getFragment(fragmentInput);
  useStaticFragmentNodeWarning(
    fragmentNode,
    'first argument of usePaginationFragment()',
  );
  const componentDisplayName = 'usePaginationFragment()';

  const {
    connectionPathInFragmentData,
    paginationRequest,
    paginationMetadata,
    identifierField,
  } = getPaginationMetadata(fragmentNode, componentDisplayName);

  const {fragmentData, fragmentRef, refetch} = useRefetchableFragmentInternal<
    TQuery,
    TKey,
  >(fragmentNode, parentFragmentRef, componentDisplayName);
  const fragmentIdentifier = getFragmentIdentifier(fragmentNode, fragmentRef);

  // Backward pagination
  const [loadPrevious, hasPrevious, isLoadingPrevious, disposeFetchPrevious] =
    useLoadMore<TQuery>({
      componentDisplayName,
      connectionPathInFragmentData,
      direction: 'backward',
      fragmentData,
      fragmentIdentifier,
      fragmentNode,
      fragmentRef,
      identifierField,
      paginationMetadata,
      paginationRequest,
    });

  // Forward pagination
  const [loadNext, hasNext, isLoadingNext, disposeFetchNext] =
    useLoadMore<TQuery>({
      componentDisplayName,
      connectionPathInFragmentData,
      direction: 'forward',
      fragmentData,
      fragmentIdentifier,
      fragmentNode,
      fragmentRef,
      identifierField,
      paginationMetadata,
      paginationRequest,
    });

  const refetchPagination: RefetchFnDynamic<TQuery, TKey> = useCallback(
    (variables: VariablesOf<TQuery>, options: void | Options) => {
      disposeFetchNext();
      disposeFetchPrevious();
      return refetch(variables, {...options, __environment: undefined});
    },
    [disposeFetchNext, disposeFetchPrevious, refetch],
  );

  if (__DEV__) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useDebugValue({
      fragment: fragmentNode.name,
      data: fragmentData,
      hasNext,
      isLoadingNext,
      hasPrevious,
      isLoadingPrevious,
    });
  }
  return {
    data: fragmentData,
    loadNext,
    loadPrevious,
    hasNext,
    hasPrevious,
    isLoadingNext,
    isLoadingPrevious,
    refetch: refetchPagination,
  };
}

function useLoadMore<TQuery: OperationType>(
  args: $Diff<
    UseLoadMoreFunctionArgs,
    {
      observer: Observer<GraphQLResponse>,
      onReset: () => void,
      ...
    },
  >,
): [LoadMoreFn<TQuery>, boolean, boolean, () => void] {
  const environment = useRelayEnvironment();
  const [isLoadingMore, reallySetIsLoadingMore] = useState(false);
  // Schedule this update since it must be observed by components at the same
  // batch as when hasNext changes. hasNext is read from the store and store
  // updates are scheduled, so this must be scheduled too.
  const setIsLoadingMore = (value: boolean) => {
    const schedule = environment.getScheduler()?.schedule;
    if (schedule) {
      schedule(() => {
        reallySetIsLoadingMore(value);
      });
    } else {
      reallySetIsLoadingMore(value);
    }
  };
  const observer = {
    start: () => setIsLoadingMore(true),
    complete: () => setIsLoadingMore(false),
    error: () => setIsLoadingMore(false),
  };
  const handleReset = () => setIsLoadingMore(false);
  const [loadMore, hasMore, disposeFetch] = useLoadMoreFunction<TQuery>({
    ...args,
    observer,
    onReset: handleReset,
  });
  return [loadMore, hasMore, isLoadingMore, disposeFetch];
}

module.exports = usePaginationFragment;
