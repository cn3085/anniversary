import { useEffect, useRef, useState } from "react";
import styles from "./BouncePhoto.module.css";
import { Transition } from "semantic-ui-react";
import JSConfetti from "js-confetti";

export function BounceButton({ img }) {
  const [isHide, setIsHide] = useState(false);
  const confettiRef = useRef(null);

  function popEmoji() {
    confettiRef.current.addConfetti({
      emojis: ["😍", "🥰", "💖", "💑"],
      emojiSize: 256,
      confettiNumber: 40,
      confettiRadius: 6,
    });
  }

  useEffect(() => {
    if (typeof document !== "undefined") {
      confettiRef.current = new JSConfetti();
    }

    let id = null;
    const timeoutId = setTimeout(() => {
      popEmoji();
      id = setInterval(() => {
        setIsHide((hide) => !hide);
      }, 1000);
    }, 3000);

    return () => {
      clearTimeout(timeoutId);
      clearInterval(id);
    };
  }, []);

  return (
    <div className={styles.bounce_area}>
      <Transition animation="pulse" duration="500" visible={isHide}>
        <div className={styles.baby_photo} onClick={popEmoji}>
          <img src={img} alt="node" />
        </div>
      </Transition>
    </div>
  );
}
