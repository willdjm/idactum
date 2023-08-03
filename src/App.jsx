import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { ScrollToTopp } from "./components/ScrollToTopp";
import { Contact } from "../src/components/pages/Contact";
import { VideoBanner } from "./components/VideoBanner";
import { FinancialAgents } from "../src/components/pages/FinancialAgents";
import { DevelopersAndInvestors } from "../src/components/pages/DevelopersAndInvestors";
import { OurSolutions } from "../src/components/pages/OurSolutions";
import "./global.css";

export default function App() {

  return (

    <main className="p-1 md:p-1">
      <div className='flex flex-col justify-center items-center pt-5 md:pt-5 px-5'>
        <Navbar />
      </div>
      <VideoBanner />
       <div className='flex flex-col justify-center items-center bg-gray-500'>
        <OurSolutions />
      </div> 
      <div id="DevelopersAndInvestors" className='flex flex-col justify-center items-center md:pt-20 text-gray-500'>
        <DevelopersAndInvestors />
      </div>
     <div id="FinancialAgents" className='flex flex-col justify-center items-center bg-green-500 text-gray-500'>
        <FinancialAgents />
      </div>
      <div className='flex flex-col justify-center items-center py-36'>
        <Contact />
      </div>
      <footer className='flex flex-col justify-center items-center md:p-20 bg-gradient-to-b from-gray-500 bg-green-500 text-white '>
        <Footer />
      </footer>
      <ScrollToTopp /> 
    </main>
  )
}