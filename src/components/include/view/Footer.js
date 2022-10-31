import { FooterSection } from "../style/footerStyle";
import LinkList from "./LinkList";

const Footer = () => {
  return(
    <FooterSection.FooterFrame>
      <div className="con">
        <LinkList/>
      </div>
      <div className="footer_bottom">
        <div className="con"></div>
      </div>
    </FooterSection.FooterFrame>
  )
}

export default Footer;