import styled from "styled-components";
import Item1 from "../../../../resources/img/main_slide_01.png";
import Item2 from "../../../../resources/img/main_slide_02.png";
import Item3 from "../../../../resources/img/main_slide_03.png";
import Item4 from "../../../../resources/img/main_slide_04.png";
import Item5 from "../../../../resources/img/main_slide_05.png";

export const SlideStlye = {
  SliderView:styled.div`
    padding-top:8rem;
    .items {height:50rem; 
      > div {height:50rem;
        .tit {margin-top:10rem; font-size:4rem; font-weight:900; color:#000000;}
        .sub_tit {margin-top:1.5rem; font-size:2rem; word-break:keep-all;}
      }
    }
    .item_1 {background-color:#f3efec !important; background:url("${Item1}") no-repeat center center;
      > div {max-width:117rem; margin:0 auto;}
    }
    .item_2 {background-color:#8a70d4 !important; background:url("${Item2}") no-repeat center center;
      > div {max-width:117rem; margin:0 auto;}
    }
    .item_3 {background-color:#f2f3f7 !important; background:url("${Item3}") no-repeat center center;
      > div {max-width:117rem; margin:0 auto;}
    }
    .item_4 {background-color:#eed3cc !important; background:url("${Item4}") no-repeat center center;
      > div {max-width:117rem; margin:0 auto;}
    }
    .item_5 {background-color:#d0e7cf !important; background:url("${Item5}") no-repeat center center;
      > div {max-width:117rem; margin:0 auto;}
    }
    .slick-dots {
      ul {border:0.1rem solid #dddddd; box-shadow: 0rem 0rem 0.5rem #999999; border-top-left-radius:0.8rem; border-top-right-radius:0.8rem; overflow:hidden;
        li {flex-basis:calc(100%/5) !important; height:inherit !important; margin:0 !important; background:#ffffff; 
          :first-child { border-top-left-radius:0.5rem;}
          :last-child { border-top-right-radius:0.5rem;}
          :nth-child(2n + 2) {background:#dddddd;}
          div { height:inherit !important;}

        }
      }
    }
  `
}
