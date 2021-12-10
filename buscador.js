var textosIndex=["Sobre mí", "Lucía Prado García", "Ingeniera Informática del Software",
"Nací el 25 de marzo de 1999 (22 años) en Oviedo Asturias.", "Soy graduada en Ingeniería Informática del Software por la Universidad de Oviedo", "y actualmente estoy estudiando el 1º curso del Máster Universitario de Ingeniería Web.",
"Email: uo265060@uniovi.es", "Número de teléfono: (+34)600110271"];
var textosAficiones=["Mis aficiones","Viajar", "Una de mis aficiones principales es viajar, me encanta conocer diferentes lugares del mundo y aprender de otras culturas.",
"He viajado a diferentes sitios con mi familia, amigos y pareja.", "A continuación, muestro algunos de los lugares que he visitado:", "Roma",
"Tenerife", "Cerdeña", "Disfrutar con las personas que quiero", "Lo que más me gusta hacer en el mundo es disfrutar mi tiempo con mis amigos, mi familia y mi pareja.",
"A continuación, muestro algunas fotos con ellos:", "Mis amigas", "Mi pareja", "Mi hermana"];
var textosSeries=["Mis series favoritas", "La Reina del Sur", "Un drama de suspenso y aventura que describe la vida de Teresa Mendoza en el narcotráfico,", "desde sus inicios como una ingenua mujer novia de un mexicano involucrado en el mundo del tráfico de drogas",
"hasta el proceso de convertirse en la líder de un cártel de drogas,", "que no tiene compasión y gana una reputación a nivel internacional.",
"Física o química", "Serie juvenil española que se estrenó en Antena 3 el 4 de febrero de 2008.",
"El instituto madrileño Zurbarán recibe a los nuevos profesores,", "que tendrán que convivir con alumnos de todo tipo con problemas reales que ilustrarán lo que pasa día a día,",
"donde tienen lugar situaciones relacionadas con el alcohol, las drogas, el racismo y la homofobia, embarazos a temprana edad, entre otras cosas",
"es decir, temas actuales que están muy presentes en la vida de muchos adolescentes,","por lo tanto, pondrán a prueba la capacidad profesional del profesorado y las consecuencias de las decisiones tomadas cuando se es aún un adolescente." ];
var textosMusica=["Música que escucho", "Géneros de música favoritos", "Los géneros de música que más me gustan son: pop español, reggaeton y música en inglés.",
" A continuación, muestro una canción que me gusta de cada género.", "Pop español", "Jóvenes Eternamente - Pol 3.14", "Reggaeton", "La Curiosidad - Jay Wheeler, Myke Towers, DJ Nelson", "Música en inglés", "Say You Won't Let Go - James Arthur",
"Mi canción favorita", "Mon Amour"];


$("#btnBuscar").click(function(){
    $("a.active").removeClass("active");
    var textoInput=$("#busqueda").val();
    if (textoInput!=""){
        buscarTexto(textoInput);
    }else{
        location.reload();
    }
    
});

function buscarTexto(texto){
    $("main").empty();
    $("main").append("<div class='container'><div>")
    $("main div.container").append("<div class='row'><h1 class='text-center'>Resultados de búsqueda</h1></div>");
    encontrarTextosHtml(textosIndex, texto,"index.html");
    encontrarTextosHtml(textosAficiones, texto, "aficiones.html");
    encontrarTextosHtml(textosSeries, texto, "series.html");
    encontrarTextosHtml(textosMusica, texto, "musica.html");
    
    
}


function encontrarTextosHtml(array, texto, archivoHtml){
    var textos=[]
    array.find(element => {
        if (element.includes(texto)) {
          textos.push(element);
        }
      });

    console.log(textos);
    if (textos.length>0){
        crearSalida(array[0],textos,texto, archivoHtml);
    }
    
    
}

function crearSalida(titulo, textos,texto,archivoHtml){
    var parrafos=""
    textos.forEach(function(t,index){
        parrafos+="<p>"+t+"</p>";
    });
    $("main div.container").append("<div class='row text-black mb-3'><div class='card'><div class='card-body'><a href="+archivoHtml+" class='card-link'>"+titulo+"</a>"+parrafos+"</div></div></div>");
}