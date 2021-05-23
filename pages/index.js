import Head from "next/head";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Feed from "../components/Feed";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Fakebook</title>
      </Head>
      <Header />
      <main className="flex">
        {/*sidebar*/}
        <Sidebar />
        {/*feed*/}
        <Feed />
        {/*widgets*/}
      </main>
    </div>
  );
}
