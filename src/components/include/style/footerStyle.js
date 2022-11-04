import styled from "styled-components";

export const FooterSection = {
  FooterFrame:styled.div`
    background: #f3f6f8; border-top:0.1rem solid #dddddd;
    .con {padding:0 0.9rem 0 1.5rem; }
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
    .footer_bottom {padding:1rem; background:#434c53;
      .footer_link {padding-bottom:0.5rem; border-bottom:0.1rem solid #535353; 
        .con {
          ul {
            li {margin-right:2.5rem;
              span {font-size:1.2rem; color:#dddddd;}
            }
            &:first-child {
              li:nth-child(3) {
                span {font-weight:600; color:#ffffff;}
              }
            }
            &:last-child {
              li {margin-right:0;
                :first-child {margin-right:2rem;}
              }
            }
          }
        }
      }
      .corp_intro {margin-top:3rem;
        * {font-size:1.2rem; color:#ffffff;}
        .origin_office {flex-basis:68%;
          * {margin-bottom:1.2rem;}
          p {font-weight:600;}
        }
        .corp_lab {flex-basis:32%;
          * {margin-bottom:1.2rem;}
          p {font-weight:600;}
        }
      }
      .symble_section {
        div {margin-left:0.3rem;
          img {max-width:5.1rem;}
          &.global_sign {
            img {max-width:9.5rem;}
          }
        }
      }
      .copyright {padding-bottom:2rem;
        copyright {margin-right:10%; letter-spacing:-0.12rem;}
        .w_logo_section {
          img:first-child {margin-right:0.5rem;}
        }
      }
    }
  `
}