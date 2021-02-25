var data = new Date();

console.log(typeof data);
console.log(data);

var dataString = new Date("2017-10-23")
console.log(dataString);

console.log(dataString.getFullYear()); //Ano todo
console.log(dataString.getMonth()+1); //apenas um Mês
console.log(dataString.getDay()); //Dia da semana
console.log(dataString.getDate()); // Dia do Mês
console.log(dataString.getHours()); //Recuperar Horas
console.log(dataString.getMinutes()); //Minutos

var dataParam = new Date(2018,04,17);
console.log(dataParam);
