/*class Train {
    constructor(color, lightsOn) {
        this.color = color;
        this.lightsOn = lightsOn;
    }
}

var myFirstTrain = new Train('red', false);

console.log(myFirstTrain); //Train { color: 'red', lightsOn: false}


var mySecondTrain = new Train('blue', false);
var myThirdTrain = new Train('blue', false);
console.log(mySecondTrain);
console.log(myThirdTrain); */

/*you can alse add methods to classes, and these methods will then be shared
by all future instance objects of my Train class. */

class Train {
    constructor(color, lightsOn) {
        this.color = color;
        this.lightsOn = lightsOn;
    }
    toggleLights() {
        this.lightsOn = !this.lightsOn;
    }
    lightsStatus() {
        console.log('Lights on?', this.lightsOn);
    }
    getSelf() {
        console.log(this);
    }
    getPrototype() {
        var proto = Object.getPrototypeOf(this);
        console.log(proto);
    }
}


class HighSpeedTrain extends Train {
    constructor(passengers, HighSpeedOn, color, lightsOn) {
        super(color, lightsOn);
        this.passengers = passengers;
        this.HighSpeedOn = HighSpeedOn;
    }
    toggleHighSpeed() {
        this.HighSpeedOn = !this.HighSpeedOn;
        console.log('High speed status:', this.HighSpeedOn);
    }
    toggleLights() {
        super.toggleLights();
        super.lightsStatus();
        console.log('Lights are 100% operational.');
    }
}
var myFirstTrain = new Train('red', false);

console.log(myFirstTrain); //Train { color: 'red', lightsOn: false}

var mySecondTrain = new Train('blue', false);
var myThirdTrain = new Train('blue', false);
console.log(mySecondTrain);
console.log(myThirdTrain);

var train4 = new Train('red', false);

train4.toggleLights();
train4.lightsStatus();
train4.getSelf();
train4.getPrototype();

var train5 = new Train('blue', false);
var HighSpeed1 = new HighSpeedTrain(200, false, 'green', false);

train5.toggleLights();
train5.lightsStatus();
HighSpeed1.toggleLights();