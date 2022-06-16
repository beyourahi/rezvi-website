import { About } from "@/components/about/about";
import { Footer } from "@/components/footer/footer";
import { Hero } from "@/components/hero/hero";
import { Layout } from "@/components/layout";
import { Services } from "@/components/services/services";
import type { NextPage } from "next";

const Home: NextPage = () => (
    <Layout>
        <Hero />
        <About />
        <Services />
        <Footer />
    </Layout>
);

export default Home;
