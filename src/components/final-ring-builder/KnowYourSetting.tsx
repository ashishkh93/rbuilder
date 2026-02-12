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
    <section className="rb:mt-4 rb:rounded-2xl rb:bg-secondary rb:p-3">
      <SettingSectionHeader />

      <div className="rb:mt-3 rb:grid rb:grid-cols-2 rb:gap-3">
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
