<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 ¿Qué es una política pública?
    
    .bg-full-width.bg-color-4.mb-5
      .px-4.px-md-5
        .row.mb-5
          .col-lg-4.order-lg-2.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema1/1.png", data-aos="zoom-in")
          .col-lg-8.order-lg-1
            p(data-aos="fade-left") Una política pública es el conjunto de decisiones, acciones y estrategias que adopta el Estado para atender necesidades, resolver problemas o mejorar condiciones en una comunidad o sector específico. Estas acciones pueden dirigirse a áreas como salud, educación, agricultura, vivienda o desarrollo rural, y suelen materializarse en programas, leyes, planes o servicios concretos.
        
            .bg-color-3.p-4.mb-3(data-aos="fade-left")
              .row.align-items-center
                .col-lg-auto
                  img(src="@/assets/curso/tema1/2.svg").mx-auto
                .col-lg
                  p.mb-0 Su diseño no surge al azar, sino que responde a un proceso de análisis, planificación y participación, en el que se definen prioridades y se busca generar un impacto positivo en la sociedad. Para su implementación, se requiere coordinación de instituciones, recursos y esfuerzos entre el gobierno y otros actores sociales.
            
            p.mb-0 Comprender qué es una política pública permite identificar cuándo una acción del Estado busca el bienestar colectivo y cómo influye directamente en la vida cotidiana de las personas y las comunidades.
        
        separador
        
        #t_1_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
          h2 1.1 Tipos de Políticas públicas 
        
        p.mb-5 Las políticas públicas se clasifican según el ámbito que abordan. Cada tipo responde a necesidades específicas, pero todas contribuyen al desarrollo integral de las comunidades y los territorios.

        TabsB.color-acento-contenido
          .py-4.py-md-5(titulo="Sociales" :icono="require('@/assets/componentes/2.svg')")
            .row.align-items-center.p-4
              .col-lg-7.mb-4.mb-md-0.order-2
                h4 Sociales
                p.mb-0 Buscan garantizar derechos básicos como salud, educación, vivienda y protección social. Su objetivo es mejorar la calidad de vida, reducir desigualdades y atender a poblaciones vulnerables.
              .col-lg-5.mb-4.mb-md-0.order-1
                figure
                  img(src='@/assets/curso/tema1/3.png', alt='Texto que describa la imagen')
          .py-4.py-md-5(titulo="Económicas" :icono="require('@/assets/componentes/3.svg')")
            .row.align-items-center.p-4
              .col-lg-7.mb-4.mb-md-0.order-2
                h4 Económicas
                p.mb-0 Se enfocan en regular la producción, el empleo, los precios, los impuestos y el comercio. Su impacto recae en la actividad productiva y en el acceso a oportunidades económicas para distintos sectores, incluyendo el campesinado.
              .col-lg-5.mb-4.mb-md-0.order-1
                figure
                  img(src='@/assets/curso/tema1/4.png', alt='Texto que describa la imagen')
          .py-4.py-md-5(titulo="Ambientales" :icono="require('@/assets/componentes/4.svg')")
            .row.align-items-center.p-4
              .col-lg-7.mb-4.mb-md-0.order-2
                h4 Ambientales
                p.mb-0 Orientadas a proteger los recursos naturales, promover el uso sostenible del territorio y enfrentar los efectos del cambio climático. Contribuyen al equilibrio ecológico y la sostenibilidad.
              .col-lg-5.mb-4.mb-md-0.order-1
                figure
                  img(src='@/assets/curso/tema1/5.png', alt='Texto que describa la imagen')
    
    separador
    
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.2 Cómo nacen las políticas públicas
    
    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/6.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        .bg-color-6.p-4.mb-3(data-aos="fade-left")
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema1/7.svg").mx-auto
            .col-lg
              p.mb-0 El origen de una política pública comienza con la identificación de un problema o necesidad que afecta a un grupo de personas o a un territorio. Estas situaciones pueden estar relacionadas con la falta de acceso a servicios básicos, dificultades en la producción, riesgos ambientales o desigualdades sociales.
        p(data-aos="fade-left") El problema puede hacerse visible a través de datos estadísticos, denuncias ciudadanas, movilizaciones sociales o por iniciativas de líderes comunitarios y organizaciones locales. Reconocer un problema como asunto público es el primer paso para que sea considerado por las autoridades. Una vez identificado el problema, se inicia un proceso de análisis y diseño, que incluye:
    
    .bg-full-width-2.bg-fondo-1
      .p-4.p-md-5
        .row.mb-5.justify-content-center
          .col-sm-6.col-lg-4.mb-4.mb-lg-0(data-aos="fade-down")
            .tarjeta--boton.bg-color-16.p-4.h-100
              .row.justify-content-center.mb-3
                .col-4
                  figure
                    img(src='@/assets/curso/tema1/8.svg', alt='Texto que describa la imagen')
              div.text-center.text-white
                h4.mb-4 Análisis y diagnóstico
                p Se estudian causas y efectos del problema, se recopilan datos y evidencias, y se consultan expertos y actores sociales.
        
          .col-sm-6.col-lg-4.mb-4.mb-lg-0(data-aos="fade-up")
            .tarjeta--boton.bg-color-16.p-4.h-100
              .row.justify-content-center.mb-3
                .col-4
                  figure
                    img(src='@/assets/curso/tema1/9.svg', alt='Texto que describa la imagen')
              div.text-center.text-white
                h4.mb-4 Diseño de la política
                p Se definen objetivos, recursos necesarios, responsables y mecanismos de evaluación. La participación comunitaria aporta conocimiento local y legitimidad.
        
          .col-sm-6.col-lg-4.mb-4.mb-sm-0(data-aos="fade-down")
            .tarjeta--boton.bg-color-16.p-4.h-100
              .row.justify-content-center.mb-3
                .col-4
                  figure
                    img(src='@/assets/curso/tema1/10.svg', alt='Texto que describa la imagen')
              div.text-center.text-white
                h4.mb-4 Aprobación e implementación
                p La política se materializa en leyes, programas, proyectos o planes de acción. Requiere coordinación institucional, seguimiento constante y posibles ajustes en el camino.
        
        p.mb-5 El nacimiento y desarrollo de una política pública depende no solo del Estado, sino también de la organización y la incidencia social. La participación ciudadana fortalece la efectividad de las políticas y asegura que respondan realmente a las necesidades del territorio.

    .titulo-sexto.color-acento-contenido
      h5 Figura 1.
      span Ciclo de las Políticas Públicas

    .row.justify-content-center.bg-color-12.p-4.p-md-5.mb-5
      .col-md-6
        figure
          img(src="@/assets/curso/tema1/11.svg", data-aos="zoom-in", alt="")
    
    p.mb-5 El ciclo de las políticas públicas permite comprender cómo el Estado identifica problemas, diseña soluciones, toma decisiones, implementa acciones y evalúa resultados. Este enfoque ordena el proceso de intervención estatal, asegurando que las políticas respondan a las necesidades sociales y promuevan el desarrollo sostenible de las comunidades. A continuación, se presentan sus principales fases:

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/12.png", data-aos="zoom-in")
      .col-lg-8
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta bg-color-11")
          div(titulo="Identificación y definición del problema")
            p.ms-5 Se detecta un problema que requiere atención estatal, estudiando causas, efectos, magnitud y actores involucrados. 
            p.ms-5 <b>Ejemplo</b>: ante deficiencias en la calidad educativa, se analizan factores como formación docente, infraestructura escolar, contenidos educativos y disponibilidad de materiales.
          div(titulo="Formulación de políticas")
            p.ms-5 Se plantean alternativas de solución basadas en datos, experiencias previas y análisis de viabilidad. Cada propuesta se estudia considerando costos, beneficios y resultados esperados. 
            p.ms-5 <b>Ejemplo</b>: proponer programas de capacitación docente, definiendo tipo de formación, responsables, costos y metas esperadas.
          div(titulo="Adopción de la decisión")
            p.ms-5 Se elige la opción más adecuada considerando criterios técnicos, sociales, económicos y políticos, así como opiniones e intereses de los actores implicados. 
            p.ms-5 <b>Ejemplo</b>: si se aprueba fortalecer la formación docente, se define quién financiará, implementará y supervisará el programa, además de informar a la comunidad y establecer lineamientos.
          div(titulo="Implementación de la política pública")
            p.ms-5.mb-0 Se ejecutan programas y acciones en el territorio, asignando recursos, coordinando instituciones y promoviendo la participación comunitaria. 
            p.ms-5 En el ámbito rural, se consideran dispersión geográfica, diversidad cultural, condiciones socioeconómicas y formas de organización campesina.
          div(titulo="Evaluación")
            p.ms-5.mb-0 Se analiza si la política alcanzó los objetivos e impactos esperados, identificando aciertos, fallas y áreas de mejora. 
            p.ms-5 En zonas rurales, se evalúa considerando condiciones sociales y económicas, participación comunitaria y sostenibilidad de los resultados.
    
    .bg-full-width.bg-color-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema1/13.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 El ciclo de las políticas públicas no solo organiza el proceso de gestión estatal, sino que también favorece la mejora continua, permitiendo ajustar, fortalecer o rediseñar las políticas para que realmente contribuyan al bienestar social y al desarrollo territorial.
    
    separador
    
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.3 Ejemplos de políticas públicas
    
    p.mb-5 A continuación, se presenta un video que explica, con ejemplos concretos, cómo las políticas públicas impactan la vida de las comunidades y contribuyen al desarrollo social y territorial: 

    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    .bg-full-width.bg-color-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema1/14.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 Cada una de estas políticas demuestra cómo una decisión del Estado se transforma en acciones concretas, contribuyendo a mejorar la calidad de vida y fortalecer el tejido social y productivo de los territorios rurales.
    
        

              
        
          
 
</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
