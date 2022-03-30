import JSConfetti from "js-confetti";
import { useEffect, useRef } from "react";

export default function PopEmoji() {
  const confettiRef = useRef(null);

  function popEmoji() {
    confettiRef.current.addConfetti({
      emojis: ["🌈", "⚡️", "💥", "✨", "💫", "🌸"],
      emojiSize: 100,
      confettiNumber: 30,
    });
  }

  useEffect(() => {
    if (typeof document !== "undefined") {
      confettiRef.current = new JSConfetti();
      popEmoji();
    }
  }, []);

  return <></>;
}
