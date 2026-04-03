import logo from './logo.svg';
import './App.css';

function App() {

  const handleNameChange = () => {
    const name = ['akshay', 'atul', 'arvind', 'panda', 'vighnesh'];
    const randomName = Math.floor(Math.random() *name.length);
    return name[randomName];
  }


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello {handleNameChange()} !
        </p>
         
      </header>
    </div>
  );
}

export default App;
