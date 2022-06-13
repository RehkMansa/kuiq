import styled from 'styled-components';
import FeaturedApartment from './FeaturedApartment';
const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 30px;
  a {
    text-decoration: underline;
    font-size: 24px;
    line-height: 30px;
  }
`;
const FeaturedApartments = styled.section`
  display: flex;
  gap: 20px;
  & > * {
    width: 33%;
  }
`;
const FeaturedSection = () => {
  return (
    <Section>
      <h2>Featured Apartments</h2>
      <FeaturedApartments>
        <FeaturedApartment
          coverImage={'featured-1.jpg'}
          location="mushin"
          title={'2 bedroom flat'}
          numberOfStars="4"
          price="180,000"
          numberOfReviews={'23'}
        />
        <FeaturedApartment
          coverImage={'featured-2.jpg'}
          location="ikoyi"
          title={'4 bedroom flat'}
          numberOfStars="4"
          price="180,000"
          numberOfReviews={'10'}
        />
        <FeaturedApartment
          coverImage={'featured-3.jpg'}
          location="ibadan"
          title={'3 bedroom flat'}
          numberOfStars="4"
          price="180,000"
          numberOfReviews={'5'}
        />
      </FeaturedApartments>
      <a>More classic apartments</a>
    </Section>
  );
};

export default FeaturedSection;
