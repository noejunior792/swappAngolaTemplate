import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Service from './components/Services';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-white">
      <Navbar />
      <main>
        <Hero />
        <Service />
        <About />
        <Contact />
      </main>
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p>© 2024 GlobalSwapAngola. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;