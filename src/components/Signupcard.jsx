import { slideInUp } from 'react-animations';
import { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { saveToDB } from './firebase/utils';
import Alert from './Alert';

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
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState();
  const [phoneNumber, setPhoneNumber] = useState('');
  const [cellNumber, setCellNumber] = useState('');
  const [email, setEmail] = useState('');
  const [country, setCountry] = useState('');
  const [streetName, setStreetName] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [dummyData, setDummyData] = useState([]);

  const showSignupCard = (e) => {
    showCard === 'none' ? setShowCard('block') : setShowCard('none');
    dataAOS === '' ? setDataAOS('fade-up') : setDataAOS('fade-down');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      phone: phoneNumber,
      cell: cellNumber,
      gender: gender,
      email: email,
      name: {
        first: firstName,
        last: lastName,
      },
      location: {
        city: city,
        state: state,
        country: country,
        street: {
          name: streetName,
        },
      },
      picture: dummyData[0].picture,
      dob: {
        age: age,
      },
      login: dummyData[0].login,
    };

    console.log(data);
    // saveToDB(data, 'agents');
  };

  useEffect(() => {
    const url = `https://randomuser.me/api/?results=1&nat=us,dk,fr,gb&noinfo`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setDummyData(data.results);
      });
  }, []);

  return (
    <Wrapper>
      <SignUpButton onClick={showSignupCard}>
        <p>Sign Up</p>
      </SignUpButton>
      <SignUpCard displayProp={showCard}>
        <FormWrap onSubmit={handleSubmit}>
          <Alert color={'#3E464F'} message="Hello World" />
          <p>Personal</p>
          <div className="row">
            <input
              onChange={(e) => {
                setFirstName(e.currentTarget.value);
              }}
              placeholder="first name"
            />
            <input
              onChange={(e) => {
                setLastName(e.currentTarget.value);
              }}
              placeholder="last name"
            />
            <input
              onChange={(e) => {
                setAge(e.currentTarget.value);
              }}
              placeholder="dob: age"
            />
            <input
              onChange={(e) => {
                setGender(e.currentTarget.value);
              }}
              placeholder="gender: male/female"
            />
          </div>
          <p>Contact Details</p>
          <div className="row">
            <input
              onChange={(e) => {
                setPhoneNumber(e.currentTarget.value);
              }}
              placeholder="phone number"
            />
            <input
              onChange={(e) => {
                setCellNumber(e.currentTarget.value);
              }}
              placeholder="second phone number"
            />
            <input
              onChange={(e) => {
                setEmail(e.currentTarget.value);
              }}
              className="full-width"
              placeholder="email address"
            />
          </div>
          <p>Address Details</p>
          <div className="row">
            <input
              onChange={(e) => {
                setCountry(e.currentTarget.value);
              }}
              placeholder="country"
            />
            <input
              onChange={(e) => {
                setStreetName(e.currentTarget.value);
              }}
              placeholder="Street Name"
            />
            <input
              onChange={(e) => {
                setCity(e.currentTarget.value);
              }}
              placeholder="City"
            />
            <input
              onChange={(e) => {
                setState(e.currentTarget.value);
              }}
              placeholder="State"
            />
          </div>
          <button className="submit-button">Submit Form</button>

          {/* <div className="submit-button">ppp</div> */}
        </FormWrap>
      </SignUpCard>
    </Wrapper>
  );
};

export default Signupcard;
