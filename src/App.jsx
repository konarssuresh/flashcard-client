import { Routes, Route, Navigate } from "react-router";
import LogoLarge from "./common-components/icons/LogoLarge";
import LogoSmall from "./common-components/icons/LogoSmall";
import AllCards from "./pages/all-cards/all-cards";
import StudyMode from "./pages/study-mode/study-mode";

import "./App.css";

function App() {
  return (
    <div className="flex flex-col gap-6 lg:gap-8 p-4 md:px-8 md:py-5 lg:px-25 lg:py-6 bg-neutral-100 w-screen min-h-screen">
      <header className="hidden md:flex">
        <LogoLarge />
      </header>
      <header className="flex md:hidden">
        <LogoSmall />
      </header>
      <main>
        <Routes>
          <Route path="/study-mode" element={<StudyMode />} />
          <Route path="/all-cards" element={<AllCards />} />
          <Route path="/" element={<Navigate to="/study-mode" replace />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
