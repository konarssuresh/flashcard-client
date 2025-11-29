import MainSectionHeader from "./main-section-header";
import MainSectionContent from "./main-section-content";
import MainSectionFooter from "./main-section-footer";

const MainSection = () => {
  return (
    <div
      className={`bg-neutral-0 text-neutral-900 flex flex-col w-full lg:w-2/3 border border-neutral-900 rounded-xl drop-shadow-xl drop-shadow-neutral-900`}
    >
      <MainSectionHeader />
      <MainSectionContent />
      <MainSectionFooter />
    </div>
  );
};

export default MainSection;
