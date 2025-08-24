<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .bg-full-width.bg-color-14
      .p-4.p-md-5
        .row.mb-5
          .col-lg-3.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/intro/1.png", data-aos="zoom-in")
          .col-lg-9
            p(data-aos="fade-left") Las políticas públicas representan las acciones, decisiones y estrategias mediante las cuales el Estado busca resolver necesidades colectivas y transformar la vida de las comunidades. En el ámbito rural, estas políticas adquieren un valor especial, ya que están dirigidas a garantizar derechos fundamentales, impulsar el desarrollo económico local y proteger los territorios y recursos naturales de los que depende la vida campesina. Reconocer su alcance permite comprender cómo los programas, leyes y proyectos estatales pueden influir en la calidad de vida de quienes habitan el campo.
        
            .bg-color-15.mb-5(data-aos="fade-up")
              .row.justify-content-center.align-items-center
                .col-lg-auto.order-2
                  figure
                    img(src='@/assets/curso/intro/2.png', alt='')
                .col-lg.order-1.mb-3.mb-lg-0
                  .p-4
                    p.mb-0(data-aos="fade-up") El conocimiento sobre las políticas públicas permite a las comunidades rurales participar activamente en la construcción de soluciones para sus necesidades. Cuando los campesinos, asociaciones y organizaciones locales conocen sus derechos y los mecanismos de participación, pueden presentar propuestas, vigilar el cumplimiento de los compromisos gubernamentales y asegurar que las decisiones tomadas reflejen la realidad de los territorios. Esta interacción fortalece la democracia, promueve la transparencia y contribuye a que los esfuerzos institucionales generen transformaciones tangibles y sostenibles.
        
        .bg-full-width.bg-color-5
          .px-4.px-md-5.py-4
            .row.align-items-center
              .col-lg-auto
                img(src="@/assets/curso/intro/3.svg", style="max-width: 90px").mx-auto
              .col-lg
                p.mb-0 Finalmente, la participación ciudadana y la organización colectiva son pilares para lograr que las políticas públicas sean efectivas y pertinentes. La experiencia demuestra que, cuando las comunidades rurales actúan de manera articulada, pueden incidir en la planeación, ejecución y evaluación de programas que impactan directamente su bienestar. De esta forma, el campo se convierte no solo en un espacio productivo, sino también en un escenario de toma de decisiones, empoderamiento social y desarrollo integral.
</template>

<script>
export default {
  name: 'Introduccion',
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
