import styledComponents from 'styled-components';

const Div = styledComponents.div`
  width: 100%;
`;

const InputElement = styledComponents.input`
  width:100%;
  padding: 5px 24px;
  height:38px;

`;
const Input = ({
  placeHolder,
  onChange,
  name,
  type,
  wrapperClass,
  inputClass,
}) => {
  return (
    <Div className={wrapperClass}>
      <InputElement
        className={inputClass}
        type={type}
        name={name}
        onChange={onChange}
        placeholder={placeHolder}
      />
    </Div>
  );
};

export default Input;
