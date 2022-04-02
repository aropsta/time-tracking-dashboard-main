import { Component } from "react";
import { AppContext } from "../AppContext";
import "../styles/card.scss";

export default class Card extends Component {
  static contextType = AppContext;
  hourString = "hrs";
  constructor(props) {
    super(props);

    this.state = {
      title: props.data.title,
      currentTime: 0,
      previousTime: 0,

      currentHours: [
        props.data.timeframes.daily.current,
        props.data.timeframes.weekly.current,
        props.data.timeframes.monthly.current,
      ],

      previousHours: [
        props.data.timeframes.daily.previous,
        props.data.timeframes.weekly.previous,
        props.data.timeframes.monthly.previous,
      ],

      inputData: props.work,
    };
  }

  getCurrentHours = () => {
    switch (this.context.frame) {
      case "daily": {
        let value = this.state.currentHours[0];
        if (value === 1) {
          this.hourString = "hr";
        } else {
          this.hourString = "hrs";
        }
        return value;
      }

      case "weekly": {
        let value = this.state.currentHours[1];
        if (value === 1) {
          this.hourString = "hr";
        } else {
          this.hourString = "hrs";
        }
        return value;
      }
      case "monthly": {
        let value = this.state.currentHours[2];
        if (value === 1) {
          this.hourString = "hr";
        } else {
          this.hourString = "hrs";
        }
        return value;
      }
      default:
        return 0;
    }
  };

  getPeriod = () => {
    switch (this.context.frame) {
      case "daily":
        return "Yesterday";
      case "weekly":
        return "Last Week";
      case "monthly":
        return "Last Month";
      default:
        return 0;
    }
  };

  getPreviousHours = () => {
    switch (this.context.frame) {
      case "daily": {
        let value = this.state.previousHours[0];
        if (value === 1) {
          this.hourString = "hr";
        } else {
          this.hourString = "hrs";
        }
        return value;
      }
      case "weekly": {
        let value = this.state.previousHours[1];
        if (value === 1) {
          this.hourString = "hr";
        } else {
          this.hourString = "hrs";
        }
        return value;
      }
      case "monthly": {
        let value = this.state.previousHours[2];
        if (value === 1) {
          this.hourString = "hr";
        } else {
          this.hourString = "hrs";
        }
        return value;
      }
      default:
        return 0;
    }
  };
  getClassFromTitle = () => {
    switch (this.state.title) {
      case "Work":
        return "work";

      case "Play":
        return "play";

      case "Study":
        return "study";

      case "Exercise":
        return "exercise";

      case "Social":
        return "social";

      case "Self Care":
        return "self-care";

      default:
        return "";
    }
  };

  render() {
    return (
      <article aria-labelledby="head" className={`card ${this.getClassFromTitle()}`}>
        <i className={`div ${this.getClassFromTitle()}`}></i>
        <section className="inner-card">
          <header className="header-section">
            <h2 className="title">{this.state.title}</h2>

            <button className="menu" aria-label="open menu">
              <svg width="21" height="5" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z"
                  fill="#BBC0FF"
                  fill-rule="evenodd"></path>
              </svg>
            </button>
          </header>
          <p className="time">{`${this.getCurrentHours()}${this.hourString}`}</p>
          <p className="period">
            {this.getPeriod()}
            <span className="period">{` - ${this.getPreviousHours()}${this.hourString}`}</span>
          </p>
        </section>
      </article>
    );
  }
}
