"use strict";

var cadi = {
  make: "GT",
  model: "Cadiccal",
  year: 1995,
  color: "tan",
  passangers: 5,
  convertible: false,
  mileage: 12892,
  started: false,
  fuel: 0,

  start: function() {
    this.started = true;
  },

  stop: function() {
    this.started = false;
  },

  drive: function() {
    if (this.started) {
      if (this.fuel > 0) {
        alert(this.make + " " + this.model + " goes zoom zoom!");
        this.fuel = this.fuel - 1;
      } else {
        alert("Uh oh, out of fuel.");
        this.stop();
        }
    } else {
      alert("You need to start the engine first.");
    }
  },

  addFuel: function(amount) {
    this.fuel = this.fuel + amount;
  }
};

cadi.start();
cadi.drive();
cadi.addFuel(2);
cadi.start();
cadi.drive();
cadi.drive();
cadi.drive();
cadi.stop();