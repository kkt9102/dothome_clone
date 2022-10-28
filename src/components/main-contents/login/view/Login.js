import { LoginSection } from "../style/loginStyle";

const Login = () => {
  return(
    <LoginSection.LoginBox>
      <div className="input_box inline_flex flex_wrap_wrap">
        <div className="input_id flex">
          <input type="text" placeholder="아이디"/>
          <label></label>
        </div>
        <div className="input_pw flex">
          <input type="text" placeholder="비밀번호"/>
          <label></label>
        </div>
      </div>
      <button className="inline_flex">로그인</button>
      <div className="naver_login">
        <span></span>
        <span>네이버 아이디로 로그인</span>
      </div>
    </LoginSection.LoginBox>
  )
}

export default Login;