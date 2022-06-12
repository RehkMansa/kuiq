import styledComponents from 'styled-components';
import Navbar from './Navbar';
import StoreAction from './StoreActions';
import { FaOpencart } from 'react-icons/fa';

const HeaderWrapper = styledComponents.header`
  display:flex;
  justify-content: space-between;
  align-items:center;
  padding: 10px 5%;
  align-items:center;
  max-height: 105px;
  height: 105px;
  overflow:hidden;

`;
const HeaderTop = styledComponents.div`
  display:flex;
  justify-content: space-between;
  align-items:center;
  width:100%;

  &>*{
    flex: 0.33
  }
`;
const LogoWrapper = styledComponents.div`
  display:flex;
  gap:10px;  
  align-items:center;
  text-transform:uppercase;
  svg{
    font-size:40px;
  }
`;
const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderTop>
        <LogoWrapper>
          <FaOpencart />
          <h2>E-store</h2>
        </LogoWrapper>
        <Navbar />
        <StoreAction />
      </HeaderTop>
    </HeaderWrapper>
  );
};

export default Header;
