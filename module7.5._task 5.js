class ElectricalAppliances{
  constructor(name,power){
    this.name = name;
    this.getPower = function(){
    console.log(`Power Consumption of the ${this.name} is ${power} W.`)};
    this.flat = false;
  }
  getTurningOff(turn){
  if(turn == this.flat){
    console.log(`Power supply of the ${this.name} is off `)}
  }
  getTurningOn(turn){
  if(turn != this.flat){
    this.flat = true;
    console.log(`Power supply of the ${this.name} is on`)}
  }
}

const pc = new ElectricalAppliances("pc",230);
const fan = new ElectricalAppliances("fan",0);
const teapot = new ElectricalAppliances("teapot",1850);

pc. getTurningOn(true);
pc. getPower();
fan. getTurningOff(false);
teapot. getTurningOn(true);
teapot. getPower();
// Прошу указать все ошибки и наставить на путь истенный :).Хотел бы увидеть правильный код решения задачи.