import { MainSection } from "../resources/styled-component/mainStyle";

import Header from "./include/view/Header";
import SlideSection from "./main-contents/slide/view/SliderSection";

const Main = () => {
  return(
    <MainSection.MainFrame>
      <Header/>
      <SlideSection/>
      <div className="con">

      </div>
    </MainSection.MainFrame>
  )
}

export default Main;