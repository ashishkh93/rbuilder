const tabs = ["Diamond", "Video", "Diagram"];

const StoneMediaTabs = () => {
  return (
    <div className="flex gap-4 border-b">
      {tabs.map((tab) => (
        <button
          key={tab}
          className="pb-2 text-sm font-medium text-gray-600 hover:text-black border-b-2 border-transparent hover:border-black"
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default StoneMediaTabs;
