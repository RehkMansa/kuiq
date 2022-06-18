import { useLocation } from 'react-router-dom';

const AgentSingle = ({ user }) => {
  const location = useLocation();

  user = location.state;
  return (
    <div>
      <h1>hell </h1>
      {/* <p>{uuser.id}</p> */}
    </div>
  );
};

export default AgentSingle;
