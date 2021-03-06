import Head from "next/head";
import React, { useEffect, useRef, useState } from "react";
import { BabyPhoto } from "../src/component/BabyPhoto";
import { BounceButton } from "../src/component/BounceButton";
import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";
import styles from "./index.module.css";
import { Button, Icon, Modal } from "semantic-ui-react";
import modalReducer from "../src/reducer/quiz_modal_reduce";
import letterReducer from "../src/reducer/letter_reduce";
import { quizReducer, initialState } from "../src/reducer/quiz_reduce";
import Letter from "../src/component/Letter";
import JSConfetti from "js-confetti";
import TypeIt from "typeit-react";
import Type from "../src/component/Type";

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
  const { quizzes, numberOfQuiz, sizeOfQuiz, isLock } = quizState;

  //letter
  const [letterState, letterDispatch] = React.useReducer(letterReducer, {
    isShowLetter: false,
  });
  const { isShowLetter } = letterState;

  const confettiRef = useRef(null);
  function popWrongEmoji(emojis) {
    confettiRef.current.addConfetti({
      emojis: emojis,
      emojiSize: 256,
      confettiNumber: 32,
      confettiRadius: 6,
    });
  }

  useEffect(() => {
    if (typeof document !== "undefined") {
      confettiRef.current = new JSConfetti();
    }
  });

  return (
    <React.StrictMode>
      <Head>
        <title>πμ­μπνμ£Όπ</title>
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Oswald&family=Palette+Mosaic&display=swap');
        </style>
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR&family=Oswald:wght@700&family=Palette+Mosaic&display=swap');
        </style>
      </Head>
      <div className={styles.background}>
        {/* <Confetti width={width} height={height} /> */}
        <Confetti
          width="360"
          height="780"
          recycle={false}
          numberOfPieces={400}
          tweenDuration={10000}
        />
        <div className={styles.title_area}>
          <p className={styles.main_title}>2nd anniversary</p>
          <p className={styles.sub_title}>μ°λ¦¬μ 2μ£Όλ μΆνν΄!<br/>μμΌλ‘λ λλ μ¬λν΄!</p>
        </div>
        <div className={styles.photo_area}>
          <BabyPhoto direction={"right"} img={"/images/tj.png"} delay={1000} />
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
              π
            </div>
          ) : (
            <>
              <div className={styles.gift_list} onClick={() => letterDispatch()}>
                π
              </div>
              <Letter isShowLetter={isShowLetter} letterDispatch={letterDispatch}/>
            </>
          )}
        </div>

        {isLock && (
          <Modal
            basic
            dimmer={dimmer}
            open={open}
            onClose={() => modalDispatch({ type: "CLOSE_MODAL" })}
          >
            <Modal.Header>π€ {quizzes[numberOfQuiz].q} ({numberOfQuiz + 1}/{sizeOfQuiz})</Modal.Header>
            <Modal.Content>
              {quizzes[numberOfQuiz].answers.map((ele, i) => (
                <div class={styles.exam}>
                  <Button
                    key={i}
                    circular
                    color="grey"
                    icon="angle right"
                    onClick={
                      ele.isAnswer
                        ? () => {
                          quizDispatch({ type: "CORRECT" });
                        }
                        : () => {
                            quizDispatch({ type: "WRONG" });
                            modalDispatch({ type: "CLOSE_MODAL" });
                            popWrongEmoji(["π€", "π€¨", "π", "π", "βΉ", "π ", "π‘"]);
                          }
                    }
                  />
                  <p>{ele.exam}</p>
                </div>
              ))}
            </Modal.Content>
          </Modal>
        )}
      </div>
    </React.StrictMode>
  );
}

//μ μ  νμ΄μ§ μμ±
export async function getStaticProps() {
  //μ¬κΈ°λ node νκ²½
  //μλ²μμ λμκ°λ μ½λμ΄κ³  window κ°μ κ±° μ°λ©΄ μλ¬ λ¨

  return {
    props: {},
  };
}
