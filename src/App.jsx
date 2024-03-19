
import './App.css'
import { PriceOptions } from './PriceOptions/PriceOptions';
import { LineChart } from './components/LineChart/LineChart';
// import { DaisyNav } from './components/DaisyNav/DaisyNav'
import { Navbar } from "./components/Navbar/Navbar";
import { Phones } from './components/Phones/Phones';

function App() {


  return (
    <>
     {/* <DaisyNav></DaisyNav> */}
     <Navbar></Navbar>
      <PriceOptions></PriceOptions>
      <LineChart></LineChart>
      <Phones></Phones>
    </>
  )
}

export default App
