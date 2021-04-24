import React, { useState } from "react";

const Madlib = () => {
  const INITIAL_STATE = "";
  const [words, setWords] = useState(INITIAL_STATE);
  const [storyIsVisible, setStoryIsVisible] = useState(false);
  const handleChange = (e) => {
    // add words from form inputs
    const { name, value } = e.target;
    setWords((words) => ({
      ...words,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    // show story, hide form
    e.preventDefault();
    setStoryIsVisible(!storyIsVisible);
  };

  const restart = () => {
    // show and reset form, hide story
    setWords(INITIAL_STATE);
    document.getElementById("story-form").reset();
    setStoryIsVisible(false);
  };
  return (
    <div>
      <p
        className="story"
        style={{ display: storyIsVisible ? "block" : "none" }}
      >
        There was a {words.color} {words.noun1} who loved a {words.adjective}
        {words.noun2}
      </p>
      <form
        style={{ display: storyIsVisible ? "none" : "block" }}
        id="story-form"
        onSubmit={handleSubmit}
      >
        <label htmlFor="noun1"></label>
        <input
          name="noun1"
          placeholder="noun 1"
          onChange={handleChange}
        ></input>
        <label htmlFor="noun2"></label>
        <input
          name="noun2"
          placeholder="noun 2"
          onChange={handleChange}
        ></input>
        <label htmlFor="adjective"></label>
        <input
          name="adjective"
          placeholder="adjective"
          onChange={handleChange}
        ></input>
        <label htmlFor="color"></label>
        <input name="color" placeholder="color" onChange={handleChange}></input>
        <button>Get Story</button>
      </form>
      <button
        onClick={restart}
        style={{ display: storyIsVisible ? "block" : "none" }}
      >
        Restart
      </button>
    </div>
  );
};

export default Madlib;
