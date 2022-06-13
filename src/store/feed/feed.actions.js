import axios from "axios";
import {
  GET_FEEDS_ERROR,
  GET_FEEDS_LOADING,
  GET_FEEDS_SUCCESS
} from "./feed.types";

export const getFeedsAPI = () => (dispatch) => {
  dispatch({ type: GET_FEEDS_LOADING });
  axios
    .get(" http://localhost:3000/posts")
    .then((r) => {
      dispatch({ type: GET_FEEDS_SUCCESS, payload: r.data });
    })
    .catch(() => {
      dispatch({ type: GET_FEEDS_ERROR });
    });
};
