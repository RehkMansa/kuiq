import { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { AiOutlineRight, AiOutlineLeft } from 'react-icons/ai';
import Signupcard from './Signupcard';
import MyAgentCard from './MyAgentCard';
import {
  fadeInRight,
  fadeInLeft,
  fadeOutDown,
  fadeOutLeft,
  flipInX,
  slideInUp,
  fadeOut,
  zoomIn,
  pulse,
} from 'react-animations';

const flipAnimation = keyframes`${flipInX}`;
const fadeAnimation = keyframes`${fadeInRight}`;
const slideInAnimation = keyframes`${slideInUp}`;
const fadeOutAnimation = keyframes`${fadeOut}`;
const zoomInAnimation = keyframes`${zoomIn}`;
const pulesAnimation = keyframes`${pulse}`;
const fadeOutDownAnim = keyframes`${fadeOutDown}`;
const fadeLeftAnim = keyframes`${fadeInLeft}`;
const fadeOutLeftAnim = keyframes`${fadeOutLeft}`;

const animationArray = [
  fadeAnimation,
  flipAnimation,
  fadeOutDownAnim,
  slideInAnimation,
  fadeLeftAnim,
  fadeOutAnimation,
  zoomInAnimation,
  pulesAnimation,
  fadeOutLeftAnim,
];

const Section = styled.section`
  min-height: 100vh;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  padding: 0 !important;
  .header {
    h1 {
      font-size: 40px;
      line-height: 1.2;
    }
    p {
      margin: 20px 0;
    }
  }
  background-color: #070c1f;
`;

const AgentCard = styled.div`
  display: flex;
  position: relative;
  // justify-content: center;
  width: 100vw;
  overflow: hidden;
  & > div {
    width: 50%;
  }
  .agent-image {
    background-size: cover;
    background-position: center center;
    height: 100vh;
    background-position: top center;
    overflow: hidden;
    background-image: url(images/house3.jpg);
    position: relative;
  }
`;

const NavDots = styled.div`
  width: 300px !important;
  height: 50px;
  cursor: pointer;
  position: absolute;
  bottom: 20px;
  right: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > div {
    width: 50px;
    height: 50px;
    align-items: center;
    display: flex;
    padding: 10px;
    font-size: 24px;
    background-color: #f2b636;
    color: #060b1e;
  }
  .left {
    border-radius: 50px;
  }
  .right {
    border-radius: 50px;
    justify-content: flex-end;
  }
`;
const Container = styled.div`
  .header-div {
    animation: 1.5s ${(props) => props.anim1};
  }
  .content-div {
    animation: 1s ${(props) => props.anim2};
  }
`;
const url = `https://randomuser.me/api/?results=25&nat=gb,us,es`;
const randomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
};
const AgentsPage = (props) => {
  const [agent, setAgent] = useState([]);
  const [countVar, setCountVar] = useState(0);
  const [agentsArray, setAgentsArray] = useState([]);
  const [animation1, setAnimation1] = useState(animationArray[0]);
  const [animation2, setAnimation2] = useState(animationArray[1]);

  const [divKey, setDivKey] = useState(0);

  useEffect(() => {
    console.log(`The state value of count is ${countVar}`);
    fetchUser();
  }, []);

  const fetchUser = async () =>
    await fetch(url)
      .then((data) => data.json())
      .then((res) => {
        setAgentsArray(res.results);
        setAgent([res.results[countVar]]);
      });

  const prevImage = () => {
    setCountVar(countVar - 1);
    setDivKey(divKey + 1);
    if (countVar <= 0) {
      setCountVar(agentsArray.length - 1);
    }
    setAgent([agentsArray[countVar]]);
    setAnimation1(animationArray[randomInt(0, animationArray.length)]);
    setAnimation2(animationArray[randomInt(0, animationArray.length)]);
  };
  const nextImage = () => {
    setDivKey(divKey + 1);
    setCountVar(countVar + 1);
    if (countVar >= agentsArray.length - 1) {
      setCountVar(0);
    }
    setAgent([agentsArray[countVar]]);
    setAnimation1(animationArray[randomInt(0, animationArray.length)]);
    setAnimation2(animationArray[randomInt(0, animationArray.length)]);
  };
  return (
    <Section>
      <AgentCard>
        <NavDots>
          <div onClick={prevImage} className="left">
            <AiOutlineLeft />
          </div>
          <div onClick={nextImage} className="right">
            <AiOutlineRight />
          </div>
        </NavDots>
        <div className="agent-image">
          <Signupcard />
        </div>{' '}
        <Container
          key={divKey}
          anim1={animation1}
          anim2={animation2}
          bdr={divKey}
        >
          {agent.map((newAgent, num) => {
            const { name, location, dob, picture } = newAgent;
            return (
              <MyAgentCard
                key={num}
                agent={newAgent}
                h3ClassName="header-div"
                smallCardClass="content-div"
                name={name}
                dob={dob}
                location={location}
                picture={picture}
              />
            );
          })}
        </Container>
      </AgentCard>
    </Section>
  );
};

export default AgentsPage;
