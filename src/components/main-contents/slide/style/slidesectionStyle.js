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
      > div {height:50rem;}
    }
    .item_1 {background:#f3efec !important;
      > div {max-width:117rem; margin:0 auto; background:url("${Item1}") no-repeat center center;}
    }
    .item_2 {background:#8a70d4 !important;
      > div {max-width:117rem; margin:0 auto; background:url("${Item2}") no-repeat center center;}
    }
    .item_3 {background:#f2f3f7 !important;
      > div {max-width:117rem; margin:0 auto; background:url("${Item3}") no-repeat center center;}
    }
    .item_4 {background:#eed3cc !important;
      > div {max-width:117rem; margin:0 auto; background:url("${Item4}") no-repeat center center;}
    }
    .item_5 {background:#d0e7cf !important;
      > div {max-width:117rem; margin:0 auto; background:url("${Item5}") no-repeat center center;}
    }
  `
}
