import { Link, useLocation } from "react-router-dom";
import './style/HeaderStyle.scss'
import { useEffect, useState } from "react";


function Header() {
  const [activeTab, setActiveTab] = useState('홈');
  const location = useLocation();

  const handleClick = (tab) => {
    setActiveTab(tab);
  };

  // 페이지가 처음 로딩될 때 activeTab 상태를 '홈'으로 초기화
  useEffect(() => {
    // Link로 이동할 때 location.pathname을 기반으로 activeTab을 설정
    if (location.pathname === '/') {
      setActiveTab('홈');
    } else if (location.pathname === '/list') {
      setActiveTab('병종');
    } else if (location.pathname === '/map') {
      setActiveTab('지도');
    } else if (location.pathname === '/search') {
      setActiveTab('가문');
    }
  }, [location]);
  // activeTab 상태에 따라 동적으로 클래스를 적용합니다. 
  // 만약 현재 탭이 '홈'이라면 active 클래스를 추가하고, 그렇지 않으면 추가하지 않습니다.
  // 이를 통해 선택된 탭에 대한 스타일이 변경됩니다.

  return (
    <div className="HeaderContainer"  >

      <ul className="Ul" style={{ display: "flex", justifyContent: "" }} >


        <img className="IMG" src="./img/logo/1img.webp" alt="" />





        <li className={`Li ${activeTab === '홈' ? 'active' : ''}`}>
          <Link to="/" className="AStyle" onClick={() => handleClick('홈')}>
            홈
          </Link>
        </li>
        <li className={`Li ${activeTab === '그룹소개' ? 'active' : ''}`}>
          <Link to="/list" className="AStyle" onClick={() => handleClick('그룹소개')}>
            그룹소개
          </Link>
        </li>
        <li className={`Li ${activeTab === '기업지배구조' ? 'active' : ''}`}>
          <Link to="/map" className="AStyle" onClick={() => handleClick('기업지배구조')}>
            기업지배구조
          </Link>
        </li>

        <li className={`Li ${activeTab === 'ESG경영' ? 'active' : ''}`}>
          <Link to="/test1" className="AStyle" onClick={() => handleClick('ESG경영')}>
            ESG경영
          </Link>
        </li>
        <li className={`Li ${activeTab === '투자정보' ? 'active' : ''}`}>
          <Link to="/test2" className="AStyle" onClick={() => handleClick('투자정보')}>
            투자정보
          </Link>
        </li>
        <li className={`Li ${activeTab === 'PR센터' ? 'active' : ''}`}>
          <Link to="/test3" className="AStyle" onClick={() => handleClick('PR센터')}>
            PR센터
          </Link>
        </li>



      </ul>
    </div>
  )
}

export default Header;