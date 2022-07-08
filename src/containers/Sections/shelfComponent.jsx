import React from 'react';
import {
  useCommingSoonApi,
  useCurrentApi,
  useFinishedApi,
  useToDoApi
} from '../api/apiReducers';
import FinishedSection from './finishedSection';
import Shelf from './shelf';
import labels from '../../assets/labels';

const ShelfComponent = ({ api }) => (
  <div className="layout__line">
    <h1 className="labels__dark">
      {labels.placeholderNavCatchUp.toUpperCase()}
    </h1>
    <div>
      <Shelf api={useToDoApi(api)} />
    </div>
    <h1 className="labels__dark">
      {labels.placeholderNavAktualne.toUpperCase()}
    </h1>
    <div>
      <Shelf api={useCurrentApi(api)} />
    </div>
    <h1 className="labels__dark">
      {labels.placeholderNavCommingSoon.toUpperCase()}
    </h1>
    <div>
      <Shelf api={useCommingSoonApi(api)} />
    </div>
    <h1 className="labels__dark">
      {labels.placeholderNavUkonczone.toUpperCase()}
    </h1>
    <div>
      <FinishedSection api={useFinishedApi(api)} />
    </div>
  </div>
);

export default ShelfComponent;
