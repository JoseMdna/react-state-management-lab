// src/App.jsx
import { useState, useEffect } from 'react';
import './App.css';
import ZombieFighterList from './components/ZombieFighterList';
import TeamList from './components/TeamList';

const App = () => {
  const [team, setTeam] = useState([]);
  const [money, setMoney] = useState(100);
  const [totalStrength, setTotalStrength] = useState(0);
  const [totalAgility, setTotalAgility] = useState(0);
  const [zombieFighters] = useState([
    {
      name: 'Survivor',
      price: 12,
      strength: 6,
      agility: 4,
      img: 'https://via.placeholder.com/150/92c952',
    },
    {
      name: 'Scavenger',
      price: 10,
      strength: 5,
      agility: 5,
      img: 'https://via.placeholder.com/150/771796',
    },
    {
      name: 'Shadow',
      price: 18,
      strength: 7,
      agility: 8,
      img: 'https://via.placeholder.com/150/24f355',
    },
    {
      name: 'Tracker',
      price: 14,
      strength: 7,
      agility: 6,
      img: 'https://via.placeholder.com/150/d32776',
    },
    {
      name: 'Sharpshooter',
      price: 20,
      strength: 6,
      agility: 8,
      img: 'https://via.placeholder.com/150/1ee8a4',
    },
    {
      name: 'Medic',
      price: 15,
      strength: 5,
      agility: 7,
      img: 'https://via.placeholder.com/150/66b7d2',
    },
    {
      name: 'Engineer',
      price: 16,
      strength: 6,
      agility: 5,
      img: 'https://via.placeholder.com/150/56acb2',
    },
    {
      name: 'Brawler',
      price: 11,
      strength: 8,
      agility: 3,
      img: 'https://via.placeholder.com/150/8985dc',
    },
    {
      name: 'Infiltrator',
      price: 17,
      strength: 5,
      agility: 9,
      img: 'https://via.placeholder.com/150/392537',
    },
    {
      name: 'Leader',
      price: 22,
      strength: 7,
      agility: 6,
      img: 'https://via.placeholder.com/150/602b9e',
    },
  ]);

  const handleAddFighter = (fighter) => {
    if (money >= fighter.price) {
      setTeam([...team, fighter]);
      setMoney(money - fighter.price);
    } else {
      console.log('Not enough money');
    }
  };

  const handleRemoveFighter = (fighter) => {
    setTeam(team.filter((member) => member !== fighter));
    setMoney(money + fighter.price);
  };

  useEffect(() => {
    const calculateTotalStrength = () => {
      const strength = team.reduce((total, fighter) => total + fighter.strength, 0);
      setTotalStrength(strength);
    };

    const calculateTotalAgility = () => {
      const agility = team.reduce((total, fighter) => total + fighter.agility, 0);
      setTotalAgility(agility);
    };

    calculateTotalStrength();
    calculateTotalAgility();
  }, [team]);

  return (
    <div>
      <h1>Zombie Fighters</h1>
      <p>Money: ${money}</p>
      <ZombieFighterList fighters={zombieFighters} onAdd={handleAddFighter} />
      <h2>Your Team</h2>
      <p>Total Strength: {totalStrength}</p>
      <p>Total Agility: {totalAgility}</p>
      {team.length === 0 ? (
        <p>Pick some team members!</p>
      ) : (
        <TeamList team={team} onRemove={handleRemoveFighter} />
      )}
    </div>
  );
}

export default App;