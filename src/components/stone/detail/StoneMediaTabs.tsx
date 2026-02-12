const tabs = ["Diamond", "Video", "Diagram"];

const StoneMediaTabs = () => {
  return (
    <div className="rb:flex rb:gap-4 rb:border-b">
      {tabs.map((tab) => (
        <button
          key={tab}
          className="rb:pb-2 rb:text-sm rb:font-medium rb:text-gray-600 rb:hover:text-black rb:border-b-2 rb:border-transparent rb:hover:border-black"
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default StoneMediaTabs;
