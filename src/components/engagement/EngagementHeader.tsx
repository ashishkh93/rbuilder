import { ENG_RING_HEADER } from "../../mock/engagement-ring";
import ListPageHeader from "../common/ListPageHeader";

const EngagementHeader = () => {
  return (
    <ListPageHeader
      headerText={ENG_RING_HEADER.headerText}
      subHeaderText={ENG_RING_HEADER.subHeaderText}
    />
  );
};

export default EngagementHeader;
