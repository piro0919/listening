import React, { CSSProperties, useMemo } from "react";
import { useWindowHeight } from "@react-hook/window-size";
import styles from "./style.module.scss";

function NotSupported() {
  const onlyHeight = useWindowHeight();
  const style = useMemo<CSSProperties>(
    () => ({
      height: `${onlyHeight}px`,
    }),
    [onlyHeight]
  );

  return (
    <div className={styles.wrapper} style={style}>
      <p>Browser doesn't support speech recognition.</p>
    </div>
  );
}

export default NotSupported;
