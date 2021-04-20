import { useEffect } from "react";
import { API } from "../api";
import { useAppContext } from "../context";
import { ActionType } from "../context/actionTypes";

export const useFetchTodos = () => {
  const { dispatch } = useAppContext();

  useEffect(() => {
    (function () {
      dispatch({ type: ActionType.LOADING });
      try {
        setTimeout(async () => {
          API.fetch().then((data) =>
            dispatch({ type: ActionType.FETCH_TODOS, payload: data })
          );
        }, 1000);
      } catch (err) {
        dispatch({ type: ActionType.ERROR, payload: err });
      }
    })();
  }, []);
};
