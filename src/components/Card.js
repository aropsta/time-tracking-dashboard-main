import { Component } from "react";
import { AppContext } from "../AppContext";
import "../styles/card.scss";

export default class Card extends Component {
  static contextType = AppContext;
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
      case "daily":
        return this.state.currentHours[0];
      case "weekly":
        return this.state.currentHours[1];
      case "monthly":
        return this.state.currentHours[2];
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
      case "daily":
        return this.state.previousHours[0];
      case "weekly":
        return this.state.previousHours[1];
      case "monthly":
        return this.state.previousHours[2];
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
      <section aria-labelledby="head" className={`card ${this.getClassFromTitle()}`} name="card">
        <i className={`div ${this.getClassFromTitle()}`}></i>
        <article className="inner-card" name="innerCard">
          <header className="header-section" name="headerSection">
            <h2 className="title" id="head" name="title">
              {this.state.title}
            </h2>

            <menu className="menu">
              <svg width="21" height="5" xmlns="http://www.w3.org/2000/svg">
                {" "}
                <path
                  className="menu"
                  d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z"
                  fill="#BBC0FF"
                  fill-rule="evenodd"
                />
              </svg>
            </menu>
          </header>
          <p className="time" name="time">
            {`${this.getCurrentHours()}hrs`}
          </p>
          <p name="period" className="period">
            {this.getPeriod()}
            <span className="period" name="periodTime">
              {` - ${this.getPreviousHours()}hrs`}
            </span>
          </p>
        </article>
      </section>
    );
  }
}
