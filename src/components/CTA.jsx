import styled from 'styled-components';

const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  height: 50vh;
  text-align: center;
  h2 {
    font-weight: 700;
    font-size: 32px;
    line-height: 40px;
    max-width: 25ch;
  }
`;
const FormWrap = styled.form`
  margin-top: 30px;
  input {
    border: 1px solid #e0e0e0;
    color: var(--gray1);
    margin-right: 20px;
  }
  input::placeholder {
    color: #bdbdbd;
  }
`;
const CTA = () => {
  return (
    <Section>
      <h2>Want to get more information on Apartments?</h2>
      <p>Sign up and stay in the know</p>
      <FormWrap>
        <input placeholder="Email" />
        <button>Sign Up</button>
      </FormWrap>
    </Section>
  );
};

export default CTA;
