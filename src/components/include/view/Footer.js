import { FooterSection } from "../style/footerStyle";
import LinkList from "./LinkList";

const Footer = () => {
  return(
    <FooterSection.FooterFrame>
      <div className="con">
        <LinkList/>
      </div>
    </FooterSection.FooterFrame>
  )
}

export default Footer;