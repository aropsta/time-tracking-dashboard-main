import Card from "./components/Card";
import Profile from "./components/Profile";
import "./styles/App.scss";

import inputData from "./data.json";
import AppContextProvider from "./AppContext";

function App() {
  let work = inputData[0];
  let play = inputData[1];
  let study = inputData[2];
  let exercise = inputData[3];
  let social = inputData[4];
  let selfCare = inputData[5];

  .asd{
    
  }
  return (
    <div className="App">
      <AppContextProvider>
        <Profile className="profile-section"></Profile>

        <section className="grid">
          <Card className="card-one" data={work}></Card>

          <Card className="card-two" data={play}></Card>
          <Card className="card-three" data={study}></Card>
          <Card className="card-four" data={exercise}></Card>
          <Card className="card-five" data={social}></Card>
          <Card className="card-six" data={selfCare}></Card>
        </section>
      </AppContextProvider>
    </div>
  );
}

export default App;
