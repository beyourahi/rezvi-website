import Head from "next/head";

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <main>
        <Head>
            <title>Raihana Rezvi</title>
            <meta name="description" content="Personal website of Raihana Rezvi" />
            {/* <link rel="icon" href="/favicon.ico" /> */}
        </Head>
        {children}
    </main>
);
