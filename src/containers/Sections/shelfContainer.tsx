import React, { useContext } from 'react';
import {
  useCommingSoonApi,
  useCurrentApi,
  useFinishedApi,
  useToDoApi
} from '../api/apiReducers';
import SingleShelf from './singleShelf';
import { LanguageContext } from '../../DataProvider';

const ShelfContainer = ({ api }: any) => {
  const { labels }: any = useContext(LanguageContext);
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
        first={true}
        finished={false}
      />
      <SingleShelf
        data={isCurrentApiShort}
        label={labels.placeholderNavAktualne}
        first={false}
        finished={false}
      />
      <SingleShelf
        data={useCommingSoonApi(api)}
        label={labels.placeholderNavCommingSoon}
        first={false}
        finished={false}
      />
      <SingleShelf
        data={useFinishedApi(api)}
        label={labels.placeholderNavUkonczone}
        first={false}
        finished={true}
      />
    </div>
  );
};

export default ShelfContainer;
