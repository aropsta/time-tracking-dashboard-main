import { Component } from "react";
import { AppContext } from "../AppContext";
import "../styles/profile.scss";

export default class Profile extends Component {
  static contextType = AppContext;

  constructor(props) {
    super(props);

    this.state = {
      timeFrame: "daily",
      buttonActive: false,
      buttonClass: "",
      buttonIndexArray: [0, 1, 2],
      activeButton: 0,
    };
  }

  //set the activeButton to the one that was clicked
  activateButton = (index) => {
    this.setState({
      activeButton: this.state.buttonIndexArray[index],
    });
  };

  //If active button matches the one that was passed in, return the active class, otherwise return nothing
  toggleActiveStyles = (index) => {
    if (this.state.buttonIndexArray[index] === this.state.activeButton) {
      return "button-active";
    } else {
      return "";
    }
  };

  render() {
    const { setPeriod } = this.context;
    return (
      <main className="profile-container">
        <header className="profile-header">
          <img src="/image-jeremy.png" alt="" className="avatar" />
          <section className="text">
            <p>Report for</p>
            <h1>Jeremy Robson</h1>
          </section>
        </header>
        <ul className="time-frame-section">
          <li>
            <button
              className={this.toggleActiveStyles(0)}
              onClick={() => {
                this.activateButton(0);
                setPeriod("daily");
              }}>
              Daily
            </button>
          </li>
          <li>
            <button
              className={this.toggleActiveStyles(1)}
              onClick={() => {
                this.activateButton(1);
                setPeriod("weekly");
              }}>
              Weekly
            </button>
          </li>
          <li>
            <button
              className={this.toggleActiveStyles(2)}
              onClick={() => {
                this.activateButton(2);
                setPeriod("monthly");
              }}>
              Monthly
            </button>
          </li>
        </ul>
      </main>
    );
  }
}
