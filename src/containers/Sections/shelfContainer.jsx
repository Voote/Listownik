import React, { useContext } from 'react';
import {
  useCommingSoonApi,
  useCurrentApi,
  useFinishedApi,
  useToDoApi
} from '../api/apiReducers';
import SingleShelf from './singleShelf';
import { LanguageContext } from '../../DataProvider';

const ShelfContainer = ({ api }) => {
  const { labels } = useContext(LanguageContext);
  const currentApi = useCurrentApi(api);
  const concatApi = [...currentApi, ...useCommingSoonApi(api).reverse()];
  const filteredApi = concatApi.filter(
    (value, index, self) =>
      index ===
      self.findIndex((obj) => obj.id === value.id && obj.name === value.name)
  ); //ES6 magic
  const isCurrentApiShort = currentApi.length < 3 ? filteredApi : currentApi;

  return (
    <div className="layout__section">
      <SingleShelf
        data={useToDoApi(api)}
        first
        label={labels.placeholderNavCatchUp}
        light={true}
      />
      <SingleShelf
        data={isCurrentApiShort}
        label={labels.placeholderNavAktualne}
        light={false}
      />
      <SingleShelf
        data={useCommingSoonApi(api)}
        label={labels.placeholderNavCommingSoon}
        light={true}
      />
      <SingleShelf
        data={useFinishedApi(api)}
        finished
        label={labels.placeholderNavUkonczone}
        light={false}
      />
    </div>
  );
};

export default ShelfContainer;
