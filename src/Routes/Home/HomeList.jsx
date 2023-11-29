import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

//불러오기
import QnA from './QnA.jsx';
import Footer from '../../components/Footer.jsx';

// 스타일 스와이퍼 
import './Swiper.scss'
// 메인 
import './HomeList.scss'


function HomeList() {
  return (
    <div className='GameListTop'>
      
    <h3 style={{color:"white", textAlign:"center", fontSize:"2em"}}>Trailer</h3>
    <img src="./img/logo/img0101.png" alt="" style={{width:"100%"}}/>
    <Swiper
      slidesPerView={1}
      navigation={true} modules={[Navigation]} className='mb-5'
      >
        <SwiperSlide><iframe width="560" height="315" src="https://www.youtube.com/embed/aAozgQYwErI?si=0WhuAklevcHV7kUX" title="YouTube video player"  frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe></SwiperSlide>
        {/* frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen> 카멜 표기법으로 바꾸니 오류 없어짐 */}
        <SwiperSlide><iframe width="560" height="315" src="https://www.youtube.com/embed/XRNWJbsq_28?si=dGJH6T-q93iN1Lwj" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe></SwiperSlide>
        <SwiperSlide><iframe width="560" height="315" src="https://www.youtube.com/embed/zf6Ukxf8mxk?si=asUivrjLsfaudLOq" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe></SwiperSlide>
        <SwiperSlide><iframe width="560" height="315" src="https://www.youtube.com/embed/UEObcs_uo7w?si=brtSv7dUIOl3mnNW" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe></SwiperSlide>
    </Swiper>
    <div className='Br'/>

      
      <div>
        <QnA/>
      <div className='Br'/>
        <QnA/>


      </div>
      <div className='Br'/>
      <div className='footer'>
        <Footer/>

      </div>



    </div>
    
  )
}

export default HomeList;