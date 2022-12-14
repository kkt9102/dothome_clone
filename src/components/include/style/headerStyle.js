import styled from "styled-components";

export const HeaderSection = {
  HeaderFrame:styled.div`
    position:fixed; max-width: 100vw; width: 100vw; margin:0 auto; background:#ffffff; border-bottom:0.1rem solid #dddddd; z-index: 20;
    nav {display: flex; justify-content: space-between; align-items:center; flex-basis:100%; width:117rem; height:8rem; padding:0 0.5rem; margin:0 auto;}
    .left_menu {display:flex; align-items: center; height: inherit;
      li {position:relative; display:flex; align-items: center; height: inherit; margin:0 1rem; cursor: pointer;
        a {display:flex; font-size:1.8rem; font-weight:600;}
        span {display:flex; font-size:1.8rem; font-weight:600;}
        :hover {
          a,span {color:#23527c;}
          :not(.logo_sc) {
            ::before {width:50%; opacity:1; transition:opacity 0.1s, width 0.2s;}
            ::after {width:50%; opacity:1; transition:opacity 0.1s, width 0.2s;}
          }
          
        }
        :not(.logo_sc) {
          ::before {content:""; position:absolute; width: 0%; height:0.4rem; top:calc(100% - 0.4rem); left:50%; background:#0070c0; opacity:0; transition:opacity 0.2s 0.1s, width 0.1s 0.1s;}
          ::after {content:""; position:absolute; width: 0%; height:0.4rem; top:calc(100% - 0.4rem); right:50%; background:#0070c0; opacity:0; transition:opacity 0.2s 0.1s, width 0.1s 0.1s;}
        }
        :first-child {padding-right:0.5rem; margin-left:0rem;}
      }
    }
    .right_menu { 
      li {position:relative; height: inherit; 
        a {display:flex; padding:0 1rem; font-size:1.5rem; cursor: pointer;
          :hover {font-weight:600; color:#0070c0; text-decoration:underline;}
        }
        span {display:flex; padding:0 1rem; font-size:1.5rem; cursor: pointer;
          :hover {font-weight:600; color:#0070c0; text-decoration:underline;}
        }
        &:last-child {font-weight:600; 
          span {color:#0070c0;}
        }
        &:not(:last-child)::after {content:""; position:absolute; width:0.1rem; height:1rem; top:25%; right:0; background:#999999;}
      }
    }
    .mobile_menu {flex-basis:100%;
      .mobile_btn {flex-basis:3rem; height:2rem;
        div {position:absolute; width:100%; height:0.3rem; border-radius:0.3rem; background:#333333; transition: transform 0.2s;
          :first-child {top:5%;}
          :nth-child(2) {top:50%;}
          :last-child {top:95%;}
        }
        &.active {
          div {
            :first-child {top:50%; transform:rotate(45deg);}
            :nth-child(2) {display:none;}
            :last-child {top:50%; transform:rotate(-225deg);}
            }
          }
      }
      ul {}
    }
    // responsive
    @media screen and (max-width:1440px) {
      max-width: 100%; width: 100%; padding:0 10%;
      nav {width:100%;}
    }

    @media screen and (max-width:1200px) {
      padding:0 2rem;
    }

    @media screen and (max-width:992px) {
      nav {height:6.4rem;}
      .left_menu,.right_menu {display:none;}
    }
  `
}