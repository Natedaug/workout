import { Stack, Button, CheckboxGroup, Checkbox } from "@chakra-ui/react";

function Filter() {
	const handleFilter = () => {
		console.log("inside filter");
	};

	return (
		<div>
			<Stack direction={"row"}>
				<CheckboxGroup
					colorScheme="green"
					defaultValue={["naruto", "kakashi"]}
				>
					<Stack spacing={[1, 5]} direction={["column", "row"]}>
						<Checkbox value="all">All</Checkbox>
						<Checkbox value="weights">Weights</Checkbox>
						<Checkbox value="cardio">Cardio</Checkbox>
					</Stack>
				</CheckboxGroup>
				<Button onClick={handleFilter} colorScheme="blue">
					Filter Library
				</Button>
			</Stack>
		</div>
	);
}

export default Filter;
