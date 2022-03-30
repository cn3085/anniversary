import { useEffect, useState } from "react";
import styles from "./BabyPhoto.module.css";
import { Transition } from "semantic-ui-react";

export function BabyPhoto({ direction, img }) {
  const [isHide, setIsHide] = useState(false);

  function show() {
    setIsHide(true);
  }

  useEffect(() => {
    show();
  }, []);

  return (
    <div>
      <Transition
        visible={isHide}
        animation={"fade " + direction}
        duration={500}
      >
        <div className={styles.baby_photo}>
          <img src={img} alt="node" />
        </div>
      </Transition>
    </div>
  );
}
