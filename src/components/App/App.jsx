//import { Feedback } from '../Feedback/Feedback';
import { Container } from './App.styled';
import { Component } from 'react';
//export const App = () => {
//  return (
//    <Container>
//      <Feedback defaultValiue={0}></Feedback>
//    </Container>
//  );
//};

//import { Feedback } from '../Feedback/Feedback';

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
    this.setState(previusValue => {
      return {
        positiv: previusValue.good,
      };
    });
  };

  ClickOnBtn = evt => {
    const btn = evt.target.innerText.toLowerCase();
    this.setState(previusValue => {
      return {
        [btn]: previusValue[btn] + 1,
        total: this.countTotalFeedback() + 1,
      };
    });
    this.countPositiveFeedbackPercentage();
  };

  render() {
    const { good, neutral, bad, total, positiv } = this.state;
    console.log(this.state);
    console.log('total:', total);
    console.log('positiv:', positiv);
    return (
      <Container>
        {/*<Feedback options={this.state} onLeaveFeedback={this.state}></Feedback>*/}
        <div>
          <p>Please leave feedback</p>
          <button onClick={this.ClickOnBtn}>Good</button>
          <button onClick={this.ClickOnBtn}>Neutral</button>
          <button onClick={this.ClickOnBtn}>Bad</button>

          <p>Statistics</p>
          <p>Good: {good}</p>
          <p>Neutral: {neutral}</p>
          <p>Bad: {bad}</p>
          <p>Total: {total ? total : '0'}</p>
          <p>
            Positive feedback: {positiv ? (positiv / total).toFixed(2) : '0'}
          </p>
        </div>
      </Container>
    );
  }
}

export { App };
