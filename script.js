// script.js
const bookContent = [
  {
    number: "01",
    title: "¿Qué es la Inteligencia Artificial?",
    content: [
      "La Inteligencia Artificial (IA) es la disciplina que busca que las máquinas logren realizar tareas que normalmente requieren inteligencia humana: aprender, tomar decisiones, resolver problemas, entender lenguaje, identificar imágenes o adaptarse a nuevas situaciones. Aunque parezca un concepto moderno, la IA es el resultado de décadas de investigación en matemáticas, computación, estadística y psicología.",
      "En la vida cotidiana, usamos IA constantemente sin darnos cuenta. Cuando TikTok te recomienda vídeos que parecen hechos “a tu medida”, cuando Netflix te sugiere series basadas en lo que has visto, o cuando Google Maps calcula la ruta más rápida, estás interactuando con sistemas de IA. Estas tecnologías analizan tus comportamientos y aprenden patrones que les permiten ofrecer resultados más útiles.",
      "La IA no piensa ni siente como un humano; no posee intenciones ni conciencia. Funciona mediante algoritmos que procesan datos y encuentran patrones que le permiten “predecir” o tomar decisiones. Por eso, es importante entender que la IA es una herramienta poderosa, pero sigue siendo una herramienta: necesita instrucciones, límites, supervisión y un uso responsable."
    ],
    special: "example-box",
    specialContent: `<h3>🎮 Ejemplos cotidianos de IA que usas TODO EL TIEMPO:</h3>
      <ul>
        <li><strong>TikTok:</strong> Su algoritmo aprende qué videos te gustan en 15 minutos</li>
        <li><strong>Netflix:</strong> Te sugiere series basadas en lo que has visto</li>
        <li><strong>Google Maps:</strong> Calcula la ruta más rápida en tiempo real</li>
        <li><strong>Instagram:</strong> Los filtros usan IA para reconocer tu cara</li>
        <li><strong>Spotify:</strong> Crea playlists que parecen leer tu mente</li>
      </ul>
      <br>
      <h3>🧠 ¿Cómo funciona esta "magia"?</h3>
      <p>La IA analiza millones de datos sobre ti: qué miras, cuánto tiempo, qué compartes, qué ignoras... y encuentra patrones. Es como tener un amigo que te observa tanto que sabe qué vas a decir antes de que lo digas, pero en versión supercomputadora.</p>`
  },
  {
    number: "02",
    title: "¿Qué es la IA Conversacional?",
    content: [
      "La IA conversacional es un tipo de inteligencia artificial diseñada para comunicarse con personas usando lenguaje natural, ya sea por texto o por voz. Su objetivo principal es mantener una conversación fluida, coherente y útil, como si estuvieras hablando con otra persona.",
      "Los modelos actuales, como ChatGPT, Llama y Claude, son capaces de comprender matices, seguir un hilo de conversación, adaptarse a tu estilo de comunicación e incluso resolver problemas complejos siguiendo instrucciones. A diferencia de los antiguos chatbots que respondían con frases predefinidas, estos modelos pueden generar respuestas nuevas que nunca antes habían sido escritas, basándose únicamente en lo aprendido.",
      "La IA conversacional se utiliza en una enorme variedad de áreas: atención médica, educación, entretenimiento, atención al cliente, desarrollo de software, creación artística, videojuegos, entre muchas otras. Los jóvenes encuentran en ella una herramienta para estudiar mejor, aprender nuevas habilidades, diseñar proyectos creativos, emprender o simplemente explorar ideas sin límites."
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
        <li>Entienden lenguaje natural</li>
      </ul>
    </div>
    <br>
    <h3>📱 ¿Dónde los encuentras en tu vida diaria?</h3>
    <ul>
      <li><strong>ChatGPT:</strong> Tu asistente universal para todo</li>
      <li><strong>Snapchat My AI:</strong> Tu amigo virtual que responde a tus historias</li>
      <li><strong>Discord Clyde:</strong> Moderación y ayuda en servidores</li>
      <li><strong>Asistentes de estudio:</strong> Explicaciones personalizadas, resúmenes, ejercicios</li>
    </ul>`
  },
  {
    number: "03",
    title: "¿Cómo funciona un modelo conversacional?",
    content: [
      "Para comprender cómo funcionan estos modelos, es importante saber que no “piensan” ni “entienden” el mundo como lo hacemos los humanos. Lo que hacen es detectar patrones estadísticos en grandes cantidades de texto.",
      "Un modelo conversacional se entrena leyendo enormes volúmenes de información: libros, artículos, páginas web, código, conversaciones, etc. A medida que procesa estos datos, va aprendiendo relaciones entre palabras, frases y conceptos. Este proceso se divide en varias etapas:",
      "<strong>1. Entrenamiento:</strong> Durante esta etapa, el modelo observa millones de ejemplos. Aprende que después de la frase “Érase una vez” suele venir una historia, o que la palabra “perro” se asocia a “animal”, “mascota”, “ladrar”, etc. No memoriza textos exactos; más bien aprende patrones y probabilidades.",
      "<strong>2. Inferencia:</strong> Es el momento en el que tú le haces una pregunta. El modelo intenta predecir cuál es la mejor secuencia de palabras para responderte, basándose en todo lo que aprendió. Esto ocurre en milisegundos.",
      "<strong>3. Ajuste fino (fine-tuning):</strong> Después del entrenamiento inicial, los desarrolladores ajustan el modelo con ejemplos diseñados por humanos para que responda de forma útil, segura y coherente.",
      "<strong>4. Aprendizaje por refuerzo basado en retroalimentación humana (RLHF):</strong> Personas reales califican respuestas del modelo y este aprende cuáles son mejores. Así se vuelve más conversacional, más seguro y más útil.",
      "En resumen: los modelos conversacionales funcionan como predictores avanzados que transforman patrones en respuestas."
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
      "La idea de hablar con máquinas comenzó hace más de 60 años. En 1966, Joseph Weizenbaum creó ELIZA, un programa capaz de simular una conversación terapéutica usando reglas simples. Aunque primitivo, demostró que la interacción humano-máquina era posible.",
      "En los años siguientes surgieron chatbots con enfoques más sofisticados, pero seguían basados en reglas rígidas. Programas como ALICE o Cleverbot ganaron popularidad, pero carecían de verdadera comprensión.",
      "El cambio radical llegó con los asistentes inteligentes: Siri (2011), Google Assistant (2016) y Alexa (2014). Permitían controlar dispositivos y responder preguntas básicas con la voz.",
      "La verdadera revolución comenzó con la llegada de los Modelos de Lenguaje Grande (LLMs), como GPT-3 en 2020. Por primera vez, una IA podía generar texto coherente, adaptarse al contexto y realizar tareas complejas con alto nivel de calidad.",
      "Desde entonces, cada año aparecen nuevas versiones más potentes, con mejor razonamiento, mayor capacidad de comprensión y usos más amplios."
    ],
    special: "app-box",
    specialContent: `<h3>🚀 La evolución de los modelos:</h3>
      <ul>
        <li><strong>1966 - ELIZA:</strong> La primera "terapeuta" digital</li>
        <li><strong>1995 - ALICE:</strong> Chatbot con reglas más avanzadas</li>
        <li><strong>2011 - Siri:</strong> Asistente por voz en iPhone</li>
        <li><strong>2014 - Alexa:</strong> Asistente para el hogar</li>
        <li><strong>2016 - Google Assistant:</strong> Integración con servicios Google</li>
        <li><strong>2020 - GPT-3:</strong> Salto cualitativo en generación de texto</li>
        <li><strong>2022 - ChatGPT:</strong> Revolución popular de la IA conversacional</li>
        <li><strong>2023 - GPT-4:</strong> Multimodal y mucho más preciso</li>
      </ul>
      <br>
      <h3>📅 Línea del tiempo divertida:</h3>
      <p><strong>1966:</strong> ELIZA → <strong>1995:</strong> ALICE → <strong>2011:</strong> Siri → <strong>2014:</strong> Alexa → <strong>2016:</strong> Google Assistant → <strong>2022:</strong> ChatGPT → <strong>2023:</strong> ¡Explosión de modelos!</p>`
  },
  {
    number: "05",
    title: "¿Por qué es tan importante la IA Conversacional?",
    content: [
      "La IA conversacional democratiza el acceso al conocimiento. Significa que cualquier joven, sin importar su contexto, puede tener acceso a:",
      "• Un tutor personal disponible 24/7<br>• Un asistente creativo<br>• Un compañero para practicar idiomas<br>• Un entrenador para aprender nuevas habilidades<br>• Un motor para explorar ideas científicas, artísticas o tecnológicas",
      "Además, permite automatizar tareas repetitivas, mejorar la productividad y potenciar la creatividad humana. Pero lo más importante es que abre oportunidades. Jóvenes que antes no tenían acceso a cursos de programación, asesorías académicas o aprendizaje autodidacta ahora pueden aprender prácticamente cualquier cosa con una herramienta accesible e intuitiva."
    ],
    special: "example-box",
    specialContent: `<h3>🌍 Democratización del conocimiento:</h3>
      <ul>
        <li><strong>Acceso gratuito:</strong> Cualquier persona con internet puede acceder</li>
        <li><strong>Personalización:</strong> Se adapta a tu nivel y estilo de aprendizaje</li>
        <li><strong>Multilingüe:</strong> Habla casi todos los idiomas</li>
        <li><strong>24/7:</strong> Siempre disponible, nunca se cansa</li>
        <li><strong>Judgement-free:</strong> No juzga tus preguntas "tontas"</li>
      </ul>
      <br>
      <h3>📈 Oportunidades para jóvenes:</h3>
      <p>• Aprender programación sin profesor<br>• Crear arte sin saber dibujar<br>• Escribir música sin conocer teoría<br>• Emprender sin capital inicial<br>• Estudiar para exámenes con tutor personal</p>`
  },
  {
    number: "06",
    title: "Aplicaciones reales en la vida cotidiana",
    content: [
      "La IA conversacional está en casi todos los sectores:",
      "<strong>📚 Educación:</strong><br>• Explica temas difíciles con ejemplos personalizados.<br>• Crea resúmenes, mapas conceptuales, ejercicios.<br>• Ayuda a preparar exámenes o exposiciones.",
      "<strong>🎨 Creatividad:</strong><br>• Genera historias, canciones, poemas, guiones.<br>• Ayuda a diseñar personajes o mundos ficticios.<br>• Inspira ideas para videos o proyectos artísticos.",
      "<strong>💻 Programación:</strong><br>• Explica código.<br>• Sugiere soluciones.<br>• Detecta errores.<br>• Genera scripts para automatizar tareas.",
      "<strong>📞 Atención al cliente:</strong><br>Chatbots que resuelven dudas, procesan pedidos, dan soporte técnico o realizan trámites.",
      "<strong>🏥 Salud (uso responsable):</strong><br>Sistemas que brindan acompañamiento emocional o apoyo básico, aunque nunca sustituyen a un profesional.",
      "<strong>🎮 Videojuegos:</strong><br>NPCs que responden de manera dinámica y ofrecen experiencias más inmersivas."
    ],
    special: "example-box",
    specialContent: `<h3>💡 Startups juveniles reales con IA:</h3>
      <ul>
        <li><strong>Teen crea app:</strong> Usó IA para generar ideas y código, vendió 1000 descargas</li>
        <li><strong>Tutor IA:</strong> Estudiante creó chatbot para ayudar con mates, ahora lo usan 50 compañeros</li>
        <li><strong>Arte digital:</strong> Vende NFTs creados con ayuda de IA</li>
        <li><strong>Contenido:</strong> Gestiona redes sociales de negocios locales usando IA</li>
      </ul>
      <br>
      <h3>🎯 Ideas para tu próximo proyecto:</h3>
      <p>• Asistente de estudio personalizado<br>• Generador de historias interactivas<br>• Mentor de idiomas con conversación real<br>• Tutor de matemáticas que explica con memes<br>• App que resume libros en formato TikTok</p>`
  },
  {
    number: "07",
    title: "Cómo escribir buenos prompts",
    content: [
      "El prompting es la habilidad de dar instrucciones claras a la IA. Un buen prompt puede transformar la calidad de la respuesta.",
      "Estructura útil para prompts:",
      "<strong>🎭 Rol:</strong> Define quién debe ser la IA.<br>“Eres un profesor de matemáticas que explica a jóvenes.”",
      "<strong>🎯 Tarea:</strong> Qué debe hacer.<br>“Explícame cómo resolver ecuaciones cuadráticas.”",
      "<strong>📋 Contexto:</strong> Para qué lo necesitas.<br>“Lo necesito para estudiar para un examen mañana.”",
      "<strong>📝 Estilo y formato:</strong> Cómo debe presentarse.<br>“Hazlo en 3 párrafos con ejemplos sencillos.”",
      "<strong>🚫 Restricciones:</strong> Lo que debe evitar.<br>“No uses lenguaje técnico difícil.”",
      "El arte de pedir es el arte de obtener mejores respuestas."
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
      </div>
      <br>
      <h3>🎯 Ejemplo de transformación:</h3>
      <p><strong>Malo:</strong> "Cuéntame sobre historia"<br>
      <strong>Bueno:</strong> "Actúa como un profesor de 4º de ESO. Explícame la Guerra Civil española usando analogías con TikTok y youtubers. Usa emojis y hazlo en 10 líneas."</p>`
  },
  {
    number: "08",
    title: "Ventajas y límites de la IA Conversacional",
    content: [
      "<strong>✅ Ventajas que te van a salvar:</strong><br>• Disponible 24/7 (no como tu profe)<br>• No juzga tus preguntas 'tontas'<br>• Puede explicar mil veces sin enfadarse<br>• Ayuda con creatividad bloqueada<br>• Gratuito o muy barato<br>• Se adapta a tu estilo de aprendizaje",
      "<strong>❌ Límites que debes conocer:</strong><br>• Puede inventar 'fakts' que suenan reales<br>• No tiene sentido común humano<br>• No reemplaza el pensamiento crítico<br>• A veces es como hablar con un político: muchas palabras, poca sustancia<br>• Puede tener sesgos de los datos con los que entrenó<br>• No entiende emociones como los humanos",
      "Entender estos límites ayuda a usar la IA de forma más crítica y responsable."
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
    number: "09",
    title: "Ética y seguridad en la IA",
    content: [
      "A medida que la IA avanza, también lo hacen los desafíos éticos. Es necesario desarrollar conciencia crítica sobre:",
      "<strong>🔒 Privacidad:</strong><br>¿Qué datos compartes? ¿Quién los usa?<br>Es importante no revelar información personal sensible.",
      "<strong>⚖️ Sesgos:</strong><br>La IA aprende del mundo y, por lo tanto, puede repetir estereotipos o discriminación si no está bien diseñada.",
      "<strong>📰 Fake news y desinformación:</strong><br>La IA puede generar información convincente, por lo que debemos verificar datos y practicar pensamiento crítico.",
      "<strong>🌍 Impacto social:</strong><br>Desde trabajos automatizados hasta nuevas oportunidades laborales, la IA transformará la sociedad.",
      "La ética en IA significa usar la tecnología para crear valor, no para dañar."
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
    number: "10",
    title: "La IA Conversacional en el futuro",
    content: [
      "En los próximos años, veremos sistemas capaces de:",
      "• Entender mejor el contexto emocional<br>• Adaptarse a cada usuario de forma profunda<br>• Combinar texto, voz, imágenes y video<br>• Colaborar con estudiantes, docentes, emprendedores y científicos<br>• Generar experiencias educativas hiperpersonalizadas",
      "En medicina ayudará a diagnosticar, en ingeniería a diseñar, en arte a crear y en videojuegos a vivir mundos más inmersivos.",
      "Los jóvenes no solo serán usuarios, sino creadores de estas tecnologías. El futuro lo construiremos entre todos, y la IA conversacional será nuestra herramienta más poderosa."
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
    number: "11",
    title: "Actividades prácticas para jóvenes",
    content: [
      
    ],
    special: "app-box",
    specialContent: `<!---->
<div class="page single-page">
  <div class="page-glow"></div>

  <main class="page-content">
    <!-- Glosario -->
    <div class="glossary-box">
      <h3>📚 Palabras que ya sabes usar:</h3>
      <ul>
        <li><strong>IA Generativa:</strong> IA que crea contenido (texto, imágenes, música…)</li>
        <li><strong>LLM:</strong> Modelo de lenguaje grande que entiende y genera texto</li>
        <li><strong>Token:</strong> Fragmento mínimo de texto (palabra, sílaba, emoji)</li>
        <li><strong>Prompt:</strong> Instrucción que le das a la IA</li>
        <li><strong>Sesgo:</strong> Tendencia injusta aprendida de los datos</li>
        <li><strong>Fine-tuning:</strong> Entrenamiento extra para especializar al modelo</li>
      </ul>
    </div>

    <!-- Actividad integrada -->
    <div class="activity-card">
      <div class="activity-icon">💬</div>
      <h3>Crear mi primer chatbot</h3>
      <p>Paso a paso, sin código, con herramientas gratuitas. Perfecto para principiantes.</p>
      <a href="chatbot-activity.html" class="activity-btn" target="_blank">
        Ir a la actividad →
      </a>
    </div>

    <!-- Frases para impresionar -->
    <div class="example-box">
      <h4>Frases para impresionar a tus amigos:</h4>
      <div class="cool-phrase">"Estoy ajustando la temperature del modelo para obtener respuestas más creativas"</div>
      <div class="cool-phrase">"El embedding de ese concepto está muy bien representado en el espacio vectorial"</div>
    </div>
  </main>

</div>`
  },
  {
    number: "12",
    title: "Glosario esencial",
    content: [
      "Explicaciones claras para términos clave:",
      "<strong>🤖 IA Generativa:</strong> IA que crea contenido (texto, imágenes, música, etc.)",
      "<strong>📖 LLM:</strong> Modelo de lenguaje grande capaz de generar y comprender texto",
      "<strong>🧩 Token:</strong> Fragmento de texto usado en el procesamiento (puede ser una palabra, parte de una palabra, o un emoji)",
      "<strong>💬 Prompt:</strong> Instrucción que le das a la IA",
      "<strong>🎯 Inferencia:</strong> Momento en que la IA genera una respuesta",
      "<strong>⚖️ Sesgo:</strong> Tendencia injusta o inclinación aprendida de los datos",
      "<strong>🧠 Red Neuronal:</strong> Modelo inspirado en el cerebro humano",
      "<strong>🔧 Fine-tuning:</strong> Entrenamiento adicional para mejorar el modelo en tareas específicas",
      "<strong>📊 Datos de entrenamiento:</strong> Información usada para enseñar a la IA",
      "<strong>📝 Contexto:</strong> Información previa de la conversación que ayuda a entender mejor",
      "<strong>🌈 Modelo multimodal:</strong> Modelo que entiende más de un tipo de dato (texto, imagen, audio)"
    ],
    special: "example-box",
    specialContent: `<h3>📚 Frases para impresionar a tus amigos:</h3>
      <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 10px; margin: 15px 0;">
        "Estoy ajustando la temperature del modelo para obtener respuestas más creativas"
      </div>
      <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 10px; margin: 15px 0;">
        "El embedding de ese concepto está muy bien representado en el espacio vectorial"
      </div>
      <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 10px; margin: 15px 0;">
        "Cuidado con el sesgo de confirmación en los datos de entrenamiento"
      </div>
      <br>
      <h3>🎓 Tu misión: ¡Úsalas con sabiduría!</h3>
      <p>Ahora que conoces estos términos, eres parte de la comunidad de personas que entienden cómo funciona la IA. Comparte este conocimiento y ayuda a otros a entender esta tecnología que está cambiando el mundo.</p>`
  },{
    number: "12",
    title: "Realidad Aumentada + IA conversacional",
    content: [
      "La Realidad Aumentada (RA) superpone objetos digitales al mundo real a través de tu cámara. Al combinarla con IA conversacional, puedes crear experiencias donde personajes 3D hablan contigo en tiempo real.",
      "En esta actividad construirás un personaje 3D que aparece en tu habitación y responde a tus preguntas. No necesitas programar: solo configurar y probar.",
      "Paso a paso: 1) Activa la cámara RA, 2) Coloca tu modelo 3D, 3) Habla con él/ella, 4) La IA genera la respuesta y la muestra en pantalla.",
      "WebXR + Three.js hacen posible la RA desde el navegador. OpenAI (o cualquier LLM) genera las respuestas. El resultado: un asistente 3D que vive en tu casa."
    ],
    special: "activity-ra",
    specialContent: `<div class="activity-card">
      <div class="activity-icon">🥽</div>
      <h3>Actividad: RA + IA conversacional</h3>
      <p>Crea un personaje 3D que aparece en tu habitación y habla contigo en tiempo real.</p>
      <a href="RA-activity.html" class="activity-btn" target="_blank">Ir a la actividad →</a>
    </div>`
  },
  {
    number: "13",
    title: "Referencias (APA 7)",
    content: [
      "A continuación encontrarás las fuentes consultadas para elaborar esta guía, en formato APA 7ª edición."
    ],
    special: "references-apa",
    specialContent: `<div class="references-apa">
      <div class="reference-item">Brown, T., Mann, B., Ryder, N., Subbiah, M., Kaplan, J. D., Dhariwal, P., ... & Amodei, D. (2020). <strong>Language models are few-shot learners</strong>. <em>Advances in neural information processing systems</em>, 33, 1877-1901.</div>
      <div class="reference-item">OpenAI. (2023). <strong>GPT-4 technical report</strong>. <em>arXiv preprint arXiv:2303.08774</em>.</div>
      <div class="reference-item">Touvron, H., Lavril, T., Izacard, G., Martinet, X., Lachaux, M. A., Lacroix, T., ... & Lample, G. (2023). <strong>LLaMA: Open and efficient foundation language models</strong>. <em>arXiv preprint arXiv:2302.13971</em>.</div>
      <div class="reference-item">Weidinger, L., Mellor, J., Rauh, M., Griffin, C., Uesato, J., Huang, P. S., ... & Gabriel, I. (2021). <strong>Ethical and social risks of harm from language models</strong>. <em>arXiv preprint arXiv:2112.04359</em>.</div>
      <div class="reference-item">Bommasani, R., Hudson, D. A., Adeli, E., Altman, R., Arora, S., von Arx, S., ... & Liang, P. (2021). <strong>On the opportunities and risks of foundation models</strong>. <em>arXiv preprint arXiv:2108.07258</em>.</div>
      <div class="reference-item">Perez, E., Ringer, S., Lukošiūtė, K., Nguyen, K., Chen, E., Heiner, S., ... & Kaplan, J. (2022). <strong>Discovering language model behaviors with model-written evaluations</strong>. <em>arXiv preprint arXiv:2212.09251</em>.</div>
      <div class="reference-item">Kocoń, J., Cichecki, I., Kaszyca, O., Kochanek, M., Szydło, D., Baran, J., ... & Kazienko, P. (2023). <strong>ChatGPT: Jack of all trades, master of none</strong>. <em>Information Fusion</em>, 99, 101861.</div>
      <div class="reference-item">Floridi, L., & Chiriatti, M. (2020). <strong>GPT-3: Its nature, scope, limits, and consequences</strong>. <em>Minds and Machines</em>, 30(4), 681-694.</div>
      <div class="reference-item">McTear, M., Callejas, Z., & Griol, D. (2016). <strong>The conversational interface: Talking to smart devices</strong>. Springer.</div>
      <div class="reference-item">Jurafsky, D., & Martin, J. H. (2020). <strong>Speech and language processing: An introduction to natural language processing, computational linguistics, and speech recognition</strong> (3rd ed.). Stanford University.</div>
      <div class="reference-item">Russell, S., & Norvig, P. (2020). <strong>Artificial intelligence: A modern approach</strong> (4th ed.). Pearson.</div>
      <div class="reference-item">Goodfellow, I., Bengio, Y., & Courville, A. (2016). <strong>Deep learning</strong>. MIT Press.</div>
      <div class="reference-item">Vaswani, A., Shazeer, N., Parmar, N., Uszkoreit, J., Jones, L., Gomez, A. N., ... & Polosukhin, I. (2017). <strong>Attention is all you need</strong>. <em>Advances in neural information processing systems</em>, 30.</div>
    </div>`
  }
];

let currentPage = 0;

// ELEMENTOS DEL DOM
const coverScreen = document.getElementById('cover');
const bookContainer = document.querySelector('.book-container');
const tocPanel = document.getElementById('tocPanel');
const tocOverlay = document.getElementById('tocOverlay');
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
  setTimeout(() => {
    coverScreen.classList.remove('hidden');
  }, 600);
});

// ABRIR/CERRAR ÍNDICE
tocToggleBtn.addEventListener('click', () => {
  tocPanel.classList.remove('hidden');
  tocOverlay.classList.remove('hidden');
});

closeTocBtn.addEventListener('click', closeToc);
tocOverlay.addEventListener('click', closeToc);

function closeToc() {
  tocPanel.classList.add('hidden');
  tocOverlay.classList.add('hidden');
}

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
  
  // Cerrar índice si está abierto
  closeToc();
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
    // Presionar ESC para volver a portada o cerrar índice
    if (!tocPanel.classList.contains('hidden')) {
      closeToc();
    } else {
      backToCoverBtn.click();
    }
  }
});

// ÍNDICE INTERACTIVO
tocItems.forEach((item, index) => {
  item.addEventListener('click', () => {
    currentPage = index;
    updatePage();
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
}

);