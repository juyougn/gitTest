// 메인 scss
import './News.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

function News() {
    const arrowRight = <FontAwesomeIcon icon={faArrowRight} />
    return (
        <div className='newsContainer'>
            <div className='newsTitle'>
                <h2 className='c-fs30 Pretendard-Bold'>하나소식</h2>
                <a className='c-fs14 Pretendard-Regular' href="/#">More {arrowRight}</a>
            </div>
            <div className='newsContents'>
                <div className='contentWrap'>
                    <div className="imgWrap c-mt30">
                        <img src="https://www.hanafn.com:8002/upload/common/upeditor/10000084/20231127//20231127084435581.jpg" sizes='cover' alt="" />
                    </div>
                    <div className='contentTextWrap c-mt24'>
                        <div>
                            <span className='hanaNews c-mt4 c-px8 c-fs12 Pretendard-Bold'>
                                하나뉴스
                            </span>
                        </div>
                        <p className='c-style c-mt12 Pretendard-SemiBold'>하나캐피탈, 토스페이먼츠와 공급망 금융 및 전자결제 활성화를 위한 업무협약 체결</p>
                        <p className='c-fs14 Pretendard-Regular c-date c-mt29'>2023.11.24</p>
                    </div>
                </div>
                <div className='contentWrap c-ms40'>
                    <div className="imgWrap c-mt30">
                        <img src="https://www.hanafn.com:8002/upload/common/upeditor/10000084/20231124//20231124014837741.jpg" sizes='cover' alt="" />
                    </div>
                    <div className='contentTextWrap c-mt24'>
                        <div>
                            <span className='hanaNews c-mt4 c-px8 c-fs12 Pretendard-Bold'>
                                하나뉴스
                            </span>
                        </div>
                        <p className='c-style c-mt12 Pretendard-SemiBold'>하나금융그룹, 보성군과 함께 『국공립 초동친구하나어린이집』개원</p>
                        <p className='c-fs14 Pretendard-Regular c-date c-mt29'>2023.11.24</p>
                    </div>
                </div>
                <div className='contentWrap c-ms40'>
                    <div className="imgWrap c-mt30">
                        <img src="https://www.hanafn.com:8002/upload/common/upeditor/10000084/20231124//20231124013650867.jpg" sizes='cover' alt="" />
                    </div>
                    <div className='contentTextWrap c-mt24'>
                        <div>
                            <span className='hanaNews c-mt4 c-px8 c-fs12 Pretendard-Bold'>
                                하나뉴스
                            </span>
                        </div>
                        <p className='c-style c-mt12 Pretendard-SemiBold'>하나은행,『지금! IRP에 입금하면 적금이 최대 연 5.0%』이벤트 시행</p>
                        <p className='c-fs14 Pretendard-Regular c-date c-mt29'>2023.11.24</p>
                    </div>
                </div>
                <div className='contentWrap c-ms40'>
                    <div className="imgWrap c-mt30">
                        <img src="https://www.hanafn.com:8002/upload/common/upeditor/10000084/20231127//20231127085545596.jpg" sizes='cover' alt="" />
                    </div>
                    <div className='contentTextWrap c-mt24'>
                        <div>
                            <span className='hanaNews c-mt4 c-px8 c-fs12 Pretendard-Bold'>
                                하나뉴스
                            </span>
                        </div>
                        <p className='c-style c-mt12 Pretendard-SemiBold'>하나증권, ‘토큰증권 생태계 발전 세미나’ 개최</p>
                        <p className='c-fs14 Pretendard-Regular c-date c-mt29'>2023.11.24</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default News