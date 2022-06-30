import { About } from "@/components/about/about";
import { CTA } from "@/components/cta/cta";
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
    <CTA />
    <Footer />
  </Layout>
);

export default Home;
