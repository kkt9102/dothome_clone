import { CustomerSection } from "../style/customerStyle";

const Customer = () => {
  return(
    <CustomerSection.CustomerFrame>
      <div className="con flex flex_jc_c flex_dir_c">
        <p className="sc_tit">문의사항이 있으신가요?</p>
        <div className="sub_txt">닷홈에서 제공하는 서비스에 대하여 궁금한 사항이나 도움이 필요한 경우 전문 상담팀의 기술 지원을 제공해드리고 있습니다.
        문의에 대한 답변은 고객센터 운영 시간 내 받아보실 수 있으며, 긴급 장애의 경우 24시간 운영하고 있습니다.</div>
        <div className="btn_box flex flex_jc_sa">
          <button>1:1 문의하기</button>
          <button>자주묻는 질문과 답변</button>
        </div>
        <div className="connection">
          <p>
            <span>일반문의 : </span>
            <span>09:30 ~ 17:30(주말,공휴일 제외)</span>
            <span>장애문의 : </span>
            <span>24시간 운영</span>
          </p>
        </div>
      </div>
    </CustomerSection.CustomerFrame>
  )
}

export default Customer;