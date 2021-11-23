// Code your solution in this file!
function distanceFromHqInBlocks(stNum) {
    if (stNum > 42) {
        return stNum - 42;
    } else if (stNum < 42) {
        return 42 - stNum;
    } else if (stNum === 42) {
        return 0;
    } else {
        return 'Street Number Error';
    };
    

};

function distanceFromHqInFeet(stNum) {
    let blocks = distanceFromHqInBlocks(stNum);
    return blocks * 264;
};

function distanceTravelledInFeet(start, destination) {
    let blocks 
    if (destination > start) {
        blocks = destination - start;
        return blocks * 264;
    } else if (destination < start) {
        blocks = start - destination;
        return blocks * 264;
    } else if (destination === start) {
        return 0;
    } else {
        return "street name error";
    };
};

function calculatesFarePrice(start, destination) {
    let feet = distanceTravelledInFeet(start, destination);
    if (feet <= 400) {
        return 0
    } else if (feet > 400 && feet < 2000) {
        let fare = (feet - 400) * 0.02;
        return fare;
    } else if (feet >= 2000 && feet < 2500) {
        return 25;
    } else if (feet >= 2500) {
        return "cannot travel that far";
    };
};