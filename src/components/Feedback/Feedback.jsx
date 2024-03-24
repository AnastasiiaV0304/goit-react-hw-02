import css from "./Feedback.module.css";

const Feedback = ({ good, neutral, bad, totalFeedback, positiveRatio }) => {
  return (
    <div>
      <ul>
        <li className={css.feedbackLi}>Good: {good}</li>
        <li className={css.feedbackLi}>Neutral: {neutral}</li>
        <li className={css.feedbackLi}>Bad: {bad}</li>
        <li className={css.feedbackLi}>Total: {totalFeedback}</li>
        <li className={css.feedbackLi}>Positive: {positiveRatio}%</li>
      </ul>
    </div>
  );
};

export default Feedback;
