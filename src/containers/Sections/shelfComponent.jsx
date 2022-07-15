import React from 'react';
import {
  useCommingSoonApi,
  useCurrentApi,
  useFinishedApi,
  useToDoApi
} from '../api/apiReducers';
import labels from '../../assets/labels';
import SingleShelf from './singleShelf';

const ShelfComponent = ({ api }) => (
  <div className="layout__line">
    <SingleShelf data={useToDoApi(api)} label={labels.placeholderNavCatchUp} />
    <SingleShelf
      data={useCurrentApi(api)}
      label={labels.placeholderNavCommingSoon}
    />
    <SingleShelf
      data={useCommingSoonApi(api)}
      label={labels.placeholderNavCommingSoon}
    />
    <SingleShelf
      data={useFinishedApi(api)}
      label={labels.placeholderNavUkonczone}
    />
  </div>
);

export default ShelfComponent;
