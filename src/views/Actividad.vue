<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Políticas publicas',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> aplicar los conocimientos adquiridos sobre políticas públicas en el sector rural mediante un cuestionario que permita reflexionar, reconocer conceptos clave y fortalecer la comprensión sobre derechos, actores, espacios de participación e instrumentos de incidencia comunitaria.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO.',
      preguntas: [
        {
          id: 1,
          texto: '¿Qué es una política pública?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Un programa exclusivo de las empresas privadas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Una orden religiosa para las comunidades rurales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Una decisión o conjunto de acciones del Estado para resolver problemas que afectan a la sociedad.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Una norma que solo aplica en las ciudades.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Cuál de los siguientes es un ejemplo de política pública que impacta lo rural?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Acceso a tierras para campesinos.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'La apertura de una tienda privada.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Una donación entre vecinos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El uso de redes sociales para vender productos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto: '¿En qué parte del ciclo nacen las políticas públicas?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Cuando los políticos ya tomaron la decisión final.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Cuando se identifica un problema público y se empieza a discutir cómo resolverlo.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'En las redes sociales a través de encuestas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Cuando las empresas privadas deciden intervenir.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Qué tipo de política busca mejorar la educación y la salud en el campo?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Política comercial.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Política militar.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Política internacional.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Política social.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto: '¿Cuál es un derecho de las comunidades rurales?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Acceder a tierras productivas.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'No pagar impuestos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Tener internet gratuito.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Ser exentos de participar en política.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            '¿Qué actor NO participa directamente en la formulación de políticas públicas?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Comunidades organizadas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Personas sin relación con el territorio ni el tema.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Alcaldías y gobernaciones.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Organizaciones no gubernamentales (ONG).',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            '¿Cuál es un espacio de participación para incidir en decisiones públicas?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Grupos de WhatsApp familiares.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Clases escolares.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Mesas de desarrollo rural.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Programas de televisión.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            '¿Qué herramienta permite hacer seguimiento a las políticas públicas en el territorio?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El chat de vecinos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Los sorteos comunales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Las redes de chismes del pueblo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Las veedurías ciudadanas.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            '¿Qué estrategia ayuda a que las comunidades tengan más fuerza para participar en lo público?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'No asistir a reuniones.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Organizarse en asociaciones u organizaciones campesinas.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Esperar a que otros hablen por ellos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Depender solo del gobierno.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            '¿Qué experiencia se considera un ejemplo de incidencia política rural?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Una comunidad que logró acceso al agua potable tras presentar una propuesta.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'La compra de maquinaria por un empresario privado.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La visita de un político en campaña.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La creación de un nuevo centro comercial.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto:
            'Las políticas públicas son decisiones del gobierno que no afectan la vida en el campo.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto:
            'Las comunidades rurales pueden participar en mesas de desarrollo rural para incidir en políticas públicas.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto:
            'Solo el gobierno nacional tiene responsabilidad en la formulación de políticas públicas.',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto:
            'Organizarse en asociaciones campesinas ayuda a fortalecer la participación en políticas públicas.',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto:
            'Las veedurías ciudadanas no son útiles para el seguimiento de las políticas públicas.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
