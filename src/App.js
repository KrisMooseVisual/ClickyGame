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

  state = {
    fighters: fighters,
    score: 0,
    message: "Click on your fighters to start but, don't click the same fighters more than once! Good luck!"
  };

  // fighters = id => {
  //   if (!this.state.gameover) {
  //     if (this.state.fighters(id) === -1) {
  //       this.increment();
  //       this.setState({ fighters: [...this.state.fighters, id] });
  //     } else {
  //       this.setState({ message: 'Game Over', gameover: true })
  //       this.reset();
  //     }
  //   }
  // }

  randomizeFighters = () => {
    const shuffled = randomFighters(fighters);
    this.setState({ fighters: shuffled });
  }

  render() {
    return (
      <Wrapper>
        <Title>Street Fighter II Click Game</Title>
        <Title><h1>Your Score:{this.state.score}</h1></Title>
        {/* <h2>{this.props.name}</h2> */}
        {/* <button onClick={this.score}>+1</button> */}
        {this.state.fighters.map(fighters => (
          <FighterCard
            id={fighters.id}
            key={fighters.id}
            name={fighters.name}
            image={fighters.image}
            randomizeFighters={this.randomizeFighters} />
        ))}
      </Wrapper>
    );
  }

}

export default App;
