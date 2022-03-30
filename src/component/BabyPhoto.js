import { useEffect, useState } from "react";
import styles from "./BabyPhoto.module.css";
import { Transition } from "semantic-ui-react";

export function BabyPhoto({ direction, img, delay }) {
  const [isHide, setIsHide] = useState(false);

  function show() {
    setIsHide(true);
  }

  useEffect(() => {
    const id = setTimeout(() => {
      show();
    }, delay);
    return () => clearTimeout(id);
  }, []);

  return (
    <Transition
      visible={isHide}
      animation={"fade " + direction}
      duration={1300}
    >
      <div className={styles.baby_photo}>
        <img src={img} alt="node" />
      </div>
    </Transition>
  );
}
