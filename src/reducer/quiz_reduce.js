import { quizzes } from "../data/quiz.json";
import { shuffle } from "../util/Util";

export const initialState = {
  quizzes: [{ q: "", answers: [] }],
  sizeOfQuiz: 4,
  isLock: true,
  numberOfQuiz: 0,
};

export function quizReducer(state, action) {
  console.log(action.type);
  switch (action.type) {
    case "START":
      return {
        ...state,
        quizzes: shuffle(quizzes).slice(0, state.sizeOfQuiz),
        numberOfQuiz: 0,
      };
    case "CORRECT":
      if (state.numberOfQuiz + 1 === state.sizeOfQuiz) {
        return {
          ...initialState,
          isLock: false,
        };
      } else {
        return {
          ...state,
          numberOfQuiz: state.numberOfQuiz + 1,
        };
      }
    case "WRONG":
      return {
        ...initialState
      };
    case "UNLOCK":
      return {};
    default:
      throw new Error();
  }
}
