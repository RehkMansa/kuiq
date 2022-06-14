import styled from 'styled-components';

const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 50px 0;
  gap: 40px;
  text-align: center;
  position: relative;
  background-image: url(images/banner-01.jpg);
  background-size: cover;
  color: #ffffff;
  height: 60vh;
  overflow: hidden;
  h2 {
    margin-top: 20px;
    font-weight: 700;
    font-size: 32px;
    line-height: 40px;
    text-transform: capitalize;
  }
`;
const SectionContent = styled.div`
  p {
    max-width: 69ch;
    line-height: 1.2;
  }
  h4 {
    margin-top: 20px;
    font-weight: 700;
    font-size: 18px;
  }
`;
const Testimonials = () => {
  return (
    <Section>
      <h2>What our clients are saying</h2>
      <SectionContent>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <h4>John Doe</h4>
      </SectionContent>
    </Section>
  );
};

export default Testimonials;
