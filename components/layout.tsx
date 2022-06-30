import Head from "next/head";

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <main className="flex flex-col gap-y-16 bg-green-600">
    <Head>
      <title>Raihana Rezvi</title>
      <meta name="description" content="Personal website of Raihana Rezvi" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      {/* <link rel="icon" href="/favicon.ico" /> */}
    </Head>
    {children}
  </main>
);
