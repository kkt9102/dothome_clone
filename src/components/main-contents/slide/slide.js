import Slider from "react-slick";


import { SlideStlye } from "./style/slidesectionStyle";

const MainSlide = () => {
  const text = [
    {
      text: "홈페이지 제작은",
      bold: "닷홈빌더"
    },
    {
      text: "리눅스 웹호스팅 시작가",
      bold: "50% 할인"
    },
    {
      text: "도메인 신규등록",
      bold: "25% 할인"
    },
    {
      text: "구매로 이어지는",
      bold: "상세페이지"
    },
    {
      text: "GolbalSign 인증서",
      bold: "1개월 추가 제공"
    },
  ]
  const Setting = {
    dots: true,
    infinite: true,
    speed: 1000,
    slideToShow: 1,
    slideToScroll: 1,
    vertical:false,
    arrows:false,
    autoplay:false,
    appendDots: dots => (
      <div className="custom_dots"
      style={{
        position: "relative",
        maxWidth: "117rem",
        width: "117rem",
        height: "6rem",
        top: "-6rem",
        margin: "0 auto",
        background: "none",
        // padding: "1rem"
      }}
    >
      <ul 
      style={{ 
        display: "flex",
        flexBasis: "117rem",
        width: "117rem",
        height: "inherit",
      }}> {dots} </ul>
    </div>
  ),
  customPaging: i => (
    <div
      style={{
        display:"flex",
        flexBasis: "calc(117rem/5)",
        width: "calc(117rem/5)",
        height: "inherit !important",
        color: "blue",
      }}
    >
      {i + 1}
    </div>
    )
  }

  
  return(
      <Slider {...Setting}>
        <div className="items item_1">
          <div className="relative">
            <div className="tit">쉽고 빠른 홈페이지 제작 닷홈빌더</div>
            <div className="sub_tit">다양한 템플릿과 디자인 블럭으로
초보자도 쉽고 빠르게 홈페이지를 만들 수 있습니다.</div>
          </div>
        </div>
        <div className="items item_2">
          <div className="relative">
            <div className="tit">리눅스 웹호스팅 시작가 50% 할인</div>
            <div className="sub_tit">월 이용료 반값 할인으로 더욱 부담없는 인기 웹호스팅입니다.</div>
          </div>
        </div>
        <div className="items item_3">
          <div className="relative">
            <div className="tit">도메인 신규 등록 25% 할인</div>
            <div>할인쿠폰으로 가격부담없이 신규 도메인을 신청해보세요!
(net/org/biz/info/pe.kr 제외)</div>
          </div>
        </div>
        <div className="items item_4">
          <div className="relative">
            <div className="tit">구매로 이어지는 상세페이지</div>
            <div className="sub_tit">오픈마켓 상세페이지는 닷홈 이미지 빌더로 쉽고 간편하게 제작하세요.</div>
          </div>
        </div>
        <div className="items item_5">
          <div className="relative">
            <div className="tit">GlobalSign 인증서 1개월 추가 제공</div>
            <div className="sub_tit">SSL보안인증서를 설치하여 웹사이트를 안전하게 보호하세요.
GlobalSign 인증서 신청 시 1개월을 추가 제공합니다.</div>
          </div>
        </div>
      </Slider>
  )
}

export default MainSlide;