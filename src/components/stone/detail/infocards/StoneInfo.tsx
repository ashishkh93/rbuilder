import StoneInfoHeader from "./StoneInfoHeader";
import StoneInfoGrid from "./StoneInfoGrid";

const StoneInfo = () => {
  return (
    <section className="rb:rounded-3xl rb:bg-secondary rb:p-3">
      <StoneInfoHeader />
      <StoneInfoGrid />
    </section>
  );
};

export default StoneInfo;
