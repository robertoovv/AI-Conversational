// script.js
const bookContent = [
  {
    number: "01",
    title: "Introducción a la IA",
    content: [
      "La Inteligencia Artificial (IA) es como darle superpoderes a las computadoras: les enseñamos a pensar, aprender y tomar decisiones como los humanos, pero a velocidad loca.",
      "<strong>IA Débil vs IA Fuerte:</strong><br><br><strong>IA Débil:</strong> Especialista (como TikTok que sabe qué videos te gustan)<br><strong>IA Fuerte:</strong> Multitalento (todavía no existe, sería como Jarvis de Iron Man)"
    ],
    special: "example-box",
    specialContent: `<h3>🎮 Ejemplos que usas TODO EL TIEMPO:</h3>
      <ul>
        <li><strong>Filtros de IG:</strong> Los que te ponen orejas de perro usan IA para reconocer tu cara</li>
        <li><strong>Autocorrect:</strong> Aprende cómo escribes para corregirte mejor</li>
        <li><strong>TikTok:</strong> Su algoritmo es IA que aprende qué te gusta en 15 min</li>
        <li><strong>Videojuegos:</strong> Los enemigos se adaptan a tu estilo de juego</li>
        <li><strong>Spotify:</strong> Descubre semanal = IA creando tu playlist perfecta</li>
      </ul>
      <br>
      <h3>🧠 ¿Cómo funciona esto mágicamente?</h3>
      <p>La IA analiza millones de datos sobre ti: qué miras, cuánto tiempo, qué compartes, qué ignoras... y encuentra patrones. Es como tener un amigo que te observa tanto que sabe qué vas a decir antes de que lo digas.</p>`
  },
  {
    number: "02",
    title: "¿Qué es IA Conversacional?",
    content: [
      "Es como tener un amigo virtual que <strong>SIEMPRE</strong> está para hablar, responder y ayudarte con tareas. ¡Pero no necesita dormir ni comer!",
      "La diferencia entre los chatbots viejos y los modelos modernos como ChatGPT es abismal. Mientras los primeros solo podían responder lo que les habían programado, los nuevos pueden mantener conversaciones reales, crear contenido original y adaptarse a tu estilo."
    ],
    special: "comparison-grid",
    specialContent: `<div class="chatbot-old">
      <h4>🤖 Chatbots viejos</h4>
      <ul>
        <li>Respuestas preprogramadas</li>
        <li>"No entiendo tu pregunta"</li>
        <li>Frustrantes y robóticos</li>
        <li>Solo funcionan con comandos exactos</li>
      </ul>
    </div>
    <div class="chatbot-new">
      <h4>🧠 Modelos modernos</h4>
      <ul>
        <li>Aprenden contigo</li>
        <li>Contexto y conversación real</li>
        <li>Creativos y útiles</li>
        <li>Entienden el lenguaje natural</li>
      </ul>
    </div>
    <br>
    <h3>📱 ¿Dónde los encuentras en tu vida diaria?</h3>
    <ul>
      <li><strong>Snapchat My AI:</strong> Tu amigo virtual que responde a tus historias</li>
      <li><strong>Discord Clyde:</strong> Moderación y ayuda en servidores</li>
      <li><strong>WhatsApp Business:</strong> Atención al cliente instantánea</li>
      <li><strong>Asistentes de estudio:</strong> Explicaciones personalizadas, resúmenes, ejercicios</li>
    </ul>`
  },
  {
    number: "03",
    title: "¿Cómo funciona un modelo conversacional?",
    content: [
      "Imagina que el modelo es como un cerebro artificial que ha leído TODO internet. Cuando le preguntas algo, no busca respuestas preparadas, sino que <strong>predice palabra por palabra</strong> lo que debería decir, basándose en lo que aprendió.",
      "<strong>¿Qué es un token?</strong> Es la unidad mínima que entiende el modelo. Puede ser una palabra, parte de una palabra o incluso un emoji. Por eso a veces 'se queda pensando' a mitad de palabra.",
      "<strong>El truco del 'prompt':</strong> Tu pregunta es como una <strong>orden mágica</strong>. Si dices: 'Explícame...' vs 'Explícame como si tuviera 10 años...' ¡la respuesta cambia completamente!"
    ],
    special: "example-box",
    specialContent: `<h3>🔍 Proceso paso a paso (simplificado):</h3>
      <ol>
        <li><strong>Entrada:</strong> Tu pregunta se convierte en tokens</li>
        <li><strong>Análisis:</strong> El modelo busca patrones similares en su memoria</li>
        <li><strong>Predicción:</strong> Calcula qué token debería venir después</li>
        <li><strong>Generación:</strong> Construye la respuesta token por token</li>
        <li><strong>Salida:</strong> Tokens se convierten en texto legible</li>
      </ol>
      <br>
      <h3>🎯 Ejemplo real de tokens:</h3>
      <p>Frase: "Hola, ¿cómo estás?"<br>
      Tokens: ["Hola", ",", "¿", "cómo", "estás", "?"]<br><br>
      Emojis también son tokens: 😀 = 1 token, 🤖 = 1 token<br>
      Palabras largas se dividen: "extraordinario" = ["extra", "ordin", "ario"]</p>`
  },
  {
    number: "04",
    title: "Historia de la IA Conversacional",
    content: [
      "<strong>1966 - ELIZA:</strong> La primera 'terapeuta' digital. Solo repetía lo que decías con preguntas, ¡pero la gente pensaba que entendía!<br><br><strong>2011 - Siri:</strong> Llegó al iPhone y todos empezaron a hablar con sus teléfonos.",
      "<strong>2022 - ChatGPT:</strong> Revolución total. De repente, todos tenían acceso a una IA que podía ayudar con tareas, crear historias, resolver problemas...<br><br><strong>Hoy:</strong> Competencia feroz entre GPT, Claude, Gemini y otros."
    ],
    special: "app-box",
    specialContent: `<h3>🚀 La evolución de los modelos:</h3>
      <ul>
        <li><strong>GPT-1 (2018):</strong> 117M de parámetros</li>
        <li><strong>GPT-2 (2019):</strong> 1.5B de parámetros - ¡tan potente que no lo liberaron completo!</li>
        <li><strong>GPT-3 (2020):</strong> 175B de parámetros - Salto cualitativo</li>
        <li><strong>GPT-4 (2023):</strong> Multimodal y mucho más preciso</li>
        <li><strong>Futuro:</strong> ¿GPT-5? Nadie sabe, pero será increíble</li>
      </ul>
      <br>
      <h3>📅 Línea del tiempo divertida:</h3>
      <p><strong>1966:</strong> ELIZA → <strong>1995:</strong> ALICE → <strong>2011:</strong> Siri → <strong>2014:</strong> Alexa → <strong>2016:</strong> Google Assistant → <strong>2022:</strong> ChatGPT → <strong>2023:</strong> ¡Explosión de modelos!</p>`
  },
  {
    number: "05",
    title: "Aplicaciones que te van a flipar",
    content: [
      "<strong>🎮 Videojuegos:</strong> NPCs que recuerdan tus decisiones y tienen conversaciones únicas. Juegos que crean historias mientras juegas. Ejemplo: En 'AI Dungeon', la historia se genera en tiempo real según tus acciones.",
      "<strong>📚 Educación personalizada:</strong> Profesores virtuales que se adaptan a tu ritmo, explican con ejemplos de tus intereses y nunca se cansan de repetir. Pueden crear ejercicios específicos para tus debilidades."
    ],
    special: "example-box",
    specialContent: `<h3>💡 Startups juveniles reales:</h3>
      <ul>
        <li><strong>Teen crea app:</strong> Usó IA para generar ideas y código, vendió 1000 descargas</li>
        <li><strong>Tutor IA:</strong> Estudiante creó chatbot para ayudar con mates, ahora lo usan 50 compañeros</li>
        <li><strong>Arte digital:</strong> Vende NFTs creados con ayuda de IA</li>
        <li><strong>Contenido:</strong> Gestiona redes sociales de negocios locales usando IA</li>
      </ul>
      <br>
      <h3>🎨 Creatividad aumentada:</h3>
      <ul>
        <li><strong>Música:</strong> Componer canciones en cualquier estilo</li>
        <li><strong>Historias:</strong> Crear mundos y personajes únicos</li>
        <li><strong>Arte:</strong> Generar imágenes conceptuales</li>
        <li><strong>Código:</strong> Crear tus primeros juegos y apps</li>
      </ul>`
  },
  {
    number: "06",
    title: "Cómo escribir prompts que funcionan",
    content: [
      "Un <strong>prompt</strong> es como una receta: mal escrito, da pena. Bien escrito, ¡es magia!<br><br><strong>La fórmula secreta:</strong><br>🎭 <strong>Rol</strong> + 🎯 <strong>Objetivo</strong> + 📋 <strong>Contexto</strong> + 📝 <strong>Formato</strong>",
      "<strong>Ejemplo malo:</strong> 'Cuéntame sobre historia'<br><strong>Ejemplo bueno:</strong> 'Actúa como un profesor de 4º de ESO. Explícame la Guerra Civil española usando analogías con TikTok y youtubers. Usa emojis y hazlo en 10 líneas.'"
    ],
    special: "app-box",
    specialContent: `<h3>📋 Plantillas de prompts mágicos:</h3>
      <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 10px; margin: 15px 0;">
        <strong>Para estudiar:</strong><br>
        "Eres mi profesor particular de [materia]. Soy visual y me gustan los memes. Explícame [tema] usando 3 ejemplos de la vida real y un dibujo ASCII"
      </div>
      <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 10px; margin: 15px 0;">
        <strong>Para crear:</strong><br>
        "Inventa un [superhéroe/videojuego/mundo] donde el poder principal esté relacionado con [tema de estudio]. Incluye: nombre, habilidades, enemigos y twist plot"
      </div>
      <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 10px; margin: 15px 0;">
        <strong>Para resumir:</strong><br>
        "Resume esto en 3 emojis y una frase de TikTok que suene trending"
      </div>`
  },
  {
    number: "07",
    title: "Ventajas y límites (muy importantes)",
    content: [
      "<strong>✅ Ventajas que te van a salvar:</strong><br>• Disponible 24/7 (no como tu profe)<br>• No juzga tus preguntas 'tontas'<br>• Puede explicar mil veces sin enfadarse<br>• Ayuda con creatividad bloqueada<br>• Gratuito o muy barato<br>• Se adapta a tu estilo de aprendizaje",
      "<strong>❌ Límites que debes conocer:</strong><br>• Puede inventar 'fakts' que suenan reales<br>• No tiene sentido común humano<br>• No reemplaza el pensamiento crítico<br>• A veces es como hablar con un político: muchas palabras, poca sustancia<br>• Puede tener sesgos de los datos con los que entrenó<br>• No entiende emociones como los humanos"
    ],
    special: "example-box",
    specialContent: `<h3>🚨 Casos de "IA fallando graciosamente":</h3>
      <ul>
        <li>IA que inventó que el chocolate derretía a -20°C</li>
        <li>Chatbot que recomendó comer rocas para el hierro</li>
        <li>IA que creó una biografía completa de una persona que no existe</li>
        <li>Modelo que insistió en que 2+2=5 porque "es más inclusivo"</li>
        <li>IA que sugirió usar pegamento en pizza para que los ingredientes no se cayeran</li>
      </ul>
      <p><strong>Moral:</strong> Verifica siempre información importante, especialmente para estudios o decisiones importantes!</p>`
  },
  {
    number: "08",
    title: "Ética y seguridad para jóvenes",
    content: [
      "<strong>🔒 Tu privacidad importa:</strong> Todo lo que escribes puede usarse para entrenar el modelo. No compartas contraseñas, direcciones, números de teléfono, o información personal que pueda identificarte.",
      "<strong>⚖️ Sesgos que pueden afectarte:</strong> Los modelos aprenden de internet, incluyendo prejuicios sobre género, raza, orientación, etc. Si notas respuestas discriminatorias o injustas, ¡denúncialas!<br><br><strong>🎭 Deepfakes y desinformación:</strong> La IA puede crear textos, imágenes y voces falsas que parecen reales. Aprende a detectarlas y no participes en su difusión."
    ],
    special: "app-box",
    specialContent: `<h3>📱 Código de ética joven-IA:</h3>
      <ol>
        <li><strong>Verifica:</strong> Si suena raro o demasiado bueno para ser verdad, confirma en otras fuentes</li>
        <li><strong>Protege tus datos:</strong> No des información personal ni de terceros</li>
        <li><strong>Se respetuoso:</strong> No uses IA para acosar, engañar o hacer daño</li>
        <li><strong>Da crédito:</strong> Si usas IA para crear algo, sé transparente</li>
        <li><strong>Mantén la curiosidad:</strong> Pregunta cómo funciona, no solo qué hace</li>
        <li><strong>Piensa críticamente:</strong> La IA no piensa por ti, solo ayuda</li>
      </ol>
      <br>
      <h3>🔍 Cómo detectar información falsa:</h3>
      <ul>
        <li>Busca la misma información en múltiples fuentes confiables</li>
        <li>Comprueba si el sitio web es legítimo (.edu, .gov, medios reconocidos)</li>
        <li>Si es una imagen, usa búsqueda inversa de Google</li>
        <li>Mira la fecha de publicación: ¿es actual o muy antigua?</li>
      </ul>`
  },
  {
    number: "09",
    title: "El futuro de la IA en tu vida",
    content: [
      "<strong>🚀 Profesiones que NO existen aún:</strong> Prompt Engineer, AI Ethicist, Human-AI Interaction Designer, AI Personality Trainer, Algorithm Auditor. ¡Podrías ser pionero en una de ellas!<br><br><strong>🏫 Educación 2030:</strong> Profesores IA que conocen tu estilo de aprendizaje perfectamente, clases personalizadas al instante, exámenes que se adaptan a tu nivel en tiempo real.",
      "<strong>💼 Trabajo del futuro:</strong> Tu jefe será humano, pero tus compañeros serán IA. Aprenderás a delegar tareas a asistentes virtuales y a revisar su trabajo, como un supervisor de robots.<br><br><strong>🏠 Vida diaria:</strong> Asistentes que conocen tus emociones, te sugieren qué estudiar, cuándo descansar, qué comer, y te ayudan a mantener relaciones saludables."
    ],
    special: "example-box",
    specialContent: `<h3>🔮 Predicciones para tu generación:</h3>
      <div style="display: grid; gap: 20px;">
        <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 10px;">
          <strong>2025:</strong> Asistentes IA que reconocen tus emociones por tu voz y texto
        </div>
        <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 10px;">
          <strong>2027:</strong> Amigos virtuales que evolucionan contigo y tienen personalidad propia
        </div>
        <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 10px;">
          <strong>2030:</strong> Trabajos híbridos humano-IA en todos los sectores
        </div>
        <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 10px;">
          <strong>2035:</strong> Creatividad aumentada: tú + IA = superpoder colaborativo
        </div>
        <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 10px;">
          <strong>2040:</strong> ¿IA con conciencia? El debate ético más importante del siglo
        </div>
      </div>`
  },
  {
    number: "10",
    title: "Actividades prácticas para probar YA",
    content: [
      "<strong>🎲 Aventura interactiva:</strong> 'Crea una historia de aventuras donde yo sea el protagonista. Voy en una misión para salvar el mundo de [tema que estés estudiando]. Dame opciones A, B, C en cada situación.'",
      "<strong>🧠 Estudio gamificado:</strong> 'Convierte estos apuntes de [materia] en un juego de preguntas tipo Trivial Pursuit. Hazlo competitivo con puntos y niveles.'<br><br><strong>🎨 Proyecto creativo:</strong> 'Diseña un videojuego indie con personajes únicos, historia épica y mecánicas innovadoras. Incluye arte conceptual y soundtrack.'",
      "<strong>💡 Startup simulator:</strong> 'Tengo 16 años y quiero crear mi primera empresa. Ayúdame a idear un negocio digital que resuelva un problema real en mi instituto. Dame el plan de negocio completo.'"
    ],
    special: "app-box",
    specialContent: `<h3>🎯 Reto creativo semanal:</h3>
      <div style="display: grid; gap: 15px;">
        <div style="background: rgba(255,255,255,0.05); padding: 15px; border-radius: 10px;">
          <strong>Semana 1:</strong> Crea un personaje con IA y mantén conversación diaria
        </div>
        <div style="background: rgba(255,255,255,0.05); padding: 15px; border-radius: 10px;">
          <strong>Semana 2:</strong> Inventa un juego de mesa con reglas creadas por IA
        </div>
        <div style="background: rgba(255,255,255,0.05); padding: 15px; border-radius: 10px;">
          <strong>Semana 3:</strong> Escribe una canción sobre [tema] con estilo de tu artista favorito
        </div>
        <div style="background: rgba(255,255,255,0.05); padding: 15px; border-radius: 10px;">
          <strong>Semana 4:</strong> Diseña tu app ideal y pide a IA que te ayude con el plan
        </div>
      </div>
      <br>
      <h3>🎮 Mini-juegos con IA:</h3>
      <ul>
        <li><strong>Adivina quién:</strong> "Piensa en un personaje famoso y házmelo adivinar con preguntas"</li>
        <li><strong>Historias locas:</strong> "Dame 3 palabras al azar y crearé una historia con ellas"</li>
        <li><strong>Debate:</strong> "Argumenta a favor de algo que odias y viceversa"</li>
        <li><strong>Traductor divertido:</strong> "Traduce esta frase pasando por 5 idiomas y volviendo al español"</li>
      </ul>`
  },
  {
    number: "10",
    title: "Glosario para sonar pro",
    content: [
      "<strong>Modelo de lenguaje:</strong> Como un diccionario mágico que no solo define palabras, sino que entiende cómo se relacionan entre sí y puede generar nuevas combinaciones.",
      "<strong>Token:</strong> La unidad mínima que entiende el modelo. Puede ser 'hola', 'perro' o incluso 'per' si la palabra está dividida. ¡Los emojis también son tokens!<br><br><strong>Machine Learning:</strong> Enseñar a ordenadores a aprender sin programar cada paso. Como enseñar a un perro, pero el perro es una computadora y los trucos son patrones.",
      "<strong>Inferencia:</strong> Cuando el modelo usa lo que aprendió para responder. Como cuando tú usas tu experiencia para resolver un problema nuevo.<br><br><strong>Dataset:</strong> El buffet de información con el que se alimenta la IA. Cuanto más variado y nutritivo, mejor 'aprende' el modelo."
    ],
    special: "example-box",
    specialContent: `<h3>🤓 Palabras que impresionan:</h3>
      <ul>
        <li><strong>Bias (sesgo):</strong> Cuando la IA tiene favoritos (y no debería)</li>
        <li><strong>Fine-tuning:</strong> Especializar un modelo para una tarea específica</li>
        <li><strong>Prompt engineering:</strong> El arte de hacer preguntas mágicas</li>
        <li><strong>Alucinación:</strong> Cuando la IA inventa cosas con total confianza</li>
        <li><strong>Transformer:</strong> La arquitectura que revolucionó la IA</li>
        <li><strong>Embedding:</strong> Representar palabras como números para que la IA entienda</li>
        <li><strong>Temperature:</strong> Qué tan creativa o predecible es la IA (0.1 = aburrida, 1.0 = loca)</li>
      </ul>
      <br>
      <h3>📚 Frases para impresionar a tus amigos:</h3>
      <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 10px; margin: 15px 0;">
        "Estoy ajustando la temperature del modelo para obtener respuestas más creativas"
      </div>
      <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 10px; margin: 15px 0;">
        "El embedding de ese concepto está muy bien representado en el espacio vectorial"
      </div>
      <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 10px; margin: 15px 0;">
        "Cuidado con el sesgo de confirmación en los datos de entrenamiento"
      </div>`
  },
  {
    number: "11",
    title: "Referencias",
    content: [
      "Aquí encontrarás las fuentes consultadas para crear esta guía. Todas las referencias siguen el formato APA 7ª edición, el estándar académico más utilizado."
    ],
    special: "references-apa",
    specialContent: `<div class="reference-item">
      Brown, T., Mann, B., Ryder, N., Subbiah, M., Kaplan, J. D., Dhariwal, P., ... & Amodei, D. (2020). <strong>Language models are few-shot learners</strong>. <em>Advances in neural information processing systems</em>, 33, 1877-1901.
    </div>
    
    <div class="reference-item">
      OpenAI. (2023). <strong>GPT-4 technical report</strong>. <em>arXiv preprint arXiv:2303.08774</em>.
    </div>
    
    <div class="reference-item">
      Touvron, H., Lavril, T., Izacard, G., Martinet, X., Lachaux, M. A., Lacroix, T., ... & Lample, G. (2023). <strong>LLaMA: Open and efficient foundation language models</strong>. <em>arXiv preprint arXiv:2302.13971</em>.
    </div>
    
    <div class="reference-item">
      Weidinger, L., Mellor, J., Rauh, M., Griffin, C., Uesato, J., Huang, P. S., ... & Gabriel, I. (2021). <strong>Ethical and social risks of harm from language models</strong>. <em>arXiv preprint arXiv:2112.04359</em>.
    </div>
    
    <div class="reference-item">
      Bommasani, R., Hudson, D. A., Adeli, E., Altman, R., Arora, S., von Arx, S., ... & Liang, P. (2021). <strong>On the opportunities and risks of foundation models</strong>. <em>arXiv preprint arXiv:2108.07258</em>.
    </div>
    
    <div class="reference-item">
      Perez, E., Ringer, S., Lukošiūtė, K., Nguyen, K., Chen, E., Heiner, S., ... & Kaplan, J. (2022). <strong>Discovering language model behaviors with model-written evaluations</strong>. <em>arXiv preprint arXiv:2212.09251</em>.
    </div>
    
    <div class="reference-item">
      Floridi, L., & Chiriatti, M. (2020). <strong>GPT-3: Its nature, scope, limits, and consequences</strong>. <em>Minds and Machines</em>, 30(4), 681-694.
    </div>
    
    <div class="reference-item">
      McTear, M., Callejas, Z., & Griol, D. (2016). <strong>The conversational interface: Talking to smart devices</strong>. Springer.
    </div>
    
    <div class="reference-item">
      Jurafsky, D., & Martin, J. H. (2020). <strong>Speech and language processing: An introduction to natural language processing, computational linguistics, and speech recognition</strong> (3rd ed.). Stanford University.
    </div>
    
    <div class="reference-item">
      Russell, S., & Norvig, P. (2020). <strong>Artificial intelligence: A modern approach</strong> (4th ed.). Pearson.
    </div>
    
    <div class="reference-item">
      Goodfellow, I., Bengio, Y., & Courville, A. (2016). <strong>Deep learning</strong>. MIT Press.
    </div>
    
    <div class="reference-item">
      Vaswani, A., Shazeer, N., Parmar, N., Uszkoreit, J., Jones, L., Gomez, A. N., ... & Polosukhin, I. (2017). <strong>Attention is all you need</strong>. <em>Advances in neural information processing systems</em>, 30.
    </div>`
  }
];

let currentPage = 0;

// ELEMENTOS DEL DOM
const coverScreen = document.getElementById('cover');
const bookContainer = document.querySelector('.book-container');
const toc = document.getElementById('toc');
const openBookBtn = document.getElementById('openBook');
const backToCoverBtn = document.getElementById('backToCover');
const tocToggleBtn = document.getElementById('tocToggle');
const closeTocBtn = document.getElementById('closeToc');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const tocItems = document.querySelectorAll('.toc-item');
const pageContent = document.getElementById('pageContent');
const chapterNumber = document.querySelector('.chapter-number');
const chapterTitle = document.querySelector('.page-header h2');
const pageNumber = document.querySelector('.page-number');

// ABRIR LIBRO
openBookBtn.addEventListener('click', () => {
  coverScreen.classList.add('hidden');
  setTimeout(() => {
    bookContainer.classList.remove('hidden');
  }, 600);
});

// VOLVER A PORTADA
backToCoverBtn.addEventListener('click', () => {
  bookContainer.classList.add('hidden');
  toc.classList.add('hidden');
  setTimeout(() => {
    coverScreen.classList.remove('hidden');
  }, 600);
});

// TOGGLE ÍNDICE
tocToggleBtn.addEventListener('click', () => {
  toc.classList.toggle('hidden');
});

closeTocBtn.addEventListener('click', () => {
  toc.classList.add('hidden');
});

// CERRAR ÍNDICE AL HACER CLICK FUERA
document.addEventListener('click', (e) => {
  if (!toc.contains(e.target) && !tocToggleBtn.contains(e.target)) {
    toc.classList.add('hidden');
  }
});

// ACTUALIZAR PÁGINA
function updatePage() {
  const content = bookContent[currentPage];
  
  // Animación de transición
  const page = document.querySelector('.single-page');
  page.classList.add('page-transition');
  setTimeout(() => page.classList.remove('page-transition'), 600);
  
  // Actualizar contenido
  chapterNumber.textContent = content.number;
  chapterTitle.textContent = content.title;
  
  pageContent.innerHTML = content.content.map(p => `<p>${p}</p>`).join('');
  
  if (content.special) {
    const specialDiv = document.createElement('div');
    specialDiv.className = content.special;
    specialDiv.innerHTML = content.specialContent;
    pageContent.appendChild(specialDiv);
  }
  
  // Actualizar número de página
  pageNumber.textContent = currentPage + 1;
  
  // Actualizar barra de progreso
  const progress = ((currentPage + 1) / bookContent.length) * 100;
  document.querySelector('.progress-fill').style.width = `${progress}%`;
  
  // Actualizar navegación
  prevBtn.disabled = currentPage === 0;
  nextBtn.disabled = currentPage === bookContent.length - 1;
  
  // Actualizar indicador de capítulo
  document.getElementById('currentChapter').textContent = `Capítulo ${currentPage + 1}`;
  
  // Actualizar dots
  document.querySelectorAll('.dot').forEach((dot, index) => {
    dot.classList.toggle('active', index === currentPage);
  });
  
  // Actualizar índice
  tocItems.forEach((item, index) => {
    item.classList.toggle('active', index === currentPage);
  });
}

// NAVEGACIÓN
prevBtn.addEventListener('click', () => {
  if (currentPage > 0) {
    currentPage--;
    updatePage();
  }
});

nextBtn.addEventListener('click', () => {
  if (currentPage < bookContent.length - 1) {
    currentPage++;
    updatePage();
  }
});

// NAVEGACIÓN POR TECLADO
document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowRight' && currentPage < bookContent.length - 1) {
    currentPage++;
    updatePage();
  } else if (e.key === 'ArrowLeft' && currentPage > 0) {
    currentPage--;
    updatePage();
  } else if (e.key === 'Escape') {
    // Presionar ESC para volver a portada
    backToCoverBtn.click();
  }
});

// ÍNDICE INTERACTIVO
tocItems.forEach((item, index) => {
  item.addEventListener('click', () => {
    currentPage = index;
    updatePage();
    toc.classList.add('hidden');
  });
});

// INICIALIZAR
updatePage();

// LUZ AMBIENTAL CON MOUSE
document.addEventListener('mousemove', (e) => {
  const light = document.querySelector('.ambient-light');
  const x = (e.clientX / window.innerWidth - 0.5) * 50;
  const y = (e.clientY / window.innerHeight - 0.5) * 50;
  light.style.transform = `translate(${x}%, ${y}%)`;
});