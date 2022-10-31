import styled from "styled-components";

export const FooterSection = {
  FooterFrame:styled.div`
    background: #f3f6f8; border-top:0.1rem solid #dddddd;
    .con {padding:0;}
    .link_list_box {flex-basis:100%; padding:2rem 0;
      ul {flex-basis:100%;
        > li {flex-basis:calc(100%/4); margin-bottom:1.8rem;
          > p {margin-bottom:2rem; font-weight:600; color:#333333;}
          > ul > li {cursor:pointer;
            > span {font-size:1.4rem; font-weight:500;
              :hover {text-decoration:underline;}
            }
          }
        }
      }
    }
    .link_list_box > ul > li:nth-child(-1n + 4) {padding-bottom:2.5rem;}
    .footer_bottom {padding:2rem; background:#434c53;}
  `
}