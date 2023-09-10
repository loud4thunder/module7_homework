function electrodevice(name, power) {
    this.name = name;
    this.power = power;
    this.isPlugged = false;
}

electrodevice.prototype.plugIn = function() {
    console.log(this.name + " is connected!");
    this.isPlugged = true;
}

electrodevice.prototype.getPowerUsed = function() {
    return this.isPlugged ? this.power : 0;
}

const iron = new electrodevice('iron', 100);
const computer = new electrodevice('computer', 500);

console.log(iron.getPowerUsed() + computer.getPowerUsed());

iron.plugIn();
console.log(iron.getPowerUsed() + computer.getPowerUsed());

computer.plugIn();
console.log(iron.getPowerUsed() + computer.getPowerUsed());