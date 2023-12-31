import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Game from "@/components/Game";

export default function Home() {
  return (
    <>
      <Head>
        <title>Tic-Tac-Toe</title>
        <meta name="description" content="Tic-Tac-Toe" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Game />
      </main>
    </>
  );
}
