import './App.css';
import Footer from './components/footer';
import Tag from './components/tag';
import Thumb from './components/thumb';
import Home from './pages/Home';

function App() {
  return (
    <div>
      <Home />
      <Tag />
      <Thumb />

      <Footer />


    </div>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
