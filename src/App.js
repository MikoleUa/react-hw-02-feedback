import React from "react";
import Section from "./components/Section/Section";
import FeedbackOptions from "./components/FeedbackOptions/FeedbackOptions";
import Statistics from "./components/Statistics/Statistics";
import Notification from "./components/Notification/Notification";
import "./App.css";

class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrement = (e) => {
    const name = e.target.name;
    this.setState((prevState) => {
      return { [name]: prevState[name] + 1 };
    });
  };
  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, e) => {
      return e + acc;
    }, 0);
  };
  countPositiveFeedbackPercentage = () => {
    const positivePercentage =
      (this.state.good / this.countTotalFeedback()) * 100;
    return Math.floor(positivePercentage);
  };
  render() {
    return (
      <>
        <Section title="Feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.handleIncrement}
          />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={{ key: "Good", value: this.state.good }}
              neutral={{ key: "Neutral", value: this.state.neutral }}
              bad={{ key: "Bad", value: this.state.bad }}
              total={{ key: "Total", value: this.countTotalFeedback() }}
              positivePercentage={{
                key: "Positive feedback",
                value: this.countPositiveFeedbackPercentage(),
              }}
            />
          )}
        </Section>
      </>
    );
  }
}

export default App;
