import Carosuel from "./components/carosuel/carosuel";
import Footer from "./components/footer/footer";
import Ero from "./components/hero/hero";
import Navigation from "./components/navigation/navigation";
import Value from "./components/value/value";

export default function Home() {
  return (
   <div className="text-2xl bg-black text-white p-7 lg:p-10 lg:text-5xl">
    <Navigation/>
    <Ero/>
    <Value/>
    <Carosuel/>
    <Footer/>
   </div>
      
  
  );
}
