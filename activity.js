// Obtener elementos
const temaInp = document.getElementById('tema');
const botNameInp = document.getElementById('botName');
const preguntas = document.querySelectorAll('.pregunta');
const respuestas = document.querySelectorAll('.respuesta');
const buildBtn = document.getElementById('buildBtn');
const chatBox = document.getElementById('chatBox');
const userInput = document.getElementById('userInput');
const sendBtn = document.getElementById('sendBtn');

let botData = {};

buildBtn.addEventListener('click', () => {
  botData = {
    tema: temaInp.value.trim(),
    name: botNameInp.value.trim(),
    qa: []
  };
  preguntas.forEach((p, i) => {
    botData.qa.push({
      q: p.value.trim().toLowerCase(),
      a: respuestas[i].value.trim()
    });
  });
  chatBox.innerHTML = `<div class="chat-line bot">¡Hola! Soy ${botData.name}. Pregúntame sobre ${botData.tema} 😊</div>`;
  userInput.focus();
});

function sendMessage() {
  const msg = userInput.value.trim();
  if (!msg) return;
  appendChat(msg, 'user');
  userInput.value = '';

  // Búsqueda simple
  const found = botData.qa.find(pair => msg.toLowerCase().includes(pair.q));
  const reply = found
    ? found.a
    : "No tengo esa información 😅. Prueba con otra pregunta sobre " + botData.tema;
  setTimeout(() => appendChat(reply, 'bot'), 400);
}

sendBtn.addEventListener('click', sendMessage);
userInput.addEventListener('keypress', e => {
  if (e.key === 'Enter') sendMessage();
});

function appendChat(text, sender) {
  const line = document.createElement('div');
  line.className = 'chat-line ' + sender;
  line.textContent = text;
  chatBox.appendChild(line);
  chatBox.scrollTop = chatBox.scrollHeight;
}