import Card from "./components/Card";
import Profile from "./components/Profile";
import "./styles/App.scss";

import inputData from "./data.json";

function App() {
  let work = inputData[0];
  let play = inputData[1];
  let study = inputData[2];
  let exercise = inputData[3];
  let social = inputData[4];
  let selfCare = inputData[5];

  return (
    <div className="App">
      <Profile></Profile>
      <section className="card-section">
        <Card data={work}></Card>
        <Card data={play}></Card>
        <Card data={study}></Card>
        <Card data={exercise}></Card>
        <Card data={social}></Card>
        <Card data={selfCare}></Card>
      </section>
    </div>
  );
}

export default App;
