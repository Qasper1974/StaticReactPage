import './App.css';

import './components/Navbar'
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
      <div>
          <header>
              <Navbar />
          </header>
          <Footer />
      </div>
  );
}

export default App;
