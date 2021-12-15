/* 
    Buscador creado para el sitio web personal de la asignatura de Usabilidad, Accesibilidad y Adaptabilidad del Master Universitario de Ingenieria Web
    Autor: Lucia Prado Garcia
*/

//Array que almacena el texto de index.html
var textosIndex=["Sobre mí", "Lucía Prado García", "Ingeniera Informática del Software",
"Nací el 25 de marzo de 1999 (22 años) en Oviedo Asturias.", "Soy graduada en Ingeniería Informática del Software por la Universidad de Oviedo", "y actualmente estoy estudiando el 1º curso del Máster Universitario de Ingeniería Web.",
"Email: uo265060@uniovi.es", "Número de teléfono: (+34)600110271"];

//Array que almacena el texto de aficiones.html
var textosAficiones=["Aficiones","Viajar", "Una de mis aficiones principales es viajar, me encanta conocer diferentes lugares del mundo y aprender de otras culturas.",
"He viajado a diferentes sitios con mi familia, amigos y pareja.", "A continuación, muestro algunos de los lugares que he visitado:", "Roma",
"Tenerife", "Cerdeña", "Disfrutar con las personas que quiero", "Lo que más me gusta hacer en el mundo es disfrutar mi tiempo con mis amigos, mi familia y mi pareja.",
"A continuación, muestro algunas fotos con ellos:", "Mis amigas", "Mi pareja", "Mi hermana"];

//Array que almacena el texto de series.html
var textosSeries=["Series favoritas", "La Reina del Sur", "Un drama de suspenso y aventura que describe la vida de Teresa Mendoza en el narcotráfico,", "desde sus inicios como una ingenua mujer novia de un mexicano involucrado en el mundo del tráfico de drogas",
"hasta el proceso de convertirse en la líder de un cártel de drogas,", "que no tiene compasión y gana una reputación a nivel internacional.", "Foto de la serie La Reina del Sur",
"Vídeo de la serie La Reina del Sur", "Física o química", "Serie juvenil española que se estrenó en Antena 3 el 4 de febrero de 2008.",
"El instituto madrileño Zurbarán recibe a los nuevos profesores,", "que tendrán que convivir con alumnos de todo tipo con problemas reales que ilustrarán lo que pasa día a día,",
"donde tienen lugar situaciones relacionadas con el alcohol, las drogas, el racismo y la homofobia, embarazos a temprana edad, entre otras cosas",
"es decir, temas actuales que están muy presentes en la vida de muchos adolescentes,","por lo tanto, pondrán a prueba la capacidad profesional del profesorado y las consecuencias de las decisiones tomadas cuando se es aún un adolescente.",
"Foto de la serie Física o Química", "Vídeo de la serie Física o Química" ];

//Array que almacena el texto de musica.html
var textosMusica=["Música", "Géneros de música favoritos", "Los géneros de música que más me gustan son: pop español, reggaeton y música en inglés.",
" A continuación, muestro una canción que me gusta de cada género.", "Pop español", "Canción Jóvenes Eternamente - Pol 3.14", "Reggaeton", "Canción La Curiosidad - Jay Wheeler, Myke Towers, DJ Nelson", "Música en inglés", "Canción Say You Wont Let Go - James Arthur",
"Mi canción favorita", "Mon Amour", "Canción Mon Amour - Zzoilo y Aitana"];

/*
    Evento de pulsacion de la tecla con codigo 13 (enter) del input del buscador
*/
$('#busqueda').keypress(function(e) {
    var keycode = (e.keyCode ? e.keyCode : e.which);
    if (keycode == '13') {
        $("a.active").removeClass("active");//Desactivamos el enlace activo de la barra de navegacion

        var textoInput=$("#busqueda").val(); //Cogemos el valor del input del buscador
        if (textoInput!=""){
            buscarTexto(textoInput); //Buscamos el valor en los textos de los HTML
        }else{
            location.reload(); //Si el input del buscador esta vacio, recargamos la pagina
    }
    }
});
/*
    Evento click del boton de busqueda
*/
$("#btnBuscar").click(function(){
    $("a.active").removeClass("active");//Desactivamos el enlace activo de la barra de navegacion

    var textoInput=$("#busqueda").val();// Cogemos el valor del input del buscador
    if (textoInput!=""){
        buscarTexto(textoInput); //Buscamos el valor en los textos de los HTML
    }else{
        location.reload();//Si el input del buscador esta vacio, recargamos la pagina
    }
    
});

/*
    Metodo que vacia el 'main' y llama a los metodos que comprueban si los arrays contienen el valor 'texto'
*/
function buscarTexto(texto){
    $("main").empty(); //Vaciamos el contenido del main
    $("main").append("<div class='container'><div>")
    $("main div.container").append("<div class='row'><h1 class='text-center'>Resultados de búsqueda</h1></div>");
    encontrarTextosHtml(textosIndex, texto,"index.html");
    encontrarTextosHtml(textosAficiones, texto, "aficiones.html");
    encontrarTextosHtml(textosSeries, texto, "series.html");
    encontrarTextosHtml(textosMusica, texto, "musica.html");
}

/*
    Metodo que guarda en un array los elementos del array 'array' que contienen el valor 'texto'
    y llama al metodo que crea la salida en la pagina
*/
function encontrarTextosHtml(array, texto, archivoHtml){
    var textos=[]
    array.find(element => {
        if (element.includes(texto)) {
          textos.push(element);
        }
      });

    
    if (textos.length>0){
        crearSalida(array[0],textos, archivoHtml);
    }
}

/*
    Metodo que muestra los textos de un array a traves de un elemento DIV en la pagina web
*/
function crearSalida(titulo, textos,archivoHtml){
    var parrafos=""
    textos.forEach(function(t,index){ 
        parrafos+="<p>"+t+"</p>"; // Parrafos con el contenido del array 'textos'
    });
    //Se introducen los parrafos en un elemento DIV que se muestra en la pagina web
    $("main div.container").append("<div class='row text-black mb-3'><div class='card'><div class='card-body'><a href="+archivoHtml+" class='card-link'>"+titulo+"</a>"+parrafos+"</div></div></div>");
}
