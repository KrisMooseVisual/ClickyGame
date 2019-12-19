/* eslint-disable no-undef */
import React, { Component } from "react";
import FighterCard from "./components/FighterCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import fighters from "./fighters.json";



class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    fighters,
    clickedFighter: [],
    score: 0,
    winGoal: 10,
    current:""
  };

  

  randomizeFighter = id => {

    const matchFighters = this.state.matchFighters;
    
    const pickedighters =.filter(match => match.id === id);

  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>Street Fighter Contestants</Title>
        {this.state.fighters.map(fighters => (
          <FighterCard
            id={fighters.id}
            key={fighters.id}
            name={fighters.name}
            image={fighters.image} />
        ))}
      </Wrapper>
    );
  }
}

export default App;
