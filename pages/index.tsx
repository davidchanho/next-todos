import React from "react";
import Form from "../components/form";
import Header from "../components/header";
import NextHead from "../components/next-head";
import TodoList from "../components/todo-list";
import { useAppContext } from "../context";
import styles from "./Home.module.scss";

export default function Home() {
  const {
    state: { darkMode },
  } = useAppContext();

  return (
    <div
      className={`
        ${styles.container} 
        ${darkMode ? styles.darkBackground : styles.lightBackground}
      `}
    >
      <NextHead />
      <main className={styles.main}>
        <Header />
        <Form />
        <TodoList />
      </main>

      <footer className={styles.footer}>Drag and drop to reorder list</footer>
    </div>
  );
}
