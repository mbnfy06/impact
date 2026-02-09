import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import ClientsCarousel from './components/ClientsCarousel';
import ServicesCards from './components/ServicesCards';
import ProcessSection from './components/ProcessSection';
import ContactForm from './components/ContactForm';
import FAQ from './components/FAQ';
import FloatingButton from './components/FloatingButton';

import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <ClientsCarousel />
        <ServicesCards />
        <section className="process-contact">
          <div className="process-contact__container container">
            <ProcessSection />
            <ContactForm />
          </div>
        </section>
        <FAQ />
      </main>
      <Footer />
      <FloatingButton />
    </div>
  );
}

export default App;
