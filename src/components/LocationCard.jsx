import styled from 'styled-components';

const Card = styled.div`
  position: relative;
  border-radius: 5px;
  background-image: url(images/${(props) => props.bgImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  span{
    padding: 10px;
    background-color: #FFFFFF;
    position: absolute;
    bottom: 30px;
    left: 20px;
  }
`;

const LocationCard = ({ image, location, className, height, width }) => {
  return (
    <Card className={className} bgImage={image}>
      <span>{location}</span>
    </Card>
  );
};

export default LocationCard;
