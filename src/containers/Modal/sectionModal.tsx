import { useContext } from 'react';
import { Grid, Modal } from '@mui/material';
import { ApiInterface, LanguageContext } from '../../DataProvider';
import CloseButton from '../../components/closeButton';

type SectionModalPropsType = {
  open: boolean;
  handleClose: () => void;
  api: ApiInterface[];
};

const SectionModal = ({ open, handleClose, api }: SectionModalPropsType) => {
  const { labels }: any = useContext(LanguageContext);

  return (
    <Modal
      open={open}
      onClose={handleClose}
      className="modal modal--placeholder"
    >
      <Grid container>
        <CloseButton
          closeLabel={labels.modalCloseButton}
          handleClose={handleClose}
          isCropped={false}
        />
        {api.map((item: ApiInterface) => (
          <Grid item key={item.id} xs={12} sm={6} md={4} xl={3}>
            <img
              src={item.cover ? item.cover.url : 'IMG/Placeholder.png'}
              alt={item.name}
              className="image__tiles"
            />
            <div>
              <h3>{item.name}</h3>
            </div>
          </Grid>
        ))}
        <Grid item lg={2}>
          <div>{labels.posterText}</div>
        </Grid>
      </Grid>
    </Modal>
  );
};

export default SectionModal;
