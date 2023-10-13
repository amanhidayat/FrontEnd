import React from "react";
export async function getServerSideProps(context) {
  const response = await fetch(
    "https://official-joke-api.appspot.com/jokes/ten"
  );
  const data = await response.json();
  return {
    props: { data },
  };
}

const ServerJokes = ({ data }) => {
  return (
    <main>
      <h1>Here are some Jokes!</h1>
      <ul>
        {data.map((joke) => (
          <li key={joke.id}>
            {joke.setup} - {joke.punchline}
          </li>
        ))}
      </ul>
    </main>
  );
};

export default ServerJokes;