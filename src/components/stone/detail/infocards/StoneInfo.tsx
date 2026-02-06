import StoneInfoHeader from "./StoneInfoHeader";
import StoneInfoGrid from "./StoneInfoGrid";

const StoneInfo = () => {
  return (
    <section className="mt-8 rounded-3xl bg-secondary p-3">
      <StoneInfoHeader />
      <StoneInfoGrid />
    </section>
  );
};

export default StoneInfo;
