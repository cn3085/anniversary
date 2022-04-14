import { Button, Icon, Modal } from "semantic-ui-react";
import styles from "./QuizeBox.module.css";
import React from "react";
import { quizReducer, initialState } from "../../src/reducer/quiz_reduce";

export default function QuizBox() {

  //quiz
  const [quizState, quizDispatch] = React.useReducer(quizReducer, initialState);
  const { quizzes, numberOfQuiz, isLock } = quizState;

  return (
    <div className={styles.gift_area}>
      {isLock ? (
        <div
          className={styles.gift_lock}
          onClick={() => {
            modalDispatch({ type: "OPEN_MODAL", dimmer: "blurring" });
            quizDispatch({ type: "START" });
          }}
        >
          <Icon name="lock" />
          <Modal
            basic
            dimmer={dimmer}
            open={open}
            onClose={() => modalDispatch({ type: "CLOSE_MODAL" })}
          >
            <Modal.Header>{quizzes[numberOfQuiz].q}</Modal.Header>
            <Modal.Content>
              {quizzes[numberOfQuiz].answers.map((ele, i) => (
                <Button
                  key={i}
                  circular
                  color="facebook"
                  icon="facebook"
                  onClick={
                    ele.isAnswer
                      ? () => quizDispatch({ type: "CORRECT" })
                      : () => () => quizDispatch({ type: "WRONG" })
                  }
                />
              ))}
            </Modal.Content>
          </Modal>
        </div>
      ) : (
        <div className={styles.gift_list}>🎁</div>
      )}
    </div>
  );
}
