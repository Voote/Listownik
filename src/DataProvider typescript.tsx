import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useState
} from 'react';
import { useQuery } from 'graphql-hooks';
import { query } from './containers/api/query';
import { reduceHyphenses } from './components/helpers';
import { labelsENG } from './assets/labelsENG';
import { labelsPL } from './assets/labelsPL';
import { languageLabel } from './assets/language';
import RouteProvider from './RouteProvider';

type Language = {
  lang: string;
  setLang: Dispatch<SetStateAction<Language>>;
};

const initialState: Language = {
  lang: languageLabel.eng,
  setLang: (): void => {}
};

const labelInitialState: {} = {
  labels: {},
  setLang: (): void => {}
};

export const ApiContext = createContext('');
export const LanguageContext = createContext(labelInitialState);

const DataProvider = () => {
  const [lang, setLang] = useState<Language>(initialState);
  const isLanguageEng: boolean = (lang as any) === 'ENG';
  const labels = isLanguageEng ? labelsENG : labelsPL;

  const { loading, error, data } = useQuery(query, {
    variables: {
      limit: 10
    }
  });

  console.log(data);

  const initialGamesApi = data.allGames;
  const initinalVideoApi = data.allVideos;
  const gamesApi: any = reduceHyphenses(initialGamesApi);
  const videoApi: any = reduceHyphenses(initinalVideoApi);

  if (loading) return 'Loading, please wait...';
  if (error) return 'Something Bad Happened';

  return (
    <ApiContext.Provider value={{ ...gamesApi, ...videoApi }}>
      <LanguageContext.Provider value={{ labels, setLang }}>
        <RouteProvider />
      </LanguageContext.Provider>
    </ApiContext.Provider>
  );
};

export default DataProvider;
// export { DataProvider, ApiContext, LanguageContext };
