import './style/FooterStyle.scss'


function Footer() {
  return (

    <div className='FooterContainer' style={{ background: "#111" }}>
      
      <div className='FooterContent'>
        <div className='FooterLinkContainer'>
          <div className='FooterLinkTitle'>컨커러스 블레이드</div>
        </div>
      
        <br />
      
        <a className='FooterLink' href="https://gall.dcinside.com/mgallery/board/lists?id=cqr">컨커러스 블레이드 갤러리</a>
      </div>

      <div className='FooterDescContainer'>
        <div className='FooterDescRights' style={{ paddingLeft: "50px" }}>© 2023.12 정보수정문의 LA서버 redAP</div>
      </div>

    </div>
    
  )
}

export default Footer;