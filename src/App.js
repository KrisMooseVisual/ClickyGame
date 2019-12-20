/* eslint-disable no-undef */
import React, { Component } from "react";
import FighterCard from "./components/FighterCard/FighterCards";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import fighters from "./fighters.json";

function randomFighters(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    fighters: fighters,
    score: 0,
    winScore: 12,
    message: "Click on your fighters to start but, don't click the same fighters more than once! Good luck!"
  };

  shuffleFighters = () => {
    const shuffled = randomFighters(fighters);
    this.setState({ fighters: shuffled });
  }

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
            image={fighters.image}
            shuffleFighters={this.shuffleFighters}/>
        ))}
      </Wrapper>
    );
  }

}

export default App;
