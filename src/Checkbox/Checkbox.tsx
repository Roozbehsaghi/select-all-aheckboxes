import * as React from "react";

type Props = {
  checked: boolean;
  handleCheckbox: () => void;
  setChecked: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Checkbox({
  checked,
  handleCheckbox,
  setChecked,
}: Props) {
  return (
    <div>
      <form onSubmit={handleCheckbox}>
        <input
          type="checkbox"
          name="Kingfisher"
          id="Kingfisher"
          value="Kingfisher"
        />
        <label>Kingfisher</label>
      </form>
      <form>
        <input type="checkbox" name="Heineken" id="Heineken" value="Heineken" />
        <label>Heineken</label>
      </form>
      <form>
        <input type="checkbox" name="Bira" id="Bira" value="Bira" />
        <label>Bira</label>
      </form>
      <form>
        <input
          type="checkbox"
          name="Budweiser"
          id="Budweiser"
          value="Budweiser"
        />
        <label>Budweiser</label>
      </form>
      <form>
        <input
          type="checkbox"
          name="Hoegaarden"
          id="Hoegaarden"
          value="Hoegaarden"
        />
        <label>Hoegaarden</label>
      </form>
      <form>
        <input
          type="checkbox"
          name="Carlsberg"
          id="Carlsberg"
          value="Carlsberg"
        />
        <label>Carlsberg</label>
      </form>
    </div>
  );
}
