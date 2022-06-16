import Head from "next/head";

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <main className="flex flex-col gap-y-16">
        <Head>
            <title>Raihana Rezvi</title>
            <meta name="description" content="Personal website of Raihana Rezvi" />
            {/* <link rel="icon" href="/favicon.ico" /> */}
        </Head>
        {children}
    </main>
);
