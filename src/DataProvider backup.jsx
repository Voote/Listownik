import { createContext, useState } from 'react';
import { useQuery } from 'graphql-hooks';
import { query } from './containers/api/query';
import { reduceHyphenses } from './components/helpers';
import { languageLabel } from './assets/language';
import { labelsENG } from './assets/labelsENG';
import { labelsPL } from './assets/labelsPL';
import RouteProvider from './RouteProvider';

export const ApiContext = createContext();
export const LanguageContext = createContext();

const initialState = languageLabel.eng;

const DataProvider = () => {
  const [lang, setLang] = useState(initialState);
  const labels = lang === 'ENG' ? labelsENG : labelsPL;

  const { loading, error, data } = useQuery(query, {
    variables: {
      limit: 10
    }
  });

  if (loading) return 'Loading, please wait...';
  if (error) return 'Something Bad Happened';

  const initialGamesApi = data.allGames;
  const initinalVideoApi = data.allVideos;
  const gamesApi = reduceHyphenses(initialGamesApi);
  const videoApi = reduceHyphenses(initinalVideoApi);

  return (
    <ApiContext.Provider value={{ gamesApi, videoApi }}>
      <LanguageContext.Provider value={{ labels, setLang }}>
        <RouteProvider />
      </LanguageContext.Provider>
    </ApiContext.Provider>
  );
};

export default DataProvider;
