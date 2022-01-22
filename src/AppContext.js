import React, { createContext, Component } from "react";

export const AppContext = createContext();

class AppContextProvider extends Component {
  state = {
    frame: "daily",
    buttonActive: "false",
    buttonClass: "",
  };

  setPeriod = (interval) => {
    console.log(interval);
    this.setState({
      frame: interval,
    });
  };

  toggleButton = () => {
    this.setState({ buttonActive: !this.state.buttonActive });
    if (this.state.buttonActive) {
      this.setState({ buttonClass: "button-active" });
    } else this.setState({ buttonClass: "" });
  };
  render() {
    return (
      <AppContext.Provider
        value={{
          ...this.state,
          setPeriod: this.setPeriod,
        }}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

export default AppContextProvider;
