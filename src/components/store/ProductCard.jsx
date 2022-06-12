import styledComponents from 'styled-components';

const Wrapper = styledComponents.div`
  display:flex;
  align-items:center;
  justify-content:center;
  flex-direction:column;
`;
const ImageWrapper = styledComponents.div`
  width:250px;
  height:250px;
  
 img{
   object-fit:cover;
   height:100%;
 }
`;
const ProductInfo = styledComponents.div`
 display:flex;
 justify-content:center;
 align-items:center;

 span{
   text-transform:capitalize;
 }
`;
const ProductCard = ({ name, price, image }) => {
  return (
    <Wrapper>
      <ImageWrapper>
        <img src={`images/store/${image}`} alt={name} />
      </ImageWrapper>
      <div>
        <span>{name}</span>
        <span>{price}</span>
      </div>
    </Wrapper>
  );
};

export default ProductCard;
