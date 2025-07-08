import Content from "./components/Content";
import Editorial from "./components/Editorial";
import Live from "./components/Live";
import News from "./components/News";
import Newswithsidebar from "./components/Newswithsidebar";
import OtherField from "./components/OtherField";
import OtherField2 from "./components/Otherfield2";
import OtherField3 from "./components/Otherfield3";
import OtherField4 from "./components/OtherField4";


import Photogallery from "./components/Photogallery";
import PuzzlesSection from "./components/PuzzlesSection";
import Qwidget from "./components/Qwidget";

import Subnews from "./components/Subnews";
import Subnews3 from "./components/Subnews3";
import Subnews_2 from "./components/Subnews_2";




export default function Home() {
  return (
    <div>
      <Content/>
      <News/>
      <Subnews/>
      <Subnews_2/>
      <Qwidget/>
      <Subnews3/>
      <Live/>
      <PuzzlesSection/>
      <Editorial/>
      <Photogallery/>
      <OtherField/>
      <Newswithsidebar/>
      <OtherField2/>
      <OtherField3/>
      <OtherField4/>
      
    </div>
  );
}
