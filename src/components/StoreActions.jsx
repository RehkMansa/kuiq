import {
  FiHeart,
  FiShoppingCart,
  FiAlignJustify,
  FiSearch,
} from 'react-icons/fi';
import styledComponents from 'styled-components';

const Wrapper = styledComponents.div`
  display: flex;
  justify-content:center;
  align-items:center;
  gap:20px;

  svg{
    cursor:pointer;
  }
`;

const StoreAction = () => {
  return (
    <Wrapper>
      <FiSearch />
      <FiHeart />
      <FiShoppingCart />
      <FiAlignJustify />
    </Wrapper>
  );
};

export default StoreAction;
