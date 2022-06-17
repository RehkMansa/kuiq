import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { saveUsers } from './firebase/utils';
const url = 'https://randomuser.me/api/?results=8&nat=gb,us,es';

const Section = styled.section`
  .header {
    h1 {
      font-size: 40px;
      line-height: 1.2;
    }
    p {
      margin: 20px 0;
    }
  }
`;

const AgentWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  & > div {
    width: calc(25% - 20px);
  }
`;

const AgentCard = styled.div`
  box-shadow: 0 0 7px 3px rgba(0, 0, 0, 0.09);
  padding: 10px;
  border-radius: 10px;
`;
const AgentPage = () => {
  const [agentsArray, setAgentsArray] = useState([]);
  useEffect(() => {
    
  /* const newUrl = 'https://randomuser.me/api/?results=1&nat=gb,us,es';
    saveUsers(newUrl, 'agents'); */

    const fetchUser = async () => {
      await fetch(url)
        .then((res) => res.json())
        .then((data) => {
          setAgentsArray(data.results);
        });
    };

    fetchUser();
  }, []);
  return (
    <Section>
      <div className="header">
        <h1>Agents</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur,
          qui!
        </p>
      </div>
      <AgentWrapper>
        {agentsArray.map((agent) => {
          const { name, location, dob, picture } = agent;
          return (
            <AgentCard key={agent.login.uuid}>
              <h4>
                {name.first} {name.last}
              </h4>
              <p>Age: {dob.age}</p>
              <p>Location: {location.street.name}</p>
              <img src={picture.thumbnail} alt="" />
            </AgentCard>
          );
        })}
      </AgentWrapper>
    </Section>
  );
};

export default AgentPage;
