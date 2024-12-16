const TeamMember = ({ fighter, onRemove }) => {
  return (
    <li>
      <img src={fighter.img} alt={fighter.name} />
      <h2>{fighter.name}</h2>
      <p>Price: ${fighter.price}</p>
      <p>Strength: {fighter.strength}</p>
      <p>Agility: {fighter.agility}</p>
      <button onClick={() => onRemove(fighter)}>Remove</button>
    </li>
  );
};

export default TeamMember;