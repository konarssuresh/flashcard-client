import MainSection from "./main-section/main-section";
import Statistics from "./statistics/statistics";

const StudyMode = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
      <MainSection />
      <Statistics />
    </div>
  );
};

export default StudyMode;
