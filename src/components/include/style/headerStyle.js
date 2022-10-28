import styled from "styled-components";

export const HeaderSection = {
  HeaderFrame:styled.nav`
    position:fixed; display: flex; justify-content: space-between; align-items:center; flex-basis:100%; max-width: 100%; width:114rem; height:8rem;
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
          ::before {content:""; position:absolute; width: 0%; height:0.4rem; top:calc(100% - 0.1rem); left:50%; background:#0070c0; opacity:0; transition:opacity 0.1s, width 0.1s 0.1s;}
          ::after {content:""; position:absolute; width: 0%; height:0.4rem; top:calc(100% - 0.1rem); right:50%; background:#0070c0; opacity:0; transition:opacity 0.1s, width 0.1s 0.1s;}
        }
        
      }
    }
    .right_menu { 
      li { height: inherit;
        a {display:flex; font-size:1.5rem; cursor: pointer;
          :hover {font-weight:600; color:#0070c0; text-decoration:underline;}
        }
        span {display:flex; font-size:1.5rem; cursor: pointer;
          :hover {font-weight:600; color:#0070c0; text-decoration:underline;}
        }
        &:last-child {font-weight:600; color:#0070c0;}
      }
    }

  `
}