import './App.css';

import './components/Navbar'
import Navbar from './components/Navbar';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  return (
      <div>
          <header>
              <Navbar />
          </header>
          <Main />
          <Footer />
      </div>
  );
}

export default App;
