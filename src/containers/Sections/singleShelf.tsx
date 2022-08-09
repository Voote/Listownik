import { DataInterface } from '../api/apiReducers';
import LanguageToggle from '../Language/languageToggle';
import Shelf from './shelf';

type ShelfType = {
  data: DataInterface[] | any;
  label: string;
  first: boolean;
  finished: boolean;
};

const SingleShelf = ({ data, label, first, finished }: ShelfType) => (
  <div>
    <div>
      {first && <LanguageToggle />}
      <h1 className="labels--yellow-line">{label.toUpperCase()}</h1>
    </div>
    <div>
      {finished ? (
        <Shelf api={data} finished={true} />
      ) : (
        <Shelf api={data} finished={false} />
      )}
    </div>
  </div>
);

export default SingleShelf;
