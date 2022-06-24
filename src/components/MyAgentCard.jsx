import styled, { keyframes } from 'styled-components';
import { flipInX, fadeIn, slideInUp } from 'react-animations';

const flipAnimation = keyframes`${flipInX}`;
const fadeAnimation = keyframes`${fadeIn}`;
const slideInAnimation = keyframes`${slideInUp}`;

const AgentInfo = styled.div`
  padding: 100px 50px;
  overflow: auto;
  height: 100vh;
  h3 {
    margin: 40px 0;
    color: #f2b636;
    font-family: 'Playfair Display', serif;
    font-size: 75px;
    font-weight: 700;
    line-height: 1;
  }

  h5 {
    color: #f2b636;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 18px;
    font-family: 'Karla', sans-serif;
    margin: 10px 0;
  }

  .smaller-card {
    font-weight: 400;
    margin: 20px 0;
    color: #878c9b;
    font-size: 18px;
    font-family: 'Karla', sans-serif;
    display: flex;
    gap: 10px;
    flex-flow: column;
  }

  .header-element {
    display: flex;
    align-items: center;
    gap: 20px;
    img {
      border-radius: 50%;
      width: 120px;
      height: 120px;
      // align-self: flex-end;
    }
  }
`;
const MyAgentCard = ({
  h3ClassName,
  smallCardClass,
  name,
  location,
  dob,
  picture,
  agent,
}) => {
  return (
    <AgentInfo>
      <div className={`header-element ${h3ClassName}`}>
        <img src={picture.large} alt={name.first} />
        <h3>
          {name.first} {name.last}
        </h3>
      </div>
      <div className={smallCardClass}>
        <div className="smaller-card">
          <h5>Biography</h5>
          <p>Age: {dob.age}</p>
          <p>Born and raised in the {location.country}</p>
          <p>Location: {location.street.name}</p>
        </div>
      </div>
      <div className={smallCardClass}>
        <div className="smaller-card">
          <h5>Personal</h5>
          <p>Phone-Number: {agent.phone}</p>
          <p>
            Home Address {location.city}, {location.state}
          </p>
          <p>Gender: {agent.gender}</p>
        </div>
      </div>
      <div className={smallCardClass}>
        <div className="smaller-card">
          <h5>Contact</h5>
          <p>Email: {agent.email}</p>
          <p>Username: {agent.login.username}</p>
          <p>Cell: {agent.cell}</p>
          <p>
            UID: {agent.id}
          </p>
        </div>
      </div>
    </AgentInfo>
  );
};

export default MyAgentCard;
