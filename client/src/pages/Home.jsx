import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import QuoteForm from "../components/QuoteForm";
import Services from "../components/Services";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <QuoteForm />
      <Services />
      <Footer />
    </>
  );
}
