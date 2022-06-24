import { FiPlus } from 'react-icons/fi';
import styled from 'styled-components';
import AddListingForm from './AddListingForm';
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
  background-position: center;
  background-repeat: no-repeat;
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

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'Playfair Display', sans-serif;
  }

  .header {
    display: flex;
    gap: 20px;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    color: #f2b636;
    h5 {
    }
  }
`;

const SaveListing = () => {
  return (
    <Section>
      <SectionLeft>
        <FloatingNavigation orientation={'top'} />
      </SectionLeft>
      <SectionRight>
        <div className="header">
          <h5>Create new Listing</h5>
          <FiPlus />
        </div>
        <div className="form-wrapper">
          <AddListingForm />
        </div>
      </SectionRight>
    </Section>
  );
};

export default SaveListing;
