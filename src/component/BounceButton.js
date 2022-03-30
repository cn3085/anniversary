import { useEffect, useRef, useState } from "react";
import styles from "./BouncePhoto.module.css";
import { Transition } from "semantic-ui-react";
import JSConfetti from "js-confetti";

export function BounceButton({ img }) {
  const [isHide, setIsHide] = useState(true);
  const confettiRef = useRef(null);

  function popEmoji() {
    confettiRef.current.addConfetti({
      emojis: ["🇰🇷", "💸", "💵", "💖"],
      emojiSize: 256,
      confettiNumber: 30,
      confettiRadius: 6,
    });
  }

  useEffect(() => {
    if (typeof document !== "undefined") {
      confettiRef.current = new JSConfetti();
    }

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
        <div className={styles.baby_photo} onClick={popEmoji}>
          <img src={img} alt="node" />
        </div>
      </Transition>
    </div>
  );
}
