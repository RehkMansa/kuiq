import Select from 'react-select';
import styled from 'styled-components';
import { FiSearch } from 'react-icons/fi';

const FormWrapper = styled.form`
  display: flex;
  gap: 10px;
  width: 100%;
  align-items: center;
  color: var(--gray2);

  & > * {
    height: 40px;
  }
  .form-select {
    width: 30%;
  }
  div {
    color: var(--gray4);
  }
  & > button {
    width: 20%;
  }
  & input,
  & select {
    border: 1px solid var(--gray4);
  }

  @media screen and (max-width: 560px) {
    flex-direction: column;
    & > * {
      width: 100%;
    }
    .form-select {
      width: 100%;
    }

    & > button {
      width: 100%;
    }
  }
`;
const InputWrap = styled.div`
  // width: 50%;
  position: relative;
  & > * {
    height: 40px;
  }
  input {
    color: var(--gray1);
    width: 100%;
    padding-left: 50px;
  }
  label {
    position: absolute;
    top: 30%;
    left: 20px;
  }
  @media screen and (min-width: 560px) {
    width: 50%;
  }
`;
const states = [
  {
    label: 'State',
    value: 'null',
  },
  {
    value: 'Kogi',
    label: 'Kogi',
  },
  {
    value: 'Anambara',
    label: 'Anambara',
  },
  {
    value: 'Imo',
    label: 'Imo',
  },
];

const SearchBar = ({ onSubmit }) => {
  return (
    <FormWrapper Submit={onSubmit}>
      <InputWrap>
        <label>
          <FiSearch />
        </label>
        <input type="text" placeholder="Search"></input>
      </InputWrap>
      <Select
        className="form-select"
        defaultValue={states[0]}
        options={states}
      />
      <button>Search</button>
    </FormWrapper>
  );
};

export default SearchBar;
