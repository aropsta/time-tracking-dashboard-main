import { Component } from "react";
import "../styles/card.scss";

export default class Card extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displayCard: props.data.title,
      title: props.data.title,
      time: props.data.timeframes.daily.current,
      pastTime: 0,
      inputData: props.work,
      timeframe: 0,
    };
  }

  titleToClass = () => {
    switch (this.state.title) {
      case "Work": {
        return "work";
      }
      case "Play": {
        return "play";
      }
      case "Study": {
        return "study";
      }
      case "Exercise": {
        return "exercise";
      }
      case "Social": {
        return "social";
      }
      case "Self Care": {
        return "self-care";
      }
      default: {
        return "";
      }
    }
  };

  render() {
    return (
      <section aria-labelledby="head" className={`card ${this.titleToClass()}`} name="card">
        <article className="inner-card" name="innerCard">
          <header className="header-section" name="headerSection">
            <h2 className="title" id="head" name="title">
              {this.state.title}
            </h2>
            <menu></menu>
          </header>
          <p className="time" name="time">
            {this.state.time}
          </p>
          <p name="period" className="period">
            Last week -{" "}
            <span className="period" name="periodTime">
              36hrs
            </span>
          </p>
        </article>
      </section>
    );
  }
}
