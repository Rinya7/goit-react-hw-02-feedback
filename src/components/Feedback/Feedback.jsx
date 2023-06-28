//import { Component } from 'react';

//class Feedback extends Component {
//  //  state = {
//  //    good: this.props.defaultValiue,
//  //    neutral: this.props.defaultValiue,
//  //    bad: this.props.defaultValiue,
//  //  };

//  ClickOnBtn = evt => {
//    console.log(this.props.options);

//    const btn = evt.target.innerText.toLowerCase();

//    console.log(btn);

//    this.props(previusValue => {
//      return { [btn]: previusValue[btn] + 1 };
//    });

//    //this.setState(previusValue => {
//    //  return { [btn]: previusValue[btn] + 1 };
//    //});
//  };

//  countTotalFeedback = () => {
//    console.log('Total');
//  };

//  countPositiveFeedbackPercentage = () => {
//    console.log('%pozitivnih');
//  };

//  render() {
//    console.log(this.props.options);
//    const { good, neutral, bad } = this.props.options;
//    return (
//      <div>
//        <p>Please leave feedback</p>
//        <button onClick={this.ClickOnBtn}>Good</button>
//        <button onClick={this.ClickOnBtn}>Neutral</button>
//        <button onClick={this.ClickOnBtn}>Bad</button>

//        <p>Statistics</p>
//        <p>Good: {good}</p>
//        <p>Neutral: {neutral}</p>
//        <p>Bad: {bad}</p>
//        <p>Total: 0</p>
//        <p>Positive feedback: 0</p>
//      </div>
//    );
//  }
//}

//export { Feedback };
