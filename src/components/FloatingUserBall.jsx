import styled from 'styled-components';
import { HiOutlineUserCircle } from 'react-icons/hi';
const Wrapper = styled.div`
  position: absolute;
  right: 20px;
  top: 20px;
  display: flex;
  align-items: center;
  font-size: 20px;
  font-family: karla;
  font-weight: 400;
  gap: 20px;
  background-color: var(--blue);
  color: var(--gold);
  padding: 15px 30px;
  border-radius: 50px;
`;

const FloatingUserBall = ({ user }) => {
  return (
    <Wrapper>
      <HiOutlineUserCircle />
      <p>{user.displayName}</p>
    </Wrapper>
  );
};

export default FloatingUserBall;
