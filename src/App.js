import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Banner from "./components/banner/Banner";
import Home from "./components/home/Home";
import Process from "./components/process/Process";
import Committee from "./components/committee/Committee";
import Places from "./components/places/Places";
import CallForPaper from "./components/callForPaper/CallForPaper";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Banner />
        <Routes>
          <Route path="/RVTE_Meeting" element={<Home />} />
          <Route path={'/call_for_paper'} element={<CallForPaper />} />
          <Route path={'/process'} element={<Process />} />
          <Route path={'/committee'} element={<Committee />} />
          <Route path={'/places'} element={<Places />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
