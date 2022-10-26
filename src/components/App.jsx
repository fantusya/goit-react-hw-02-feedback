import React, { Component } from 'react';
import SectionOfFeedback from './SectionOfFeedback';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Notification from './Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  handleIncrement = data => {
    this.setState(prevState => ({
      [data]: prevState[data] + 1,
    }));
  };

  countTotalFeedback = () => {
    const arrayOfValues = Object.values(this.state);
    return arrayOfValues.reduce(
      (total, number) => (total + number),
      0,);
  };

  countPositiveFeedbackPercentage = () => {
    const {good} = this.state;
    const totalFeedbacks = this.countTotalFeedback();
    return Math.round(good / totalFeedbacks * 100);
  };

  render() {
    const { good, neutral, bad } = this.state;
    
    return (
      <SectionOfFeedback title="Feedback of cafe Expresso">
        <FeedbackOptions options={this.state} onLeaveFeedback={this.handleIncrement} />
        {this.countTotalFeedback() === 0
          ? (<Notification message="There is no feedback" />)
          : (<Statistics good={good} neutral={neutral} bad={bad} total={this.countTotalFeedback()} positivePercentage={this.countPositiveFeedbackPercentage()} />)}
      </SectionOfFeedback>
    );
    
  }
}

export default App;