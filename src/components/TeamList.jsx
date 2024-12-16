import TeamMember from './TeamMember';

const TeamList = ({ team, onRemove }) => {
  return (
    <ul>
      {team.map((fighter, index) => (
        <TeamMember key={index} fighter={fighter} onRemove={onRemove} />
      ))}
    </ul>
  );
};

export default TeamList;