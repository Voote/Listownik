import React, { createContext } from 'react';
import { useRoutes } from 'hookrouter';
import { useQuery } from 'graphql-hooks';
import routes from './components/router';
import Navbar from './components/navbar';
import Footer from './components/footer';
import './assets/styles.scss';
import { query } from './containers/api/query';

export const ApiContext = createContext();

const APIValidation = () => {
  const routeResult = useRoutes(routes);

  const { loading, error, data } = useQuery(query, {
    variables: {
      limit: 10
    }
  });

  if (loading) return 'Loading...';
  if (error) return 'Something Bad Happened';

  const videoApi = data.allVideos;
  const gamesApi = data.allGames;
  const video6 = [...videoApi].slice(0, 7);

  return (
    <ApiContext.Provider value={{ gamesApi, videoApi, video6 }}>
      {/* {console.log(data.allVideos, data.allGames)} */}
      <Navbar routeResult={routeResult} />
      <Footer />
    </ApiContext.Provider>
  );
};

export default APIValidation;
