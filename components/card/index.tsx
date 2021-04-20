import React, { HTMLAttributes, PropsWithChildren } from "react";
import styles from "./Card.module.scss";

function Card({
  children,
  ...props
}: PropsWithChildren<HTMLAttributes<HTMLDivElement>>) {
  return (
    <div className={styles.container} {...props}>
      {children}
    </div>
  );
}

export default Card;
