import { Container } from './App.styled';
import { Component } from 'react';

import { Statistics } from '../Statistics/Statistics ';
import { FeedbackOptions } from '../FeedbackOptions/FeedbackOptions';
import { Section } from '../Section/Section';

class App extends Component {
  state = {
    good: this.props.defaultValiue,
    neutral: this.props.defaultValiue,
    bad: this.props.defaultValiue,
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad ? good + neutral + bad : 0;
  };

  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad
      ? (good / (good + neutral + bad)).toFixed(2)
      : '0';
  };

  ClickOnBtn = evt => {
    const btn = evt.target.innerText.toLowerCase();
    this.setState(previusValue => {
      return {
        [btn]: previusValue[btn] + 1,
      };
    });
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();

    return (
      <Container>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.ClickOnBtn}
          ></FeedbackOptions>
        </Section>

        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          ></Statistics>
        </Section>
      </Container>
    );
  }
}

export { App };
