import './QnA.scss'

const handleQnATitle = (event) => {
  event.target.children[0].classList.toggle("active");
};

const QnA = () => {
  return (
    <div className='QnAContainer'>
      <div className='QnAContent'>
        <h4 className='QnATitle' style={{fontSize:"20px"}}>자주 묻는 질문</h4>
        <div className='QnASection'>
          <div className='QnASubSection'>
            <div className='QnASubTitle' onClick={handleQnATitle}>
              컨커러스 블레이드란 무엇인가요?
              <div className='QnASubDesc' >
                이 게임의 가장 큰 특징은 역사성에 기반한 실제 있었던 병사들을 모티브로 한 대규모 pvp 게임입니다.
                유저가 직접 장수로 플레이 , 서로 다른 병사들을 컨트롤 함으로써
                전략성이 더해진 전투가 주 컨텐츠 라는 점에서 외국에서는 온라인 마운트 앤 블레이드 라고 불리기도 했습니다.
                <br></br>
                <br></br>
                아무래도 "그 쪽" 게임이다 보니 다른 나라 유저들에게는 불합리한 상황이 많이 벌어지고
                실제로 한국어 번역도 어딘가 말이 맞지 않는 연출을 종종 보이고 있지만.
                문제는 이와 같은 게임이 없다 보니 대체 불가능하니 이게임을 하는걸 추천해요.
              </div>
            </div>
            <div className='QnASubTitle' onClick={handleQnATitle}>
              초보들은 뭘 해야 할까요?
              <div className='QnASubDesc'>
              초보들을 위한 뉴비존이 있지만 레벨 또는 전적으로 이 구간에 잠시 체류하고 이후 160레벨 또는 높은 승률 이 되면
                뉴비존을 탈출 합니다.
                <br></br>
                <br></br>
                대부분의 초보분들이 벽에 가로 막히기도 하는데
                초보분들이 착각하는게 이 겜은 LoL처럼 장수 vs 장수 가 아닌 병사 vs 병사가 추가됩니다.
                lol로 치면 챔피언을 살리면서 각자에게 미니언이 추가되는데 이를 이용해서 소규모 전투에서 이기고
                거점을 뺏거나 지키면서 승리에 이르는 게임입니다.
                
              </div>
            </div>
            <div className='QnASubTitle' onClick={handleQnATitle}>
              과금을 해야할까요?
              <div className='QnASubDesc'>
                고민할때가 아닙니다 시즌패스는 지르고 생각하세요.
                <br></br>
                <br></br>
                다른 과금은 주변 고인물에게 상담후 과금 라인을 정하시면 됩니다 .
              </div>
            </div>
            <div className='QnASubTitle' onClick={handleQnATitle}>
              가문과 진국군의 차이는 뭔가요?
              <div className='QnASubDesc'>
                초보분이라면 가문을 추천합니다 한국어를 선택후 가문을 고를수가있어요
                <br></br>
                <br></br>
                초보분을 언제든 지원해줄 고인물들은 널렸답니다 일단 가입부터 하세요
                <br></br>
                참고로 LA서버 전설 가문이 좋습니다 
              </div>
            </div>
            <div className='QnASubTitle' onClick={handleQnATitle}>
              시즌 도전은 무엇인가요?
              <div className='QnASubDesc'>
                시 즌 도 전 
                <br></br>
                <br></br>
                마음에 드는 
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QnA;
