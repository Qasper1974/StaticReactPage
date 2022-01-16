import './components/Navbar'

import styles from './App.module.css';

import Navbar from './components/Navbar';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  return (
      <div className={styles.container}>
        <Navbar />
        <Main />
        <Footer />
      </div>
  );
}

export default App;
