import { useContext } from 'react';
import {
  ApiInterface,
  LabelsInterface,
  LanguageContext
} from '../../DataProvider';
import {
  useCommingSoonApi,
  useCurrentApi,
  useFinishedApi,
  useToDoApi
} from '../api/apiReducers';
import SingleShelf from './singleShelf';

const ShelfContainer = ({ api }: ApiInterface[] | any) => {
  const { labels }: LabelsInterface | any = useContext(LanguageContext);
  console.log(labels);
  const currentApi = useCurrentApi(api);
  const concatApi = [...currentApi, ...useCommingSoonApi(api).reverse()];
  const filteredApi = concatApi.filter(
    (value, index, self) =>
      index ===
      self.findIndex((obj) => obj.id === value.id && obj.name === value.name)
  );
  const isCurrentApiShort = currentApi.length < 3 ? filteredApi : currentApi;

  return (
    <div className="layout__section">
      <SingleShelf
        data={useToDoApi(api)}
        finished={false}
        first={true}
        label={labels.navCatchUp}
        light={true}
      />
      <SingleShelf
        data={isCurrentApiShort}
        finished={false}
        first={false}
        label={labels.navCurrent}
        light={false}
      />
      <SingleShelf
        data={useCommingSoonApi(api)}
        finished={false}
        first={false}
        label={labels.navCommingSoon}
        light={true}
      />
      <SingleShelf
        data={useFinishedApi(api)}
        finished={true}
        first={false}
        label={labels.navFinished}
        light={false}
      />
    </div>
  );
};

export default ShelfContainer;
