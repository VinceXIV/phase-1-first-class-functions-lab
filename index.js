// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
}

const returnLastTwoDrivers = function (drivers) {
    return drivers.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function (multiplier){
    return function(fare){
        return fare*multiplier;
    }
}

const fareDoubler = function (fare){
    const doublerFunction = createFareMultiplier(2);
    return doublerFunction(fare);
}

const fareTripler = function (fare){
    const TriplerFunction = createFareMultiplier(3);
    return TriplerFunction(fare);
}

const selectDifferentDrivers = function (drivers, selectDrivers){
    return selectDrivers(drivers)
}