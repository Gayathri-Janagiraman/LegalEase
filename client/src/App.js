// import FeatureBoxes from "./components/FeatureBoxes";
// import Footer from "./components/Footer";
// import Hero from "./components/Hero";
// import Navbar from "./components/Navbar";
// import BrowseLaws from "./pages/BrowseLaws";
// import { Route } from "react-router-dom";


// function App() {
//   return (
//     <div>
//       <Navbar />
//       <Hero />
//       <FeatureBoxes/>
//       <Footer/>
//       <Route path="/laws" element={<BrowseLaws/>} /> 
//     </div>
//   );
// }

// export default App;


import { Routes, Route } from "react-router-dom";
import FeatureBoxes from "./components/FeatureBoxes";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import BrowseLaws from "./pages/BrowseLaws";
import AskAI from "./pages/AskAI";
import DownloadTemplates from "./pages/DownloadTemplates";
import Suggestions from "./pages/Suggestions";
import About from "./components/About";
import LawCategoryPage from "./pages/LawCategoryPage";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero/>
              <FeatureBoxes/>
              <Footer/>
            </>
          }
        />
        <Route path="/laws" element={<BrowseLaws />} />
        <Route path="/ask-ai" element={<AskAI />} />
        <Route path="/templates" element={<DownloadTemplates />} />
        <Route path="/suggestions"element={<Suggestions/>}/>
        <Route path="/about"element={<About/>}/>
        <Route path="/laws/:categoryId" element={<LawCategoryPage />} />
      </Routes>
    </>
  );
}
export default App;
