import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  gap: 24px;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p {
    text-transform: capitalize;
  }
`;
const FeaturesCard = ({ icon, name }) => {
  return (
    <Wrapper>
      <img src={`images/icons/${icon}`} alt={name} />
      <p>{name}</p>
    </Wrapper>
  );
};

export default FeaturesCard;
