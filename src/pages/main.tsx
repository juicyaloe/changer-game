import BasicStructure from "../components/structure/basicStructure";
import NewProduct from "../pages-components/main/newProduct";

import TopSlider from "../pages-components/main/topSlider";
import WeeklyBest from "../pages-components/main/weeklyBest";
import Divider from "@mui/material/Divider";

export default function Main() {
  return (
    <BasicStructure>
      <TopSlider />
      <WeeklyBest />
      <Divider sx={{ pt: 3 }} />
      <NewProduct />
    </BasicStructure>
  );
}
