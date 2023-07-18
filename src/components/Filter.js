function Filter() {
  const handleFilter = () => {
    console.log("inside filter");
  };

  return (
    <div>
      <label>Cardio</label>
      <input type="checkbox" />

      <label>Weights</label>
      <input type="checkbox" />

      <label>All</label>
      <input type="checkbox" />
      <button onClick={handleFilter}>Filter</button>
    </div>
  );
}

export default Filter;
