/**
 * Created by Ramona on 16.8.2016 г..
 */
function Cylinder(cyl_r, cyl_height) {
    this.cyl_height = cyl_height;
    this.cyl_r = cyl_r;
}

Cylinder.prototype.Volume = function () {
    return this.cyl_height * Math.PI * this.cyl_r * this.cyl_r
};

var cyl = new Cylinder(2, 4);
// Volume of the cylinder with four decimal places.
console.log('volume =', cyl.Volume().toFixed(3));