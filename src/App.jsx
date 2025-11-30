import {
  Routes,
  Route,
  Navigate,
  useNavigate,
  useLocation,
} from "react-router";
import clsx from "clsx";
import LogoLarge from "./common-components/icons/LogoLarge";
import LogoSmall from "./common-components/icons/LogoSmall";
import AllCards from "./pages/all-cards/all-cards";
import StudyMode from "./pages/study-mode/study-mode";
import Button from "./common-components/button";

import "./App.css";

const ModeToggle = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const goToStudyMode = () => {
    navigate("/study-mode");
  };
  const goToAllCards = () => {
    navigate("/all-cards");
  };

  return (
    <div className="flex bg-neutral-0 flex-row rounded-full gap-2 p-1 border border-neutral-900">
      <Button
        shadow={false}
        variant={location.pathname === "/study-mode" ? "primary" : "tertiary"}
        className={clsx({ "border-none": location.pathname !== "/study-mode" })}
        onClick={goToStudyMode}
      >
        Study Mode
      </Button>
      <Button
        shadow={false}
        variant={location.pathname === "/all-cards" ? "primary" : "tertiary"}
        className={clsx({
          "border-none": location.pathname !== "/all-cards",
          "drop-shadow-none": true,
        })}
        onClick={goToAllCards}
      >
        All Cards
      </Button>
    </div>
  );
};

function App() {
  return (
    <div className="flex flex-col gap-6 lg:gap-8 p-4 md:px-8 md:py-5 lg:px-25 lg:py-6 bg-neutral-100 w-screen min-h-screen">
      <header className="hidden md:flex justify-between items-center">
        <LogoLarge />
        <ModeToggle />
      </header>
      <header className="flex md:hidden flex-row justify-between items-center">
        <LogoSmall />
        <ModeToggle />
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
