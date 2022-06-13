import styled from 'styled-components';
import SearchBar from './SearchBar';
const HeroWrapper = styled.section`
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10%;
  span {
    color: var(--green);
  }

  @media screen and (max-width: 992px) {
    background-image: url(images/building-illustration.svg);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: left center;
  }
  @media screen and (max-width: 560px) {
    height: 60vh;
    background-position: center;
  }
`;
const HeroLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  h2 {
    font-weight: 300;
    font-size: 48px;
    line-height: 60px;
  }
  @media screen and (min-width: 992px) {
    flex: 0.6;
  }
`;

const HeroRight = styled.div`
  flex: 0.4;
  img {
    width: 100%;
    object-fit: cover;
  }

  @media screen and (max-width: 992px) {
    display: none;
  }
`;
const HeroSection = (props) => {
  const handleSearch = (value) => {
    console.log(value);
  };
  return (
    <HeroWrapper>
      <HeroLeft>
        <h2>
          Get unique and comfortable <span>hostels</span> in over 34 states.
        </h2>
        <SearchBar onSubmit={handleSearch} />
      </HeroLeft>
      <HeroRight>
        <img src="images/building-illustration.svg" alt="" />
      </HeroRight>
    </HeroWrapper>
  );
};

export default HeroSection;
