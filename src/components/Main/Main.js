import React, { useEffect, useState } from "react";
import Styles from "./index.module.scss";

function Main() {
  const [jokes, setJokes] = useState();
  const [loader, setLoader] = useState(false);
  async function getAPI() {
    try {
      setLoader(true);
      const API_KEY = "210a27eae65619b8a39c5ce2d0f8";
      const res = await fetch(`https://hindi-jokes-api.onrender.com/jokes/?api_key=${API_KEY}`);
      const data = await res.json();
      setJokes(data);
      setLoader(false);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getAPI();
  }, []);

  const jokesHandler = () => {
    if (!loader) {
      getAPI();
    }

    // setJokes(jokes);
  };

  return (
    <>
      <div className={Styles.main}>
        <div className={Styles.main__content}>
          <div className={Styles.main__content__date}>
            <p>Date - {jokes?.usage[0]?.date}</p>
          </div>
          <div className={Styles.main__content__head}>
            <h2>Jokes No - {jokes?.jokeNo}</h2>
          </div>
          <div className={Styles.main__content__jokes}>
            <p>{jokes?.jokeContent}</p>
          </div>
          <div className={Styles.main__content__btn}>
            <button onClick={jokesHandler}>{loader ? <i className="fa-solid fa-hourglass-half"></i> : "see more jokes"}</button>
          </div>
          <div className={Styles.main__content__caption}>
            <p>
              Keep Smiling...
              <i className="fa-solid fa-heart"></i> from Wasim
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
