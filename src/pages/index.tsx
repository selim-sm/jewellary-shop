import Display from "@/components/Display";
import Hero from "@/components/Hero";
import Head from "next/head";
const index = () => {
  return (
    <>
      <Head>
        <title>HOME</title>
        <link rel="icon" href="/logo1.png" sizes="24" />
      </Head>
      <Hero />
      <Display />
    </>
  );
};

export default index;
