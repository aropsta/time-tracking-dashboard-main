import { Component } from "react";
import { AppContext } from "../AppContext";
import "../styles/profile.scss";

export default class Profile extends Component {
  static contextType = AppContext;

  constructor(props) {
    super(props);

    this.state = {
      timeFrame: "daily",
    };
  }

  handButtonClick = (a) => {
    this.setState(() => {
      console.log(this.context.timeFrame);
      this.context.frame = a;
    });
  };
  render() {
    const { dailyView, weeklyView, monthlyView } = this.context;
    return (
      <section className="profile-section">
        <header className="profile-header">
          <img align="left" src="/image-jeremy.png" alt="" className="avatar" />
          <p>Report for</p>
          <h1>Jeremy Robson</h1>
        </header>
        <aside className="time-frame-section">
          <button onClick={dailyView}>Daily</button>
          <button onClick={weeklyView}>Weekly</button>
          <button onClick={monthlyView}>Monthly</button>
        </aside>
      </section>
    );
  }
}
