import styled from "styled-components";

export const LoginSection = {
  LoginBox:styled.div`
  display:flex; flex-direction:column; flex-flow:wrap; flex-basis:32%;
    form{
      display:flex; flex-direction:column; flex-flow:wrap; flex-basis:100%; justify-content:space-between; padding:1.5rem 1.5rem 0 1.5rem; border:0.1rem solid #dddddd;
      * {margin-bottom:0.5rem;}
      .input_box {display:flex; max-width:62.3%; flex-direction:column; padding:0; 
        input {display:flex; flex-basis:100%; padding:0.55rem 1rem; border-radius:0; border:0.1rem solid #bbbbbb; font-size:1.6rem; line-height: 2.5rem; transition: border 0.3s, box-shadow 0.3s;
          ::placeholder {font-size:1.6rem; color:#999999; letter-spacing:-0.1rem;}
          :focus {outline:none; border-color:#009cff; box-shadow: 0rem 0rem 0.5rem rgba(0, 156, 255,0.5);}
        }
      }
      .login {flex-basis:36%; height:8.1rem; outline:0.1rem solid #bbbbbb; background:#009cff; font-size:1.6rem; font-weight:700; color:#ffffff; 
        :hover {background:#007de7;}
      }
      .naver_login {flex-basis:100%; padding:0.9rem 0rem; border:0.1rem solid #bbbbbb; cursor:pointer;
        .logo {padding:0 1rem; position:relative;
          ::before {content:""; position:absolute; width:0.1rem; height:2rem; top:0%; right:0; background:#dddddd;}
          img {margin-bottom:-0.5rem;}
        }
        .txt {flex-basis:90%; margin-bottom:0; font-size:1.4rem; color:#777777; text-align:center; letter-spacing:-0.1rem;}
      }
      .check_box {position:relative; flex-basis:100%; padding-bottom:0.5rem; margin-bottom:1.5rem;
        ::after {content:""; position:absolute; width:100%; height:0.1rem; top:100%; left:0; background:#dddddd;}
        label {font-size:1.3rem;}
      }
      .btn_box {flex-basis:100%; padding:0 3.5rem 0.5rem 3.5rem; font-size:1.3rem;
        button {position:relative; flex-basis:calc(100%/3); max-width: calc(100%/3);
          :not(:first-child)::after {content:""; position:absolute; width:0.1rem; height:1.3rem; top:25%; left:0; background:#dddddd;}
          &.regist_btn {font-weight:600; color:#0070c0;}
        }
      }
    }
    .customer_btn {flex-basis:100%; padding:1.45rem; background:#434c53; color:#ffffff; letter-spacing:0.1rem; cursor:pointer;}
  // responsive
  @media screen and (max-width:991px) {
    flex-basis:100%;
    form {
      .input_box {max-width:100%; flex-basis:60%;}
    }
    .customer_btn {margin-bottom:2rem;}
  }
  `
}