import { DataInterface } from '../api/apiReducers';
import LanguageToggle from '../Language/languageToggle';
import Shelf from './shelf';

type ShelfType = {
  data: DataInterface[] | any;
  first: boolean;
  finished: boolean;
  label: string;
  light: boolean;
};

const SingleShelf = ({ data, finished, first, label, light }: ShelfType) => (
  <div className={light ? '' : 'layout__section--grey'}>
    <div>
      {first && <LanguageToggle />}
      <h1 className="layout__line layout__line--yellow">
        {label.toUpperCase()}
      </h1>
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
