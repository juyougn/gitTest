// 메인 scss
import './Announce.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faFileDownload } from '@fortawesome/free-solid-svg-icons'

function Announce() {
    const arrowRight = <FontAwesomeIcon icon={faArrowRight} />
    const faDownload = <FontAwesomeIcon icon={faFileDownload} />
    return (
        <div className="announceContainer">
            <div className='announceCompony c-pe60'>
                <div className='announceComponyTitle c-mb40'>
                    <h2 className='c-fs30 Pretendard-Bold'>기업공시</h2>
                    <a className='c-fs16 Pretendard-SemiBold' href="/#">More {arrowRight}</a>
                </div>
                <ul className='announceContentWrap'>
                    <li className='announceTextWrap'>
                        <div className='c-fs16 Pretendard-SemiBold'>
                            <a href="/#">주요사항보고서(상각형조건부자본증권발행결정)</a>
                        </div>
                        <span className='c-fs14 Pretendard-Regular c-date'>2023.11.24</span>
                    </li>
                    <li className='announceTextWrap'>
                        <div className='c-fs16 Pretendard-SemiBold'>
                            <a href="/#">기업설명회(IR)개최(안내공시)</a>
                        </div>
                        <span className='c-fs14 Pretendard-Regular c-date'>2023.11.15</span>
                    </li>
                    <li className='announceTextWrap'>
                        <div className='c-fs16 Pretendard-SemiBold'>
                            <a href="/#">분기보고서 (2023.09)</a>
                        </div>
                        <span className='c-fs14 Pretendard-Regular c-date'>2023.11.14</span>
                    </li>
                </ul>
            </div>
            <div className='announceManagement c-ms20'>
                <div className='announceManagementTitle c-mb40'>
                    <h2 className='c-fs30 Pretendard-Bold'>경영공시</h2>
                    <a className='c-fs16 Pretendard-SemiBold' href="/#">More {arrowRight}</a>
                </div>
                <div className='downWrap'>
                    <div>
                        <p></p>
                        <a href="/#">PDF {faDownload}</a>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Announce