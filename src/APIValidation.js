import React, { createContext } from 'react';
import { useRoutes } from 'hookrouter';
import { useQuery } from 'graphql-hooks';
import { query } from './containers/api/query';
import { reduceHyphenses } from './components/helpers';
import Navigation from './containers/Navigation';
import routes from './components/router';
import Footer from './components/footer';
import './assets/styles.scss';

export const ApiContext = createContext();

const ApiValidation = () => {
  const routeResult = useRoutes(routes);

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
      <Navigation routeResult={routeResult} />
      <Footer />
    </ApiContext.Provider>
  );
};

export default ApiValidation;
