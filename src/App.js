
import "./App.css";
import "./Pages/Style.css"
import { BrowserRouter, Route, Routes} from "react-router-dom"
import Home from "./components/Home"
import Bollywood from "./components/Bollywood";
import Technology from "./components/Technology";
import Fitness from "./components/Fitness";
import Hollywood from "./components/Hollywood";
import Food from "./components/Food";
import Homebox from "./components/Homebox";
import Bollywooddata from "./components/Bollywooddata";
import Bollywooddata2 from "./components/Bollywooddata2";
import Bollywooddata3 from "./components/Bollywooddata3";
import Fooddata from "./components/Fooddata";
import Fooddata1 from "./components/Fooddata1";
import Fooddata2 from "./components/Fooddata2";
import Technologydata from "./components/Technologydata";
import Technologydata2 from "./components/Technologydata2";
import Hollywooddata from "./components/Hollywooddata";
import Hollywooddata2 from "./components/Hollywooddata2";
import Fitnessdata  from "./components/Fitnessdata";
import Fitnessdata2 from "./components/Fitnessdata2";

function App() {
  return (


      <div className="App">
        <BrowserRouter>
          <Home />
          <Routes>
            <Route path="/" element= {<Homebox />} />
            <Route path="/Homebox" element= {<Homebox />} />
            <Route path="/bollywood" element={<Bollywood />} />
            <Route path="/technology" element={<Technology />} />
            <Route path="/hollywood" element={<Hollywood />} />
            <Route path="/fitness" element={<Fitness />} />
            <Route path="/food" element={<Food />} />
            <Route path="/bollywooddata" element={<Bollywooddata />} />
            <Route path="/bollywooddata2" element={<Bollywooddata2 />} />
            <Route path="/bollywooddata3" element={<Bollywooddata3 />} />
            
            <Route path="/technologydata" element={<Technologydata />} />
            <Route path="/technologydata2" element={<Technologydata2 />} />
            <Route path="/hollywooddata" element={<Hollywooddata />} />
            <Route path="/hollywooddata2" element={<Hollywooddata2 />} />
            <Route path="/fitnessdata" element={<Fitnessdata />} />
            <Route path="/fitnessdata2" element={<Fitnessdata2/>}/>
            <Route path="/fooddata" element={<Fooddata />} />
            <Route path="/fooddata1" element={<Fooddata1 />} />
            <Route path="/fooddata2" element={<Fooddata2 />} />



          </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;