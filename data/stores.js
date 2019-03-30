const STORES = {
  "stores": [{
    "id": 1,
    "name": "Cubotopia",
    "type": [
      "Destreza",
      "Habilidad Matematicas",
      "Conocimiento Espacial",
      "Retención de Informacion"
    ],
    "img": "https://www.cubopia.cl/wp-content/uploads/2019/02/my-shop-logo-1536981855-1.jpg",
    "web": "https://www.cubopia.cl/",
    "direction": "Calle San Ignacio de Loyola 75, local 9",
    "comuna": "Santiago",
    "fono": +56950955261,
    "email": "contacto@cubotopia.cl",
    "facebook": "https://www.facebook.com/cubopia",
    "instagram": "https://www.instagram.com/cubopia/",
    "maps": "https://goo.gl/maps/7p7EY9Zae8k",
    "description": "Tienda de Juguetes, para niños y niñas, dedicada a potenciar las habilidades y destrezas de los niños, mediante juegos como puzzlez, cubos rubik, etc",
  }, {
    "id": 2,
    "name": "PlayBox",
    "type": [
      "Destreza",
      "Curiosidad",
      "Aprendizaje",
      "Retención de Informacion"
    ],
    "img": "https://www.playbox.cl/wp-content/uploads/2018/04/logo-play-box-pocoyo-300x245.jpg",
    "web": "https://www.playbox.cl/",
    "direction": "La Florida 9660",
    "comuna": "La Florida, Santiago",
    "fono": 227557224,
    "email": "contacto@playbox.cl",
    "facebook": "https://www.facebook.com/PlayBox.de.Ansaldo/",
    "instagram": "https://www.instagram.com/playboxansaldo/",
    "maps": "https://goo.gl/maps/rRziGMp48f42",
    "description": "Play Box de Ansaldo es nuestra cadena de  jugueterías  especializada en la venta de productos  para todas las etapas de crecimiento de los niños. En nuestras tiendas  ofrecemos juguetes con licencias de series infantiles  de televisión, estrenos de cine y marcas top que responden a los gustos de los niños y familia, además juguetes inspirados en el aprendizaje y desarrollados para potenciar la curiosidad, destreza y experiencias del juego sano.",
  },
  {
    "id": 3,
    "name": "Juegueteria Alemana",
    "type": [
      "Destreza",
      "Curiosidad",
      "Aprendizaje",
      "Retención de Informacion"
    ],
    "img": "https://payload.cargocollective.com/1/16/542569/8682717/logo_905.jpg",
    "web": "https://www.ja.cl/",
    "direction": "Huerfanos 875",
    "comuna": "Santiago",
    "fono": 229535097,
    "email": "contacto@ja.cl",
    "facebook": "https://www.facebook.com/JugueteriaAlemana",
    "instagram": "https://www.instagram.com/jugueteriaalemana/",
    "maps": "https://goo.gl/maps/6g15X5ky5KU2",
    "description": "Empresa Familiar desde 1960, comerzializadora de juguetes de diferentes tipos como modelismo, juegos de salon y puzzles entre otros",
  },
  {
    "id": 4,
    "name": "Bison Jugueteria",
    "type": [
      "Destreza",
      "Curiosidad",
      "Aprendizaje",
      "Retención de Informacion"
    ],
    "img": "https://bisonjugueteria.cl/wp-content/uploads/2019/01/logo_256x100_frase.png",
    "web": "https://bisonjugueteria.cl/",
    "direction": "Patronato 207",
    "comuna": "Recoleta,Santiago",
    "fono": 227378937,
    "email": "hola@bisonjugueteria.cl",
    "facebook": "https://www.facebook.com/bisonjugueteria/",
    "instagram": "https://www.instagram.com/bison.cl/",
    "maps": "https://goo.gl/maps/7B5QsqSjyb72",
    "description": "Juguetería con casi 20 años de dedicación y experiencia en el rubro, podrás encontrar cientos de juguetes, figuras de hobbies, artículos de bebés y regalos en general.",
  },
  {
    "id": 5,
    "name": "Rincon Infantil",
    "type": [
      "Destreza",
      "Curiosidad",
      "Aprendizaje",
      "Retención de Informacion"
    ],
    "img": "https://dojiw2m9tvv09.cloudfront.net/17766/1/T_logo_tienda0885.png",
    "web": "https://www.rinconinfantil.cl/",
    "direction": "Av. Providencia 2251, local 012, Galería Zona Franca",
    "comuna": "Providencia,Santiago",
    "fono": 229932911,
    "email": "Info@Rinconinfantil.cl",
    "facebook": "https://www.facebook.com/JugueteriaRinconInfantil/",
    "instagram": "https://www.instagram.com/jugueteria_rincon_infantil/",
    "maps": "https://goo.gl/maps/LMevnW4Yien",
    "description": "Emprendimiento familiar, nuestros divertidos diseños están especialmente pensados para que los infantes transiten cada etapa vital con el máximo confort e integren nuevas habilidades y aprendizajes",
  },
  {
    "id": 6,
    "name": "La Carpinteria",
    "type": [
      "Destreza",
      "Curiosidad",
      "Aprendizaje",
      "Retención de Informacion"
    ],
    "img": "https://images.jumpseller.com/store/lacarpintera/logo/logo.png",
    "web": "https://www.lacarpinteria.cl/",
    "direction": "Av. Vitacura 5480, local 97,Centro Comercial Eve",
    "comuna": "Vitacura,Santiago",
    "fono": 987767856,
    "email": "contacto@lacarpinteria.cl",
    "facebook": "https://www.facebook.com/lacarpinteria.cl",
    "instagram": "https://www.instagram.com/lacarpinteria.cl/",
    "maps": "https://goo.gl/maps/MmAk4xmnC872",
    "description": "La Carpintería es una tienda de juguetes de madera. Somos promotores del juego y el aprendizaje natural, simple y creativo, invitando a la estimulación y a la diversión.",
  },
  {
    "id": 7,
    "name": "Jugueteria Cuncuna",
    "type": [
      "Destreza",
      "Curiosidad",
      "Aprendizaje",
      "Retención de Informacion"
    ],
    "img": "https://cdn-sa.mall-connect.com/image/upload/v1469049591/nxe9ncmponxsikajqnkg.png",
    "web": "http://aukinkochile.com/sitio/",
    "direction": "Av. Nueva Providencia 2249",
    "comuna": "Providencia,Santiago",
    "fono": 222191139,
    "email": "aukinko.web@gmail.com",
    "facebook": "https://www.facebook.com/AukinkoLtda/",
    "instagram": "https://www.instagram.com/jugueteriacuncuna/",
    "maps": "https://goo.gl/maps/MsaT1o4RvY52",
    "description": "Material Didáctico, Juegos y Juguetes importados de las mejores marcas del mundo.Primeros Años  - Motricidad  - Arte y Manipulación  - Rincón Hogar - Juegos de Rol - Juegos de Playa y Jardín,Instrumentos Musicales - Lenguaje - Matemáticas - Ciencias - Deportes - Accesorios de Sala y Patio.",
  },
  {
    "id": 8,
    "name": "Kukaplay",
    "type": [
      "Destreza",
      "Curiosidad",
      "Aprendizaje",
      "Retención de Informacion"
    ],
    "img": "https://www.kukaplay.com/img/my-shop-logo-1506013084.jpg",
    "web": "https://www.kukaplay.com/",
    "direction": "Av. Alonso de Córdova 2843",
    "comuna": "Vitacura,Santiago",
    "fono": 956532737,
    "email": "juega@kukapkay.cl",
    "facebook": "https://www.facebook.com/kukaplaychile/",
    "instagram": "https://www.instagram.com/jugueteskukaplay/",
    "maps": "https://goo.gl/maps/CAGXf2V1A732",
    "description": "Nuestros juguetes buscan potenciar las habilidades de cada niño, estimulando su creatividad y enseñándoles el respeto por el medio ambiente y la naturaleza al usar materiales ecológicos y sustentables.",
  },
  {
    "id": 9,
    "name": "Pichintun",
    "type": [
      "Destreza",
      "Curiosidad",
      "Aprendizaje",
      "Retención de Informacion"
    ],
    "img": "https://cdn.shopify.com/s/files/1/0081/0149/4842/files/logo_pichintun_turquesa_450x.png",
    "web": "https://pichintun.com/",
    "direction": "Luis Pasteur 5441",
    "comuna": "Vitacura,Santiago",
    "fono": 226048541,
    "email": "hola@pichintuntienda.cl",
    "facebook": "https://www.facebook.com/www.pichintuntienda.cl",
    "instagram": "https://www.instagram.com/pichintun_tienda/",
    "maps": "https://goo.gl/maps/ZF8a6wU1Pzz",
    "description": "Pichintun nace el 2014 en una linda ciudad llamada Viña del Mar, con su primera tienda física para traer a esta ciudad costera productos increíbles, desde juguetes, decoración accesorios y más",
  },
  {
    "id": 10,
    "name": "decuadritos",
    "type": [
      "Destreza",
      "Curiosidad",
      "Aprendizaje",
      "Retención de Informacion"
    ],
    "img": "https://static.wixstatic.com/media/fdb047_2c478bc646494b6891646e67161948e7.png",
    "web": "https://www.decuadritos.cl/",
    "direction": "Centro Comercial OMNIUM, Local 71, Apoquindo 4.900",
    "comuna": "Las Condes,Santiago",
    "fono": 989049586,
    "email": "decuadritosparaninos@gmail.com",
    "facebook": "https://www.facebook.com/decuadritosjuguetes/",
    "instagram": "https://instagram.com/decuadritos_juguetes",
    "maps": "https://goo.gl/maps/UpSKjvXu59K2",
    "description": "Somos una tienda familiar, Álvaro (el Papá) es el encargado de carpintería y la Línea Propia en general, también lo pueden encontrar atendiendo en la tienda.Vero (la Mamá) generalmente me encontrarán en la tienda, facebook, whats app, etc. Coni (la inspiración) también la encontrarán en la tienda haciendo control de calidad y de entretención.",
  },
  {
    "id": 11,
    "name": "Juguete madera",
    "type": [
      "Destreza",
      "Curiosidad",
      "Aprendizaje",
      "Retención de Informacion"
    ],
    "img": "https://www.juguetemadera.cl/wp-content/themes/masterbip/inc/imagenes/juguete-madera-logo-top.png",
    "web": "https://www.juguetemadera.cl/",
    "direction": "San Alfonso 91",
    "comuna": "Estación central,Santiago",
    "fono": 26890031,
    "email": "ventas@juguetemadera.cl",
    "facebook": "https://www.facebook.com/juguetemadera.cl",
    "instagram": "https://www.instagram.com/juguetemadera.cl/",
    "maps": "https://goo.gl/maps/F7CitfMNaMn",
    "description": "Juegos y Juguetes enfocado en el aprendizaje de los niños - Motricidad  - Matemáticas - Musicales - Lenguaje - Construcción",
  },
  {
    "id": 12,
    "name": "Juguetes y Material Didácticos Seigard Chile ",
    "type": [
      "Destreza",
      "Curiosidad",
      "Aprendizaje",
      "Retención de Informacion"
    ],
    "img": "https://www.seigard.cl/wp-content/uploads/2019/01/logo-web-seigard-p.e.png",
    "web": "https://www.seigard.cl/",
    "direction": "Mall Apumanque, local 448",
    "comuna": "Las Condes,Santiago",
    "fono": 22298948,
    "email": "deisy.gonzalez@seigard.cl",
    "facebook": "https://www.facebook.com/SeigardChileSa/",
    "instagram": "https://www.instagram.com/seigardchile/",
    "maps": "https://goo.gl/maps/Ci3wqXYfePE2",
    "description": "Juegos y Juguetes importados con los mejores estándares de calidad,sustentables para la educación en todas sus edades.",
  },
  {
    "id": 13,
    "name": "Ciencia entretenida",
    "type": [
      "Destreza",
      "Curiosidad",
      "Aprendizaje",
      "Retención de Informacion"
    ],
    "img": "https://cienciaentretenida.cl/img/my-shop-logo-1505699061.jpg",
    "web": "https://cienciaentretenida.cl/",
    "direction": "Av Libertador Bernardo O'Higgins 3349",
    "comuna": "Estación central,Santiago",
    "fono":  996780519,
    "email": "jugueteria@cienciaentretenida.cl",
    "facebook": "https://www.facebook.com/tiendacienciaentretenida/",
    "instagram": "https://www.instagram.com/ciencia_entretenida/",
    "maps": "https://goo.gl/maps/kvRVCYJDVRB2",
    "description": "Material Didáctico, aprender jugando a través de la ciencia Asntronomía - Ciencia - Robótica - Puzzle.",
  },
  {
    "id": 14,
    "name": "Tiendas Kayma",
    "type": [
      "Destreza",
      "Curiosidad",
      "Aprendizaje",
      "Retención de Informacion"
    ],
    "img": "../img/kayma.png",
    "web": "http://www.kayma.cl/inicio",
    "direction": "Ecuador 3414",
    "comuna": "Estación central,Santiago",
    "fono": 226823711,
    "email": "contacto@kayma.cl",
    "facebook": "https://www.facebook.com/KAYMALTDA/",
    "instagram": "",
    "maps": "https://goo.gl/maps/VmMTjzXXxw32",
    "description": "Material Didáctico, Juegos y Juguetes importados de las mejores marcas del mundo.",
  },
  {
    "id": 15,
    "name": "Clevertoys",
    "type": [
      "Destreza",
      "Curiosidad",
      "Aprendizaje",
      "Retención de Informacion"
    ],
    "img": "http://clevertoys.cl/wp-content/uploads/2018/03/Definitivo.png",
    "web": "http://clevertoys.cl/",
    "direction": "Avda. Suecia 0119 Of. 403",
    "comuna": "Providencia,Santiago",
    "fono": 226046384,
    "email": "info@clevertoys.cl",
    "facebook": "https://www.facebook.com/clevertoys.cl/",
    "instagram": "https://www.instagram.com/lacarpinteria.cl/",
    "maps": "https://goo.gl/maps/qQWgddYQFJ32",
    "description": "CLEVER TOYS es una compañía que tiene como misión entregar herramientas para el desarrollo cognitivo y social de las personas a través de un hobby sano, el cual permite además potenciar habilidades y volver a reunir a la familia",
  },
  {
    "id": 16,
    "name": "Pulpito",
    "type": [
      "Destreza",
      "Curiosidad",
      "Aprendizaje",
      "Retención de Informacion"
    ],
    "img": "https://pulpito.cl/images/logo_web_menu.png",
    "web": "https://pulpito.cl/",
    "direction": "Realizan Despacho",
    "comuna": "Santiago",
    "fono": 949947957,
    "email": "pulpito@pulpito.cl",
    "facebook": "https://www.facebook.com/juegapulpito/",
    "instagram": "https://www.instagram.com/juega_pulpito/",
    "maps": "",
    "description": "Tienda online, te invitamos a descubrir Pulpito, un lugar pensado en los más pequeños de la casa, donde encontrarás bellos juguetes, juegos e información que potencien el desarrollo de nuestros niños.",
  },
  {
    "id": 17,
    "name": "Monki Toys",
    "type": [
      "Destreza",
      "Curiosidad",
      "Aprendizaje",
      "Retención de Informacion"
    ],
    "img": "http://www.monkitoys.cl/wp-content/uploads/2018/09/Sin-t%C3%ADtulo-1-2.png",
    "web": "http://www.monkitoys.cl/",
    "direction": "Av. Raúl Labbé 12613 Of. 405",
    "comuna": "Lo Barnechea,Santiago",
    "fono": 979862908,
    "email": "monkitoys@smartbabies.cl",
    "facebook": "https://www.facebook.com/monkitoys/",
    "instagram": "https://www.instagram.com/monkitoys_alextoys/?hl=es",
    "maps": "https://goo.gl/maps/jaBFYmSn5MQ2",
    "description": "Monki Toys te entrega una experiencia única llevándote a un lugar lleno de juguetes maravillosos. En nuestras tiendas encontrarás todo lo necesario para que tus niños crezcan y aprendan jugando. La entretención es parte de la vida de los niños y en nuestras tiendas tenemos toda una variedad de juguetes que cubren todas las edades e intereses de los niños y sus papás.",
  },
  {
    "id": 18,
    "name": "Jugueteria Cuncuna",
    "type": [
      "Destreza",
      "Curiosidad",
      "Aprendizaje",
      "Retención de Informacion"
    ],
    "img": "http://www.jugueteriagirasol.cl/ehs/images/logo.png",
    "web": "http://www.jugueteriagirasol.cl",
    "direction": "Boulevard Los Ingleses Local 14, Chicureo",
    "comuna": "Colina,Santiago",
    "fono": 227383249,
    "email": "jugueteriagirasol@hotmail.com",
    "facebook": "https://www.facebook.com/jugueteriagirasol/",
    "instagram": "https://www.instagram.com/jugueteriagirasol/?hl=es-la",
    "maps": "https://goo.gl/maps/Vc4vmpu1xfw",
    "description": "Somos una juguetería que lleva 15 años trayendo sonrisas a los niños de Chicureo. Todo comenzó cuando vimos que no habían jugueterias en el sector , por lo que nos propusimos traer los más novedosos y que fuesen diferentes a los que venden en los retails. Nos especializamos en tener una alta rotación de productos importados de  Alemania, Estados Unidos, Holanda, Inglaterra, Francia, etc.",
  },
  {
    "id": 19,
    "name": "KinderTop",
    "type": [
      "Destreza",
      "Curiosidad",
      "Aprendizaje",
      "Retención de Informacion"
    ],
    "img": "https://kindertop.cl/img/kindertop-logo-1535866492.jpg",
    "web": "https://kindertop.cl/",
    "direction": "Dublé Almeyda 2191",
    "comuna": "Ñuñoa,Santiago",
    "fono": 225709393,
    "email": "contacto@kindertop.cl",
    "facebook": "https://www.facebook.com/kindertopChile/",
    "instagram": "https://www.instagram.com/kindertopchile/?utm_source=ig_profile_share&igshid=qsdcer4g4md9",
    "maps": "https://goo.gl/maps/D9yRR63NqhJ2",
    "description": "Juegos y Juguetes enfocados en la estimulación temprana y habilidades motrices.",
  },
  {
    "id": 20,
    "name": "Explora kids",
    "type": [
      "Destreza",
      "Curiosidad",
      "Aprendizaje",
      "Retención de Informacion"
    ],
    "img": "http://www.explorakids.cl/images/logo.png",
    "web": "http://www.explorakids.cl/",
    "direction": "Monseñor Escrivá de Balaguer 13105 oficina 614",
    "comuna": "Lo Barnechea,Santiago",
    "fono": 232451323,
    "email": "contacto@explorakids.cl",
    "facebook": "https://www.facebook.com/Explorakids-109041313172529/",
    "instagram": "https://www.instagram.com/explorakids_chile/",
    "maps": "https://goo.gl/maps/kP5qU2N2Zr62",
    "description": "Distribución de juguetes. Manualidades - Puzzles - Juegos científicos y ecológicos",
  }
]
};;

window.STORES=STORES;
