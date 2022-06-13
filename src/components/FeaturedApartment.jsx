import styled from 'styled-components';

const Wrapper = styled.div`
  text-transform: capitalize;
`;

const ImageWrap = styled.div`
  width: 100%;
  img {
    height: 300px;
    max-width: 100%;
    object-fit: cover;
    width: 100%;
    border-radius: 5px;
  }
`;
const ContentWrap = styled.div`
  padding: 20px;
  padding-bottom:0px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  h5 {
    font-weight: 600;
    font-size: 18px;
    line-height: 23px;
    color: #4f4f4f;
    text-transform: capitalize;
  }
`;

const ContentInner = styled.div``;
const TitleWrap = styled.div`
  display: flex;
  justify-content: space-between;
  img {
    width: 36px;
    height: 37px;
  }
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }
  span {
    font-weight: 600;
    font-size: 28px;
    line-height: 35px;
    color: var(--gray1);
  }
  h2 {
    // color: var(--green);
    font-size: 24px;
    line-height: 30px;
  }
`;
const PriceWrap = styled.div`
  display: flex;
  justify-content: space-between;
  p {
    color: #333333;
    font-weight: 600;
    font-size: 18px;
    line-height: 23px;
  }
  span {
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    color: #4f4f4f;
  }
`;

const FeaturedApartment = ({
  coverImage,
  title,
  location,
  numberOfReviews,
  numberOfStars,
  price,
}) => {
  return (
    <Wrapper>
      <ImageWrap>
        <img src={`images/${coverImage}`} alt="" />
      </ImageWrap>
      <ContentWrap>
        <h5>{location}</h5>
        <ContentInner>
          <TitleWrap>
            <h2>{title}</h2>
            <div>
              <img src="images/icon-star.svg" />
              <span>{numberOfStars}</span>
            </div>
          </TitleWrap>
          <PriceWrap>
            <p>N{price}/Min</p>
            <span>{numberOfReviews} Reviews</span>
          </PriceWrap>
        </ContentInner>
      </ContentWrap>
    </Wrapper>
  );
};

export default FeaturedApartment;
