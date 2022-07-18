// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
    //returns the number of blocks given a value
    if (someValue > 42) {
        let upTown = someValue - 42;
        return upTown;
    } else {
        let downTown = 42-someValue;
        return downTown;
    }
  }

  function distanceFromHqInFeet(someValue) {
    let blocks = distanceFromHqInBlocks(someValue);
    // call the distanceFromHqInBlocks function from inside the distanceFromHqInFeet function,
    // passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks
    let feetBlocks = blocks *264;
    return feetBlocks;
    // the return value of distanceFromHqInBlocks can then be used to calculate feet
  }

  function distanceTravelledInFeet(start, destination) {
    //returns the number of feet traveled
    if (start > destination) {
      return (start-destination) * 264 ;
    } else {
        return (destination-start) * 264;
    }
  }

  function calculatesFarePrice(start, destination) {
    let feetDistance = distanceTravelledInFeet (start, destination)

    if (feetDistance < 400){
        return 0;
    } else if (feetDistance > 400 && feetDistance <= 2000) {
        let cost = (feetDistance-400) * .02;
        return cost;
    } else if (feetDistance > 2000 && feetDistance < 2500) {
        return 25;
    } else {
        return "cannot travel that far";
    }
    
  }