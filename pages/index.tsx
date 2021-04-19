import React, { useEffect } from "react";
import { API } from "../api";
import Form from "../components/form";
import Header from "../components/header";
import NextHead from "../components/next-head";
import Todo from "../components/todo";
import { useAppContext } from "../context";
import styles from "./Home.module.scss";

export default function Home() {
  const {
    state: { darkMode },
    dispatch,
  } = useAppContext();

  useEffect(() => {
    const fetchTodos = () => {
      dispatch({ type: "LOADING" });
      try {
        setTimeout(async () => {
          API.fetch().then((data) =>
            dispatch({ type: "FETCH_TODOS", payload: data })
          );
        }, 3000);
      } catch (err) {
        dispatch({ type: "ERROR", payload: err });
      }
    };
    fetchTodos();
  }, []);

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

      <footer className={styles.footer}>Drag and drop to reorder list</footer>
    </div>
  );
}
