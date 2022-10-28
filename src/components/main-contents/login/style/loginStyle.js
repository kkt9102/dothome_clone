import styled from "styled-components";

export const LoginSection = {
  LoginBox:styled.div`
    flex-basis:31.5%; justify-content:space-around; flex-wrap:wrap; padding:1rem; border:0.1rem solid #999999;
    .input_box {flex-basis:70%; max-width: 60%;
      > div {flex-basis:100%;
        input[type="text"] {width:100%; padding:1rem; border-radius:0; border:0.1rem solid #cccccc; outline:none; }
        :last-child {margin-top:0.5rem;}
      }
    }
    button {flex-basis:20%; border:0.1rem solid #cccccc;}
    .naver_login {flex-basis:100%; margin-top:0.5rem; border:0.1rem solid #cccccc;}
  `
}