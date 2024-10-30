import { useState } from "react";
import "./Editor.css";
import EditorItem from "./EditorItem";

const Editor = ({ addMedalData, updateMedalData }) => {
  const [formData, setFormData] = useState({
    country: "",
    gold: 0,
    silver: 0,
    bronze: 0,
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      id: new Date().getTime(),
      [name]: name === "country" ? value : Math.min(parseInt(value, 10)),
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (!formData.country) {
      alert("국가명을 입력해주세요.");
      return;
    }
    if (/\d/.test(formData.country)) {
      alert("국가명에는 숫자를 포함할 수 없습니다.");
      return;
    }
    addMedalData(formData);
    setFormData({ country: "", gold: 0, silver: 0, bronze: 0 });
  };

  const handleUpdate = () => {
    if (!formData.country) {
      alert("해당 국가명이 없습니다.");
      return;
    }
    updateMedalData(formData);
    setFormData({ country: "", gold: 0, silver: 0, bronze: 0 });
  };

  return (
    <div className="Editor">
      <form className="input-form" onSubmit={handleOnSubmit}>
        <div className="input-group">
          <EditorItem
            title="국가명"
            type="text"
            placeholder="국가 입력"
            name="country"
            value={formData.country}
            onChange={handleOnChange}
          />
          <EditorItem
            title="금메달"
            type="number"
            placeholder="0"
            name="gold"
            value={formData.gold}
            onChange={handleOnChange}
          />
          <EditorItem
            title="은메달"
            type="number"
            placeholder="0"
            name="silver"
            value={formData.silver}
            onChange={handleOnChange}
          />
          <EditorItem
            title="동메달"
            type="number"
            placeholder="0"
            name="bronze"
            value={formData.bronze}
            onChange={handleOnChange}
          />
        </div>
        <div className="button-group">
          <button className="add-button" type="submit">
            국가 추가
          </button>
          <button
            className="update-button"
            type="button"
            onClick={handleUpdate}
          >
            업데이트
          </button>
        </div>
      </form>
    </div>
  );
};

export default Editor;
