import "./EditorItem.css";

const EditorItem = ({ title, type, placeholder, name, value, onChange }) => {
  return (
    <div className="EditorItem">
      <div className="input-item">
        <p>{title}</p>
        <input
          type={type}
          placeholder={placeholder}
          name={name}
          value={value}
          min="0"
          onChange={onChange}
          onInput={
            name !== "country"
              ? (e) => {
                  if (e.target.value.length > e.target.maxLength) {
                    e.target.value = e.target.value.slice(
                      0,
                      e.target.maxLength
                    );
                  }
                }
              : undefined
          }
          maxLength={name !== "country" ? 2 : undefined}
        />
      </div>
    </div>
  );
};

export default EditorItem;
