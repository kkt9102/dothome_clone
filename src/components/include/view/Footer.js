import { FooterSection } from "../style/footerStyle";
import LinkList from "./LinkList";

import blog_icon from "../../../resources/img/blog_b.png";
import facebook_icon from "../../../resources/img/facebook_f.png";

import symble_1 from "../../../resources/img/f-award1.png";
import symble_2 from "../../../resources/img/f-award2.png";
import symble_3 from "../../../resources/img/kisa_logo.png";
import symble_4 from "../../../resources/img/siteSealImage.gif";

import footer_logo_1 from "../../../resources/img/newlogo.png";
import footer_logo_2 from "../../../resources/img/logo_dothome.png"

const Footer = () => {
  return(
    <FooterSection.FooterFrame>
      <div className="con">
        <LinkList/>
      </div>
      <div className="footer_bottom">
        <div className="footer_link">
          <div className="con flex flex_jc_sb">
            <ul className="flex flex_jc_s">
              <li>
                <span>회사소개</span>
              </li>
              <li>
                <span>이용약관</span>
              </li>
              <li>
                <span>개인정보처리방침</span>
              </li>
              <li>
                <span>이메일 무단수집 거부</span>
              </li>
              <li>
                <span>이메일</span>
              </li>
            </ul>
            <ul className="flex flex_jc_e">
              <li>
                <span>
                  <img src={facebook_icon} alt="페이스북 바로가기"/>
                </span>
              </li>
              <li>
                <span>
                  <img src={blog_icon} alt="블로그 바로가기"/>
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="corp_intro">
          <div className="con flex flex_jc_sb">
            <div className="origin_office">
              <p>본사</p>
              <div>애니시큐어 주식회사 | 대표자 목현수 | 성남시 분당구 장미로36 인터넷통신센터 5층 애니시큐어 주식회사</div>
              <div>사업자등록번호 129-81-95578 | 통신판매신고번호 경기성남-2007-281</div>
            </div>
            <div className="corp_lab">
              <p>연구소</p>
              <div>경기도 성남시 분당구 장미로36 인터넷통신센터 5층</div>
              <div>호스팅기술연구소</div>
            </div>
          </div>
          <div className="con symble_section flex flex_jc_e flex_ai_c">
            <div>
              <img src={symble_1} alt=""/>
            </div>
            <div>
              <img src={symble_2} alt=""/>
            </div>
            <div>
              <img src={symble_3} alt=""/>
            </div>
            <div className="global_sign">
              <img src={symble_4} alt=""/>
            </div>
          </div>
          <div className="con copyright flex">
            <p>Copyright ⓒ 2002 - 2022 Anysecure Co., Ltd, All Rights Reserved. <span className="cursor_p">	&#91; 사업자정보확인 &#93;</span></p>
            <div className="w_logo_section">
              <img src={footer_logo_1} alt=""/>
              <img src={footer_logo_2} alt=""/>
            </div>
          </div>
        </div>
      </div>
    </FooterSection.FooterFrame>
  )
}

export default Footer;