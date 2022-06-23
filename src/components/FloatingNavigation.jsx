import styled from 'styled-components';
import NavigationButton from './NavigationButton';
import { FiHome, FiUserPlus, FiLogIn, FiUsers } from 'react-icons/fi';

const Wrapper = styled.div`
  background-color: #070c1f;
  position: absolute;
  ${(props) => props.orientation}: 20px;
  padding: 20px;
  left: 20px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: start;
  justify-content: center;

  & > * {
    width: 100%;
  }
`;

const FloatingNavigation = ({ orientation }) => {
  return (
    <Wrapper orientation={orientation}>
      <NavigationButton icon={<FiHome />} title="Home" />
      <NavigationButton icon={<FiUserPlus />} title="Sign Up" />
      <NavigationButton icon={<FiLogIn />} title="Login In" />
      <NavigationButton icon={<FiUsers />} title="View Agents" />
    </Wrapper>
  );
};

export default FloatingNavigation;
