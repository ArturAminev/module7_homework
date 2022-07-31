function ElectricalAppliances(name,power){
  this.name = name;
  this.getPower = function(){
  console.log(`Power Consumption of the ${this.name} is ${power} W.`)};
  this.flat = false;
}

ElectricalAppliances.prototype.getTurningOff = function(turn){
  if(turn == this.flat){
    console.log(`Power supply of the ${this.name} is off `)}
  }
  
ElectricalAppliances.prototype.getTurningOn = function(turn){
  if(turn != this.flat){
    this.flat = true;
    console.log(`Power supply of the ${this.name} is on`)}
}

const pc = new ElectricalAppliances("pc",230,true);
const fan = new ElectricalAppliances("fan",false);
const teapot = new ElectricalAppliances("teapot",1850,true);

pc. getTurningOn();
pc. getPower();
fan. getTurningOff();
teapot. getTurningOn();
teapot. getPower();
// В целом модуль освоил, но по поводу пользования флажком я наверное перемудрил :),объясните пожалуйста, как правильно ими пользоваться.В данном случае включение и отключение прибора.
// Прошу указать все ошибки и наставить на путь истенный.