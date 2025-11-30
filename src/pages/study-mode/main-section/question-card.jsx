import { useState, useEffect } from "react";
import { motion as Motion } from "motion/react";
import clsx from "clsx";

import YellowStar from "../../../common-components/icons/PatternStarYellow";
import PinkStar from "../../../common-components/icons/PatternStarPink";
import BlueStar from "../../../common-components/icons/PatternStarBlue";

const CategoryChip = ({ category }) => {
  return (
    <span className="text-neutral-900 bg-neutral-0 border border-neutral-900 rounded-full px-3 py-1.5 shadow-">
      {category}
    </span>
  );
};

const Question = ({ card }) => {
  return (
    <div className="h-61 flex flex-col justify-center gap-4">
      <h3 className="text-preset-1-mobile md:text-preset-1-tab lg:text-preset-1 text-center font-bold">
        {card?.question}
      </h3>
      <p className="text-center text-preset-4">Click to reveal answer</p>
    </div>
  );
};

const Answer = ({ card }) => {
  return (
    <div className="min-h-61 flex flex-col justify-center gap-4">
      <p className="text-center text-preset-4">Answer</p>
      <h3 className="text-preset-1-mobile md:text-preset-1-tab lg:text-preset-1 text-center font-bold">
        {card?.answer}
      </h3>
    </div>
  );
};

const Progress = ({ knownCount }) => {
  return (
    <div className="flex flex-row gap-2 items-center">
      <div className="w-15 h-2 border bg-neutral-0 border-neutral-900 rounded-full">
        <div
          className="h-2 bg-neutral-900 rounded-full"
          style={{ width: `${(knownCount / 5) * 100}%` }}
        ></div>
      </div>
      <span className="text-preset-6 text-neutral-900">{knownCount}/5</span>
    </div>
  );
};

const QuestionCard = ({ question }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setShowAnswer(false);
  }, [question?.id]);

  return (
    <div
      className="w-full pespective-1000 cursor-pointer"
      onClick={() => setShowAnswer(!showAnswer)}
      style={{ perspective: 1000 }}
    >
      <Motion.div
        transition={{ duration: 0.7 }}
        animate={{ rotateY: showAnswer ? 0 : 180 }}
        className="w-full "
      >
        <Motion.div
          className={clsx({
            hidden: showAnswer,
            "bg-pink-400 w-full relative p-6 rounded-lg drop-shadow-lg drop-shadow-neutral-900": true,
          })}
          animate={{ rotateY: showAnswer ? 0 : 180 }}
        >
          <YellowStar className="absolute bottom-2 left-2" />
          <BlueStar className="absolute top-2 right-2" />
          <div className="flex flex-col text-center items-center">
            <CategoryChip category={question?.category} />
            <Question card={question} />
            <Progress knownCount={question?.knownCount} />
          </div>
        </Motion.div>

        <Motion.div
          className={clsx({
            hidden: !showAnswer,
            "bg-blue-400 w-full relative p-6 rounded-lg drop-shadow-lg drop-shadow-neutral-900": true,
          })}
        >
          <PinkStar className="absolute top-2 right-2" />
          <YellowStar className="absolute bottom-2 left-2" />
          <div className="flex flex-col text-center items-center">
            <CategoryChip category={question?.category} />
            <Answer card={question} />
            <Progress knownCount={question?.knownCount} />
          </div>
        </Motion.div>
      </Motion.div>
    </div>
  );
};

export default QuestionCard;
