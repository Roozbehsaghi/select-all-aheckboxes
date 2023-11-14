import { useEffect, useState } from "react";
import { list, myObj } from "./List";

const ListItem = () => {
  const [checked, setChecked] = useState<number[]>([]);

  const handleCheck = (item: myObj): void => {
    if (checked.includes(item.id)) {
      setChecked(checked.filter((check) => check !== item.id));
    } else {
      setChecked([...checked, item.id]);
    }
  };

  const checkAll = () => {
    setChecked(
      list.length !== checked.length ? list.map((item) => item.id) : []
    );
  };

  useEffect(() => {}, [checked]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
        border: "solid red 1px",
        width: "800px",
        height: "800px",
      }}
    >
      <form>
        <input
          type="checkbox"
          checked={checked.length >= list.length}
          onChange={() => checkAll()}
        />
        <label>
          {checked.length < list.length ? "Select it All" : "Unselect All"}
        </label>
      </form>
      <br />
      <div>
        {list.map((item) => (
          <form key={item.id}>
            <input
              type="checkbox"
              id={item.name}
              checked={checked.includes(item.id)}
              onChange={() => handleCheck(item)}
            />
            <label>{item.name}</label>
          </form>
        ))}
      </div>
    </div>
  );
};

export default ListItem;
