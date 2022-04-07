import { Modal } from "semantic-ui-react";
import styles from "./QuizeBox.module.css";

export default function QuizBox() {
  return (
    <Modal
      basic
      dimmer={dimmer}
      open={open}
      onClose={() => modalDispatch({ type: "CLOSE_MODAL" })}
    >
      <Modal.Header>🤔{quizzes[indexOfQuiz].q}</Modal.Header>
      <Modal.Content>
        {quizzes[indexOfQuiz].answers.map((e, i) => (
          <Button
            key={i}
            circular
            color="facebook"
            icon="facebook"
            onClick={() => modalDispatch({ type: "CLOSE_MODAL" })}
          />
        ))}
      </Modal.Content>
    </Modal>
  );
}
