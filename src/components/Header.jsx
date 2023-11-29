import { Link, useLocation } from "react-router-dom";
import './style/HeaderStyle.scss';
import { useEffect, useState } from "react";

function Header() {
  const [activeTab, setActiveTab] = useState('');
  const location = useLocation();

  const handleClick = (tab) => {
    setActiveTab(tab);
  };

 

  return (
    <div className="HeaderContainer">
      <ul className="Ul menu-item" style={{ display: "flex", justifyContent: "" }}>
        <a href="/" aria-label="하나금융그룹" title="홈으로" className="bth-home">
          <h1 className="blind" style={{ width: "100%" }}>하나금융그룹</h1>
        </a>
        <div>
          <br />
        </div>
        <li className={`Li ${activeTab === '그룹소개' ? 'active' : ''}`}>
          <Link to="/test4" className="AStyle" onClick={() => handleClick('그룹소개')}>
            그룹소개
             {/* 서브메뉴 시작 */}
             <ul className="submenu">
              <li><Link to="/submenu5">서브메뉴</Link></li>
              <li><Link to="/submenu6">서브메뉴</Link></li>
              <li><Link to="/submenu7">서브메뉴</Link></li>
              <li><Link to="/submenu8">서브메뉴</Link></li>
        
            </ul>
          </Link>
        </li>
        <li className={`Li ${activeTab === '기업지배구조' ? 'active' : ''}`}>
          <Link to="/test4" className="AStyle" onClick={() => handleClick('기업지배구조')}>
            기업지배구조
             {/* 서브메뉴 시작 */}
             <ul className="submenu">
              <li><Link to="/submenu5">서브메뉴</Link></li>
              <li><Link to="/submenu6">서브메뉴</Link></li>
              <li><Link to="/submenu7">서브메뉴</Link></li>
              <li><Link to="/submenu8">서브메뉴</Link></li>
        
            </ul>
          </Link>
        </li>
        <li className={`Li ${activeTab === 'ESG경영' ? 'active' : ''}`}>
          <Link to="/test1" className="AStyle" onClick={() => handleClick('ESG경영')}>
            ESG경영
             {/* 서브메뉴 시작 */}
             <ul className="submenu">
              <li><Link to="/submenu5">서브메뉴</Link></li>
              <li><Link to="/submenu6">서브메뉴</Link></li>
              <li><Link to="/submenu7">서브메뉴</Link></li>
              <li><Link to="/submenu8">서브메뉴</Link></li>
        
            </ul>
          </Link>
        </li>
        <li className={`Li ${activeTab === '투자정보' ? 'active' : ''}`}>
          <Link to="/test2" className="AStyle" onClick={() => handleClick('투자정보')}>
            투자정보
             {/* 서브메뉴 시작 */}
             <ul className="submenu">
              <li><Link to="/submenu5">서브메뉴</Link></li>
              <li><Link to="/submenu6">서브메뉴</Link></li>
              <li><Link to="/submenu7">서브메뉴</Link></li>
              <li><Link to="/submenu8">서브메뉴</Link></li>
        
            </ul>
          </Link>
        </li>
        <li className={`Li ${activeTab === 'PR센터' ? 'active' : ''}`}>
          <Link to="/test3" className="AStyle" onClick={() => handleClick('PR센터')}>
            PR센터
             {/* 서브메뉴 시작 */}
             <ul className="submenu">
              <li><Link to="/submenu5">서브메뉴</Link></li>
              <br />
              <li><Link to="/submenu6">서브메뉴</Link></li>
              <li><Link to="/submenu7">서브메뉴</Link></li>
              <li><Link to="/submenu8">서브메뉴</Link></li>
        
            </ul>
          </Link>
        </li>
        
      </ul>
    </div>
  );
}

export default Header;
