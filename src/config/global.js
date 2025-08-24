export default {
  global: {
    Name: 'Políticas publicas ',
    Description:
      'En este componente formativo se abordan los aspectos fundamentales de las políticas públicas, entendidas como herramientas que permiten organizar los recursos del país y contribuir al bienestar de la población, en especial de las comunidades más vulnerables. En el ámbito rural, estas políticas pueden impulsar la producción agrícola, mejorar el acceso al agua, fortalecer las asociaciones campesinas, facilitar el acceso al crédito y garantizar la protección de los derechos sobre la tierra.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: '¿Qué es una política pública?',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Tipos de Políticas públicas',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Cómo nacen las políticas públicas',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Ejemplos de políticas públicas',
            hash: 't_1_3',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo:
          'Éxito de las políticas públicas para el campo: derechos, actores y escenarios',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Derechos del campesinado y de las comunidades rurales',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Necesidad para asociarse',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Espacios de participación',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'El papel del gobierno local, regional y nacional.',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Participación rural e incidencia en políticas públicas  ',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Qué es la participación ciudadana',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Herramientas para incidir en políticas públicas',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo:
              'Cómo organizarse para tener más fuerza (asociaciones, organizaciones campesinas)',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Experiencias exitosas de incidencia rural',
            hash: 't_3_4',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Experiencia exitosa',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '¿Qué es una política pública?',
      referencia:
        'Bedoya M. (2016). Lineamientos de política pública de desarrollo rural para Colombia: los casos de Flor del Monte, La Peña y San Rafael en el municipio de Ovejas (Sucre, Colombia). Scientia, (161),57-78. ',
      tipo: 'Articulo',
      link: 'https://www.redalyc.org/pdf/6517/651769422004.pdf ',
    },
    {
      tema: 'Cómo nacen las políticas públicas',
      referencia:
        'Ramos, Y. (2016).  Algunos aportes de políticas públicas para la agricultura familiar en Colombia: contribuciones y retos para el desarrollo rural. Sessões Temáticas',
      tipo: 'Articulo',
      link:
        'https://anais.anpur.org.br/index.php/anaisenanpur/article/view/1574/1553 ',
    },
    {
      tema: 'El papel del gobierno local, regional y nacional.',
      referencia:
        'Departamento Nacional de Planeación. (2025). Programa de Desarrollo con Enfoque Territorial (PDET) y la Reforma Rural Integral.',
      tipo: 'Articulo',
      link:
        'https://www.minjusticia.gov.co/programas-co/ODC/territorios/Cuartoencuentronacionalsobrelapoliticadedrogasente/programas_desarrollo_enfoque_territorial_ART.pdf ',
    },
    {
      tema: 'Herramientas para incidir en políticas públicas',
      referencia:
        'Facultad de Ciencias Agrarias, Universidad de Antioquia. (2018). Política pública para la agricultura campesina, familiar y comunitaria. Universidad de Antioquia. [Archivo de video] Youtube.  ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=OQBAncIwMp4&t=7s ',
    },
    {
      tema: 'Herramientas para incidir en políticas públicas',
      referencia:
        'Universidad de los Andes. (2016). Se necesita darle la vuelta a la política de desarrollo rural. Universidad de los Andes. [Archivo de video] Youtube.  ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=EhEywofb240 ',
    },
  ],
  glosario: [
    {
      termino: 'Política pública',
      significado:
        'conjunto de decisiones, acciones y estrategias tomadas por el Estado para atender necesidades colectivas, resolver problemas sociales y promover el desarrollo. en el contexto rural, busca mejorar las condiciones de vida del campesinado y fortalecer el territorio.',
    },
    {
      termino: 'Desarrollo rural',
      significado:
        'proceso de transformación económica, social y ambiental que mejora la calidad de vida en el campo, promoviendo acceso a servicios, equidad y sostenibilidad.',
    },
    {
      termino: 'Campesinado',
      significado:
        'población rural que se dedica principalmente a la agricultura, ganadería y otros oficios tradicionales, con formas de vida y producción propias, frecuentemente excluidas de las decisiones políticas.',
    },
    {
      termino: 'Incidencia',
      significado:
        'acciones organizadas para influir en decisiones políticas, leyes o programas, buscando cambios que beneficien a una comunidad o sector social.',
    },
    {
      termino: 'Reforma agraria',
      significado:
        'política pública orientada a redistribuir la tierra de forma equitativa, para garantizar el acceso de los campesinos al territorio y promover justicia social.',
    },
    {
      termino: 'Institucionalidad rural',
      significado:
        'conjunto de entidades del Estado encargadas de diseñar, ejecutar y vigilar políticas relacionadas con el desarrollo rural (como el Ministerio de Agricultura, ADR o ANT en Colombia).',
    },
    {
      termino: 'Enfoque diferencial',
      significado:
        'perspectiva que reconoce y valora las particularidades culturales, económicas, étnicas y de género de las comunidades rurales al aplicar políticas públicas.',
    },
    {
      termino: 'Agricultura familiar y comunitaria',
      significado:
        'modelo productivo basado en el trabajo familiar, el cuidado del entorno y la soberanía alimentaria. es clave en las políticas rurales por su enfoque sostenible.',
    },
    {
      termino: 'Espacios de participación',
      significado:
        'escenarios institucionales o comunitarios como mesas de diálogo, consejos municipales o comités, donde se debaten y acuerdan temas de interés público.',
    },
  ],
  referencias: [
    {
      referencia:
        'Comisión Económica para América Latina y el Caribe (CEPAL). (2019). Evaluation report of the workshop on TradeCAN, MAGIC Plus and WITS. Naciones Unidas. ',
      link: 'https://repositorio.cepal.org/handle/11362/45028',
    },
    {
      referencia:
        'Organización de las Naciones Unidas para la Alimentación y la Agricultura (FAO). (2018). Hacia una nueva política pública para el desarrollo rural sostenible en Colombia. FAO Colombia. ',
      link: '',
    },
    {
      referencia:
        'Red Nacional de Agricultura Familiar - RENAF. (2020). Lineamientos de política pública para la agricultura familiar en Colombia. Ministerio de Agricultura y Desarrollo Rural. ',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre completo',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Nombre completo',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Nombre del rol',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
