import Head from "next/head";
import Image from "next/image";
import React from "react";
import { BabyPhoto } from "../src/component/BabyPhoto";
import { BounceButton } from "../src/component/BounceButton";
import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";
import styles from "../styles/Home.module.css";

export default function Home() {
  const { width, height } = useWindowSize();

  console.log(width, height);

  return (
    <React.StrictMode>
      <>
        {/* <Confetti width={width} height={height} /> */}
        <Confetti
          width="390"
          height="844"
          recycle={false}
          numberOfPieces={400}
          tweenDuration={10000}
        />
        <div>
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
      </>
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
