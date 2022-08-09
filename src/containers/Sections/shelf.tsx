import { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import settings from './settings';
import lastCard from '../../components/lastCard';
import SectionModal from '../Modal/sectionModal';
import ShelfCard from './shelfCard';
import { ApiInterface } from '../../DataProvider';

type ShelfPropsType = {
  api: ApiInterface[];
  finished: boolean;
};

const Shelf = ({ api, finished }: ShelfPropsType) => {
  const [openCollectionModal, setOpenCollectionModal] = useState(false);
  const handleOpenCollectionModal = () => setOpenCollectionModal(true);
  const handleCloseCollectionModal = () => setOpenCollectionModal(false);
  const sliderReducedApi = api.slice(0, 7);

  return (
    <div className="layout__slider">
      <SectionModal
        open={openCollectionModal}
        handleClose={handleCloseCollectionModal}
        api={api}
      />
      <Slider {...settings}>
        {sliderReducedApi.map((item: ApiInterface) => (
          <ShelfCard
            item={item}
            key={item.id}
            seen={finished ? item.when : false}
          />
        ))}

        <div onClick={handleOpenCollectionModal}>
          <img
            src={lastCard.img}
            alt={lastCard.name}
            className="image__tiles"
          />
          <div>
            <h3>{lastCard.name}</h3>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Shelf;
