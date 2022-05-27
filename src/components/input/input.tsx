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
