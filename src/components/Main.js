import { MainSection } from "../resources/styled-component/mainStyle";

import Header from "./include/view/Header";
import SlideSection from "./main-contents/slide/view/SliderSection";
import Login from "./main-contents/login/view/Login";
import SearchContent from "./main-contents/search-section/view/SearchContent";

const Main = () => {
  return(
    <MainSection.MainFrame>
      <Header/>
      <SlideSection/>
      <div className="con">
        <div className="sc_1 flex flex_jc_sb">
          <Login/>
          <SearchContent/>
        </div>
      </div>
    </MainSection.MainFrame>
  )
}

export default Main;