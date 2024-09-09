import { useEffect, useState } from "react";
import Description from "../Description/Description";
import Options from "../Options/Options";
import Feedback from "../Feedback/Feedback";
import Notification from "../Notification/Notification";
import "../App/App.css";

export default function App() {
  const [values, setValues] = useState(() => {
      const savedFeedback = JSON.parse(window.localStorage.getItem('feedback'));
        return savedFeedback || { good: 0, neutral: 0, bad: 0 };
  });

  useEffect(() => {
    window.localStorage.setItem("feedback", JSON.stringify(values));
  }, [values]);

  const updateFeedback = (feedbackType) => {
    setValues((prevValues) => ({
      ...prevValues,
      [feedbackType]: prevValues[feedbackType] + 1,
    }));
  };

  const resetFeedback = () => {
    setValues({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  const totalFeedback = values.good + values.neutral + values.bad;
  const positiveFeedback = totalFeedback > 0
  ? Math.round((values.good / totalFeedback) * 100)
  : 0;
  
  return (
    <div>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        resetFeedback={resetFeedback}
        totalFeedback={totalFeedback}
      />

      {totalFeedback > 0 ? (
        <Feedback
          values={values}
          total={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      ) : (
        <Notification message="No feedback given yet" />
      )}
    </div>
  );
}
