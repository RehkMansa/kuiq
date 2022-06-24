import { useState } from 'react';
import styled from 'styled-components';
import FloatingNavigation from './FloatingNavigation';
import { FiPlus } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import FloatingUserBall from './FloatingUserBall';

const Section = styled.section`
  height: 100vh;
  display: flex;
  padding: 0 !important;
  button {
    color: #f2b636;
    background-color: transparent;
    border: 3px solid #f2b636;
    font-weight: 600;
    transition: 2s all;
    // text-transform: uppercase;
    background-color: #f2b636;
    color: #fff;
  }

  button:hover {
    color: #f2b636;
    background-color: transparent;
  }

  & > div {
    width: 50%;
  }

  .btn--flex {
    position: absolute;
    top: 50px;
    right: 70px;

    display: flex;
    align-items: center;
    gap: 10px;
    color: #f2b636;
    transition: 1s all;
    background-color: transparent;
  }
  .btn--flex:hover {
    color: #fff;
    background-color: #f2b636;
  }
`;

const SectionLeft = styled.div`
  background-image: url(/images/home-images/${(props) => props.bgImage}.jpg);
  background-size: cover;
  position: relative;
`;
const SectionRight = styled.div`
  background-color: #070c1f;
  color: #878c9b;
  position: relative;
  padding: 100px 70px;
  overflow: auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: start;
  justify-content: center;
  font-family: 'Karla', serif;
  font-weight: 400;

  .buttonWrap {
    display: flex;
    gap: 20px;
    align-items: center;
    font-family: 'Karla', serif;
    width: 100%;
    margin-top: 50px;
    button {
      color: #f2b636;
      background-color: transparent;
      border: 3px solid #f2b636;
      border-radius: 50px;
      font-weight: 600;
      transition: 2s all;
      // text-transform: uppercase;
    }

    button:hover {
      background-color: #f2b636;
      color: #fff;
    }
  }
  p {
    line-height: 24px;
  }

  h3,
  h5 {
    font-family: 'Playfair Display', serif;
    margin: 40px 0;
    color: #f2b636;
    font-size: 75px;
    font-weight: 700;
    line-height: 1;
  }
`;

const InnerSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 100%;

  & > * {
    max-width: 100%;
  }

  .header {
    max-width: 100%;
    align-items: center;
    justify-content: space-between;
    display: flex;

    padding-right: 20px;

    p {
      // color: var(--green)
    }
  }

  h5 {
    font-size: 20px;
    line-height: 20px;
    margin: 0 0;
    font-family: 'karla', serif;
  }

  .listingDetails {
    display: flex;
    gap: 20px;
  }

  .agentDetails {
    display: flex;
    align-items: center;
    gap: 20px;

    h5 {
      margin-bottom: 10px;
    }
    img {
      width: 80px;
      height: 80px;
      border-radius: 50%;
    }
  }
`;

const Homes = () => {
  const [homeImage, setHomeImage] = useState('port-interior-3');

  const navigation = useNavigate();

  const goTo = (link) => navigation(link);

  return (
    <Section>
      <SectionLeft bgImage={homeImage}>
        <FloatingNavigation orientation={'top'} />
        <FloatingUserBall />
      </SectionLeft>
      <SectionRight>
        <button
          onClick={(e) => {
            goTo('/create-new');
          }}
          className="btn--flex"
        >
          Add New Listing <FiPlus />
        </button>
        <h3>All Apartments</h3>
        <InnerSection>
          <div className="header">
            <h5>Title of listing</h5>
            <p>Price</p>
          </div>
          <div className="listingDetails">
            <span>Number of guests</span>
            <span>rooms</span>
            <span>Amenities</span>
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt
              fugit autem dicta similique earum at nulla nostrum, delectus
              reiciendis sed!
            </p>
          </div>
          <div className="agentDetails">
            <div>
              <h5>Agent Name</h5>
            </div>
          </div>
          <button>Reserve</button>
        </InnerSection>
      </SectionRight>
    </Section>
  );
};

export default Homes;
