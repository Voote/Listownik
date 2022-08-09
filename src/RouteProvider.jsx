import { useRoutes } from 'hookrouter';
import Navigation from './containers/Navigation/index';
import Footer from './components/footer';
import routes from './components/router';
import ScrollUp from './components/scrollUp';

const RouteProvider = () => {
  const routeResult = useRoutes(routes);

  return (
    <>
      <Navigation routeResult={routeResult} />
      <ScrollUp />
      <Footer />
    </>
  );
};

export default RouteProvider;
