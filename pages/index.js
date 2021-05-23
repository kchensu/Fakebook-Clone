import Head from "next/head";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

export default function Home() {
  return (
    <div className="h-screen overflow-hidden">
      <Head>
        <title>Fakebook</title>
      </Head>
      <Header />
      <main>
        {/*sidebar*/}
        <Sidebar />
        {/*feed*/}
        {/*widgets*/}
      </main>
    </div>
  );
}
