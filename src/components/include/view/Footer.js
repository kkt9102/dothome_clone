import { FooterSection } from "../style/footerStyle";
import LinkList from "./LinkList";

import blog_icon from "../../../resources/img/blog_b.png";
import facebook_icon from "../../../resources/img/facebook_f.png";

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
            </div>
            <div className="corp_lab">
              <p>연구소</p>
            </div>
          </div>
        </div>
      </div>
    </FooterSection.FooterFrame>
  )
}

export default Footer;