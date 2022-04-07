import { quizzes } from "../data/quiz.json";
import { shuffle } from "../util/Util";

export default function quizReducer(state, action) {
  switch (action.type) {
    case "INIT":
      return {
        quizzes: [
          {
            q: "",
            answers: [],
          },
        ],
        indexOfQuiz: 0,
        isLock: true,
      };
    case "START":
      return {
        ...state,
        quizzes: shuffle(quizzes),
      };
    case "CORRECT":
      return {
        ...state,
        indexOfQuiz: state.indexOfQuiz + 1,
      };
    // case "WRONG":
    //   return {};
    // case "UNLOCK":
    //   return {};
    default:
      throw new Error();
  }
}
