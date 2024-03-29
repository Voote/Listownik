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
    <IconButton
      //   className="button--yellow"
      color="warning"
      style={{
        position: 'fixed',
        bottom: 12,
        right: 10,
        zIndex: 1,
        display: showScrollTop ? 'block' : 'none'
      }}
      onClick={scrollToTop}
    >
      <ArrowCircleUpTwoToneIcon sx={{ fontSize: 45 }} />
    </IconButton>
  );
};

export default ScrollUp;
