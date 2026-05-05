import {
  Navbar,
  Hero,
  Sobre,
  Portfolio,
  ComoFunciona,
  Depoimentos,
  Encomendar,
  Contato,
  Footer,
  WhatsAppButton,
} from './components';

function App() {
  return (
    <div className="min-h-screen bg-secondary">
      <Navbar />
      <main>
        <Hero />
        <Sobre />
        <Portfolio />
        <ComoFunciona />
        <Depoimentos />
        <Encomendar />
        <Contato />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
