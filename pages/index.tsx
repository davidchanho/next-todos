import React from "react";
import Form from "../components/form";
import Header from "../components/header";
import NextHead from "../components/next-head";
import Todo from "../components/todo";
import { useDarkMode } from "../hooks/useDarkMode";
import styles from "./Home.module.scss";
import { useFetchTodos } from "./useFetchTodos";

export default function Home() {
  const { darkMode } = useDarkMode();
  useFetchTodos();

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
        <Todo />
      </main>

      <footer>Drag and drop to reorder list</footer>
    </div>
  );
}
