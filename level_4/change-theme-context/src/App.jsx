import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Main from './components/Main';
import ThemeProvider from './ThemeProvider';

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <Navbar />
        <Main />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
