import Navbar from './component/Navbar.jsx';	
import './App.css';
import Footer from './component/Footer.jsx';
import TableBody from './component/TableBody.jsx';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
        <TableBody/>
        <Footer/>

      </header>
    </div>
  );
}

export default App;
