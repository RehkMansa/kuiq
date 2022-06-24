import styled from 'styled-components';
import { FiX } from 'react-icons/fi';
import { useState } from 'react';

const Wrapper = styled.div`
  width: 100%;
  background-color: ${(props) => props.bg};
  height: ${(props) => props.height};
  border-radius: 5px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 400;
  position: relative;
  color: var(--gold);
  transition: .75s all;
  overflow: hidden;
  .closeButton {
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
  }
`;

const Alert = ({ message, color }) => {
  const [height, setHeight] = useState('80px');
  return (
    <Wrapper bg={color} height={height}>
      <p>{message}</p>
      <div
        onClick={(e) => {
          setHeight('0');
        }}
        className="closeButton"
      >
        <FiX />
      </div>
    </Wrapper>
  );
};

export default Alert;
