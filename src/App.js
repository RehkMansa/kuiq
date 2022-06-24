import { auth, fetchAll, handleUserProfile } from './components/firebase/utils';
import GlobalStyles from './components/styles/Global';
import styledComponents from 'styled-components';
import SignUP from './components/SignUp';
// import HomePage from './components/HomePage';
import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { doc, onSnapshot } from 'firebase/firestore';
import { Route, Routes } from 'react-router-dom';
import AgentsPage from './components/Agents';
import Error404page from './components/404';
import AgentSingle from './components/Agent';
import NewHome from './components/NewHome';
import Homes from './components/Homes';
import SaveListing from './components/SaveLising';
const Container = styledComponents.main`
  & > section,
  & > footer{
    padding: 40px 5%;
  }
  & > header{
    padding: 10px 5%;
  }
`;

function App() {
  const [currentUser, setCurrentUser] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [agentsArray, setAgentsArray] = useState('');

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        const userData = await handleUserProfile(user);
        onSnapshot(userData, (snapshot) => {
          setCurrentUser({ ...snapshot.data() });
          console.log(snapshot.data);
        });
      } else {
        setCurrentUser('');
        console.log('User Not Logged In');
      }
    });
  }, []);

  useEffect(() => {
    const fetchUsers = async () => {
      await fetchAll('agents').then((res) => {
        setAgentsArray(res);

        console.log(res);
      });
    };

    fetchUsers();
  }, []);

  return (
    <Container className="App">
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<NewHome userDetails={currentUser} />} />
        <Route path="/homes" element={<Homes />} />
        <Route path="/create-new" element={<SaveListing />} />
        <Route
          path="/agents"
          element={<AgentsPage agentsArr={agentsArray} />}
        />
        <Route path="/agents/:agentID" element={<AgentSingle />} />

        <Route path="*" element={<Error404page />} />
      </Routes>
      {showModal && <SignUP modal={setShowModal} />}
      {showModal && <SignUP modal={setShowModal} />}
    </Container>
  );
}

export default App;
