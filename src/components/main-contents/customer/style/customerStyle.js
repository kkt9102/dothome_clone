import styled from "styled-components";

export const CustomerSection = {
  CustomerFrame:styled.div`
    margin-top:5rem; background:#f9f9f9;
    .sc_tit {font-size:3rem; font-weight:600; color:#333333; text-align:center;}
    .sub_txt {width:75%; margin:2rem auto; word-break:keep-all; text-align:center; line-height:1.7;}
    .btn_box {position:relative; max-width:33.5%; margin: 3rem auto 3rem auto;
      button {padding:1.55rem 3.6rem; margin:0 0.7rem; background:#009cff; border-radius:0.3rem; font-size:1.4rem; font-weight:600; color:#ffffff; transition:background 0.3s; white-space: nowrap;
        :hover {background:#007de7; }
      }
    }
    .connection {position:relative; width:100%; padding: 3rem 0 5rem 0; margin:0 auto;
      ::after {content:""; position:absolute; width:100%; height:0.1rem; top:0%; left:0; background:#dddddd;}
      p {text-align: center;}
    }

    // responsive
    @media screen and (max-width:1440px) {
            
    }

    @media screen and (max-width:1200px) {
            
    }

    @media screen and (max-width:991px) {
            
    }
  `
}