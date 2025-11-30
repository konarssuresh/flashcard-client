import clsx from "clsx";
import reduce from "lodash/reduce";
import { useFalshCardStore } from "../../../store/flash-card-store";
import IconStatsTotal from "../../../common-components/icons/IconStatsTotal";
import IconStatsMastered from "../../../common-components/icons/IconStatsMastered";
import IconStatsInProgress from "../../../common-components/icons/IconStatsInProgress";
import IconStatsNotStarted from "../../../common-components/icons/IconStatsNotStarted";

const StatisticsCard = ({ title, value, colorClass, icon }) => {
  return (
    <div
      className={clsx(
        "w-full h-30 flex flex-row rounded-md border shadow-md shadow-neutral-900 border-neutral-900 text-neutral-900"
      )}
    >
      <div className={clsx("p-5 flex flex-col h-full w-2/3 justify-between")}>
        <h5 className="text-preset-4">{title}</h5>
        <h4 className="text-preset-1-mobile md:text-preset-1-tab lg:text-preset-1 font-bold">
          {value}
        </h4>
      </div>
      <div
        className={clsx(
          "w-1/3 border-l border-neutral-900 flex items-center justify-center",
          colorClass
        )}
      >
        {icon}
      </div>
    </div>
  );
};

const Statistics = ({ cards }) => {
  const { flashCards } = useFalshCardStore();

  let displayCards = flashCards.filter((card) => cards?.includes(card.id));

  const totalCards = displayCards.length;
  const masteredCards = reduce(
    displayCards,
    (acc, curr) => (acc + curr.knownCount < 5 ? 0 : 1),
    0
  );

  const inProgressCards = reduce(
    displayCards,
    (acc, curr) => acc + (curr.knownCount > 0 && curr.knownCount < 5 ? 1 : 0),
    0
  );

  const notStartedCards = reduce(
    displayCards,
    (acc, curr) => acc + (curr.knownCount === 0 ? 1 : 0),
    0
  );

  console.log({ totalCards, masteredCards, inProgressCards, notStartedCards });

  return (
    <div
      className={clsx(
        // general container styles
        "bg-neutral-0 text-neutral-900 w-full lg:w-1/3 border border-neutral-900 rounded-xl drop-shadow-xl drop-shadow-neutral-900",
        // spacing
        "px-4 py-5 md:px-5 md:py-4 lg:py-6 lg:px-6"
      )}
    >
      <h4 className="text-preset-2 font-semibold">Study Statistics</h4>
      <div
        className={clsx(
          //mobile grid styles
          "grid grid-rows-4 grid-cols-1 gap-4",
          // tablet grid styles
          "md:grid md:grid-rows-2 md:grid-cols-2 md:gap-5",
          // desktop grid styles
          "lg:grid lg:grid-rows-4 lg:grid-cols-1"
        )}
      >
        <StatisticsCard
          title="Total Cards"
          value={totalCards}
          icon={<IconStatsTotal />}
          colorClass="bg-blue-400"
        />
        <StatisticsCard
          title="Mastered"
          value={masteredCards}
          icon={<IconStatsMastered />}
          colorClass="bg-teal-400"
        />
        <StatisticsCard
          title="In Progress"
          value={inProgressCards}
          icon={<IconStatsInProgress />}
          colorClass="bg-pink-500"
        />
        <StatisticsCard
          title="Not Started"
          value={notStartedCards}
          icon={<IconStatsNotStarted />}
          colorClass="bg-pink-400"
        />
      </div>
    </div>
  );
};

export default Statistics;
