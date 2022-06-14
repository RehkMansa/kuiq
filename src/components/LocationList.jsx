import styled from 'styled-components';

const listOfStates = [
  { name: 'Abia' },
  { name: 'Bauchi' },
  { name: 'Crossriver' },
  { name: 'Ekiti' },
  { name: 'Anambara' },
  { name: 'Imo' },
  { name: 'Adamawa' },
  { name: 'Bayelsa' },
  { name: 'Delta' },
  { name: 'Enugu' },
  { name: 'Borno' },
  { name: 'Ogun' },
  { name: 'Akwa-Ibom' },
  { name: 'Benue' },
  { name: 'Ebonyi' },
  { name: 'Gombe' },
  { name: 'Edo' },
  { name: 'See All States' },
];

const ListDiv = styled.div`
  h3 {
  }
`;
const ListUL = styled.ul`
  padding: 24px 0;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: flex-start;
  gap: 20px 0;
  & > * {
    width: 16%;
  }
`;
const LocationList = (props) => {
  return (
    <ListDiv>
      <h2>Other states</h2>
      <ListUL>
        {listOfStates.map((list) => {
          return <li key={list.name}>{list.name} State</li>;
        })}
      </ListUL>
    </ListDiv>
  );
};

export default LocationList;
