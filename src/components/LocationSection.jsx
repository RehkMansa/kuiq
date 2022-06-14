import styled from 'styled-components';
import LocationCard from './LocationCard';

const LocationWrap = styled.section`
  padding: 40px 0;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  & > * {
    width: 49%;
    height: 500px;
  }
`;
const LocationRightWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  & > * {
    width: calc(50% - 10px);
  }
`;
const LocationSection = () => {
  return (
    <LocationWrap>
      <LocationCard image={'location-1.jpg'} location={'Lagos'} />
      <LocationRightWrap>
        <LocationCard image={'location-2.jpg'} location={'Abuja'} />
        <LocationCard image={'location-3.jpg'} location={'Kano'} />
        <LocationCard image={'location-4.jpg'} location={'Portharcourt'} />
        <LocationCard image={'location-5.jpg'} location={'Ibadan'} />
      </LocationRightWrap>
    </LocationWrap>
  );
};

export default LocationSection;
