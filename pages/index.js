import Head from "next/head";
import React from "react";
import { BabyPhoto } from "../src/component/BabyPhoto";
import { BounceButton } from "../src/component/BounceButton";
import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";
import styles from "./index.module.css";
import { Button, Icon, Modal } from "semantic-ui-react";
import modalReducer from "../src/reducer/quiz_modal_reduce";
import { quizReducer, initialState } from "../src/reducer/quiz_reduce";

export default function Home() {
  const { width, height } = useWindowSize();

  //modal
  const [modalState, modalDispatch] = React.useReducer(modalReducer, {
    open: false,
    dimmer: undefined,
  });
  const { open, dimmer } = modalState;

  //quiz
  const [quizState, quizDispatch] = React.useReducer(quizReducer, initialState);
  const { quizzes, numberOfQuiz, isLock } = quizState;

  return (
    <React.StrictMode>
      <Head>
        <title>hello</title>
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Palette+Mosaic&family=Rock+3D&display=swap');
        </style>
      </Head>
      <div className={styles.background}>
        {/* <Confetti width={width} height={height} /> */}
        <Confetti
          width="390"
          height="844"
          recycle={false}
          numberOfPieces={400}
          tweenDuration={10000}
        />
        <div className={styles.title_area}>
          <p className={styles.main_title}>2nd anniversary</p>
          <p className={styles.sub_title}>대충축하문구</p>
        </div>
        <div className={styles.photo_area}>
          <BabyPhoto direction={"right"} img={"/images/jy.png"} delay={1000} />
          <BounceButton img={"/images/moon.png"} />
          <BabyPhoto direction={"left"} img={"/images/jy.png"} delay={1500} />
        </div>
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
      </div>
    </React.StrictMode>
  );
}

//정적 페이지 생성
export async function getStaticProps() {
  //여기는 node 환경
  //서버에서 돌아가는 코드이고 window 같은 거 쓰면 에러 남

  return {
    props: {},
  };
}
