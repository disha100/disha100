var pen = new Object();
pen.cost=10;
pen.type="gel";
pen.company= new Object();
pen.company.name="flair";
pen.color = new Object();

pen.color.colour="blue";
pen.owner = new Object();
pen.owner.name="john";
pen.owner.gender="male"
console.log(pen);
console.log(pen.color);
console.log(pen.company);
console.log("this pen belons to : "+pen.owner.name);
console.log("it is a " +pen["type"]+" pen");

console.log(pen.owner.gender);
