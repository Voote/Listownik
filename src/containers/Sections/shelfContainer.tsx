import { useContext } from 'react';
import {
  useCommingSoonApi,
  useCurrentApi,
  useFinishedApi,
  useToDoApi
} from '../api/apiReducers';
import SingleShelf from './singleShelf';
import {
  ApiInterface,
  LabelsInterface,
  LanguageContext
} from '../../DataProvider';

const ShelfContainer = ({ api }: ApiInterface[] | any) => {
  const { labels }: LabelsInterface | any = useContext(LanguageContext);
  // console.log(labels);
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
        label={labels.navCatchUp}
        first={true}
        finished={false}
      />
      <SingleShelf
        data={isCurrentApiShort}
        label={labels.navCurrent}
        first={false}
        finished={false}
      />
      <SingleShelf
        data={useCommingSoonApi(api)}
        label={labels.navCommingSoon}
        first={false}
        finished={false}
      />
      <SingleShelf
        data={useFinishedApi(api)}
        label={labels.navFinished}
        first={false}
        finished={true}
      />
    </div>
  );
};

export default ShelfContainer;
