import { useState, useEffect } from "react";
import Checkbox from "./Checkbox";

function Filter({ setActiveFiltersList }) {
  const filterOptions = ["all", "weights", "cardio"];

  const [checkedState, setCheckedState] = useState(
    new Array(filterOptions.length).fill(false)
  );

  useEffect(() => {
    //handle active filters state
    const checkedBoxes = renderedCheckbox.filter((box) => box.props.checked);
    const filters = checkedBoxes.map((box) => box.props.value);
    setActiveFiltersList(filters);
  }, [checkedState]);

  const handleCheckbox = (position) => {
    //handle checked state
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );
    setCheckedState(updatedCheckedState);
  };

  const renderedCheckbox = filterOptions.map((option, index) => {
    return (
      <Checkbox
        key={index}
        value={option}
        checked={checkedState[index]}
        onChange={() => handleCheckbox(index)}
      />
    );
  });

  return <form>{renderedCheckbox}</form>;
}

export default Filter;
