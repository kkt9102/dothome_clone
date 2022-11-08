import styled from "styled-components";
import Item1 from "../../../../resources/img/main_slide_01.png";
import Item2 from "../../../../resources/img/main_slide_02.png";
import Item3 from "../../../../resources/img/main_slide_03.png";
import Item4 from "../../../../resources/img/main_slide_04.png";
import Item5 from "../../../../resources/img/main_slide_05.png";

export const SlideStlye = {
  SliderView:styled.div`
    /* padding-top:8rem; */
    transform: translateY(8rem);
    .items {height:50rem; 
      > div {height:50rem;
        .tit {margin-top:10rem; font-size:4rem; font-weight:900; color:#333333; letter-spacing:-0.26rem;}
        .sub_tit {margin-top:1.5rem; font-size:2rem; color:#333333; word-break:keep-all; line-height:3rem;}
        a {width:13rem; height:5rem; margin-top:3.2rem; border:0.1rem solid #333333; font-size:1.6rem; color:#333333; transition:background 0.3s, color 0.3s;
          :hover {background:#ffffff;}
        }
      }
    }
    .item_1 {background-color:#f3efec !important; background:url("${Item1}") no-repeat center center;
      > div {padding:0 1.5rem; max-width:117rem; margin:0 auto;}
    }
    .item_2 {background-color:#8a70d4 !important; background:url("${Item2}") no-repeat center center;
      > div {max-width:117rem; margin:0 auto;
        .tit,.sub_tit {color:#ffffff;}
        a {border-color:#ffffff; color:#ffffff;
          :hover {color:#333333;}
        }
      }
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
    .slick-dots {position:relative; max-width:120rem; width:120rem; height:6rem; top:-6.1rem; margin:0 auto; background:none;
      ul {display:flex; flex-basis:100%; width:100%; height:inherit; box-shadow: 0rem 0rem 0.5rem #999999; border-top-left-radius:0.8rem; border-top-right-radius:0.8rem; overflow:hidden;
        li {flex-basis:calc(100%/5) !important; height:inherit !important; margin:0 !important; background:#ffffff; 
          :first-child { border-top-left-radius:0.5rem;
            &.slick-active {background:#ffa200; border-color:#ffa200;}
          }
          :last-child { border-top-right-radius:0.5rem;}
          :nth-child(2n + 2) {background:#dddddd;}
          div { height:inherit !important;
            .dots_txt {font-size:1.3rem;
            &.bold {margin-left:0.5rem; font-weight:600;}
            }
          }
          &.slick-active  {background:#0070c0;
            .dots_txt {font-size:1.5rem; font-weight:600; color:#ffffff;}
          }
        }
      }
      ::after {content:""; position:absolute; top:calc(100% + 0.1rem); left:0; width:100%; height:0.5rem; background:#ffffff;}
    }
    // responsive
    @media screen and (max-width:1440px) {
      .items {
        > div {padding:0 10%;
          .tit {width:60%; word-break:keep-all;}
        }
      }
      .slick-dots {width:100% !important;
        ul {max-width:100% !important;}
      }
    }
  `
}
