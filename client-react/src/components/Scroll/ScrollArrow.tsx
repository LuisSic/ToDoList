import React, { useState } from 'react';
import { ReactComponent as FaArrowCircleUp } from '../../img/chevron-up-circle-outline.svg';

export const ScrollArrow = () => {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  window.addEventListener('scroll', checkScrollTop);

  return (
    <>
      {showScroll && (
        <FaArrowCircleUp className="scrollTop" onClick={scrollTop} />
      )}
    </>
  );
};
