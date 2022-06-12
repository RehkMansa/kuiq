import Input from './Inputs';
import { FiSearch } from 'react-icons/fi';
import styledComponents from 'styled-components';

const FormWrapper = styledComponents.form`
  display:flex;
  justify-content:center;
  align-items:center;

  button{
    border-radius: 0 24px 24px 0;
  }
  button:hover{
    background-color: var(--default-color);
    color: var(--secondary-color);
  }

  input{
    border: 1px solid ${(props) => props.borderColor};
    border-right:none;
    outline: none;
    border-radius: 24px 0 0 24px;
  }

`;

const SearchBar = ({ onSubmit, inputPlaceHolder, borderColor }) => {
  return (
    <FormWrapper borderColor={borderColor} onSubmit={onSubmit}>
      <Input type="text" placeholder={inputPlaceHolder} />
      <button>
        <FiSearch />
      </button>
    </FormWrapper>
  );
};

export default SearchBar;
