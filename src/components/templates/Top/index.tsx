import React, { MouseEventHandler, useMemo } from "react";
import styles from "./style.module.scss";
import { MdPlayArrow, MdStop, MdReplay, MdHearing } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";

export type TopProps = {
  isListening: boolean;
  onReset: MouseEventHandler<HTMLButtonElement>;
  onStart: MouseEventHandler<HTMLButtonElement>;
  onStop: MouseEventHandler<HTMLButtonElement>;
  text: string;
};

function Top({ isListening, onReset, onStart, onStop, text }: TopProps) {
  const texts = useMemo(
    () => text.split(/\n/).map((text, index) => <p key={index}>{text}</p>),
    [text]
  );

  return (
    <div>
      <p className={styles.textWrapper}>{texts}</p>
      <MdHearing
        className={`${styles.hearing} ${isListening ? styles.listening : ""}`}
      />
      <div className={styles.buttonsWrapper}>
        <button
          className={styles.button}
          disabled={isListening}
          onClick={onStart}
        >
          <MdPlayArrow className={styles.icon} />
          Start
        </button>
        <button
          className={styles.button}
          disabled={!isListening}
          onClick={onStop}
        >
          <MdStop className={styles.icon} />
          Stop
        </button>
        <button className={styles.button} onClick={onReset}>
          <MdReplay className={styles.icon} />
          Reset
        </button>
        {/* <button className={styles.button}>
          <IoMdSettings className={styles.icon} />
          Setting
        </button> */}
      </div>
    </div>
  );
}

export default Top;
