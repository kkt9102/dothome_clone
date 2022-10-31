import { LoginSection } from "../style/loginStyle";
import N_logo from "../../../../resources/img/n_logo.png";

const Login = () => {
  return(
      <LoginSection.LoginBox>
        <form>
          <div className="input_box flex">
            <input type="text" placeholder="아이디"/>
            <input type="password" placeholder="비밀번호"/>
          </div>
          <button className="login flex flex_jc_c flex_ai_c">로그인</button>
          <div className="naver_login flex flex_jc_sb flex_ai_c">
            <span className="logo flex flex_jc_c flex_ai_c">
              <img src={N_logo} alt="네이버 로고"/>
            </span>
            <span className="txt">네이버 아이디로 로그인</span>
          </div>
          <div className="check_box">
            <input type="checkbox"/>
            <label>아이디 저장</label>
          </div>
          <div className="btn_box flex flex_jc_sb flex_ai_c">
            <button>아이디 찾기</button>
            <button>비밀번호 찾기</button>
            <button className="regist_btn">회원가입</button>
          </div>
        </form>
        <div className="customer_btn flex flex_jc_c flex_ai_c">기술지원 바로가기</div>
      </LoginSection.LoginBox>
  )
}

export default Login;