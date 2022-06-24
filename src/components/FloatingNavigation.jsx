import styled from 'styled-components';
import NavigationButton from './NavigationButton';
import {
  FiHome,
  FiPlus,
  FiLogIn,
  FiUsers,
  FiMapPin,
  FiLogOut,
} from 'react-icons/fi';
import { auth, signInWithGoogle } from './firebase/utils';

const Wrapper = styled.div`
  background-color: #070c1f;
  position: absolute;
  ${(props) => props.orientation}: 20px;
  padding: 20px;
  left: 20px;
  border-radius: 100px;
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
      <NavigationButton icon={<FiHome />} title="Home" link="/" />
      <div>
        <NavigationButton
          icon={<FiMapPin />}
          title="View Homes"
          link="/homes"
        />
      </div>
      <div>
        <NavigationButton
          icon={<FiPlus />}
          title="New Listing"
          link="/create-new"
        />
      </div>
      <div onClick={signInWithGoogle}>
        <NavigationButton icon={<FiLogIn />} title="Log In" />
      </div>
      <NavigationButton icon={<FiUsers />} link="/agents" title="View Agents" />
      <div
        onClick={() => {
          auth.signOut();
        }}
      >
        <NavigationButton icon={<FiLogOut />} title="Log out" />
      </div>
    </Wrapper>
  );
};

export default FloatingNavigation;
