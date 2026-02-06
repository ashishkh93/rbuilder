import {
  WidthCard,
  ApproxTCWCard,
  MetalCard,
  AccentGemsCard,
  ProfileCard,
} from "./SettingCards";
import SettingSectionHeader from "./SettingSectionHeader";

const KnowYourSetting = () => {
  return (
    <section className="mt-4 rounded-2xl bg-secondary p-3">
      <SettingSectionHeader />

      <div className="mt-3 grid grid-cols-2 gap-3">
        <WidthCard />
        <ApproxTCWCard />
        <MetalCard />
        <AccentGemsCard />
        <ProfileCard />
      </div>
    </section>
  );
};

export default KnowYourSetting;
