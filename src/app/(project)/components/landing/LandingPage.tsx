import Head from "next/head";
import HeroSection from "./HeroSection";
import FeaturesSection from "./FeaturesSection";
import HowItWorksSection from "./HowItWorks";
import Footer from "./Footer";
import PricingTeaserSection from "./PriceTeaserSection";

export function LandingPage(){
  return (
    <div>
      <Head>
        {/* SEO Otimization */}
        <title>Extrator de PDF para Excel, Imagens e Word | Seu Micro SaaS</title>
        <meta
          name="description"
          content="Extraia facilmente tabelas, imagens e textos de arquivos PDF. Converta PDF para Excel, JPG/PNG e DOCX online. Experimente gratuitamente!"
        />
        {/* Add more meta tags as needed: keywords, Open Graph, etc. */}
        <link rel="icon" href="/favicon.ico" /> {/* Certifique-se que o favicon existe */}
      </Head>

      {/* Inclua um Header/Navbar aqui se você tiver um componente separado */}
      {/* <Navbar /> */}

      <main>
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <PricingTeaserSection />
        {/* Você pode adicionar mais seções aqui, como Testemunhos, FAQs, etc. */}
      </main>

      <Footer />
    </div>
  );
};

export default LandingPage;