import styled from 'styled-components';
const FormWrapper = styled.div`
  font-family: 'Karla', serif;
  font-weight: 400;
`;

const AddListingForm = () => {
  return (
    <FormWrapper>
      <input type="text" placeholder="Title of Listing" />
    </FormWrapper>
  );
};

export default AddListingForm;
