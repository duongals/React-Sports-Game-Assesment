class Team extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      shots: 0,
      score: 0,
    };

    this.shotSound = new Audio("./assets/audio/glf+swng.wav");
    this.scoreSound = new Audio(".assets/audio/glf+swng.wav");
  }

  shotHandler = () => {
    let score = this.state.score;
    this.shotSound.play();

    if (Math.random() > 0.5) {
      score += 1;

      setTimeout(() => {
        this.scoreSound.play();
      }, 100);
    }

    this.setState((state, props) => ({
      shots: state.shots + 1,
      score,
    }));
  };

  render() {
    let shotPercentageDiv;
    if (this.state.shots) {
      const shotPercentage = Math.round(
        (this.state.score / this.state.shots) * 100
      );
      shotPercentageDiv = (
        <div>
          <strong>Shooting %: {shotPercentage}</strong>
        </div>
      );
    }
    return (
      <div classname="team">
        <h2>{this.props.name}</h2>

        <div classname="identity">
          <img src={this.props.logo} alt={this.props.name} />
        </div>

        <div>
          <strong>Shots:</strong> {this.state.shots}
        </div>

        <div>
          <strong>Score:</strong> {this.state.score}
        </div>
        <strong>Shooting %: {shotPercentage}</strong>
        <div>
          {shotPercentageDiv}
          <button onClick={this.shotHandler}>Shoot!</button>
        </div>
      </div>
    );
  }
}

function Game(props) {
  return (
    <div classname="Game">
      <h1>Welcome to {props.venue}</h1>
      <div classname="stats"></div>
      <Team name="Sadboi Club" logo=" ./assets/images/sadboi.jpg" />
      <div classname="versus"></div>
      <Team name="illenials" logo=".assets/images/Sound of Walking Away.png" />
    </div>
  );
}

// Deafault App component that all other compents are rendered through
function App(props) {
  const Club = {
    name: "Sadboi Club",
    logoSrc: "./assets/images/sadboi.jpg",
  };

  const boiis = {
    name: "Sadboiis",
    logSrc: ".assets/images/Sound of Walking Away.png",
  };

  return (
    <div classname="App">
      <Game venue="Sadboi Club" homeTeam={Sadboi} visitingTeam={Sadboiis} />
      <Game venue="Sadboiis" />
    </div>
  );
}

//Render the application
ReactDOM.render(<App />, document.getElementById("root"));
