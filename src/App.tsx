import React from 'react';
import logo from './logo.svg';
import './App.css';
import teamsData from './CollegeBasketballTeams.json';
interface TeamProps {
  school: string;
  name: string;
  city: string;
  state: string;
}

// insert team names in here.

function Header() {
  return (
    <header className="App-header">
      <h1>march madness time</h1>
      <h3>come meet the teams! go cougs!</h3>
    </header>
  );
}

class Team extends React.Component<TeamProps> {
  render() {
    const oneTeam = this.props; //teamsData.teams.find((team) => team.tid === 3);

    // Check if oneTeam is not null before accessing its properties
    if (!oneTeam) {
      return (
        <div>
          <h2>No team found.</h2>
        </div>
      );
    }

    return (
      <div>
        <h2>School: {oneTeam.school}</h2>
        <h3>Mascot: {oneTeam.name}</h3>
        <h3>
          Location: {oneTeam.city}, {oneTeam.state}
        </h3>
      </div>
    );
  }
}

function TeamsList() {
  return (
    <div className="team-container">
      {teamsData.teams.map((team: TeamProps, index: number) => (
        <Team
          key={index}
          school={team.school}
          name={team.name}
          city={team.city}
          state={team.state}
        />
      ))}
    </div>
  );
}

function Fortnite() {
  return <h1>Fortnite Battlepass.</h1>;
}

function App() {
  return (
    <div className="App">
      <Header />
      <TeamsList />
    </div>
  );
}

export default App;
