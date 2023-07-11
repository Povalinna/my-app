import React from "react";
import Example from "./Example"


//const App=()=> {
// return (
//   <div className="App">
//    <h4>App</h4>
//  </div>
//);
//}

//export default App;

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      country: "Ukraine"
    }
  }

  changCountry = () => {
    this.setState({ country: this.state.country === "Ukraine is the best country" ? "Ukraine" : "Ukraine is the best country" })
  }

  render() {
    return (
      <>
        <div className="App">
          <button onClick={this.changCountry}>click</button>
        </div>

        <Example
          subject={this.state.country}
        />
      </>
    )
  }

}

export default App;