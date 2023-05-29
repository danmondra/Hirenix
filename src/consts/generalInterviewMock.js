export const generalInterviewMock = [
  {
    id: 0,
    format: 'open-ended-question',
    question: 'Háblame sobre tu experiencia laboral previa y en qué puestos te has desarrollado.',
    answer: 'Tengo experiencia desarrollando páginas webs con 3 años de experiencia, he trabajdo en empresas internacionales\n'
  },
  {
    id: 1,
    format: 'open-ended-question',
    question: 'Describe una situación en la que tuviste que resolver un conflicto o trabajar en equipo para lograr un objetivo. ¿Cómo lo abordaste y qué aprendiste de esa experiencia?',
    answer: 'Tuve un problema con una base de datos, casi la elimino por error, por suerte pudo hacerse rollback y no pasó a mayores, pero no volví a cometer el mismo error.'
  },
  {
    id: 2,
    format: 'multiple-choice-question',
    question: '¿Cuál de las siguientes habilidades consideras que es la más importante en un entorno de trabajo?',
    paragraphs: {
      a: 'Habilidades técnicas y conocimientos específicos del puesto.',
      b: 'Habilidades de comunicación y trabajo en equipo.',
      c: 'Habilidades de resolución de problemas y toma de decisiones.',
      d: 'Habilidades de liderazgo y gestión.'
    },
    answer: 'b'
  },
  {
    id: 3,
    format: 'open-ended-question',
    question: '¿Cómo manejas los desafíos o situaciones difíciles en el trabajo? Proporciona un ejemplo concreto.',
    answer: 'Suelo caminar para pensar el problema con mayor claridad, si no tengo claridad le pregunto a alguien con más experiencia'
  },
  {
    id: 4,
    format: 'multiple-choice-question',
    question: '¿Qué harías si te encuentras en desacuerdo con un compañero de equipo en relación a una decisión de trabajo?',
    paragraphs: {
      a: 'Buscaría un compromiso y trataría de llegar a un consenso.',
      b: 'Plantearía mis argumentos y trataría de convencer al compañero de mi punto de vista.',
      c: 'Pediría la intervención de un superior para resolver el desacuerdo.',
      d: 'Aceptaría que tiene razón.'
    },
    answer: 'a'
  },
  {
    id: 5,
    format: 'open-ended-question',
    question: '¿Cómo gestionas el estrés en el entorno laboral? ¿Tienes alguna estrategia particular?',
    answer: 'Me doy tiempo para contemplar mi situación y si estoy muy estresado pido el día.'
  },
  {
    id: 6,
    format: 'multiple-choice-question',
    question: 'Imagina que te encuentras en una situación ética complicada en el trabajo. ¿Cuál sería tu enfoque?',
    paragraphs: {
      a: 'Consultaría con colegas o superiores para obtener diferentes perspectivas antes de tomar una decisión.',
      b: 'Seguiría mi intuición y tomaría la decisión que considero correcta, incluso si es impopular.',
      c: 'Evaluaría los beneficios y riesgos, y tomaría una decisión basada en el interés de la empresa.',
      d: 'Buscaría orientación externa (por ejemplo, un experto en ética) antes de tomar una decisión.'
    },
    answer: 'a'
  },
  {
    id: 7,
    format: 'open-ended-question',
    question: '¿Qué te motiva en el trabajo y cómo mantienes tu motivación a lo largo del tiempo?',
    answer: 'nada me motiva'
  }
]

export const interviewReview = [
  {
    id: 0,
    feedback: 'Tu respuesta es buena, pero sería mejor si pudieras proporcionar más detalles sobre los proyectos que desarrollaste en empresas internacionales. Además, sería muy beneficioso si pudieras relacionar esas experiencias laborales con las habilidades que mencionaste en la siguiente pregunta.'
  },
  {
    id: 1,
    feedback: 'Tu respuesta fue clara y concisa, pero podrías mejorar proporcionando más detalles sobre cómo aplicaste tus habilidades de trabajo en equipo para resolver el problema. Además, es importante que enfatices en lo que aprendiste de esa experiencia y cómo eso te ha ayudado a crecer profesionalmente.'
  },
  {
    id: 2,
    feedback: 'Tu respuesta es buena y demuestra que tienes una comprensión sólida de lo que se espera en un entorno de trabajo. Sin embargo, sería beneficioso mencionar cómo has utilizado estas habilidades en el pasado para hacer que tu trabajo sea más efectivo.'
  },
  {
    id: 3,
    feedback: 'Tu respuesta es buena, pero sería mejor si pudieras proporcionar un ejemplo más específico de un momento en que hayas manejado un desafío o situación difícil en el trabajo. Además, es importante que muestres cómo has aplicado las habilidades que mencionaste en la pregunta anterior para superar estos desafíos.'
  },
  {
    id: 4,
    feedback: 'Tu respuesta es buena, pero podrías mejorar proporcionando más detalles sobre cómo llegarías a un compromiso con tu compañero de trabajo. Además, es importante mencionar cómo has manejado situaciones similares en el pasado y cómo aprendiste de ellas.'
  },
  {
    id: 5,
    feedback: 'Tu respuesta es buena, pero sería mejor si pudieras proporcionar una estrategia particular que hayas utilizado en el pasado para gestionar el estrés laboral. Mostrar que eres capaz de manejar situaciones estresantes con éxito es una habilidad valiosa en el lugar de trabajo.'
  },
  {
    id: 6,
    feedback: 'Tu respuesta es buena, pero sería mejor si pudieras proporcionar un ejemplo más específico de una situación éticamente compleja en el trabajo. Además, mostrar cómo has manejado situaciones éticamente desafiantes en el pasado demuestra tu capacidad para tomar decisiones difíciles de manera efectiva.'
  },
  {
    id: 7,
    feedback: 'Tu respuesta necesita mejorar, es importante que tengas una idea clara sobre tus metas personales y profesionales a largo plazo, y cómo el trabajo que estás buscando podría ayudarte a alcanzarlas. Mostrar cómo te has mantenido motivado en el pasado en situaciones similares también sería beneficioso.'
  }
]

export const linkQuestionsReviewMock = [
  {
    id: 0,
    format: 'open-ended-question',
    question: 'Háblame sobre tu experiencia laboral previa y en qué puestos te has desarrollado.',
    answer: 'Tengo experiencia desarrollando páginas webs con 3 años de experiencia, he trabajdo en empresas internacionales\n',
    feedback: 'Tu respuesta es buena, pero sería mejor si pudieras proporcionar más detalles sobre los proyectos que desarrollaste en empresas internacionales. Además, sería muy beneficioso si pudieras relacionar esas experiencias laborales con las habilidades que mencionaste en la siguiente pregunta.'
  },
  {
    id: 1,
    format: 'open-ended-question',
    question: 'Describe una situación en la que tuviste que resolver un conflicto o trabajar en equipo para lograr un objetivo. ¿Cómo lo abordaste y qué aprendiste de esa experiencia?',
    answer: 'Tuve un problema con una base de datos, casi la elimino por error, por suerte pudo hacerse rollback y no pasó a mayores, pero no volví a cometer el mismo error.',
    feedback: 'Tu respuesta fue clara y concisa, pero podrías mejorar proporcionando más detalles sobre cómo aplicaste tus habilidades de trabajo en equipo para resolver el problema. Además, es importante que enfatices en lo que aprendiste de esa experiencia y cómo eso te ha ayudado a crecer profesionalmente.'
  },
  {
    id: 2,
    format: 'multiple-choice-question',
    question: '¿Cuál de las siguientes habilidades consideras que es la más importante en un entorno de trabajo?',
    paragraphs: {
      a: 'Habilidades técnicas y conocimientos específicos del puesto.',
      b: 'Habilidades de comunicación y trabajo en equipo.',
      c: 'Habilidades de resolución de problemas y toma de decisiones.',
      d: 'Habilidades de liderazgo y gestión.'
    },
    answer: 'Habilidades de comunicación y trabajo en equipo.',
    feedback: 'Tu respuesta es buena y demuestra que tienes una comprensión sólida de lo que se espera en un entorno de trabajo. Sin embargo, sería beneficioso mencionar cómo has utilizado estas habilidades en el pasado para hacer que tu trabajo sea más efectivo.'
  },
  {
    id: 3,
    format: 'open-ended-question',
    question: '¿Cómo manejas los desafíos o situaciones difíciles en el trabajo? Proporciona un ejemplo concreto.',
    answer: 'Suelo caminar para pensar el problema con mayor claridad, si no tengo claridad le pregunto a alguien con más experiencia',
    feedback: 'Tu respuesta es buena, pero sería mejor si pudieras proporcionar un ejemplo más específico de un momento en que hayas manejado un desafío o situación difícil en el trabajo. Además, es importante que muestres cómo has aplicado las habilidades que mencionaste en la pregunta anterior para superar estos desafíos.'
  },
  {
    id: 4,
    format: 'multiple-choice-question',
    question: '¿Qué harías si te encuentras en desacuerdo con un compañero de equipo en relación a una decisión de trabajo?',
    paragraphs: {
      a: 'Buscaría un compromiso y trataría de llegar a un consenso.',
      b: 'Plantearía mis argumentos y trataría de convencer al compañero de mi punto de vista.',
      c: 'Pediría la intervención de un superior para resolver el desacuerdo.',
      d: 'Aceptaría que tiene razón.'
    },
    answer: 'Buscaría un compromiso y trataría de llegar a un consenso.',
    feedback: 'Tu respuesta es buena, pero podrías mejorar proporcionando más detalles sobre cómo llegarías a un compromiso con tu compañero de trabajo. Además, es importante mencionar cómo has manejado situaciones similares en el pasado y cómo aprendiste de ellas.'
  },
  {
    id: 5,
    format: 'open-ended-question',
    question: '¿Cómo gestionas el estrés en el entorno laboral? ¿Tienes alguna estrategia particular?',
    answer: 'Me doy tiempo para contemplar mi situación y si estoy muy estresado pido el día.',
    feedback: 'Tu respuesta es buena, pero sería mejor si pudieras proporcionar una estrategia particular que hayas utilizado en el pasado para gestionar el estrés laboral. Mostrar que eres capaz de manejar situaciones estresantes con éxito es una habilidad valiosa en el lugar de trabajo.'
  },
  {
    id: 6,
    format: 'multiple-choice-question',
    question: 'Imagina que te encuentras en una situación ética complicada en el trabajo. ¿Cuál sería tu enfoque?',
    paragraphs: {
      a: 'Consultaría con colegas o superiores para obtener diferentes perspectivas antes de tomar una decisión.',
      b: 'Seguiría mi intuición y tomaría la decisión que considero correcta, incluso si es impopular.',
      c: 'Evaluaría los beneficios y riesgos, y tomaría una decisión basada en el interés de la empresa.',
      d: 'Buscaría orientación externa (por ejemplo, un experto en ética) antes de tomar una decisión.'
    },
    answer: 'Consultaría con colegas o superiores para obtener diferentes perspectivas antes de tomar una decisión.',
    feedback: 'Tu respuesta es buena, pero sería mejor si pudieras proporcionar un ejemplo más específico de una situación éticamente compleja en el trabajo. Además, mostrar cómo has manejado situaciones éticamente desafiantes en el pasado demuestra tu capacidad para tomar decisiones difíciles de manera efectiva.'
  },
  {
    id: 7,
    format: 'open-ended-question',
    question: '¿Qué te motiva en el trabajo y cómo mantienes tu motivación a lo largo del tiempo?',
    answer: 'nada me motiva',
    feedback: 'Tu respuesta necesita mejorar, es importante que tengas una idea clara sobre tus metas personales y profesionales a largo plazo, y cómo el trabajo que estás buscando podría ayudarte a alcanzarlas. Mostrar cómo te has mantenido motivado en el pasado en situaciones similares también sería beneficioso.'
  }
]
