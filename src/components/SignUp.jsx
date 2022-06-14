import styled from 'styled-components';
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
`;
const GoogleBox = styled.div`
  margin-top: 20px;
  text-align: center;
  color: var(--gray2);
  span {
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
const SignUP = () => {
  return (
    <Section>
      <ContentBox>
        <FormWrapper>
          <div className="header">
            <h2>Create an account</h2>
            <span>
              <img src="images/icon-clear.png" alt='close'/>
            </span>
          </div>
          <Form>
            <label>Name</label>
            <input type="text" placeholder="full name" />
            <label>Email</label>
            <input type="email" placeholder="Email Address" />
            <label>Phone Number</label>
            <input type="text" placeholder="phone number" />
            <label>Password</label>
            <input type="password" placeholder="password" />
            <button>Sign Up</button>
          </Form>
          <GoogleBox>
            <p>
              Or signup with your <span>Google Account</span>
            </p>
          </GoogleBox>
        </FormWrapper>
      </ContentBox>
    </Section>
  );
};

export default SignUP;
