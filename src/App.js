import './App.css';
import Paper from './components/paper';
import React from "react";                                                                                                                                                                   
function App() {
  const printDiv = () => {
    let s = document.getElementById('bbb');
    s.style.display="none";
    window.print();
  }
  return (
    <div className="App">
      <button onClick={printDiv} id="bbb" className="btn btn-info p-3 mt-5">Print Paper</button>
      <Paper/>
    </div>
  );
}

export default App;
