// import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import FloatingNavigation from './FloatingNavigation';
import FloatingUserBall from './FloatingUserBall';

const Section = styled.section`
  height: 100vh;
  display: flex;
  padding: 0 !important;

  & > div {
    width: 50%;
  }
`;

const SectionLeft = styled.div`
  background-image: url(/images/home-images/p-s-04.jpg);
  background-size: cover;
  position: relative;
`;
const SectionRight = styled.div`
  background-color: #070c1f;
  color: #878c9b;
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

  h3 {
    font-family: 'Playfair Display', serif;
    margin: 40px 0;
    color: #f2b636;
    font-size: 75px;
    font-weight: 700;
    line-height: 1;
  }
`;

const imageArray = ['image1', 'image2', 'image3'];

const NewHome = ({ userDetails }) => {
  const navigation = useNavigate();
  return (
    <Section>
      <SectionLeft>
        {userDetails && <FloatingUserBall user={userDetails} />}
        <FloatingNavigation orientation={'top'} />
      </SectionLeft>
      <SectionRight>
        <h3>Cribs n Keys</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti hic
          at official beatae repellendus eveniet sapiente placeat velit qui
          magnam?
        </p>
        <div className="buttonWrap">
          <button
            onClick={() => {
              navigation('/homes');
            }}
          >
            View Homes
          </button>
        </div>
      </SectionRight>
    </Section>
  );
};

export default NewHome;
