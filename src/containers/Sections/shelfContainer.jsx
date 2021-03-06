import React from 'react';
import {
  useCommingSoonApi,
  useCurrentApi,
  useFinishedApi,
  useToDoApi
} from '../api/apiReducers';
import labels from '../../assets/labels';
import SingleShelf from './singleShelf';

const ShelfContainer = ({ api }) => {
  const currentApi = useCurrentApi(api);
  const concatApi = [...currentApi, ...useCommingSoonApi(api).reverse()];
  const filteredApi = concatApi.filter(
    (value, index, self) =>
      index ===
      self.findIndex((obj) => obj.id === value.id && obj.name === value.name)
  ); //ES6 magic
  const isCurrentApiShort = currentApi.length < 3 ? filteredApi : currentApi;

  return (
    <div className="layout__line">
      <SingleShelf
        data={useToDoApi(api)}
        label={labels.placeholderNavCatchUp}
      />
      <SingleShelf
        data={isCurrentApiShort}
        label={labels.placeholderNavAktualne}
      />
      <SingleShelf
        data={useCommingSoonApi(api)}
        label={labels.placeholderNavCommingSoon}
      />
      <SingleShelf
        data={useFinishedApi(api)}
        label={labels.placeholderNavUkonczone}
        finished
      />
    </div>
  );
};

export default ShelfContainer;
