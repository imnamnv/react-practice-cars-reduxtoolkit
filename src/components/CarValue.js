import { useSelector } from "react-redux";

function CarValue() {
  const totalCost = useSelector(({ cars: { searchTerm, data } }) => {
    const filteredCars = data.filter((car) =>
      car.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return filteredCars.reduce((sum, car) => {
      return sum + car.cost;
    }, 0);
  });

  return <div className="car-value">Total Cost: ${totalCost}</div>;
}

export default CarValue;
