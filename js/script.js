// Calcula o horário atual e atualiza o relógio digital
let calculateTime = () => {
  let date = new Date();
  let dayNumber = date.getDay();
  let hour = date.getHours();
  let minute = date.getMinutes();
  let ampm = hour >= 12 ? 'PM' : 'AM';
  let dayNames = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  hour = hour % 12;
  hour = hour ? hour : '12';
  hour = hour < 10 ? '0' + hour : hour;
  minute = minute < 10 ? '0' + minute : minute;

  // Atualiza os elementos do DOM com o horário atual
  document.querySelector("#day").textContent = dayNames[dayNumber];
  document.querySelector("#hour").textContent = hour;
  document.querySelector("#minute").textContent = minute;
  document.querySelector("#ampm").textContent = ampm;

  // Atualiza o horário a cada 200 milissegundos
  setTimeout(calculateTime, 200);
}

// Inicia o cálculo do horário quando a página é carregada
window.addEventListener('load', calculateTime);
