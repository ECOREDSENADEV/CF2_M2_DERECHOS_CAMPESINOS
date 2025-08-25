<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Éxito de las políticas públicas para el campo: derechos, actores y escenarios
    
    .row.align-items-center
      .col-lg-4.mb-3.mb-lg-0.order-2
        figure
          img(src="@/assets/curso/tema2/1.png", data-aos="zoom-in")
      .col-lg-8.mb-3.mb-lg-0.order-1
        p El éxito de las políticas públicas para el campo se alcanza cuando responden de forma real y efectiva a las necesidades y aspiraciones de las comunidades rurales. Para ello, deben garantizar derechos fundamentales, promover la participación social y generar condiciones de vida dignas y sostenibles. Una política pública rural exitosa debe:
        
        .bg-color-1.tarjeta.p-4(data-aos="fade-left")
          .row.align-items-center
            .col-lg-4.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema2/2.svg", data-aos="zoom-in")
            .col-lg-8  
              ul.lista-ul--color.bg-color-white.p-4.tarjeta.mb-0
                li.mb-0.d-flex
                  i.fas.fa-leaf.bg-color-10
                  p.mb-0 Reconocer y proteger los derechos del campesinado, incluyendo tierra, agua, participación y vida digna.
                li.mb-0.d-flex
                  i.fas.fa-leaf.bg-color-10
                  p.mb-0 Promover el desarrollo sostenible, equilibrando producción, conservación ambiental y bienestar social.
                li.mb-0.d-flex
                  i.fas.fa-leaf.bg-color-10
                  p.mb-0 Fortalecer el tejido social rural, impulsando la organización comunitaria y la autonomía territorial.
                li.mb-0.d-flex
                  i.fas.fa-leaf.bg-color-10
                  p.mb-0 Asegurar inversión estatal y servicios básicos, evitando la migración forzada hacia las ciudades.
    
    separador
    
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.1 Derechos del campesinado y de las comunidades rurales
    
    .row.mb-5.align-items-center
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/3.svg", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        p(data-aos="fade-left") Los derechos del campesinado se sustentan en su dignidad humana, en su rol esencial en la producción de alimentos y en la preservación del territorio y la cultura rural. Estos derechos abarcan tanto recursos materiales (tierra, agua, semillas) como dimensiones sociales y culturales (conocimientos ancestrales, organización y participación).
    
    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-color-7.tarjeta.p-4
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema2/4.png")
            .col-lg-7
              h5 Tierra y territorio
              p Garantiza acceso, uso y control seguro de la tierra, evitando despojo, concentración y desplazamiento forzado. Permite vivir, sembrar, criar animales y fortalecer la vida comunitaria.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema2/5.png")
            .col-lg-7
              h5 Acceso a servicios básicos
              p Derecho a salud, educación, vivienda digna, agua potable e infraestructura rural, fundamentales para mejorar la calidad de vida y reducir la migración forzada.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema2/6.png")
            .col-lg-7
              h5 Participación y organización
              p Facultad de incidir en decisiones públicas, proponer soluciones, ejercer control social y, para pueblos étnicos, acceder a consulta previa.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema2/7.png")
            .col-lg-7
              h5 Protección cultural y ambiental
              p Reconoce el valor de los conocimientos tradicionales y prácticas sostenibles, protegiendo el territorio y la biodiversidad.
    
    .row
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/8.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        p(data-aos="fade-left") El reconocimiento internacional de estos derechos se ve reflejado en la Declaración de las Naciones Unidas sobre los Derechos de los Campesinos y de Otras Personas que Trabajan en Zonas Rurales, que obliga a los Estados a proteger al campesinado frente a la pobreza, la discriminación, el abandono estatal y las amenazas ambientales o económicas.
    
        .bg-color-3.p-4.mb-3(data-aos="fade-left")
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema2/9.svg").mx-auto
            .col-lg
              p.mb-0 Garantizar estos derechos no es solo un deber legal, sino una condición para la paz, la soberanía alimentaria y la sostenibilidad ambiental. Su aplicación efectiva fortalece territorios justos, resilientes y en armonía con la vida.
    
    separador
    
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.2 Necesidad para asociarse
    
    p.mb-5 Las políticas públicas rurales no se diseñan ni se ejecutan de forma aislada. Su efectividad depende de la participación de múltiples actores, que interactúan en diferentes niveles y con distintos intereses. Asociarse y articularse es esencial para lograr legitimidad, eficiencia y sostenibilidad en la implementación de estas políticas. Principales actores en la construcción de políticas públicas rurales son: 

    TabsB.color-acento-contenido.mb-5
      .py-4.py-md-5(titulo="Estado " :icono="require('@/assets/componentes/5.svg')")
        .row.align-items-center.p-4
          .col-lg-7.mb-4.mb-md-0.order-2
            h4 Estado 
            p.mb-0 A través de ministerios, gobernaciones, alcaldías y entidades especializadas, tiene la responsabilidad de garantizar derechos, gestionar recursos y coordinar acciones para el bienestar colectivo.
          .col-lg-5.mb-4.mb-md-0.order-1
            figure
              img(src='@/assets/curso/tema2/10.png', alt='Texto que describa la imagen')
      .py-4.py-md-5(titulo="Gremios" :icono="require('@/assets/componentes/6.svg')")
        .row.align-items-center.p-4
          .col-lg-7.mb-4.mb-md-0.order-2
            h4 Gremios
            p.mb-0 Representan sectores productivos como agricultura, ganadería, comercio e industria. Defienden sus intereses y buscan influir en decisiones económicas y productivas que los afectan.
          .col-lg-5.mb-4.mb-md-0.order-1
            figure
              img(src='@/assets/curso/tema2/11.png', alt='Texto que describa la imagen')
      .py-4.py-md-5(titulo="Empresas" :icono="require('@/assets/componentes/7.svg')")
        .row.align-items-center.p-4
          .col-lg-7.mb-4.mb-md-0.order-2
            h4 Empresas
            p.mb-0 Influyen en políticas económicas, laborales, ambientales y de inversión. Su impacto puede ser positivo si promueven desarrollo sostenible, o conflictivo si priorizan intereses privados.
          .col-lg-5.mb-4.mb-md-0.order-1
            figure
              img(src='@/assets/curso/tema2/12.png', alt='Texto que describa la imagen')
      .py-4.py-md-5(titulo="Organizaciones de la sociedad civil " :icono="require('@/assets/componentes/8.svg')")
        .row.align-items-center.p-4
          .col-lg-7.mb-4.mb-md-0.order-2
            h4 Organizaciones de la sociedad civil 
            p.mb-0 Cumplen funciones de acompañamiento, formación, vigilancia y defensa de derechos. Su cercanía al territorio les permite proponer soluciones desde la realidad local.
          .col-lg-5.mb-4.mb-md-0.order-1
            figure
              img(src='@/assets/curso/tema2/13.png', alt='Texto que describa la imagen')
    
    p.mb-5 Asociarse implica:

    .bg-full-width-2.bg-fondo-1
      .p-4.p-md-5
        .row.mb-5.justify-content-center
          .col-sm-6.col-lg-4.mb-4.mb-lg-0(data-aos="fade-down")
            .tarjeta--boton.bg-color-16.p-4.h-100
              .row.justify-content-center.mb-3
                .col-4
                  figure
                    img(src='@/assets/curso/tema2/14.svg', alt='Texto que describa la imagen')
              div.text-center.text-white
                h4.mb-4 01
                p Dialogar y coordinar esfuerzos entre todos los actores.
          .col-sm-6.col-lg-4.mb-4.mb-lg-0(data-aos="fade-up")
            .tarjeta--boton.bg-color-16.p-4.h-100
              .row.justify-content-center.mb-3
                .col-4
                  figure
                    img(src='@/assets/curso/tema2/15.svg', alt='Texto que describa la imagen')
              div.text-center.text-white
                h4.mb-4 02
                p Garantizar transparencia y participación comunitaria.
          .col-sm-6.col-lg-4.mb-4.mb-sm-0(data-aos="fade-down")
            .tarjeta--boton.bg-color-16.p-4.h-100
              .row.justify-content-center.mb-3
                .col-4
                  figure
                    img(src='@/assets/curso/tema2/16.svg', alt='Texto que describa la imagen')
              div.text-center.text-white
                h4.mb-4 03
                p Fortalecer la legitimidad y efectividad de las políticas públicas.

        .bg-full-width.bg-color-5
          .px-4.px-md-5.py-4
            .row.align-items-center
              .col-lg-auto
                img(src="@/assets/curso/tema2/17.svg", style="max-width: 90px").mx-auto
              .col-lg
                p.mb-0 Cuando existe articulación y cooperación, las políticas públicas rurales logran responder de manera más precisa a las necesidades del campo, potenciando la equidad, sostenibilidad y desarrollo territorial.

    .bg-full-width.bg-color-4.mb-5
      .px-4.px-md-5
        separador
        
        #t_2_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
          h2 2.3 Espacios de participación

        .row.mb-5
          .col-lg-4.order-lg-2.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema2/18.png", data-aos="zoom-in")
          .col-lg-8.order-lg-1
            p(data-aos="fade-left") Los espacios de participación son escenarios creados para que la ciudadanía intervenga en las decisiones públicas que afectan su vida y su territorio. En el ámbito rural, estos espacios permiten expresar necesidades, proponer soluciones y hacer seguimiento a los compromisos del Estado. A través de ellos, se fortalece la democracia, se promueve la transparencia y se garantiza que las políticas públicas no se construyan solo desde los escritorios, sino también desde la voz y experiencia de las comunidades.
        
            .bg-color-2.p-4.mb-3(data-aos="fade-left")
              .row.align-items-center
                .col-lg-auto
                  img(src="@/assets/curso/tema2/19.svg").mx-auto
                .col-lg
                  p.mb-0 Entre estos espacios se encuentran los Consejos Municipales de Desarrollo Rural (CMDR), donde representantes de comunidades, organizaciones campesinas y autoridades locales se reúnen para dialogar sobre los planes y proyectos relacionados con el campo. Allí se priorizan inversiones, se identifican problemáticas y se plantean propuestas desde el territorio, influyendo incluso en los presupuestos municipales y en los planes de desarrollo.
            p A continuación, se presenta un pódcast  que explica los principales espacios de participación rural, como los Consejos Municipales de Desarrollo Rural, las Mesas de Desarrollo Rural y los Comités de Política Pública Asociativa, destacando su importancia para la gestión participativa y el fortalecimiento de las comunidades en el territorio: 

        .row.justify-content-center
          .col-lg-3.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema2/20.png", data-aos="zoom-in")
          .col-lg-7
            .bg-color-5.tarjeta.mb-5
              .p-4
                .row.justify-content-center.align-items-center
                  .col-lg-auto.mb-3.mb-lg-0
                    figure
                      img(src="@/assets/curso/tema2/20.svg", data-aos="zoom-in")
                  .col-lg
                    p(data-aos="fade-left").mb-4 Lo invitamos a escuchar el siguiente Pódcast:
            
                    TarjetaAudio.color-acento-botones.bg-color-white.mb-3(
                      texto="Derechos humanos en la participación campesina"
                      tiempo
                      :audio="require('../assets/curso/podcast/podcast1.mp3')"
                    )
        
        separador
        
        #t_2_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
          h2 2.4 El papel del gobierno local, regional y nacional.
        
        .row.align-items-center
          .col-lg-4.mb-3.mb-lg-0.order-2
            figure
              img(src="@/assets/curso/tema2/21.png", data-aos="zoom-in")
          .col-lg-8.mb-3.mb-lg-0.order-1
            p El papel del gobierno en sus distintos niveles: local, regional y nacional, es fundamental para que las políticas públicas se diseñen, implementen y se hagan efectivas en todo el territorio. Cada nivel cumple funciones específicas que, cuando se articulan adecuadamente, generan resultados más justos, eficaces y alineados con las necesidades de las comunidades. Una coordinación eficiente entre los distintos niveles de gobierno permite:
            
            .bg-color-1.tarjeta.p-4(data-aos="fade-left")
              .row.align-items-center
                .col-lg-4.mb-3.mb-lg-0
                  figure
                    img(src="@/assets/curso/tema2/22.svg", data-aos="zoom-in")
                .col-lg-8  
                  ul.lista-ul--color.bg-color-white.p-4.tarjeta.mb-0
                    li.mb-0.d-flex
                      i.fas.fa-leaf.bg-color-10
                      p.mb-0 Utilizar de manera óptima los recursos públicos.
                    li.mb-0.d-flex
                      i.fas.fa-leaf.bg-color-10
                      p.mb-0 Respetar los principios de equidad y participación ciudadana.
                    li.mb-0.d-flex
                      i.fas.fa-leaf.bg-color-10
                      p.mb-0 Lograr que las políticas públicas lleguen de manera efectiva a los territorios rurales y urbanos.
    
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto Funciones de cada nivel de gobierno
      
    .row.mb-5.align-items-center
      .col-lg-2.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/23.svg", data-aos="zoom-in")
      .col-lg-10.order-lg-1
        p(data-aos="fade-left") La organización del Estado se estructura en distintos niveles de gobierno, cada uno con responsabilidades específicas que permiten atender las necesidades de la población y garantizar la implementación de políticas públicas de manera articulada en todo el territorio.

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/24.png", data-aos="zoom-in")
      .col-lg-8
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta bg-color-11")
          div(titulo="Gobierno local (Alcaldías y Concejos Municipales)")
            ul.lista-ul--color.ms-5
              li.mb-0.d-flex
                i.fas.fa-leaf.bg-color-10
                p.mb-0 Atiende directamente las necesidades inmediatas de la población.
              li.mb-0.d-flex
                i.fas.fa-leaf.bg-color-10
                p.mb-0 Es el nivel donde se sienten con mayor fuerza los impactos de una política pública, ya sea en salud, educación, infraestructura o desarrollo rural.
              li.mb-0.d-flex
                i.fas.fa-leaf.bg-color-10
                p.mb-0 Puede impulsar programas locales, ejecutar presupuestos participativos y garantizar espacios de diálogo ciudadano.
              li.mb-0.d-flex
                i.fas.fa-leaf.bg-color-10
                p.mb-0 La cercanía con la comunidad permite identificar problemas con precisión y actuar con agilidad.
          div(titulo="Gobierno regional (Gobernaciones y Asambleas Departamentales)")
            ul.lista-ul--color.ms-5
              li.mb-0.d-flex
                i.fas.fa-leaf.bg-color-10
                p.mb-0 Articula las políticas entre los diferentes municipios del departamento.
              li.mb-0.d-flex
                i.fas.fa-leaf.bg-color-10
                p.mb-0 Coordina acciones a mayor escala y planifica el desarrollo territorial.
              li.mb-0.d-flex
                i.fas.fa-leaf.bg-color-10
                p.mb-0 Tiene la capacidad de gestionar proyectos intermunicipales y apoyar procesos productivos regionales.
              li.mb-0.d-flex
                i.fas.fa-leaf.bg-color-10
                p.mb-0 Su papel es clave para integrar esfuerzos locales y optimizar recursos a nivel departamental.
          div(titulo="Gobierno nacional")
            ul.lista-ul--color.ms-5
              li.mb-0.d-flex
                i.fas.fa-leaf.bg-color-10
                p.mb-0 Define las políticas marco que guían el desarrollo del país.
              li.mb-0.d-flex
                i.fas.fa-leaf.bg-color-10
                p.mb-0 Asigna grandes presupuestos y diseña planes estratégicos de alcance nacional.
              li.mb-0.d-flex
                i.fas.fa-leaf.bg-color-10
                p.mb-0 Representa al Estado en los compromisos internacionales.
              li.mb-0.d-flex
                i.fas.fa-leaf.bg-color-10
                p.mb-0 Garantiza que los derechos de la ciudadanía se cumplan en todo el territorio, sin distinción entre zonas urbanas y rurales.
              li.mb-0.d-flex
                i.fas.fa-leaf.bg-color-10
                p.mb-0 Su acción busca dar coherencia y dirección al conjunto de políticas públicas en el país.
    
    .bg-full-width.bg-color-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema2/25.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 De esta manera, los tres niveles de gobierno se complementan: el nivel local es el más cercano a la comunidad y atiende sus necesidades inmediatas; el nivel regional integra y coordina esfuerzos territoriales; y el nivel nacional proporciona dirección estratégica, financiamiento y garantías de derechos.
       
    

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
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
