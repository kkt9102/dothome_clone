import styled from "styled-components";

export const HeaderSection = {
  HeaderFrame:styled.nav`
    position:fixed; display: flex; justify-content: space-between; align-items:center; flex-basis:100%; max-width: 100%; width:114rem; height:8rem;
    .left_menu {
      li { cursor: pointer;
        a {font-size:1.8rem; font-weight:600;
          :hover {color:#23527c;}
        }
        span {font-size:1.8rem; font-weight:600;
          :hover {color:#23527c;}
        }
      }
    }
    .right_menu {
      li {
        a {font-size:1.5rem; cursor: pointer;
          :hover {font-weight:600; color:#0070c0; text-decoration:underline;}
        }
        span {font-size:1.5rem; cursor: pointer;
          :hover {font-weight:600; color:#0070c0; text-decoration:underline;}
        }
        &:last-child {font-weight:600; color:#0070c0;}
      }
    }
  `
}