import { quizzes } from "../data/quiz.json";
import { shuffle } from "../util/Util";

export default function quizReducer(state, action) {
  switch (action.type) {
    case "START":
      return {
        quizzes: shuffle(quizzes).slice(0, state.numberOfQuiz),
        indexOfQuiz: 0,
        isLock: true,
        numberOfQuiz: 2,
      };
    case "CORRECT":
      return {
        ...state,
        indexOfQuiz: state.indexOfQuiz + 1,
      };
    case "WRONG":
      return {};
    case "UNLOCK":
      return {};
    default:
      throw new Error();
  }
}
