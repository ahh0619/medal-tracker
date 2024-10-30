import "./MedalList.css";

const MedalList = ({ medalData, deleteMedalData }) => {
  return (
    <div className="MedalList">
      <div className="medal-title">
        <span>국가명</span>
        <span>금메달</span>
        <span>은메달</span>
        <span>동메달</span>
        <span>액션</span>
      </div>
      {medalData.length > 0 ? (
        medalData.map((data, index) => (
          <div
            className={`medal-info ${index % 2 === 0 ? "even" : "odd"}`}
            key={data.id}
          >
            <span>{data.country}</span>
            <span>{data.gold}</span>
            <span>{data.silver}</span>
            <span>{data.bronze}</span>
            <button onClick={() => deleteMedalData(data.id)}>삭제</button>
          </div>
        ))
      ) : (
        <div className="no-data">국가와 메달 정보가 없습니다.</div>
      )}
    </div>
  );
};

export default MedalList;
