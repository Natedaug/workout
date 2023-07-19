import { Stack, Button, CheckboxGroup, Checkbox } from "@chakra-ui/react";
import { useState } from "react";

function Filter({ setActiveFiltersList }) {
  const filterOptions = ["all", "weights", "cardio"];

  const [checkedState, setCheckedState] = useState(
    new Array(filterOptions.length).fill(false)
  );

  const handleOnChange = (position) => {
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
        onChange={() => handleOnChange(index)}
      >
        {option}
      </Checkbox>
    );
  });

  const handleFilter = (event) => {
    event.preventDefault();
    const checkedBoxes = renderedCheckbox.filter((box) => box.props.checked);
    const filters = checkedBoxes.map((box) => box.props.value);
    setActiveFiltersList(filters);
  };

  return (
    <form onSubmit={handleFilter}>
      <Stack direction={"row"}>
        <CheckboxGroup colorScheme="green" defaultValue={["naruto", "kakashi"]}>
          <Stack spacing={[1, 5]} direction={["column", "row"]}>
            {renderedCheckbox}
          </Stack>
        </CheckboxGroup>
        <Button type="submit" colorScheme="blue">
          Filter Library
        </Button>
      </Stack>
    </form>
  );
}

export default Filter;
