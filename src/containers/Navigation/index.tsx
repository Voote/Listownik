import PageNotFound from '../../components/page404';
import Navbar from './Navbar';

const Navigation = ({ routeResult }: any) => (
  <nav className="navbar__position">
    <Navbar />
    {routeResult || <PageNotFound />}
  </nav>
);

export default Navigation;
