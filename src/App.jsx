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

    <>
      <Navbar />
      <VideoBanner />
      <OurSolutions />
      <DevelopersAndInvestors />
      <FinancialAgents />
      <Contact />
      <Footer />
      <ScrollToTopp />
    </>
  )
}