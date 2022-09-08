class Cylinder {
    constructor(radius, height) {
        this.radius = radius;
        this.height = height;
    }

    getVolume() {
        let vol = 3.14 * (this.radius * this.radius) * this.height;
        return vol;
    }
}
class Sphere {
    constructor(radius, height = 0) {
        this.radius = radius;
        //this.height = height;
    }

    getVolume() {
        let vol = (3.14 * (this.radius * this.radius * this.radius) * 4) / 3;
        return vol;
    }
}
class Cone {
    constructor(radius, height) {
        this.radius = radius;
        this.height = height;
    }

    getVolume() {
        let vol = (3.14 * (this.radius * this.radius) * this.height) / 3;
        return vol;
    }
}

let cyl = new Cylinder(10, 5);
let cir = new Sphere(10);
let con = new Cone(10, 5);
console.log(con.getVolume());