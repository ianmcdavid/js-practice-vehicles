const button = document.querySelector("button");
const repairList = document.querySelector(".need-repair");

const createVehicle = function (type, numWheels, color) {
  const vehicle = {
    type: type,
    numWheels: numWheels,
    color: color
  };
  return vehicle;
};

const car = createVehicle("car", 4, "silver");
const bike = createVehicle("bike", 2, "white");
const skateboard = createVehicle("skate", 4, "black");

const myVehicles = [car, bike, skateboard];
for (let vehicle of myVehicles) {
  for (let key in vehicle) {
    console.log(key, vehicle[key]);
  }
}

bike.needsRepair = true;
skateboard.needsRepair = true;

button.addEventListener("click", function () {
  repairList.innerHTML = "";
  const vehicleRepairList = [];
  for (let vehicle of myVehicles) {
    if (vehicle.needsRepair === true) {
      vehicleRepairList.push(vehicle);
    }
  }
  for (let broken of vehicleRepairList) {
    let li = document.createElement("li");
    li.innerHTML = `My <span class="vehicle">${broken.type}</span> needs some love.`;
    repairList.append(li);
  }
});
