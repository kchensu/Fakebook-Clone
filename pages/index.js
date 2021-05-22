import Head from "next/head";
import Header from "../components/Header";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Fakebook</title>
      </Head>
      <Header />
    </div>
  );
}