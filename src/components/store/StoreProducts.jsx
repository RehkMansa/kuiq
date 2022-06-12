import styledComponents from 'styled-components';
import ProductCard from './ProductCard';

const StoreWrap = styledComponents.section`
  display:flex;
  flex-wrap:wrap;
  justify-content:center;
`;

const StoreItems = styledComponents.div`
  display:flex;
  flex-wrap:wrap;
  gap: 5px;
  &>div{
    width: 24%;
    padding: 0 10px;
    padding-bottom:20px;
  }
`;

const StoreProducts = () => {
  return (
    <StoreWrap>
      <StoreItems>
        <ProductCard
          image={'washing-machine1.jpg'}
          name="washing machine"
          price="100,000"
        />
        <ProductCard
          image={'washing-machine1.jpg'}
          name="washing machine"
          price="100,000"
        />
        <ProductCard
          image={'washing-machine1.jpg'}
          name="washing machine"
          price="100,000"
        />
        <ProductCard
          image={'washing-machine1.jpg'}
          name="washing machine"
          price="100,000"
        />
        <ProductCard
          image={'washing-machine1.jpg'}
          name="washing machine"
          price="100,000"
        />
      </StoreItems>
    </StoreWrap>
  );
};

export default StoreProducts;
