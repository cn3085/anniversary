import Head from "next/head";
import React from "react";
import { BabyPhoto } from "../src/component/BabyPhoto";
import { BounceButton } from "../src/component/BounceButton";
import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";
import styles from "./index.module.css";
import { Button, Modal } from "semantic-ui-react";
import modalReducer from "../src/reducer/quiz_modal_reduce";
import quizReducer from "../src/reducer/quiz_reduce";

export default function Home() {
  const { width, height } = useWindowSize();

  //modal
  const [modalState, modalDispatch] = React.useReducer(modalReducer, {
    open: false,
    dimmer: undefined,
  });
  const { open, dimmer } = modalState;

  //quiz
  const [quizState, quizDispatch] = React.useReducer(quizReducer, {
    quizzes: [
      {
        q: "",
        answers: [],
      },
    ], //선택된 퀴즈
    indexOfQuiz: 0,
    isLock: true,
  });
  const { quizzes, indexOfQuiz, isLock } = quizState;

  return (
    <React.StrictMode>
      <Head>
        <meta charSet="UTF-8"></meta>
        <meta name="description" content="가나다라설명"></meta>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <meta property="og:title" content="카카오 제목"></meta>
        <meta property="og:description" content="내용 요약"></meta>
        <meta
          property="og:image"
          content="http://anniversary-chi.vercel.app/images/aws-logo.png"
        ></meta>
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
          <p className={styles.main_title}>abc</p>
          <p className={styles.sub_title}>가나다라</p>
        </div>
        <div className={styles.photo_area}>
          <BabyPhoto
            direction={"right"}
            img={"/images/node.png"}
            delay={1000}
          />
          <BounceButton img={"/images/aws-logo.png"} />
          <BabyPhoto
            direction={"left"}
            img={"/images/thumb.png"}
            delay={1500}
          />
        </div>
        <div className={styles.gift_area}>
          {isLock && (
            <div
              className={styles.gift_lock}
              onClick={() => {
                modalDispatch({ type: "OPEN_MODAL", dimmer: "blurring" });
                quizDispatch({ type: "START" });
              }}
            >
              🔒
            </div>
          )}
          <div className={styles.gift_list}>gift</div>
        </div>
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
