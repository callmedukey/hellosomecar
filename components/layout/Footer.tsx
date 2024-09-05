const Footer = () => {
  return (
    <footer className="bg-primary text-white py-[1.875rem]">
      <div className="bg-primary w-full max-w-screen-8xl mx-auto flex flex-wrap gap-8">
        <p className="lg:text-size-2xl text-[1.75rem] font-bold basis-[27rem] text-center">
          HELLO썸카
        </p>
        <div className="grid md:grid-cols-2 md:divide-x md:divide-y-0 divide-y mx-auto items-center">
          <ul className="md:pr-[3rem] md:pb-0 pb-12 text-[0.9rem] tracking-normal">
            <li>대표자명: 이운기</li>
            <li>상호: {"(주) 국민상사"}</li>
            <li>사업자등록번호 : 401-86-01171</li>
            <li>연락처 : 1666-4855</li>
            <li>
              주소 : 인천광역시 서구 봉수대로 158, S024호 (가좌동, 엠파크타워)
            </li>
          </ul>
          <ul className="md:pl-[3rem] pt-12 md:pt-0 text-[0.9rem] tracking-normal">
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
      <span className="text-xs mt-4 text-center mx-auto block col-span-full tracking-normal font-medium text-primary-gray">
        Copyright ⓒ 헬로썸카. All rights reserved
      </span>
    </footer>
  );
};

export default Footer;
