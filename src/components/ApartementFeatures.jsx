import styled from 'styled-components';
import FeaturesCard from './FeaturesCard';

const Section = styled.section`
  padding: 40px 0;
  display: flex;
  gap: 50px;
  width: 100%;
  flex-direction: column;
  justify-content: center;
`;
const FeaturesWrap = styled.div`
  display: flex;
`;
const ApartmentFeatures = () => {
  return (
    <Section>
      <h2>Apartment by Features</h2>
      <FeaturesWrap>
        <FeaturesCard icon={'water.svg'} name={'water'} />
        <FeaturesCard icon={'light-bulb.svg'} name={'electricity'} />
        <FeaturesCard icon={'keys.svg'} name={'ensuite'} />
        <FeaturesCard icon={'car-pack.svg'} name={'car pack'} />
        <FeaturesCard icon={'shield.svg'} name={'security'} />
        <FeaturesCard icon={'tiles.svg'} name={'tiled'} />
      </FeaturesWrap>
    </Section>
  );
};

export default ApartmentFeatures;
