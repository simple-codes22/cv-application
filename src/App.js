import './style/App.css';
import General from "./components/General";
import Educational from "./components/Educational";
import Practical from "./components/Practical";
import { useState } from "react";

function App() {
  const [pages] = useState([<General />, <Educational />, <Practical />])
  const [page, setPage] = useState(pages[0])
  
  return (
    <div className="App">
      {page}
      <div className='decisions'>
        {page !== pages[0] ? 
          <button className='btn' onClick={() => {
            setPage(pages[pages.indexOf(page) - 1])
          }}
            >Previous
          </button> 
        : <></>}

        {page !== pages[2] ? 
          <button className='btn' onClick={() => {
            setPage(pages[pages.indexOf(page) + 1])
          }}>Next</button> : 
          <button className='btn'>
            Submit
          </button>
        }
      </div>
    </div>
  );
}

export default App;
