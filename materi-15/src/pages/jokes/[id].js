import React from "react";

export const getStaticPaths = async () => {
    const response = await fetch(
        "https://v2.jokeapi.dev/joke/Programming?type=twopart&idRange=0-10&amount=5"
    );
    const { jokes } = await response.json();

    const paths = jokes.map((joke) => ({
        params: { id: joke.id.toString() },
    }));

    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps = async ({ params }) => {
    const response = await fetch(
        `https://v2.jokeapi.dev/joke/Any?idRange=${params.id}`
    );
    const data = await response.json();

    return {
        props: {
            data,
        },
        revalidate: 10,
    };
};

const StaticJokes = ({ data }) => {
    return (
        <main>
            <h1>Here are some Jokes!</h1>
            <ul>
                <li key={data.id}>
                    {data.setup} - {data.delivery}
                </li>
            </ul>
        </main>
    );
};

export default StaticJokes;
