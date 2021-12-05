import { useEffect, useState } from 'react';

const useModal = () => {
  const [modal, setModal] = useState(false);
  const [size, setSize] = useState(false);
  const [price, setPrice] = useState(false);

  const toggleModal = () => {
    setModal((prevState) => !prevState);
  };

  const toggleType = () => {
    if (e.target.name == 'size') setSize(true);
    if (e.target.name == 'price') setPrice(true);
    if (!e.target.name) setInfo(true);
  };

  useEffect(() => {
    if (modal) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'auto';
    }
  }, [modal]);

  return [modal, toggleModal];
};

export default useModal;
