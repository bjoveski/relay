/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 * @format
 * @oncall relay
 */

'use strict';

import type {NormalizationRootNode} from '../../util/NormalizationNode';
import type {
  HandleFieldPayload,
  RecordSourceProxy,
} from 'relay-runtime/store/RelayStoreTypes';
import type {RequestParameters} from 'relay-runtime/util/RelayConcreteNode';
import type {
  CacheConfig,
  Variables,
} from 'relay-runtime/util/RelayRuntimeTypes';

const RelayNetwork = require('../../network/RelayNetwork');
const RelayObservable = require('../../network/RelayObservable');
const {graphql} = require('../../query/GraphQLTag');
const RelayModernEnvironment = require('../RelayModernEnvironment');
const {
  createOperationDescriptor,
} = require('../RelayModernOperationDescriptor');
const {getSingularSelector} = require('../RelayModernSelector');
const RelayModernStore = require('../RelayModernStore');
const RelayRecordSource = require('../RelayRecordSource');
const nullthrows = require('nullthrows');
const {
  cannotReadPropertyOfUndefined__DEPRECATED,
  disallowWarnings,
} = require('relay-test-utils-internal');

disallowWarnings();

describe('execute() a query with @match', () => {
  let callbacks: {
    +complete: JestMockFn<$ReadOnlyArray<mixed>, mixed>,
    +error: JestMockFn<$ReadOnlyArray<Error>, mixed>,
    +next: JestMockFn<$ReadOnlyArray<mixed>, mixed>,
    +start?: JestMockFn<$ReadOnlyArray<mixed>, mixed>,
    +unsubscribe?: JestMockFn<$ReadOnlyArray<mixed>, mixed>,
  };
  let complete;
  let dataSource;
  let environment;
  let error;
  let fetch;
  let markdownRendererFragment;
  let markdownRendererNormalizationFragment;
  let MarkupHandler;
  let next;
  let operation;
  let operationCallback;
  let operationLoader: {
    get: (reference: mixed) => ?NormalizationRootNode,
    load: JestMockFn<$ReadOnlyArray<mixed>, Promise<?NormalizationRootNode>>,
  };
  let query;
  let resolveFragment;
  let source;
  let store;
  let variables;

  beforeEach(() => {
    query = graphql`
      query RelayModernEnvironmentExecuteWithMatchTestUserQuery($id: ID!) {
        node(id: $id) {
          ... on User {
            nameRenderer @match {
              __typename
              ...RelayModernEnvironmentExecuteWithMatchTestPlainUserNameRenderer_name
                @module(name: "PlainUserNameRenderer.react")
              ...RelayModernEnvironmentExecuteWithMatchTestMarkdownUserNameRenderer_name
                @module(name: "MarkdownUserNameRenderer.react")
            }
          }
        }
      }
    `;

    graphql`
      fragment RelayModernEnvironmentExecuteWithMatchTestPlainUserNameRenderer_name on PlainUserNameRenderer {
        plaintext
        data {
          text
        }
      }
    `;

    markdownRendererNormalizationFragment = require('./__generated__/RelayModernEnvironmentExecuteWithMatchTestMarkdownUserNameRenderer_name$normalization.graphql');
    markdownRendererFragment = graphql`
      fragment RelayModernEnvironmentExecuteWithMatchTestMarkdownUserNameRenderer_name on MarkdownUserNameRenderer {
        __typename
        markdown
        data {
          markup @__clientField(handle: "markup_handler")
        }
      }
    `;
    variables = {id: '1'};
    operation = createOperationDescriptor(query, variables);
    MarkupHandler = {
      update(storeProxy: RecordSourceProxy, payload: HandleFieldPayload) {
        const record = storeProxy.get(payload.dataID);
        if (record != null) {
          const markup = record.getValue(payload.fieldKey);
          record.setValue(
            typeof markup === 'string' ? markup.toUpperCase() : null,
            payload.handleKey,
          );
        }
      },
    };

    complete = jest.fn();
    error = jest.fn();
    next = jest.fn();
    callbacks = {complete, error, next};
    fetch = (
      _query: RequestParameters,
      _variables: Variables,
      _cacheConfig: CacheConfig,
    ) => {
      return RelayObservable.create(sink => {
        dataSource = sink;
      });
    };
    operationLoader = {
      load: jest.fn(moduleName => {
        return new Promise(resolve => {
          resolveFragment = resolve;
        });
      }),
      get: jest.fn(),
    };
    source = RelayRecordSource.create();
    store = new RelayModernStore(source);
    environment = new RelayModernEnvironment({
      network: RelayNetwork.create(fetch),
      store,
      operationLoader,
      handlerProvider: name => {
        switch (name) {
          case 'markup_handler':
            return MarkupHandler;
        }
      },
    });

    const operationSnapshot = environment.lookup(operation.fragment);
    operationCallback = jest.fn();
    environment.subscribe(operationSnapshot, operationCallback);
  });

  it('calls next() and publishes the initial payload to the store', () => {
    environment.execute({operation}).subscribe(callbacks);
    const payload = {
      data: {
        node: {
          id: '1',
          __typename: 'User',
          nameRenderer: {
            __typename: 'MarkdownUserNameRenderer',
            __module_component_RelayModernEnvironmentExecuteWithMatchTestUserQuery:
              'MarkdownUserNameRenderer.react',
            __module_operation_RelayModernEnvironmentExecuteWithMatchTestUserQuery:
              'RelayModernEnvironmentExecuteWithMatchTestMarkdownUserNameRenderer_name$normalization.graphql',
            markdown: 'markdown payload',
            data: {
              id: 'data-1',
              markup: '<markup/>',
            },
          },
        },
      },
    };
    dataSource.next(payload);
    jest.runAllTimers();

    expect(operationLoader.load).toBeCalledTimes(1);
    expect(operationLoader.load.mock.calls[0][0]).toEqual(
      'RelayModernEnvironmentExecuteWithMatchTestMarkdownUserNameRenderer_name$normalization.graphql',
    );

    expect(next.mock.calls.length).toBe(1);
    expect(complete).not.toBeCalled();
    expect(error).not.toBeCalled();
    expect(operationCallback).toBeCalledTimes(1);
    const operationSnapshot = operationCallback.mock.calls[0][0];
    expect(operationSnapshot.isMissingData).toBe(false);
    expect(operationSnapshot.data).toEqual({
      node: {
        nameRenderer: {
          __id: 'client:1:nameRenderer(supported:["PlainUserNameRenderer","MarkdownUserNameRenderer"])',
          __typename: 'MarkdownUserNameRenderer',
          __fragmentPropName: 'name',
          __fragments: {
            RelayModernEnvironmentExecuteWithMatchTestMarkdownUserNameRenderer_name:
              {},
          },
          __fragmentOwner: operation.request,
          __isWithinUnmatchedTypeRefinement: false,
          __module_component: 'MarkdownUserNameRenderer.react',
        },
      },
    });

    const matchSelector = nullthrows(
      getSingularSelector(
        markdownRendererFragment,
        (operationSnapshot.data?.node: any)?.nameRenderer,
      ),
    );
    const matchSnapshot = environment.lookup(matchSelector);
    // ref exists but match field data hasn't been processed yet
    expect(matchSnapshot.isMissingData).toBe(true);
    expect(matchSnapshot.data).toEqual({
      __typename: 'MarkdownUserNameRenderer',
      data: undefined,
      markdown: undefined,
    });
  });

  it('loads the @match fragment and normalizes/publishes the field payload', () => {
    environment.execute({operation}).subscribe(callbacks);
    const payload = {
      data: {
        node: {
          id: '1',
          __typename: 'User',
          nameRenderer: {
            __typename: 'MarkdownUserNameRenderer',
            __module_component_RelayModernEnvironmentExecuteWithMatchTestUserQuery:
              'MarkdownUserNameRenderer.react',
            __module_operation_RelayModernEnvironmentExecuteWithMatchTestUserQuery:
              'RelayModernEnvironmentExecuteWithMatchTestMarkdownUserNameRenderer_name$normalization.graphql',
            markdown: 'markdown payload',
            data: {
              id: 'data-1',
              // NOTE: should be uppercased when normalized (by MarkupHandler)
              markup: '<markup/>',
            },
          },
        },
      },
    };
    dataSource.next(payload);
    jest.runAllTimers();
    next.mockClear();
    expect(operationCallback).toBeCalledTimes(1); // initial results tested above
    const operationSnapshot = operationCallback.mock.calls[0][0];
    operationCallback.mockClear();

    const matchSelector = nullthrows(
      getSingularSelector(
        markdownRendererFragment,
        (operationSnapshot.data?.node: any)?.nameRenderer,
      ),
    );
    // initial results tested above
    const initialMatchSnapshot = environment.lookup(matchSelector);
    expect(initialMatchSnapshot.isMissingData).toBe(true);
    const matchCallback = jest.fn();
    environment.subscribe(initialMatchSnapshot, matchCallback);

    resolveFragment(markdownRendererNormalizationFragment);
    jest.runAllTimers();
    // next() should not be called when @match resolves, no new GraphQLResponse
    // was received for this case
    expect(next).toBeCalledTimes(0);
    expect(operationCallback).toBeCalledTimes(0); // operation result shouldn't change
    expect(matchCallback).toBeCalledTimes(1);

    const matchSnapshot = matchCallback.mock.calls[0][0];
    expect(matchSnapshot.isMissingData).toBe(false);
    expect(matchSnapshot.data).toEqual({
      __typename: 'MarkdownUserNameRenderer',
      data: {
        // NOTE: should be uppercased by the MarkupHandler
        markup: '<MARKUP/>',
      },
      markdown: 'markdown payload',
    });
  });

  it('synchronously normalizes/publishes the field payload if @match fragment is available synchronously', () => {
    environment.execute({operation}).subscribe(callbacks);
    jest
      .spyOn(operationLoader, 'get')
      .mockImplementationOnce(() => markdownRendererNormalizationFragment);

    const payload = {
      data: {
        node: {
          id: '1',
          __typename: 'User',
          nameRenderer: {
            __typename: 'MarkdownUserNameRenderer',
            __module_component_RelayModernEnvironmentExecuteWithMatchTestUserQuery:
              'MarkdownUserNameRenderer.react',
            __module_operation_RelayModernEnvironmentExecuteWithMatchTestUserQuery:
              'RelayModernEnvironmentExecuteWithMatchTestMarkdownUserNameRenderer_name$normalization.graphql',
            markdown: 'markdown payload',
            data: {
              id: 'data-1',
              // NOTE: should be uppercased when normalized (by MarkupHandler)
              markup: '<markup/>',
            },
          },
        },
      },
    };
    dataSource.next(payload);
    expect(next).toBeCalledTimes(1);
    next.mockClear();

    expect(operationCallback).toBeCalledTimes(1); // initial results tested above
    const operationSnapshot = operationCallback.mock.calls[0][0];
    operationCallback.mockClear();

    const matchSelector = nullthrows(
      getSingularSelector(
        markdownRendererFragment,
        (operationSnapshot.data?.node: any)?.nameRenderer,
      ),
    );

    // At this point the matchSnapshot should contain all the data,
    // since it should've been normalized synchronously
    const matchSnapshot = environment.lookup(matchSelector);
    expect(matchSnapshot.isMissingData).toBe(false);
    expect(matchSnapshot.data).toEqual({
      __typename: 'MarkdownUserNameRenderer',
      data: {
        // NOTE: should be uppercased by the MarkupHandler
        markup: '<MARKUP/>',
      },
      markdown: 'markdown payload',
    });
  });

  it('calls complete() if the network completes before processing the match', () => {
    environment.execute({operation}).subscribe(callbacks);
    const payload = {
      data: {
        node: {
          id: '1',
          __typename: 'User',
          nameRenderer: {
            __typename: 'MarkdownUserNameRenderer',
            __module_component_RelayModernEnvironmentExecuteWithMatchTestUserQuery:
              'MarkdownUserNameRenderer.react',
            __module_operation_RelayModernEnvironmentExecuteWithMatchTestUserQuery:
              'RelayModernEnvironmentExecuteWithMatchTestMarkdownUserNameRenderer_name$normalization.graphql',
            markdown: 'markdown payload',
            data: {
              id: 'data-1',
              markup: '<markup/>',
            },
          },
        },
      },
    };
    dataSource.next(payload);
    jest.runAllTimers();
    dataSource.complete();
    expect(callbacks.complete).toBeCalledTimes(0);
    expect(callbacks.error).toBeCalledTimes(0);
    expect(callbacks.next).toBeCalledTimes(1);

    // The query should still be tracked as in flight
    // even if the network completed, since we're waiting for a 3d payload
    expect(
      environment
        .getOperationTracker()
        .getPendingOperationsAffectingOwner(operation.request),
    ).not.toBe(null);

    expect(operationLoader.load).toBeCalledTimes(1);
    expect(operationLoader.load.mock.calls[0][0]).toBe(
      'RelayModernEnvironmentExecuteWithMatchTestMarkdownUserNameRenderer_name$normalization.graphql',
    );
    resolveFragment(markdownRendererNormalizationFragment);
    jest.runAllTimers();
    expect(callbacks.complete).toBeCalledTimes(1);
    expect(callbacks.error).toBeCalledTimes(0);
    expect(callbacks.next).toBeCalledTimes(1);

    // The query should no longer be tracked as in flight
    expect(
      environment
        .getOperationTracker()
        .getPendingOperationsAffectingOwner(operation.request),
    ).toBe(null);
  });

  it('calls complete() if the network completes after processing the match', () => {
    environment.execute({operation}).subscribe(callbacks);
    const payload = {
      data: {
        node: {
          id: '1',
          __typename: 'User',
          nameRenderer: {
            __typename: 'MarkdownUserNameRenderer',
            __module_component_RelayModernEnvironmentExecuteWithMatchTestUserQuery:
              'MarkdownUserNameRenderer.react',
            __module_operation_RelayModernEnvironmentExecuteWithMatchTestUserQuery:
              'RelayModernEnvironmentExecuteWithMatchTestMarkdownUserNameRenderer_name$normalization.graphql',
            markdown: 'markdown payload',
            data: {
              id: 'data-1',
              markup: '<markup/>',
            },
          },
        },
      },
    };
    dataSource.next(payload);
    jest.runAllTimers();

    expect(operationLoader.load).toBeCalledTimes(1);
    expect(operationLoader.load.mock.calls[0][0]).toBe(
      'RelayModernEnvironmentExecuteWithMatchTestMarkdownUserNameRenderer_name$normalization.graphql',
    );
    resolveFragment(markdownRendererNormalizationFragment);
    jest.runAllTimers();
    expect(callbacks.complete).toBeCalledTimes(0);
    expect(callbacks.error).toBeCalledTimes(0);
    expect(callbacks.next).toBeCalledTimes(1);

    // The query should still be tracked as in flight
    // since the network hasn't completed
    expect(
      environment
        .getOperationTracker()
        .getPendingOperationsAffectingOwner(operation.request),
    ).not.toBe(null);

    dataSource.complete();
    expect(callbacks.complete).toBeCalledTimes(1);
    expect(callbacks.error).toBeCalledTimes(0);
    expect(callbacks.next).toBeCalledTimes(1);

    // The query should no longer be tracked as in flight
    expect(
      environment
        .getOperationTracker()
        .getPendingOperationsAffectingOwner(operation.request),
    ).toBe(null);
  });

  it('calls error() if the operationLoader function throws synchronously', () => {
    environment.execute({operation}).subscribe(callbacks);
    const payload = {
      data: {
        node: {
          id: '1',
          __typename: 'User',
          nameRenderer: {
            __typename: 'MarkdownUserNameRenderer',
            __module_component_RelayModernEnvironmentExecuteWithMatchTestUserQuery:
              'MarkdownUserNameRenderer.react',
            __module_operation_RelayModernEnvironmentExecuteWithMatchTestUserQuery:
              'RelayModernEnvironmentExecuteWithMatchTestMarkdownUserNameRenderer_name$normalization.graphql',
            markdown: 'markdown payload',
            data: {
              id: 'data-1',
              markup: '<markup/>',
            },
          },
        },
      },
    };
    const loaderError = new Error();
    operationLoader.load = jest.fn(() => {
      throw loaderError;
    });
    dataSource.next(payload);
    jest.runAllTimers();

    expect(callbacks.error).toBeCalledTimes(1);
    expect(callbacks.error.mock.calls[0][0]).toBe(loaderError);
  });

  it('calls error() if operationLoader.get function throws synchronously', () => {
    environment.execute({operation}).subscribe(callbacks);
    const loaderError = new Error();
    jest.spyOn(operationLoader, 'get').mockImplementationOnce(() => {
      throw loaderError;
    });

    const payload = {
      data: {
        node: {
          id: '1',
          __typename: 'User',
          nameRenderer: {
            __typename: 'MarkdownUserNameRenderer',
            __module_component_RelayModernEnvironmentExecuteWithMatchTestUserQuery:
              'MarkdownUserNameRenderer.react',
            __module_operation_RelayModernEnvironmentExecuteWithMatchTestUserQuery:
              'RelayModernEnvironmentExecuteWithMatchTestMarkdownUserNameRenderer_name$normalization.graphql',
            markdown: 'markdown payload',
            data: {
              id: 'data-1',
              markup: '<markup/>',
            },
          },
        },
      },
    };
    dataSource.next(payload);

    expect(callbacks.error).toBeCalledTimes(1);
    expect(callbacks.error.mock.calls[0][0]).toBe(loaderError);
  });

  it('calls error() if the operationLoader promise fails', () => {
    environment.execute({operation}).subscribe(callbacks);
    const payload = {
      data: {
        node: {
          id: '1',
          __typename: 'User',
          nameRenderer: {
            __typename: 'MarkdownUserNameRenderer',
            __module_component_RelayModernEnvironmentExecuteWithMatchTestUserQuery:
              'MarkdownUserNameRenderer.react',
            __module_operation_RelayModernEnvironmentExecuteWithMatchTestUserQuery:
              'RelayModernEnvironmentExecuteWithMatchTestMarkdownUserNameRenderer_name$normalization.graphql',
            markdown: 'markdown payload',
            data: {
              id: 'data-1',
              markup: '<markup/>',
            },
          },
        },
      },
    };
    const loaderError = new Error();
    operationLoader.load = jest.fn(() => {
      return Promise.reject(loaderError);
    });
    dataSource.next(payload);
    jest.runAllTimers();

    expect(callbacks.error).toBeCalledTimes(1);
    expect(callbacks.error.mock.calls[0][0]).toBe(loaderError);
  });

  it('calls error() if processing a match payload throws', () => {
    environment.execute({operation}).subscribe(callbacks);
    const payload = {
      data: {
        node: {
          id: '1',
          __typename: 'User',
          nameRenderer: {
            __typename: 'MarkdownUserNameRenderer',
            __module_component_RelayModernEnvironmentExecuteWithMatchTestUserQuery:
              'MarkdownUserNameRenderer.react',
            __module_operation_RelayModernEnvironmentExecuteWithMatchTestUserQuery:
              'RelayModernEnvironmentExecuteWithMatchTestMarkdownUserNameRenderer_name$normalization.graphql',
            markdown: 'markdown payload',
            data: {
              id: 'data-1',
              markup: '<markup/>',
            },
          },
        },
      },
    };
    operationLoader.load = jest.fn(() => {
      // Invalid fragment node, no 'selections' field
      // This is to make sure that users implementing operationLoader
      // incorrectly still get reasonable error handling
      return Promise.resolve(({}: any));
    });
    dataSource.next(payload);
    jest.runAllTimers();

    expect(callbacks.error).toBeCalledTimes(1);
    expect(callbacks.error.mock.calls[0][0].message).toBe(
      cannotReadPropertyOfUndefined__DEPRECATED('length'),
    );
  });

  it('cancels @match processing if unsubscribed before match payload is processed', () => {
    const subscription = environment.execute({operation}).subscribe(callbacks);
    const payload = {
      data: {
        node: {
          id: '1',
          __typename: 'User',
          nameRenderer: {
            __typename: 'MarkdownUserNameRenderer',
            __module_component_RelayModernEnvironmentExecuteWithMatchTestUserQuery:
              'MarkdownUserNameRenderer.react',
            __module_operation_RelayModernEnvironmentExecuteWithMatchTestUserQuery:
              'RelayModernEnvironmentExecuteWithMatchTestMarkdownUserNameRenderer_name$normalization.graphql',
            markdown: 'markdown payload',
            data: {
              id: 'data-1',
              // NOTE: should be uppercased when normalized (by MarkupHandler)
              markup: '<markup/>',
            },
          },
        },
      },
    };
    dataSource.next(payload);
    jest.runAllTimers();
    next.mockClear();
    expect(operationCallback).toBeCalledTimes(1); // initial results tested above
    const operationSnapshot = operationCallback.mock.calls[0][0];
    operationCallback.mockClear();

    const matchSelector = nullthrows(
      getSingularSelector(
        markdownRendererFragment,
        (operationSnapshot.data?.node: any)?.nameRenderer,
      ),
    );
    // initial results tested above
    const initialMatchSnapshot = environment.lookup(matchSelector);
    expect(initialMatchSnapshot.isMissingData).toBe(true);
    const matchCallback = jest.fn();
    environment.subscribe(initialMatchSnapshot, matchCallback);

    subscription.unsubscribe();
    resolveFragment(markdownRendererNormalizationFragment);
    jest.runAllTimers();
    // next() should not be called when @match resolves, no new GraphQLResponse
    // was received for this case
    expect(next).toBeCalledTimes(0);
    expect(operationCallback).toBeCalledTimes(0); // operation result shouldn't change
    expect(matchCallback).toBeCalledTimes(0); // match result shouldn't change
  });

  describe('when using a scheduler', () => {
    let taskID;
    let tasks;
    let scheduler;
    let runTask;

    beforeEach(() => {
      taskID = 0;
      tasks = new Map<string, () => void>();
      scheduler = {
        cancel: (id: string) => {
          tasks.delete(id);
        },
        schedule: (task: () => void) => {
          const id = String(taskID++);
          tasks.set(id, task);
          return id;
        },
      };
      runTask = () => {
        for (const [id, task] of tasks) {
          tasks.delete(id);
          task();
          break;
        }
      };
      environment = new RelayModernEnvironment({
        network: RelayNetwork.create(fetch),
        scheduler,
        store,
        operationLoader,
        handlerProvider: name => {
          switch (name) {
            case 'markup_handler':
              return MarkupHandler;
          }
        },
      });
    });

    it('loads the @match fragment and normalizes/publishes the field payload with scheduling', () => {
      environment.execute({operation}).subscribe(callbacks);
      const payload = {
        data: {
          node: {
            id: '1',
            __typename: 'User',
            nameRenderer: {
              __typename: 'MarkdownUserNameRenderer',
              __module_component_RelayModernEnvironmentExecuteWithMatchTestUserQuery:
                'MarkdownUserNameRenderer.react',
              __module_operation_RelayModernEnvironmentExecuteWithMatchTestUserQuery:
                'RelayModernEnvironmentExecuteWithMatchTestMarkdownUserNameRenderer_name$normalization.graphql',
              markdown: 'markdown payload',
              data: {
                id: 'markup-data-id-1',
                // NOTE: should be uppercased when normalized (by MarkupHandler)
                markup: '<markup/>',
              },
            },
          },
        },
      };
      dataSource.next(payload);
      expect(next).toBeCalledTimes(0);
      expect(operationCallback).toBeCalledTimes(0);
      expect(tasks.size).toBe(1);
      runTask();
      jest.runAllTimers();
      next.mockClear();
      expect(operationCallback).toBeCalledTimes(1); // initial results tested above
      const operationSnapshot = operationCallback.mock.calls[0][0];
      operationCallback.mockClear();

      const matchSelector = nullthrows(
        getSingularSelector(
          markdownRendererFragment,
          (operationSnapshot.data?.node: any)?.nameRenderer,
        ),
      );
      // initial results tested above
      const initialMatchSnapshot = environment.lookup(matchSelector);
      expect(initialMatchSnapshot.isMissingData).toBe(true);
      const matchCallback = jest.fn();
      environment.subscribe(initialMatchSnapshot, matchCallback);

      resolveFragment(markdownRendererNormalizationFragment);
      jest.runAllTimers();
      expect(matchCallback).toBeCalledTimes(0);
      expect(tasks.size).toBe(1);
      runTask();
      // next() should not be called when @match resolves, no new GraphQLResponse
      // was received for this case
      expect(next).toBeCalledTimes(0);
      expect(operationCallback).toBeCalledTimes(0); // operation result shouldn't change
      expect(matchCallback).toBeCalledTimes(1);

      const matchSnapshot = matchCallback.mock.calls[0][0];
      expect(matchSnapshot.isMissingData).toBe(false);
      expect(matchSnapshot.data).toEqual({
        __typename: 'MarkdownUserNameRenderer',
        data: {
          // NOTE: should be uppercased by the MarkupHandler
          markup: '<MARKUP/>',
        },
        markdown: 'markdown payload',
      });
    });

    it('cancels processing of @match fragments with scheduling', () => {
      const subscription = environment
        .execute({operation})
        .subscribe(callbacks);
      const payload = {
        data: {
          node: {
            id: '1',
            __typename: 'User',
            nameRenderer: {
              __typename: 'MarkdownUserNameRenderer',
              __module_component_RelayModernEnvironmentExecuteWithMatchTestUserQuery:
                'MarkdownUserNameRenderer.react',
              __module_operation_RelayModernEnvironmentExecuteWithMatchTestUserQuery:
                'RelayModernEnvironmentExecuteWithMatchTestMarkdownUserNameRenderer_name$normalization.graphql',
              markdown: 'markdown payload',
              data: {
                id: 'markup-data-id-1',
                // NOTE: should be uppercased when normalized (by MarkupHandler)
                markup: '<markup/>',
              },
            },
          },
        },
      };
      dataSource.next(payload);
      expect(next).toBeCalledTimes(0);
      expect(operationCallback).toBeCalledTimes(0);
      expect(tasks.size).toBe(1);
      runTask();
      jest.runAllTimers();
      next.mockClear();
      expect(operationCallback).toBeCalledTimes(1); // initial results tested above
      const operationSnapshot = operationCallback.mock.calls[0][0];
      operationCallback.mockClear();

      const matchSelector = nullthrows(
        getSingularSelector(
          markdownRendererFragment,
          (operationSnapshot.data?.node: any)?.nameRenderer,
        ),
      );
      // initial results tested above
      const initialMatchSnapshot = environment.lookup(matchSelector);
      expect(initialMatchSnapshot.isMissingData).toBe(true);
      const matchCallback = jest.fn();
      environment.subscribe(initialMatchSnapshot, matchCallback);

      resolveFragment(markdownRendererNormalizationFragment);
      jest.runAllTimers();
      expect(matchCallback).toBeCalledTimes(0);
      expect(tasks.size).toBe(1);

      subscription.unsubscribe();
      expect(tasks.size).toBe(0);
      expect(matchCallback).toBeCalledTimes(0);
      expect(complete).toBeCalledTimes(0);
      expect(error).toBeCalledTimes(0);
      expect(next).toBeCalledTimes(0);
      expect(operationCallback).toBeCalledTimes(0); // operation result shouldn't change
    });

    it('synchronously normalizes/publishes the field payload in a single scheduler step if @match fragment is available synchronously', () => {
      environment.execute({operation}).subscribe(callbacks);
      jest
        .spyOn(operationLoader, 'get')
        .mockImplementationOnce(() => markdownRendererNormalizationFragment);

      const payload = {
        data: {
          node: {
            id: '1',
            __typename: 'User',
            nameRenderer: {
              __typename: 'MarkdownUserNameRenderer',
              __module_component_RelayModernEnvironmentExecuteWithMatchTestUserQuery:
                'MarkdownUserNameRenderer.react',
              __module_operation_RelayModernEnvironmentExecuteWithMatchTestUserQuery:
                'RelayModernEnvironmentExecuteWithMatchTestMarkdownUserNameRenderer_name$normalization.graphql',
              markdown: 'markdown payload',
              data: {
                id: 'markup-data-id-1',
                // NOTE: should be uppercased when normalized (by MarkupHandler)
                markup: '<markup/>',
              },
            },
          },
        },
      };
      dataSource.next(payload);

      // Run scheduler task to process @module
      expect(tasks.size).toBe(1);
      runTask();

      expect(next).toBeCalledTimes(1);
      next.mockClear();

      // A new task should not have been scheduled to process the
      // @module data, it should've be processed synchronously
      // in the same tasks
      expect(tasks.size).toBe(0);

      expect(operationCallback).toBeCalledTimes(1); // initial results tested above
      const operationSnapshot = operationCallback.mock.calls[0][0];
      operationCallback.mockClear();

      const matchSelector = nullthrows(
        getSingularSelector(
          markdownRendererFragment,
          (operationSnapshot.data?.node: any)?.nameRenderer,
        ),
      );

      // At this point the matchSnapshot should contain all the data,
      // since it should've been normalized synchronously
      const matchSnapshot = environment.lookup(matchSelector);
      expect(matchSnapshot.isMissingData).toBe(false);
      expect(matchSnapshot.data).toEqual({
        __typename: 'MarkdownUserNameRenderer',
        data: {
          // NOTE: should be uppercased by the MarkupHandler
          markup: '<MARKUP/>',
        },
        markdown: 'markdown payload',
      });
    });
  });
});
