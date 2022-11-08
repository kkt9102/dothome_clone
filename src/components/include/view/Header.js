import { useState } from "react";

import { Link } from "react-router-dom";
import { HeaderSection } from "../style/headerStyle";

import Logo from "../../../resources/img/logo.png";

const Header = () => {

  const [moMenu, setMoMenu] = useState(false);

  const onToggleMobileMenu = () => {
    setMoMenu(moMenu => !moMenu);
  }
  return(
    <HeaderSection.HeaderFrame>
      <nav>
        <ul className="left_menu flex flex_jc_sb flex_ai_c">
          <li className="logo_sc">
            <Link to="/">
              <img src={Logo} alt="닷홈 메인으로 바로가기"/>
            </Link>
          </li>
          <li>
            <span>도메인</span>
          </li>
          <li>
            <span>웹호스팅</span>
          </li>
          <li>
            <span>닷홈빌더</span>
          </li>
          <li>
            <span>IDC</span>
          </li>
          <li>
            <span>웹메일</span>
          </li>
          <li>
            <span>보안</span>
          </li>
        </ul>
        <ul className="right_menu flex flex_jc_sb flex_ai_c">
          <li>
            <span>로그인</span>
          </li>
          <li>
            <span>회원가입</span>
          </li>
          <li>
            <span>고객센터</span>
          </li>
          <li>
            <span>마이닷홈</span>
          </li>
        </ul>
        <div className="mobile_menu flex flex_jc_sb flex_ai_c">
          <div className="logo_sc">
            <Link to="/">
              <img src={Logo} alt="닷홈 메인으로 바로가기"/>
            </Link>
          </div>
          <div className={`${moMenu === false ? "" : "active"} mobile_btn relative`} onClick={onToggleMobileMenu}>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <ul className="absolute"></ul>
        </div>
      </nav>
    </HeaderSection.HeaderFrame>
  )
}

export default Header;