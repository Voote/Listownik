import { useEffect, useState } from 'react';
import { IconButton } from '@mui/material';
import ArrowCircleUpTwoToneIcon from '@mui/icons-material/ArrowCircleUpTwoTone';

const ScrollUp = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div styles={{ textAlign: 'center' }}>
      <IconButton
        // className="button--yellow"
        variant="contained"
        color="secondary"
        style={{
          position: 'fixed',
          bottom: 10,
          right: 10,
          display: showScrollTop ? 'block' : 'none'
        }}
        onClick={scrollToTop}
      >
        <ArrowCircleUpTwoToneIcon sx={{ fontSize: 45 }} />
      </IconButton>
    </div>
  );
};

export default ScrollUp;
