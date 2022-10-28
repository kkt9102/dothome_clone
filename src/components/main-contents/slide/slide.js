import Slider from "react-slick";


import { SlideStlye } from "./style/slidesectionStyle";

const MainSlide = () => {

  const Setting = {
    dots: true,
    infinite: true,
    speed: 700,
    slideToShow: 1,
    slideToScroll: 1,
    vertical:false,
    arrows:false,
    autoplay:false
    
  }
  return(
      <Slider {...Setting}>
        <div className="items item_1">
          <div className="relative"></div>
        </div>
        <div className="items item_2">
          <div className="relative"></div>
        </div>
        <div className="items item_3">
          <div className="relative"></div>
        </div>
        <div className="items item_4">
          <div className="relative"></div>
        </div>
        <div className="items item_5">
          <div className="relative"></div>
        </div>
      </Slider>
  )
}

export default MainSlide;