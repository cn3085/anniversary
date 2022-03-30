import Head from "next/head";
import Image from "next/image";
import React from "react";
import { BabyPhoto } from "../src/component/BabyPhoto";
import { BouncePhoto } from "../src/component/BouncePhoto";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <React.StrictMode>
      <div>
        <BabyPhoto direction={"right"} img={"/images/node.png"} />
        <BouncePhoto img={"/images/aws-logo.png"} />
        <BabyPhoto direction={"left"} img={"/images/thumb.png"} />
      </div>
    </React.StrictMode>
  );
}
