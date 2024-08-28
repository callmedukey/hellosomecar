const Footer = () => {
  return (
    <footer className="bg-primary text-white py-[1.875rem]">
      <div className="bg-primary w-full max-w-screen-8xl mx-auto flex flex-wrap gap-8">
        <p className="text-size-2xl font-bold basis-[27rem] text-center">
          HELLO썸카
        </p>
        <div className="grid md:grid-cols-2 md:divide-x md:divide-y-0 divide-y mx-auto items-center">
          <ul className="space-y-[0.75rem] md:pr-[3rem] md:pb-0 pb-12">
            <li>대표자명: 이운기</li>
            <li>상호: {"(주) 국민상사"}</li>
            <li>사업자등록번호 : 401-86-01171</li>
            <li>연락처 : 1666-4855</li>
            <li>
              주소 : 인천광역시 서구 봉수대로 158, S024호 (가좌동, 엠파크타워) s
            </li>
          </ul>
          <ul className="space-y-[0.75rem] md:pl-[3rem] pt-12 md:pt-0">
            <li>자동차관리사업등록증</li>
            <li>대표자명 : 이운기</li>
            <li>상호 : (주) 국민상사</li>

            <li>사업자등록번호 : 401-86-01171</li>
            <li>연락처 : 1666-4855</li>
            <li>
              주소 : 인천광역시 서구 봉수대로 158, S024호 (가좌동, 엠파크타워)
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
