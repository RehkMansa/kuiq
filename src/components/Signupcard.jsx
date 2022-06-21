import { slideInUp , } from 'react-animations';
import { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';

const SlideInUpAnimation = keyframes`${slideInUp}`;

const Wrapper = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 0;
  width: 100%;
`;
const SignUpButton = styled.div`
  font-weight: 400;
  justify-content: center;
  display: flex;
  cursor: pointer;
  align-items: center;
  font-family: 'Karla', sans-serif;
  border-radius: 20px 20px 0 0;
  padding: 15px;
  width: 200px;
  color: #f2b636;
  background-color: #060b1e;
`;
const SignUpCard = styled.div`
  width: 85%;
  border-radius: 20px 20px 0 0;
  background-color: #060b1e;
  opacity: 0.9;
  display: ${(props) => props.displayProp};
`;

const FormWrap = styled.form`
  font-family: 'Karla', sans-serif;
  padding: 30px;
  display: flex;
  animation: 1s ${SlideInUpAnimation};
  flex-flow: column wrap;
  gap: 20px;

  p {
    color: #f2b636;
  }
  .submit-button {
    background-color: #f2b636;
    color: #060b1e;
  }
  input::placeholder {
    font-weight: 400;
    text-transform: capitalize;
  }
  input {
    font-weight: 400;
  }

  .row {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    width: 100%;
  }

  .row > input {
    width: calc(50% - 10px);
  }

  .row > .full-width {
    width: 100%;
  }
`;

const Signupcard = () => {
  const [showCard, setShowCard] = useState('none');
  const [dataAOS, setDataAOS] = useState('');

  const showSignupCard = (e) => {
    showCard === 'none' ? setShowCard('block') : setShowCard('none');
    dataAOS === '' ? setDataAOS('fade-up') : setDataAOS('fade-down');
  };

  return (
    <Wrapper>
      <SignUpButton onClick={showSignupCard}>
        <p>Sign Up</p>
      </SignUpButton>
      <SignUpCard displayProp={showCard}>
        <FormWrap>
          <p>Personal</p>
          <div className="row">
            <input placeholder="first name" />
            <input placeholder="last name" />
            <input placeholder="age" />
            <input placeholder="gender" />
          </div>
          <p>Contact Details</p>
          <div className="row">
            <input placeholder="phone number" />
            <input placeholder="second phone number" />
            <input className="full-width" placeholder="email address" />
          </div>
          <p>Address Details</p>
          <div className="row">
            <input placeholder="nationality" />
            <input placeholder="Street" />
            <input className="full-width" placeholder="Street address" />
          </div>
          <button className="submit-button">Submit Form</button>

          <div className="submit-button"></div>
        </FormWrap>
      </SignUpCard>
    </Wrapper>
  );
};

export default Signupcard;
