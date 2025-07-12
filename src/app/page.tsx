
import Content from "./components/Content";
import Editorial from "./components/Editorial";

import News from "./components/News";
import Newswithsidebar from "./components/Newswithsidebar";
import OtherField from "./components/OtherField";
import OtherField2 from "./components/Otherfield2";
import Otherfield3 from "./components/Otherfield3";
import OtherField4 from "./components/OtherField4";
import Photogallery from "./components/Photogallery";

import Subnews from "./components/Subnews";
import Subnews3 from "./components/Subnews3";
import Subnews_2 from "./components/Subnews_2";



export default async function Page() {


  return (
    <div>
      <Content />
      <News/>
      <Subnews />
      <Subnews_2 />
      
      <Subnews3 />
      
      
      <Editorial />
      <Photogallery />
      <OtherField />
      <Newswithsidebar />
      <OtherField2 />
      <Otherfield3 />
      <OtherField4 />
    </div>
  );
}
