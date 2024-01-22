import { useState } from 'react';
import Statistics from '../Statistics/Statistics';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Notification from 'components/Notification/Notification';
import css from './FeedbackWidget.module.css';

export default function FeedbackWidget() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleFeedback = type => {
    switch (type) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;
      default:
        console.log('default');
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();

    return total === 0 ? 0 : Math.round((good / total) * 100);
  };

  const total = countTotalFeedback();
  const positivePercentage = countPositiveFeedbackPercentage();

  const feedbackOptions = ['good', 'neutral', 'bad'];

  return (
    <div className={css.Container}>
      <div className={css.Title}>
        <h2>Please leave feedback</h2>
        <FeedbackOptions
          options={feedbackOptions}
          onLeaveFeedback={handleFeedback}
        />
      </div>
      <div className={css.Title}>
        <h2>Statistics</h2>
        {total ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </div>
    </div>
  );
}

// class FeedbackWidget extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };
//   handleFeedback = data => {
//     this.setState(prevState => ({ [data]: prevState[data] + 1 }));
//   };

//   countTotalFeedback = () => {
//     const { good, neutral, bad } = this.state;
//     return good + neutral + bad;
//   };

//   countPositiveFeedbackPercentage = () => {
//     const total = this.countTotalFeedback();
//     const { good } = this.state;

//     return total === 0 ? 0 : Math.round((good / total) * 100);
//   };

//   render() {
//     const { good, neutral, bad } = this.state;
//     const total = this.countTotalFeedback();
//     const positivePercentage = this.countPositiveFeedbackPercentage();

//     const feedbackOptions = ['good', 'neutral', 'bad'];

//     return (
//       <div className={css.Container}>
//         <div className={css.Title}>
//           <h2>Please leave feedback</h2>
//           <FeedbackOptions
//             options={feedbackOptions}
//             onLeaveFeedback={this.handleFeedback}
//           />
//         </div>
//         <div className={css.Title}>
//           <h2>Statistics</h2>
//           {total ? (
//             <Statistics
//               good={good}
//               neutral={neutral}
//               bad={bad}
//               total={total}
//               positivePercentage={positivePercentage}
//             />
//           ) : (
//             <Notification message="There is no feedback" />
//           )}
//         </div>
//       </div>
//     );
//   }
// }

// export default FeedbackWidget;
