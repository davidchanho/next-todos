import React from "react";
import Skeleton from "react-loading-skeleton";
import styles from "./TodoItemSkeleton.module.scss";

function TodoItemSkeleton() {
  return <Skeleton className={styles.container} count={5} />;
}

export default TodoItemSkeleton;
