import styled from "styled-components";
import effect_bg from "../../../../resources/img/find-service.png";

export const SearchSection = {
  SearchFrame:styled.div`
    display:flex; flex-basis:65%; flex-direction: column; justify-content: space-between;
    * {flex-basis:100%;}
    .input_box {flex-basis:7.4rem; border:0.1rem solid #dddddd; width:100%;
      > * {height:100%;}
      .place_txt {flex-basis:10%; align-self:center; padding:0 2rem; font-size:3rem; font-weight:900; color:#333333; line-height:6.5rem;}
      .input_box { flex-basis:80%; border:none; outline:none;
        input {width:100%; border:none; outline:none; font-size:1.6rem;
        ::placeholder {font-size:1.6rem; color:#bbbbbb;}
        :focus {border:none; outline:none;}
        }
      }
      button {flex-basis:100%; max-width:12rem; height:100%; background:#009cff; font-size:2rem; font-weight:600; color:#ffffff; line-height:6.5rem; transition:background 0.3s;
        img {align-self:center; margin-right:0.3rem; transform:translateY(0.5rem);}
        :hover {background:#007de7;}
      }
    }
    .link_box {flex-basis:17.4rem; background:#e1f5ff url("${effect_bg}"); cursor:pointer;
      p {flex-basis:55%; font-size:2.4rem; word-break:keep-all; text-align:center;}
    }
  `
}