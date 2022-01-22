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
    const { dailyView, weeklyView, monthlyView, setPeriod } = this.context;
    return (
      <section className="profile-section">
        <header className="profile-header">
          <img align="left" src="/image-jeremy.png" alt="" className="avatar" />
          <p>Report for</p>
          <h1>Jeremy Robson</h1>
        </header>
        <aside className="time-frame-section">
          <button
            className={this.toggleActiveStyles(0)}
            onClick={() => {
              this.activateButton(0);
              setPeriod("daily");
            }}>
            Daily
          </button>
          <button
            className={this.toggleActiveStyles(1)}
            onClick={() => {
              this.activateButton(1);
              setPeriod("weekly");
            }}>
            Weekly
          </button>
          <button
            className={this.toggleActiveStyles(2)}
            onClick={() => {
              this.activateButton(2);
              setPeriod("monthly");
            }}>
            Monthly
          </button>
        </aside>
      </section>
    );
  }
}
