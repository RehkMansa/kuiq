import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  gap: 10px;
  font-size: 18px;
  align-items: center;
  color: #f2b636;
  font-family: karla;
  font-weight: 400;
  overflow: hidden;
  transition: 2s all ease-in-out;
  cursor: pointer;
  &:hover {
    .textArea {
      display: flex;
    }
  }
`;
const IconWrap = styled.div`
  font-size: 18px;
`;

const TextWrapper = styled.div`
  transition: 2s all ease-in-out;
  position: absolute;
  padding: 20px 0;
  left: 60px;
  display: flex;
  display: none;
  border-radius: 10px;
  width: 150px;
  align-items: center;
  justify-content: center;
  height: 30px;
  background-color: #070c1f;
`;

const NavigationButton = ({ icon, onClickFunc, title }) => {
  return (
    <Wrapper onClick={onClickFunc}>
      <IconWrap>{icon}</IconWrap>
      <TextWrapper className="textArea">{title}</TextWrapper>
    </Wrapper>
  );
};

export default NavigationButton;
