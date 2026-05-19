import {
  Navbar,
  Hero,
  Sobre,
  Portfolio,
  ComoFunciona,
  Depoimentos,
  Encomendar,
  Footer,
  WhatsAppButton,
  MouseTrail,
  SparkleButton,
} from './components';

function App() {
  return (
    <div className="min-h-screen bg-surface">
      <MouseTrail />
      <Navbar />
      <main>
        <Hero />
        <Sobre />
        <Portfolio />
        <ComoFunciona />
        <Depoimentos />
        <Encomendar />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
