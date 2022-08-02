import React, { createContext, useState } from 'react';
import { useRoutes } from 'hookrouter';
import { useQuery } from 'graphql-hooks';
import { query } from './containers/api/query';
import { reduceHyphenses } from './components/helpers';
import Navigation from './containers/Navigation';
import Footer from './components/footer';
import routes from './components/router';
import { languageLabel } from './assets/language';
import { labelsENG } from './assets/labelsENG';
import { labelsPL } from './assets/labelsPL';

export const ApiContext = createContext();
export const LanguageContext = createContext();

const DataProvider = () => {
  const [lang, setLang] = useState(languageLabel.eng);
  const routeResult = useRoutes(routes);
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
      <LanguageContext.Provider value={{ labels, lang, setLang }}>
        <Navigation routeResult={routeResult} />
        <Footer />
      </LanguageContext.Provider>
    </ApiContext.Provider>
  );
};

export default DataProvider;
