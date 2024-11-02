import { useEffect, useState } from "react";
import "./App.css";
import Editor from "./components/Editor";
import Header from "./components/Header";
import MedalList from "./components/MedalList";

function App() {
  const [medalData, setMedalData] = useState(() => {
    const storedMedalData = localStorage.getItem("medalDatas");
    return storedMedalData ? JSON.parse(storedMedalData) : [];
  });

  useEffect(() => {
    localStorage.setItem("medalDatas", JSON.stringify(medalData));
  }, [medalData]);

  const addMedalData = (newData) => {
    const countryExists = medalData.some(
      (item) => item.country === newData.country
    );
    if (countryExists) {
      alert("해당 국가가 이미 존재합니다.");
      return;
    }
    const sortedData = [...medalData, newData].sort((a, b) => {
      if (a.gold !== b.gold) return b.gold - a.gold;
      const totalA = a.gold + a.silver + a.bronze;
      const totalB = b.gold + b.silver + b.bronze;

      if (totalA !== totalB) return totalB - totalA;
      if (a.silver !== b.silver) return b.silver - a.silver;
      return b.bronze - a.bronze;
    });
    setMedalData(sortedData);
  };

  const updateMedalData = (updatedData) => {
    const countryExists = medalData.some(
      (item) => item.country === updatedData.country
    );
    if (!countryExists) {
      alert("존재하지 않는 국가입니다. 다시 확인해주세요.");
      return;
    }
    const updatedMedalData = medalData
      .map((item) =>
        item.country === updatedData.country ? updatedData : item
      )
      .sort((a, b) => {
        if (a.gold !== b.gold) return b.gold - a.gold;
        const totalA = a.gold + a.silver + a.bronze;
        const totalB = b.gold + b.silver + b.bronze;

        if (totalA !== totalB) return totalB - totalA;
        if (a.silver !== b.silver) return b.silver - a.silver;
        return b.bronze - a.bronze;
      });
    setMedalData(updatedMedalData);
  };

  const deleteMedalData = (id) => {
    const deletedData = medalData.filter((item) => item.id !== id);
    setMedalData(deletedData);
  };

  return (
    <div className="App">
      <Header />
      <Editor addMedalData={addMedalData} updateMedalData={updateMedalData} />
      <MedalList medalData={medalData} deleteMedalData={deleteMedalData} />
    </div>
  );
}

export default App;
