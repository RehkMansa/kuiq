import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import AgentSingle from './Agent';
import { fetchAll } from './firebase/utils';

const Section = styled.section`
  min-height: 80vh;
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
  margin-top: 50px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  & > div {
    width: calc(25% - 20px);
  }
`;

const AgentCard = styled.div`
  box-shadow: 0 0 7px 3px rgba(0, 0, 0, 0.09);
  border-radius: 10px;
  display: flex;
  justify-content: center;
  cursor: pointer;

  .agent-info {
    padding: 10px;
    width: 80%;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .agent-image {
    width: 20%;

    img {
      border-radius: 10px 0 0 10px;
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }
`;
const AgentsPage = (props) => {
  const navigate = useNavigate();
  const [agent, setAgent] = useState('');

  const [countVar, setCountVar] = useState(0);
  const [agentsArray, setAgentsArray] = useState([]);
  useEffect(() => {
    const fetchUser = async () => {
      await fetchAll('agents').then((res) => {
        setAgentsArray(res);
      });
    };
    fetchUser();
  }, [agentsArray]);

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
            <AgentCard
              onClick={(e) => {
                setAgent(agent);
                navigate(`/agents/${agent.id}`, { state: agent });
              }}
              key={agent.id}
            >
              <div className="agent-image">
                <img src={picture.large} alt="" />
              </div>
              <div className="agent-info">
                <h4>
                  {name.first} {name.last}
                </h4>
                <p>Age: {dob.age}</p>
                <p>Location: {location.street.name}</p>
              </div>
            </AgentCard>
          );
        })}
      </AgentWrapper>
    </Section>
  );
};

export default AgentsPage;
