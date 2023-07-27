import "./global.css";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Contato } from "./components/contato/Contato";
import { Agentes } from "./components/quemsomos/Agentes";
import { Incorporadoras } from "./components/quemsomos/Incorporadoras";
import { Nossassolucoes } from "./components/quemsomos/Nossassolucoes";
import { Home } from "./components/home/Home";
import { Whatsapp } from "./components/home/Whatsapp";



export default function App() {
  return (
    <div>
      <header>
        <Header/>
      </header>      
        <div>
          <main>
            <Home/>
            <Nossassolucoes/>
            <Incorporadoras/>
            <Agentes/>
            <Contato/>
            <Whatsapp/>
          </main>
        </div>
      <footer>
        <Footer
        />
      </footer>
    </div>
  )
}

