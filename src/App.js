import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Add from "./components/Add";
import Header from "./components/Header";
import Watchlist from "./components/Watchlist";
import Watched from "./components/Watched";
import ContextProvider from "./components/context/GlobalState";

function App() {
  return (
    <>
      <BrowserRouter>
        <ContextProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Watchlist />} />
            <Route path="/watched" element={<Watched />} />
            <Route path="/add" element={<Add />} />
          </Routes>
        </ContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
