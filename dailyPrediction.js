//Lists of message bits that will go into the prediction message
let listOfObvious = [
    'probablemente estés respirando en este momento',
    'quisieras tener mucho más dinero del que tienes ahora',
    'el sol salío hoy y posiblemente lo hará de nuevo mañana',
    'no te gusta que te traten mal, y prefieres que te traten bien',
    'tienes preferencia a dormir durante la noche, que despertar de noche y dormir durante el día',
    'ya despertaste y no estas en un sueño en este momento',
    'lees esto sin estar conduciendo un auto,',
    'si el cielo es azul de día, estas en el universo paralelo correcto',
    'te gusta disfrutar de la vida y darte buenos gustos',
    'disfrutas comer, dormir bien y salir a comprar con mucho dinero',
    'prefieres los sabores dulces cuando vas por helados',
    'siempre usas algun tipo de zapato cuando sales de casa',
    'te gusta mas el frío cuando hace mucho calor, y quieres calor cuando hace mucho frío'
]

const listOfBarnum = [
    'puedes tomar difíciles decisiones, pero a veces tienes tus dudas',
    'amas a tu familia, pero a veces tienes problemas en entenderte con alguno de ellos',
    'sientes la necesidad de que otros te aprecien o admiren',
    'tienes muchas capacidades que no conoces y que no utilizas',
    'aunque tratas de parecer en control, escondes alguna preocupación o inseguridad',
    'tienes una tendencia a evaluarte y criticarte',
    'veces tienes serias dudas sobre si has tomado una decisión correcta',
    'puedes demostrar una personalidad sociable entre conocidos, pero muchas veces prefieres mantener reserva y distancia con extraños',
    'aunque sabes que tienes inseguridades y debilidades, generalmente tienes la capacidad de compensarlas'
]

const listOfAdviceVerb = [
    'publicar lo mejor de tu día en instagram para esconder tus inseguridades',
    'dar el 100% en cada cosa que hagas (excepto si donas sangre)',
    'no hacer nada que no quieras despues explicarle a los paramédicos',
    'no reirte de las decisiones de tu pareja (requerda que tu eres una de ellas)',
    'estar dispuesto a salir de tu vida planificada, para encontrarte con la vida que espera por ti',
    'tener siempre comida en tus bolsillos. Si ocurre algún tornado o desastre natural, los perros te encontraran primero',
    'abrir cada puerta antes de entrar a algun sitio de puerta cerrada para no golpearte',
    'no poner "https://" cada vez que abras un sitio web. Puedes guardarlo en unarchivo para copiar y pegar',
    ', no importa cuan bien huela tu jabon, no salir del baño oliendo tus dedos',
]

const listOfAdviceIf = [
    'si tienes miedo de hacer algo arriesgado, sólo espera unos segundos antes a ver si tu yo del futuro llega a detenerte',
    'si te duermes en el trabajo, levanta tu cabeza lentamente y di fuerte "Amen!" para que no te echen',
    'si comes galletas, por tener tan pocas vitaminas, debes comer muchas',
    'si sientes soledad, puedes comprar una tabla de ouija y hacer nuevos amigos',
    'si ves a alguien llorar, recuérdale que el pelo crece otra vez',
    'si sobrevives tus peores decisiones, estas se convierten en tus mejores historias',
    'sólo las gallinas logran algo quedándose sentadas sin hacer nada, a trabajar',
    'si en tu vida ves el vaso medio lleno, ponle hielo y whisky para mejorar el día'
]

const listOfColors = [
    'Negro Claro',
    'Negro Pálido',
    'Amarillo Relajante',
    'Rojo Frío',
    'Azul Cálido',
    'Blanco intenso',
    'Rojo Tanga',
    'Blanco Oscuro',
    'Gris Pasión',
]
// Randomize function allows to select a random element of a list array
const randomize = list => list[Math.floor(Math.random() * list.length)];

// Declare variables for prediction placeholders
let username, obvious, barnum, AdviceIf, adviceVerb, color, nameLetter1, nameLetter2;

obvious = randomize(listOfObvious);
barnum = randomize(listOfBarnum);
adviceIf = randomize(listOfAdviceIf);
adviceVerb = randomize(listOfAdviceVerb);
color = randomize(listOfColors)

// List of prediction message templates
const predictionTemplates = username => {
let templates = [
    `<p><strong>${username}</strong>, los astros me dicen que ${obvious}, lo cual se alínea con este momento porque mercurio esta retrógrado.</p><p> Hoy será un día relativamente positivo, visto desde el futuro hacia atrás, dentro de lo que cabe.</p><p> La segunda letra de tu nombre "${username[1]}", en conjunto con jupiter en sagitario, me indican que ${barnum}. Particularmente hoy <strong>${username}</strong>, ${adviceIf}. Enfócate en ${adviceVerb}.</p><p> <span class="underline">Color clave del día</span>: ${color}.</p>`,

    `<p>El universo me indica en este momento, <strong>${username}</strong>, que ${obvious}.</p><p> Puedes tener la tranquilidad de que hoy es un nuevo día y que mañana siempre vendrá otro si no mueres hoy.</p><p> Tu nombre empieza por "${username[0]}", lo que alineado con Piscis en Mercurio, que ${barnum}.</p><p> Por eso especialmente en este día hoy <strong>${username}</strong>, recuerda que ${adviceIf}. Consejo: ${adviceVerb}.</p><p> <span class="underline">Tu color clave para hoy</span>: ${color}.</p>`,

    `<p>La energía de la madre tierra me habla, <strong>${username}</strong>, y me indica que ${obvious}.</p><p> Tu nombre, desde la "${username[0]}" hasta la "${username[username.length-1]}", hablan de que ${barnum}. Por eso hoy tendrás un buen día si te enfocas sólo en lo positivo, y uno malo si te enfocas sólo en lo negativo.</p><p> Recuerda que ${adviceIf} y presta antención a ${adviceVerb}.</p><p> <span class="underline">Vístete de tu color clave para la buena suerte</span>: ${color}.</p>`,

    `<p>Puedo sentir tu mantra, <strong>${username}</strong>, me grita desde la energía eterna, que ${obvious}.</p><p> Los colores de tus chakras me indican que ${barnum}. Por eso <strong>${username}</strong>, antes de preocuparte, ocuparte.</p><p> Hoy especialmente ${adviceIf} y recuerda que es mejor ${adviceVerb}.</p><p> <span class="underline">Tu color de la suerte</span>: ${color}.</p>`,

    `<p>Me conecto con los códigos galácticos, hola <strong>${username}</strong>, hola gemela, hola seres telequinéticos. Las frecuencias vibracionales me indican que ${obvious}.</p><p> Ahhhna Ki na na le.</p><p> Tus planos los planos psíquicos energéticos me transmiten que ${barnum}. Por eso, escucha la electromagnética etérea <strong>${username}</strong>,  ${adviceIf} y recuerda hoy antes de que termine el día ${adviceVerb}. </p><p><span class="underline">Tu color de tu aura cósmica es</span>: ${color}.</p>`
    
    ];
    return randomize(templates);
}

//MyPrediction function puts all elements together and returns de random prediction
// const myPrediction = myName => predictionTemplates(myName);


// let myName = document.getElementById('fname').value;

// let button = document.getElementById("submit");

const myPrediction = () => {    
    let message = predictionTemplates(document.getElementById('fname').value);
    document.getElementById("prediction").innerHTML = message;
    console.log(message)

}

