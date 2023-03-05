let prediction;

//We store the different lists of message bits that will go into the final prediction
let listOfObvious = [
    'probablemente estés respirando en este momento',
    'quisieras tener mucho mas dinero del que tienes ahora',
    'el sol salío hoy y posiblemente lo hará de nuevo mañana',
    'no te gusta que te traten mal, y prefieres que te traten bien',
    'tienes preferencia a dormir durante la noche, en lugar de dormir durante el día',
    'ya despertaste y no estas en un sueño en este momento',
    'lees esto sin estar conduciendo un auto',
    'si el cielo es azul de día, estas en el universo paralelo correcto',
    'te gusta disfrutar de la vida y darte buenos gustos',
    'disfrutas comer, dormir bien salir a comprar con mucho dinero',
    'prefieres los sabores dulces cuando vas por helados',
    'siempre usas zapatos cuando sales de casa'


    
]

const listOfBarnum = [
    'puedes tomar dificiles decisiones, pero a veces tienes tus dudas',
    'amas a tu familia, pero a veces tienes problemas en entenderte con alguno de ellos',
    'sientes la necesidad de que otros te aprecien o admiren',
    'tienes muchas capacidades que no conoces y que no utilizas',
    'aunque tratas de parecer en control, escondes alguna preocupación o inseguridad',
    'tienes una tendencia a evaluarte y criticarte',
    'veces tienes serias dudas sobre si has tomado una decision correcta',
    'puedes demostrar una personalidad sociable entre conocidos, pero muchas veces prefieres mantener reserva y distancia con extraños',
    'aunque sabes que tienes inseguridades y debilidades, generalmente tienes la capacidad de compensarlas'
]

const listOfAdviceVerb = [
    'publicar lo mejor de tu dia en instagram para esconder tus inseguridades',
    'dar el 100% en cada cosa que hagas (excepto si donas sangre)',
    'no hacer nada que no quieras despues explicarle a los paramédicos',
    'no reirte de las decisiones de tu pareja (tu eres una de ellas)',
    'estar dispuesto a salir de tu vida planificada, para encontrarte con la vida que espera por ti',
    'tener siempre comida en tus bolsillos. Si ocurre algún tornado o desastre natural, los perros te encontraran primero',
    'abrir cada puerta antes de entrar a algun sitio de puerta cerrada',
    'no poner "https://" cada vez que abras un sitio web. Puedes guardarlo en unarchivo para copiar y pegar',
    ', no importa cuan bien huela tu jabon, no salir del baño oliendo tus dedos',


]

const listOfAdviceIf {
    'si tienes miedo de hacer algo arriesgado, sólo espera unos segundos antes a ver si tu yo del futuro llega a detenerte',
    'si te duermes en el trabajo, levanta tu cabeza lentamente y di fuerte "Amen!"',
    'si comes galletas, por tener tan pocas vitaminas, debes comer muchas',
    'si sientes soledad, puedes comprar una tabla de ouija y hacer nuevos amigos',
    'si ves a alguien llorar, recuerdale que el pelo crece otra vez',
    'si sobrevives tus peores decisiones, estas se convierten en tus mejores historias',
    'sólo las gallinas logran algo quedándose sentadas sin hacer nada, a trabajar',
    'si en tu vida ves el vaso medio lleno, ponle hielo y whisky para mejorar el día'

}

const listOfColors = [
    'negro claro',
    'fondo blanco',
    'amarillo pollito',
    'rojo pasión',
    'azul chillón',
    'verde vómito',
    'verde lechuga',
    'blanco pálido',
    'rojo alergia',
    'rojo tanga',
    'blanco oscuro',
    'gris pasión'
]

const predictionTemplates = [
    `${name}, los astros me dicen que ${obvious}, lo cual se alínea con en este momento porque mercurio esta retrógrado. Hoy será un día relativamente positivo, visto desde el futuro hacia atrás, dentro de lo que cabe. La segunda letra de tu nombre ${name[1]}, en conjunto con jupiter en sagitario, me indican que ${barnum}. Particularmente hoy, ${AdviceIf}. Enfócate en ${adviceVerb}. Color clave para hoy: ${color} `
]
