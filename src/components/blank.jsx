<AgentCard key={agent.login.uuid}>
  <h4>
    {name.first} {name.last}
  </h4>
  <p>Age: {dob.age}</p>
  <p>Location: {location.street.name}</p>
  <img src={picture.thumbnail} alt="" />
</AgentCard>;
