import { Link } from 'react-router-dom';

const Error404page = () => {
  return (
    <section
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <h2>Page not found</h2>
      <Link to={'/'}>
        <button>Go Home</button>
      </Link>
    </section>
  );
};

export default Error404page;
