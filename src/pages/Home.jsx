import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFeedsAPI } from "../store/feed/feed.actions";

const Home = () => {
  const dispatch = useDispatch();
  const { data, getFeeds } = useSelector((state) => state.feed);

  const token = localStorage.getItem("token");
  const email = localStorage.getItem("name");

  // localStorage, check if data
  useEffect(() => {
    if (data.length === 0) {
      dispatch(getFeedsAPI());
    }
  }, [dispatch]);

  return (
    <div>
      <h4>Token : {token}</h4>
      <h3></h3>
      <br />
      {getFeeds.loading && <div>Loading...</div>}
      {getFeeds.error && <div>Error...</div>}
      {!getFeeds.loading &&
        data.map((feed) => (
          <div
            key={feed.id}
            style={{
              padding: "10px",
              margin: "auto",
              marginTop: "10px",
              border: "1px solid grey",
              maxWidth: "200px"
            }}
          >
            <div>{feed.category}</div>
            <div>{feed.price}</div>
          </div>
        ))}
    </div>
  );
};

export default Home;
