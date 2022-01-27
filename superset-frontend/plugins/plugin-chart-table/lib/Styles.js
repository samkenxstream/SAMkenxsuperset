(function () {var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;enterModule && enterModule(module);})();var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {return a;}; /*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import { styled } from '@superset-ui/core';const _default =

styled.div`
  table {
    width: 100%;
    min-width: auto;
    max-width: none;
    margin: 0;
  }

  th,
  td {
    min-width: 4.3em;
  }

  thead > tr > th {
    padding-right: 1.4em;
    position: relative;
    background: ${({ theme: { colors } }) => colors.grayscale.light5};
    text-align: left;
  }
  th svg {
    color: ${({ theme: { colors } }) => colors.grayscale.light2};
    position: relative;
    vertical-align: middle;
    margin: 0 ${({ theme: { gridUnit } }) => gridUnit}px;
  }
  th.is-sorted svg {
    color: ${({ theme: { colors } }) => colors.grayscale.base};
  }
  .table > tbody > tr:first-of-type > td,
  .table > tbody > tr:first-of-type > th {
    border-top: 0;
  }

  .dt-controls {
    padding-bottom: 0.65em;
  }
  .dt-metric {
    text-align: right;
  }
  .dt-totals {
    font-weight: bold;
  }
  .dt-is-null {
    color: ${({ theme: { colors } }) => colors.grayscale.light1};
  }
  td.dt-is-filter {
    cursor: pointer;
  }
  td.dt-is-filter:hover {
    background-color: ${({ theme: { colors } }) => colors.secondary.light4};
  }
  td.dt-is-active-filter,
  td.dt-is-active-filter:hover {
    background-color: ${({ theme: { colors } }) => colors.secondary.light3};
  }

  .dt-global-filter {
    float: right;
  }

  .dt-pagination {
    text-align: right;
    /* use padding instead of margin so clientHeight can capture it */
    padding-top: 0.5em;
  }
  .dt-pagination .pagination {
    margin: 0;
  }

  .pagination > li > span.dt-pagination-ellipsis:focus,
  .pagination > li > span.dt-pagination-ellipsis:hover {
    background: ${({ theme: { colors } }) => colors.grayscale.light5};
  }

  .dt-no-results {
    text-align: center;
    padding: 1em 0.6em;
  }
`;export default _default;;(function () {var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;if (!reactHotLoader) {return;}reactHotLoader.register(_default, "default", "/Users/evan/GitHub/superset/superset-frontend/plugins/plugin-chart-table/src/Styles.tsx");})();;(function () {var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;leaveModule && leaveModule(module);})();