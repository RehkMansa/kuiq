import styled from 'styled-components';
const FormWrapper = styled.form`
  font-family: 'Karla', serif;
  font-weight: 400;
  display: flex;
  margin-top: 20px;
  flex-flow: row wrap;
  gap: 30px 50px;
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
  .title {
    width: calc(100% - 30px);
  }
  input {
    border: 2px solid #f2b636;
    border-radius: 50px;
    font-family: 'Karla', serif;
    font-weight: 400;
    color: #878c9b;
    background-color: transparent;
  }
  textarea {
    background-color: transparent;
    border: 2px solid #f2b636;
    border-radius: 10px;
    outline: none;
    color: #878c9b;
    padding: 20px;
    width: calc(100% - 30px);
    min-height: 150px;
  }

  input[type='file'] {
    border: none;
  }
`;

const AddListingForm = () => {
  return (
    <FormWrapper>
      <input className="title" type="text" placeholder="Title of Listing" />
      <input type="text" placeholder="Number Of Rooms" />
      <input type="text" placeholder="Price" />
      <input type="text" placeholder="Number Of Guests" />
      <input type="text" placeholder="Amenities" />
      <input type="file" name="Upload Images" id="" />
      <textarea
        name="desc"
        id=""
        placeholder="Enter a short description of the place"
      ></textarea>
      <button>Submit</button>
    </FormWrapper>
  );
};

export default AddListingForm;
