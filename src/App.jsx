import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./components/layout/Header";
import Main from "./components/homepage/Main";
import NavContoler from "./components/layout/NavContoler";
import Transaction from "./pages/Transaction";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/transaction" element={<Transaction />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
        <NavContoler />
      </Router>
    </>
  );
}

export default App;
