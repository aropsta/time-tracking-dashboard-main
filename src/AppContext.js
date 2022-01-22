import React, { createContext, Component } from "react";

export const AppContext = createContext();

class AppContextProvider extends Component {
  state = {
    frame: "daily",
  };

  dailyView = () => {
    this.setState({ frame: "daily" });
  };
  weeklyView = (timeframe) => {
    this.setState({ frame: "weekly" });
  };

  monthlyView = (timeframe) => {
    this.setState({ frame: "monthly" });
  };
  render() {
    return (
      <AppContext.Provider
        value={{
          ...this.state,
          dailyView: this.dailyView,
          weeklyView: this.weeklyView,
          monthlyView: this.monthlyView,
        }}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

export default AppContextProvider;
