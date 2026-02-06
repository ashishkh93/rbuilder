import { STONE_HEADER } from "../../../mock/engagement-ring";
import ListPageHeader from "../../common/ListPageHeader";

const StoneHeader = () => {
  return (
    <ListPageHeader
      headerText={STONE_HEADER.headerText}
      subHeaderText={STONE_HEADER.subHeaderText}
      className="mb-4!"
    />
  );
};

export default StoneHeader;
