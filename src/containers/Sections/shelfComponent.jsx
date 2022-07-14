import React from 'react';
import {
  useCommingSoonApi,
  useCurrentApi,
  useFinishedApi,
  useToDoApi
} from '../api/apiReducers';
import Shelf from './shelf';
import labels from '../../assets/labels';

const upCase = (text) => text.toUpperCase();

const ShelfComponent = ({ api }) => (
  <div className="layout__line">
    <h1 className="labels__dark">{upCase(labels.placeholderNavCatchUp)}</h1>
    <div>
      <Shelf api={useToDoApi(api)} />
    </div>
    <h1 className="labels__dark">{upCase(labels.placeholderNavAktualne)}</h1>
    <div>
      <Shelf api={useCurrentApi(api)} />
    </div>
    <h1 className="labels__dark">{upCase(labels.placeholderNavCommingSoon)}</h1>
    <div>
      <Shelf api={useCommingSoonApi(api)} />
    </div>
    <h1 className="labels__dark">{upCase(labels.placeholderNavUkonczone)}</h1>
    <div>
      <Shelf api={useFinishedApi(api)} finished />
    </div>
  </div>
);

export default ShelfComponent;
