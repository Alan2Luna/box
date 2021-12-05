import React, { useState } from 'react';
import ListOfCards from '../../components/ListOfCards';
import Card from '../../components/Card';
import FilterContainer from '../../components/FilterContainer';
import FilterContainerMovil from '../../components/FilterContainerMovil';
import ButtonModal from '../../components/ButtonModal';
import Filter from '../../components/Filter';
import Modal from '../../components/Modal';
import InfoModal from '../../components/InfoModal';
import Loader from '../../components/Loader';

import useModal from '../../hooks/useModal';
import useProducts from '../../hooks/useProducts';

import './Marketplace.css';

const Marketplace = () => {
  const [modal, toggleModal] = useModal();
  const [info, setInfo] = useState(false);
  const [price, setPrice] = useState(false);
  const [size, setSize] = useState(false);
  const { products, error, loading } = useProducts();

  return (
    <div className="marketplace">
      <FilterContainerMovil>
        <ButtonModal name="talla" toggleModal={toggleModal} />
        <ButtonModal name="precio" toggleModal={toggleModal} />
      </FilterContainerMovil>
      <FilterContainer>
        <Filter
          title="Precio"
          items={[
            'up to $25',
            '$25 to $50',
            '$50 to $100',
            '$100 to $200',
            '$200 & above'
          ]}
        />
        <Filter title="Talla" items={['35', '36', '37', '38', '39']} />
      </FilterContainer>
      <ListOfCards
        products={products}
        loading={loading}
        error={error}
        onError={() => <p>Error</p>}
        onLoading={() => <Loader />}
        render={(product) => (
          <Card key={product.id} toggleModal={toggleModal} url={product.link} />
        )}
      />
      {modal && (
        <Modal
          toggleModal={toggleModal}
          info={info}
          price={price}
          size={size}
          onInfo={() => <InfoModal />}
          onPrice={() => (
            <Filter
              title="Precio"
              items={[
                'up to $25',
                '$25 to $50',
                '$50 to $100',
                '$100 to $200',
                '$200 & above'
              ]}
            />
          )}
          onSize={() => (
            <Filter title="Talla" items={['35', '36', '37', '38', '39']} />
          )}
        />
      )}
    </div>
  );
};

export default Marketplace;
