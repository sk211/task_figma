import HeaderIndex from './Components/Header/HeaderIndex';
import FooterIndex from './Components/Footer/FooterIndex';
import OurCustomer from './Components/OurCustomer/OurCustomer';
import './App.css';
import WhatWeDo from './Components/WhatDo/WhatWeDo';
import OurProducts from './Components/OurProducts/OurProducts';
import PricePackages from './Components/PricePackage/PricePackages';
import About from './Components/About/About';
import Portfolio from './Components/Portfolio/Portfolio';
import OurDevs from './Components/OursDevs/OurDevs';
import OurDesing from './Components/OurDesign/OurDesing';
import WorkFlow from './Components/WorkFlow/WorkFlow';


function App() {
  return (
    <div className="App">
     <HeaderIndex />
     <OurCustomer />
     <WhatWeDo />
     <OurProducts />
     <PricePackages />
     <About />
     <Portfolio />
     <OurDevs />
     <OurDesing />
     <WorkFlow />
     <FooterIndex />
 
    </div>
  );
}

export default App;
