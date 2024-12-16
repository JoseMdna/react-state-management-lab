const ZombieFighter = ({ fighter, onAdd }) => {
  return (
    <li>
      <img src={fighter.img} alt={fighter.name} />
      <h2>{fighter.name}</h2>
      <p>Price: ${fighter.price}</p>
      <p>Strength: {fighter.strength}</p>
      <p>Agility: {fighter.agility}</p>
      <button onClick={() => onAdd(fighter)}>Add</button>
    </li>
  );
};

export default ZombieFighter;