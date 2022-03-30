import { useEffect, useRef, useState } from "react";
import styles from "./BouncePhoto.module.css";
import { Transition } from "semantic-ui-react";

export function BouncePhoto({ img }) {
  const [isHide, setIsHide] = useState(true);

  useEffect(() => {
    const id = setInterval(() => {
      setIsHide((hide) => !hide);
    }, 1000);
    return () => {
      clearInterval(id);
    };
  }, []);

  return (
    <div>
      <Transition animation="pulse" duration="500" visible={isHide}>
        <div className={styles.baby_photo}>
          <img src={img} alt="node" />
        </div>
      </Transition>
    </div>
  );
}
