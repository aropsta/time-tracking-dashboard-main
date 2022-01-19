import { Component } from "react";
import "../styles/profile.scss";

export default class Profile extends Component {
  render() {
    return (
      <section className="profile-section">
        <img src="../../public/image-jeremy.png" alt="" className="avatar" />
      </section>
    );
  }
}
