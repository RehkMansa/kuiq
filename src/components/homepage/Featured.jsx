import styledComponents from 'styled-components';
import Card from './Card';

const FeaturedWrapper = styledComponents.div` 
  padding: 0 5%;`;
const FeaturedInner = styledComponents.div`
  position:relative;
  top:-70px;
  padding:10px;
  background-color:#F8F8F8 ; 
  display:flex;
  width:100%;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  border-radius:10px;
  box-shadow: 0px 0px 40px rgba(0, 0, 102, 0.2);
  gap:10px;`;
const FeaturedRow = styledComponents.div`
  display:flex;
  width:100%;
  justify-content:center;
  align-items:center;
  gap:10px;
`;
const FeaturedSection = () => {
  return (
    <FeaturedWrapper>
      <FeaturedInner>
        <FeaturedRow>
          <Card
            title={'30% Store Discount'}
            bgImage={'banner-31.webp'}
            contentPosition={'start'}
            desc={'Lorem ipsum dolor sit amet'}
          />
          <Card
            title={'Quality Products'}
            bgImage={'banner-32.webp'}
            contentPosition={'start'}
            desc={'Lorem ipsum dolor sit'}
          />
        </FeaturedRow>
        <Card
          title={'Free Delivery on all Products'}
          bgImage={'banner-33.webp'}
          contentPosition={'center'}
          desc={'Lorem ipsum dolor sit amet consectetur nesciunt doloribus?'}
        />
      </FeaturedInner>
    </FeaturedWrapper>
  );
};

export default FeaturedSection;
