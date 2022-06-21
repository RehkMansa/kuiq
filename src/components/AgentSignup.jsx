import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import styled from 'styled-components';
import { signInWithGoogle, auth, handleUserProfile } from './firebase/utils';
const Section = styled.section`
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 400;
  h2 {
    font-size: 36px;
    font-weight: 400;
    line-height: 45px;
    color: #27ae60;
  }
`;
const ContentBox = styled.div`
  width: 560px;
  background-color: #fff;
  padding: 60px;
  border-radius: 5px;
`;
const FormWrapper = styled.div`
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
  }
  span {
    cursor: pointer;
  }
`;
const GoogleBox = styled.div`
  margin-top: 20px;
  text-align: center;
  color: var(--gray2);
  button {
    padding: 0;
    background-color: transparent;
    color: var(--green);
  }
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  label {
    font-size: 18px;
    line-height: 23px;
  }
  input::placeholder {
    text-transform: capitalize;
    color: #bdbdbd;
  }
`;
const AgentSignUP = ({ modal }) => {
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Your password does not match');
      setShowError(true);

      return;
    }
    let timeStamp = new Date();

    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        emailAddress,
        password
      );
      handleUserProfile(user, { displayName: fullName });
      console.log(fullName);
      setPassword('');
      setEmailAddress('');
      setFullName('');
      setConfirmPassword('');
      setError('');
      setShowError(false);
      modal(false);
    } catch (err) {
      console.log(err);
    }
  };

  const closeModal = (params) => {
    modal(false);
  };
  const googleSignIn = (params) => {
    signInWithGoogle();
    if (signInWithGoogle) {
      modal(false);
    }
  };
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showError, setShowError] = useState(false);
  const [error, setError] = useState('');
  return (
    <Section>
      <ContentBox>
        <FormWrapper>
          <div className="header">
            <h2>Create an account</h2>
            <span onClick={closeModal}>
              <img src="images/icon-clear.png" alt="close" />
            </span>
          </div>
          <Form onSubmit={handleFormSubmit}>
            {showError && (
              <div style={{ color: 'red', textAlign: 'center' }}>{error}</div>
            )}
            <label>Name</label>
            <input
              required
              onChange={(e) => {
                setFullName(e.currentTarget.value);
              }}
              type="text"
              placeholder="full name"
            />
            <label>Email</label>
            <input
              required
              type="email"
              onChange={(e) => {
                setEmailAddress(e.currentTarget.value);
              }}
              placeholder="Email Address"
            />
            {/* <label>Phone Number</label>
            <input type="text" placeholder="phone number" /> */}
            <label>Password</label>
            <input
              required
              onChange={(e) => {
                setPassword(e.currentTarget.value);
              }}
              type="password"
              placeholder="password"
            />
            <label>Confirm Password</label>
            <input
              required
              onChange={(e) => {
                setConfirmPassword(e.currentTarget.value);
              }}
              type="password"
              placeholder="confirm password"
            />
            <button>Sign Up</button>
          </Form>
          <GoogleBox>
            <p>
              Or sign up with your{' '}
              <button onClick={googleSignIn}>Google Account</button>
            </p>
          </GoogleBox>
        </FormWrapper>
      </ContentBox>
    </Section>
  );
};

export default AgentSignUP;
