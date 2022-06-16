import { useStore } from "effector-react";
import { useState } from "react";
import { searchStore, setSearchStore } from "../../stores/search.store";
import "./style.css";

type InputProps = {
  placeholder?: string;
  type: "gold" | "silver" | "copper";
};

export const Input: React.FC<InputProps> = (x) => {
  const [searchValue, setSeachValue] = useState("");

  const storedSearch = useStore(searchStore);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSeachValue(e.target.value);
    if (x.type === "copper") {
      setSearchStore({
        copper: e.target.value,
        silver: storedSearch.silver,
        gold: storedSearch.gold,
      });
    }
    if (x.type === "gold") {
      setSearchStore({
        copper: storedSearch.copper,
        silver: storedSearch.silver,
        gold: e.target.value,
      });
    }
    if (x.type === "silver") {
      setSearchStore({
        copper: storedSearch.copper,
        silver: e.target.value,
        gold: storedSearch.gold,
      });
    }
  };

  return (
    <div className="input-outer">
      <input
        className="input-inner"
        type="text"
        placeholder={x.placeholder}
        onChange={handleSearchChange}
      />
    </div>
  );
};

type ReadonlyInputProps = {
  defaultValue?: string;
  inputName?: string;
};

export const ReadonlyInput: React.FC<ReadonlyInputProps> = (x) => {
  return (
    <div className="readonly-input__outside">
      <div style={{ fontSize: 16 }}>{x.inputName}</div>
      <input
        readOnly
        type="text"
        defaultValue={x.defaultValue || "Не найдено"}
        style={{
          width: 204,
          height: 36,
          border: "2px solid #E1E7EE",
          borderRadius: "5px",
          fontSize: 16,
          padding: "0px 17px"
        }}
      />
    </div>
  );
};
