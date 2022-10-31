import { SearchSection } from "../style/searchsectionStyle";
import Search_icon from "../../../../resources/img/icon_search.png";

const SearchContent = () => {
  return(
    <SearchSection.SearchFrame>
      <div className="input_box flex flex_jc_c flex_ai_c flex_wrap_no">
        <span className="place_txt flex flex_as_c">www.</span>
        <div className="input_box">
          <input className="flex" type="text" placeholder="등록하실 도메인을 입력해주세요."/>
          <label></label>
        </div>
        <button><img src={Search_icon} alt="검색"/>검색</button>
      </div>
      <div className="link_box flex flex_jc_c flex_ai_c">
        <p>어떤 상품을 고를지 고민되시나요? 나에게 맞는 서비스를 찾아보세요!</p>
      </div>
    </SearchSection.SearchFrame>
  )
}

export default SearchContent;