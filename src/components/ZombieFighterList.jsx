import ZombieFighter from './ZombieFighter';

const ZombieFighterList = ({ fighters, onAdd }) => {
  return (
    <ul>
      {fighters.map((fighter, index) => (
        <ZombieFighter key={index} fighter={fighter} onAdd={onAdd} />
      ))}
    </ul>
  );
};

export default ZombieFighterList;