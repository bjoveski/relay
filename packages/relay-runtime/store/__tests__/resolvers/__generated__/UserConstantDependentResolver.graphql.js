/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @oncall relay
 *
 * @generated SignedSource<<a97c2f7b6a0d7e5c3d850f4adbfb0b17>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { Fragment, ReaderFragment } from 'relay-runtime';
import type { UserConstantResolver$key } from "./UserConstantResolver.graphql";
import type { FragmentType } from "relay-runtime";
import {constant as userConstantResolver} from "../UserConstantResolver.js";
// Type assertion validating that `userConstantResolver` resolver is correctly implemented.
// A type error here indicates that the type signature of the resolver module is incorrect.
(userConstantResolver: (
  rootKey: UserConstantResolver$key, 
) => mixed);
declare export opaque type UserConstantDependentResolver$fragmentType: FragmentType;
export type UserConstantDependentResolver$data = {|
  +constant: ?$Call<<R>((...empty[]) => R) => R, typeof userConstantResolver>,
  +$fragmentType: UserConstantDependentResolver$fragmentType,
|};
export type UserConstantDependentResolver$key = {
  +$data?: UserConstantDependentResolver$data,
  +$fragmentSpreads: UserConstantDependentResolver$fragmentType,
  ...
};
*/

var node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "UserConstantDependentResolver",
  "selections": [
    {
      "alias": null,
      "args": null,
      "fragment": {
        "args": null,
        "kind": "FragmentSpread",
        "name": "UserConstantResolver"
      },
      "kind": "RelayResolver",
      "name": "constant",
      "resolverModule": require('./../UserConstantResolver').constant,
      "path": "constant"
    }
  ],
  "type": "User",
  "abstractKey": null
};

if (__DEV__) {
  (node/*: any*/).hash = "24ebf834d1a139bc177fc287cdf0dfd2";
}

module.exports = ((node/*: any*/)/*: Fragment<
  UserConstantDependentResolver$fragmentType,
  UserConstantDependentResolver$data,
>*/);
