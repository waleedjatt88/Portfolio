
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToHashElement = () => {
  const location = useLocation();

  useEffect(() => {
    const { hash } = location;
    if (hash) {
      const element = document.getElementById(hash.substring(1)); // '#' ko hatane ke liye
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    }
  }, [location]); // Yeh code har baar chalega jab URL badlega

  return null; // Yeh component screen par kuch nahi dikhata
};

export default ScrollToHashElement;