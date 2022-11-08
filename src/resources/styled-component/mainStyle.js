import styled from "styled-components";

export const MainSection = {
  MainFrame:styled.div`
  * {letter-spacing:-0.1rem; color:#555555;}
    .con {max-width: 117rem; margin:0 auto; padding:6rem 1rem 0 1rem; padding-top:6rem;
      .sc_1 {flex-basis:100%;}
    }
  
    // responsive
    @media screen and (max-width:1440px) {
      .con {max-width:100vw; padding:6rem 10% 0 10%;}
    }
  `
}