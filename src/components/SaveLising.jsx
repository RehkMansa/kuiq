import styled from 'styled-components';
import FloatingNavigation from './FloatingNavigation';

const Section = styled.div`
  height: 100vh;
  display: flex;
  padding: 0 !important;

  & > div {
    width: 50%;
  }
`;
const SectionLeft = styled.div`
  background-image: url(/images/interior01.jpg);
  background-size: cover;
  background-position:center;
  background-repeat: no-repeat;
  position: relative;
`;
const SectionRight = styled.div``;

const SaveListing = () => {
  return (
    <Section>
      <SectionLeft>
        <FloatingNavigation orientation={'top'} />
      </SectionLeft>
      <SectionRight></SectionRight>
    </Section>
  );
};

export default SaveListing;
