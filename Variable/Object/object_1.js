// Railway Traffic Management System
// Implement a Train class with data members (properties).
// Data functions (methods) to simulate train management.
class Train {
    constructor(trainNumber, trainName, speed, status) {
        this.trainNumber = trainNumber;
        this.trainName = trainName;
        this.speed = speed;
        this.status = status;
    }

    showTrainInfo() {
        console.log(`Train: ${this.trainName} (${this.trainNumber}) is currently ${this.status} at ${this.speed} km/h.`);
    }

    changeSpeed(newSpeed) {
        this.speed = newSpeed;
        console.log(`Speed updated to ${this.speed} km/h`);
    }
}

// Creating Objects or Instances
let train1 = new Train("12345", "Express", 80, "Running");
let train2 = new Train("67890", "SuperFast", 110, "Delayed");

train1.showTrainInfo();
train1.changeSpeed(90);

train2.showTrainInfo();
train2.changeSpeed(120);


// Output:
// Train: Express (12345) is currently Running at 80 km/h.
// Speed updated to 90 km/h
// Train: SuperFast (67890) is currently Delayed at 110 km/h.
// Speed updated to 120 km/h
