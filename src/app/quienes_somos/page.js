"use client";
import Image from "next/image";
import { useState } from "react";

export default function Equipo() {
  const [showInfo1, setShowInfo1] = useState(false);
  const [showInfo2, setShowInfo2] = useState(false);
  const [showInfo3, setShowInfo3] = useState(false);
  const [showInfo4, setShowInfo4] = useState(false);
  const [showInfo5, setShowInfo5] = useState(false);
  const [showInfo6, setShowInfo6] = useState(false);
  const [showInfo7, setShowInfo7] = useState(false);

  return (
    <div className="bg-white container mx-auto p-4">
      <h1 className="text-4xl uppercase font-semibold text-red-500 mb-12 mt-16">
        ¿Quiénes somos?
      </h1>

      <p className="text-lg text-gray-500 text-opacity-80 font-bold mb-10 pl-4 border-l-4 border-gray-500">
        Somos una red compuesta por 7 observatorios que asumen distintos temas a
        observar. Como ya se ha mencionado anteriormente, somos un equipo
        multidisciplinario.
      </p>

      <div className="flex justify-center mb-12">
        <div className="w-5/6 p-2">

          <Image
            className="mx-auto"
            src="/img/jaime.png"
            alt="Imagen 1"
            width={300}
            height={160}
          />
          <h1 className="text-center font-semibold p-3 mb-2 bg-gradient-to-r from-black to-black bg-clip-text text-transparent border-b-2 border-red-400 w-2/4 mx-auto">
            Jaime Tinto Arandes Ph.D
          </h1>
        </div>
        <div className="w-5/6 p-2">
          <Image
            className="mx-auto"
            src="/img/marcos.png"
            alt="Imagen 2"
            width={300}
            height={160}
          />
          <h1 className="text-center font-semibold p-3 mb-2 bg-gradient-to-r from-black to-black bg-clip-text text-transparent border-b-2 border-red-400 w-2/4 mx-auto">
            Ing. Marcos Lenín Villarreal
          </h1>
        </div>
      </div>

      <p className="text-lg text-gray-800 mb-6"></p>

      <p className="text-lg text-gray-800 mb-6">
        El Coordinador de la RIOUC es Jaime Tinto Arandes Ph.D; quien es
        Economista Universidad de Los Andes-Venezuela, Especialista en Técnicas
        de Muestreo CIENES-Chile, Postgrado en Ciencias Empresariales
        Universitat de Barcelona-España, Doctor en Ciencias Económicas y
        Empresariales Universitat de Barcelona España.
      </p>

      <p className="text-lg text-gray-800 mb-6">
        Tiene una amplia trayectoria en el ámbito universitario, en docencia,
        investigación y gestión, destacándose en todos esos ámbitos.
      </p>

      <p className="text-lg text-gray-800 mb-6">
        Forma parte del equipo el Ing. Marcos Lenín Villarreal Esquivel,
        responsable del diseño y estructuración de las bases de datos e
        información recolectada dentro de la RIOUC.
      </p>

      <p className="text-lg text-gray-800 mb-12">
        La RIOUC cuenta con el apoyo permanente del Laboratorio de Calculo
        Computacional y Analítica de Datos ubicado en el CIITT, coordinado por
        Orlando Álvarez Llamoza PhD, quienes contribuyen en el análisis y
        almacenamiento de la información.
      </p>
      
      {/* Primer observatorio */}
      <h2
        className="text-2xl font-semibold text-red-500 mb-8 cursor-pointer border-b-2 border-red-300 w-full"
        onClick={() => setShowInfo1(!showInfo1)}
      >
        Observatorio Fenómenos Socioeconómicos
      </h2>

      {/* Mostrar información si showInfo es verdadero */}
      {showInfo1 && (
        <>
          <p className="text-lg text-gray-500 text-opacity-80 font-bold mb-10 pl-4 border-l-4 border-gray-500">
            El observatorio de fenómenos socioeconómicos tiene interés en
            comprender el comportamiento de los individuos con su entorno en sus
            distintas dimensiones en ámbito social y económico.
          </p>
          <div className="mb-10 text-center">
            <Image
              className="mx-auto rounded-lg"
              src="/img/mariaemilia.png"
              alt="RIOUC"
              width={450}
              height={225}
            />
            <h1 className="text-center font-semibold p-3 mb-2 bg-gradient-to-r from-black to-black bg-clip-text text-transparent border-b-2 border-red-400 w-2/4 mx-auto">
              Lic. María Emilia Molina de Tinto
            </h1>
          </div>
          <p className="text-lg text-gray-800 mb-6">
            Este Observatorio busca recopilar, monitorear información acerca de
            temas como: el empleo, consumo, migraciones, emprendimientos, con la
            finalidad de entender el comportamiento de las variables que inciden
            en dichos fenómenos, y de esta manera poder explicarlos.
          </p>
          <p className="text-lg text-gray-800 mb-6">
            La responsable del Observatorio es María Emilia Molina de Tinto,
            Lic. en Administración de Empresas–Universidad de Los Andes,
            Venezuela. Especialista en Gestión de Proyectos Barcelona Activa-
            España y Logística Integral Universitat Politécnica de
            Catalunya-España, MSc en Ciencia Contable Universidad de Los
            Andes-Venezuela, MSc. en Gestión del Bienestar Organizacional-
            Universidad Nebrija-España. Actualmente es Doctorando en Ciencia
            Contable
          </p>
          <p className="text-lg text-gray-800 mb-6">
            Su inquietud en el ámbito de la observación se basa en el
            comportamiento del empleo y consumo.
          </p>
          <h2 className="text-2xl font-semibold text-black mb-6">
            Proyecto de investigación
          </h2>
          <p className="text-lg text-gray-800 mb-6">
            El impacto del teletrabajo, estructuración de base de datos
            empresariales para el comportamiento mipyme, estructuración de bases
            informativas para el área de Derecho y Bienestar Social.
          </p>
          <p className="text-lg text-gray-800 mb-6">
            También participa en colaboración en los proyectos: Modelos de
            gestión universitaria, Modelo Dinámico cognitivo teórico entre las
            variables que inciden en la difusión del rumor, Aplicaciones
            interdisciplinarias de sistemas complejos en la gestión integrada de
            cuencas hidrográficas en los altos Andes del Macizo del Cajas.
          </p>
          <p className="text-lg text-gray-800 mb-12">
            Proyectos en colaboración con instituciones: Ministerio del
            Ambiente, Agua, Energía y Tecnología (MAAET), Proyecto” Mi Barrio
            Verde”. Universidad Politécnica Salesiana: Estructuración de
            plataforma tecnológica para las necesidades MiPymes.
          </p>{" "}
        </>
      )}

      {/* Segundo observatorio */}
      <h2
        className="text-2xl font-semibold text-red-500 mb-8 cursor-pointer border-b-2 border-red-300 w-full"
        onClick={() => setShowInfo2(!showInfo2)}
      >
        Observatorio Desarrollo Social
      </h2>

      {/* Mostrar información si showInfo es verdadero */}
      {showInfo2 && (
        <>
          <p className="text-lg text-gray-500 text-opacity-80 font-bold mb-10 pl-4 border-l-4 border-gray-500">
            Basados en la Organización Mundial de la Salud (OMS) que define los
            determinantes sociales de la salud como «las circunstancias en que
            las personas nacen, crecen, trabajan, viven y envejecen», así como
            el conjunto de condiciones que pueden modificar el modo de vida de
            la población (OMS, 2015). En estas condiciones se incluye el
            contexto sociopolítico, la gobernanza, las normas y valores
            culturales de la sociedad, la educación, los ingresos, los ingresos,
            la educación, sexo, raza, cohesión social, factores biológicos,
            factores psicosociales, conductuales, así como las características
            del sistema de salud.
          </p>

          <div className="flex justify-center mb-12">
            <div className="w-5/6 p-2">
              <Image
                className="mx-auto"
                src="/img/ingeniera_aura.png"
                alt="Imagen 1"
                width={310}
                height={160}
              />
              <h1 className="text-center font-semibold p-3 mb-2 bg-gradient-to-r from-black to-black bg-clip-text text-transparent border-b-2 border-red-400 w-2/4 mx-auto">
                Ing. Aura del Cisne Guerrero Luzuriaga
              </h1>
            </div>
            <div className="w-5/6 p-2">
              <Image
                className="mx-auto"
                src="/img/pisc_elizabeth_leon.png"
                alt="Imagen 2"
                width={310}
                height={160}
              />
              <h1 className="text-center font-semibold p-3 mb-2 bg-gradient-to-r from-black to-black bg-clip-text text-transparent border-b-2 border-red-400 w-2/4 mx-auto">
                Pisc. Elizabeth León MSc
              </h1>
            </div>
          </div>

          <p className="text-lg text-gray-800 mb-6">
            El Observatorio de Desarrollo Social de la RIOUC, trabaja en la
            articulación de proyectos de investigación de diferentes actores
            sociales; además, brinda asesoría técnica para el intercambio de
            información y fomento de la cooperación; así como, el desarrollo de
            publicaciones de hallazgos de una manera propositiva con enfoque al
            desarrollo sostenible y sustentable del Austro. El Observatorio de
            Desarrollo Social tiene como fin proponer acciones en el diseño y la
            implementación de las políticas públicas que tributen a mejorar la
            calidad de vida de la población vulnerable de la Región.
          </p>

          <p className="text-lg text-gray-800 mb-6">
            La responsable del Observatorio es la Ing. Aura del Cisne Guerrero
            Luzuriaga MSc. Especialista en Gestión de Datos. Su tema de
            investigación es la Mujer Rural. La acompaña en el Observatorio la
            Pisc. Elizabeth León MSc., quien desarrolla el tema de Violencia
            familiar.
          </p>

          <h2 className="text-2xl font-semibold text-black mb-6">Proyectos</h2>

          <p className="text-lg text-gray-800 mb-6">
            Para avanzar hacia el cumplimiento de nuestros objetivos, el
            Observatorio de Desarrollo Social presenta breves perfiles de
            nuestro país, emisión de documentos analíticos relacionados con
            bases de datos levantadas en los programas que se llevan adelante
            como:
          </p>

          <li className="text-lg text-gray-800 mb-6">
            Mujer Rural, con sus proyectos: Brecha digital, seguridad
            alimentaria, productividad y calidad de vida.
          </li>
          <li className="text-lg text-gray-800 mb-6">
            Violencia intrafamiliar con sus proyectos.
          </li>
          <li className="text-lg text-gray-800 mb-6">
            Inversión Social, Programas de Protección Social a nivel local y
            nacional.
          </li>
          <li className="text-lg text-gray-800 mb-6">
            Impacto de la Innovación tecnológica en la enseñanza en psicología.
          </li>
          <li className="text-lg text-gray-800 mb-6">
            Percepción y efectos del aborto en la población estudiantil
            universitaria.
          </li>
          <li className="text-lg text-gray-800 mb-6">
            Percepción de la violencia en la población universitaria. ¿La
            reconocen?
          </li>
        </>
      )}

      {/* Tercer observatorio */}
      <h2
        className="text-2xl font-semibold text-red-500 mb-8 cursor-pointer border-b-2 border-red-300 w-full"
        onClick={() => setShowInfo3(!showInfo3)}
      >
        Observatorio Salud Pública
      </h2>

      {/* Mostrar información si showInfo es verdadero */}

      {showInfo3 && (
        <>
          <p className="text-lg text-gray-500 text-opacity-80 font-bold mb-10 pl-4 border-l-4 border-gray-500">
            La salud pública es un conjunto de acciones organizadas por los
            actores del sistema de salud, con la finalidad de prevenir las
            enfermedades y también de dar solución a las patologías en los tres
            niveles de organización del sistema.
          </p>

          <div className="flex justify-center mb-12">
            <div className="w-5/6 p-2">
              <Image
                className="mx-auto"
                src="/img/ebingen.png"
                alt="Imagen 1"
                width={310}
                height={160}
              />
              <h1 className="text-center font-semibold p-3 mb-2 bg-gradient-to-r from-black to-black bg-clip-text text-transparent border-b-2 border-red-400 w-2/4 mx-auto">
                Od. Ebingen Villavicencio
              </h1>
            </div>
            <div className="w-5/6 p-2">
              <Image
                className="mx-auto"
                src="/img/ana.png"
                alt="Imagen 2"
                width={310}
                height={160}
              />
              <h1 className="text-center font-semibold p-3 mb-2 bg-gradient-to-r from-black to-black bg-clip-text text-transparent border-b-2 border-red-400 w-2/4 mx-auto">
                Od. Ana Cristina Vásquez
              </h1>
            </div>
          </div>

          <p className="text-lg text-gray-800 mb-6">
            Los organismos de salud internacionales multilaterales han puesto
            como doctrina, la observancia de las 11 funciones específicas de la
            salud púbica entre ellas tenemos:
          </p>

          <p className="text-lg text-gray-800 mb-6">
            FESP 1: Monitoreo y análisis de la situación de salud de la
            población
          </p>
          <p className="text-lg text-gray-800 mb-6">
            FESP 2: Vigilancia de la salud pública, investigación y control de
            riesgos y daños.
          </p>
          <p className="text-lg text-gray-800 mb-6">
            FESP 3: Promoción de la salud
          </p>
          <p className="text-lg text-gray-800 mb-6">
            FESP 4: Participación social y refuerzo del poder de los ciudadanos
            en salud.
          </p>
          <p className="text-lg text-gray-800 mb-6">
            FESP 5: Desarrollo de políticas y planes que apoyen los esfuerzos
            individuales y colectivos en salud pública y contribuyan a la
            rectoría sanitaria nacional
          </p>
          <p className="text-lg text-gray-800 mb-6">
            FESP 6: Fortalecimiento de la capacidad institucional de regulación
            y fiscalización en salud
          </p>
          <p className="text-lg text-gray-800 mb-6">
            FESP 7: Evaluación y promoción del acceso equitativo a los servicios
            de salud.
          </p>
          <p className="text-lg text-gray-800 mb-6">
            FESP 8: Desarrollo de recursos humanos y capacitación en salud
            pública.
          </p>
          <p className="text-lg text-gray-800 mb-6">
            FESP 9: Garantía y mejoramiento de la calidad de los servicios de
            salud individuales y colectivos.
          </p>
          <p className="text-lg text-gray-800 mb-6">
            FESP 10: Investigación, desarrollo e implementación de soluciones
            innovadoras.
          </p>
          <p className="text-lg text-gray-800 mb-6">
            FESP 11: Reducción del impacto de las emergencias y desastres en la
            salud.
          </p>
          <p className="text-lg text-gray-800 mb-6">
            Específicamente el presente observatorio será un punto de encuentro
            académico y social comunitario para implementar y desarrollar la
            FESP 4: Participación social y refuerzo del poder de los ciudadanos
            en salud. Para lo cual se necesita disponer y hacer públicos los
            datos de los indicadores de salud del país.
          </p>
          <p className="text-lg text-gray-800 mb-6">
            Los objetivos propuestos para el sistema de indicadores en cuanto a
            salud en general, salud bucal, salud mental, salud reproductiva,
            farmacovigilancia y economía de la salud. Entre los que podemos
            nombrar:
          </p>

          <li className="text-lg text-gray-800 mb-6">
            Salud bucal en escolares.
          </li>
          <li className="text-lg text-gray-800 mb-6">
            Fluor de ingesta humana.
          </li>
          <li className="text-lg text-gray-800 mb-6">
            Salud mental comunitaria.
          </li>
          <li className="text-lg text-gray-800 mb-6">
            Principales causas de mortalidad por ciclos de vida.
          </li>
          <li className="text-lg text-gray-800 mb-6">
            Automedicación.
          </li>
          <li className="text-lg text-gray-800 mb-6">
            Cumplimiento del esquema de vacunas.
          </li>
          <h2 className="text-2xl font-semibold text-black mb-6">Proyectos</h2>

          <li className="text-lg text-gray-800 mb-6 ">
            Construcción de indicadores de Salud Pública.
          </li>
          <li className="text-lg text-gray-800 mb-6 ">
            Valoración de Enfermedad Periodontal.
          </li>
          <li className="text-lg text-gray-800 mb-6 ">
            Cuidados de la Salud Bucal.
          </li>
        </>
      )}

      {/* Cuarto observatorio */}
      <h2
        className="text-2xl font-semibold text-red-500 mb-8 cursor-pointer border-b-2 border-red-300 w-full"
        onClick={() => setShowInfo4(!showInfo4)}
      >
        Observatorio Comportamiento Urbano
      </h2>

      {/* Mostrar información si showInfo es verdadero */}

      {showInfo4 && (
        <>
          <p className="text-lg text-gray-500 text-opacity-80 font-bold mb-10  pl-4 border-l-4 border-gray-500">
            El observatorio comportamiento urbano hace una mirada al
            comportamiento en el uso de los espacios públicos y en las políticas
            públicas para uso de los mismos.
          </p>
          <div className="mb-10 text-center">
            <Image
              className="mx-auto rounded-lg"
              src="/img/arq_christian.png"
              alt="RIOUC"
              width={280}
              height={155}
            />
            <h1 className="text-center font-semibold p-3 mb-2 bg-gradient-to-r from-black to-black bg-clip-text text-transparent border-b-2 border-red-400 w-2/4 mx-auto">
              Arq. Christian Hernán Contreras Escandón
            </h1>
          </div>
          <p className="text-lg text-gray-800 mb-6 ">
            Su inquietud es la de aportar en la generación de políticas públicas
            respetuosas con el Medio Ambiente obedeciendo a los lineamientos de
            ODS que como país hemos decidido contribuir para el desarrollo 2036.
          </p>
          <p className="text-lg text-gray-800 mb-6 ">
            El responsable del Observatorio es el Arq. Christian Hernán
            Contreras Escandón MSc., quien ha participado en Habitat 2036 con el
            objeto de aportar al informe de la Agenda Nacional Habitat Ecuador,
            ANHE 2036, como representante de la Mesa 7: Economía, desarrollo
            local y fomento productivo, del Comité Multiactor AHSE 2036 y en el
            Proyecto Latinoamericano Imaginarios Urbanos que lidera Flacso
            Argentina, conjuntamente con el profesor Arq. Giovanny Albarracín
            MSc.
          </p>

          <h2 className="text-2xl font-semibold text-black mb-6">Proyectos</h2>
          <li className="text-lg text-gray-800 mb-6 ">
            Espacio público y género. Caracterización a partir del método
            etnográfico.
          </li>
          <li className="text-lg text-gray-800 mb-6 ">
            Proyecto Latinoamericano: “Imaginarios urbanos”. Liderado por la
            FLACSO Argentina.
          </li>
        </>
      )}

      {/* Quinto observatorio */}
      <h2
        className="text-2xl font-semibold text-red-500 mb-8 cursor-pointer border-b-2 border-red-300 w-full"
        onClick={() => setShowInfo5(!showInfo5)}
      >
        Observatorio Ambiental
      </h2>

      {/* Mostrar información si showInfo es verdadero */}
      {showInfo5 && (
        <>
          <p className="text-lg text-gray-500 text-opacity-80 font-bold mb-10  pl-4 border-l-4 border-gray-500">
            El seguimiento de variables que afectan el medio ambiente constituye
            el objetivo del observatorio ambiental con el fin de prevenir,
            reducir y restaurar los daños.
          </p>
          <div className="mb-10 text-center">
            <Image
              className="mx-auto rounded-lg"
              src="/img/sandra.png"
              alt="RIOUC"
              width={300}
              height={155}
            />
            <h1 className="text-center font-semibold p-3 mb-2 bg-gradient-to-r from-black to-black bg-clip-text text-transparent border-b-2 border-red-400 w-2/4 mx-auto">
              Ing. Sandra Cobos Mora
            </h1>
          </div>
          <p className="text-lg text-gray-800 mb-6 ">
            El observatorio ambiental bajo la responsabilidad de la Ing. Sandra
            L. Cobos Mora MSc, es un espacio de investigación, monitoreo,
            análisis, interpretación y comprensión de la interacción entre
            suelo, agua, aire y colectividades humanas, con el fin de contribuir
            en la neutralización de agresiones hacia el medioambiente. Se
            fundamenta en la recolección de datos geográfico para, en base a
            éstos, simular y modelar diversos escenarios, así como presentar
            indicadores, gráficas, críticas y comparativas que coadyuven en la
            planificación del desarrollo sostenible del país sobre una base
            suficientemente objetiva y sistematizada. La responsable de este
            observatorio.
          </p>

          <h2 className="text-2xl font-semibold text-black mb-6">Proyectos</h2>
          <p className="text-lg text-gray-800 mb-6 ">
            Directora de:
          </p>
          <li className="text-lg text-gray-800 mb-6 ">
            Deslizamiento: caracterización de sus factores morfológicos y
            ambientales
          </li>
          <li className="text-lg text-gray-800 mb-6 ">
            Sistema mancomunado de transporte, tratamiento y disposición final
            de residuos sólidos para la provincia del Azuay.
          </li>
          <h2 className="text-2xl font-semibold text-black mb-6">
            Investigadora en
          </h2>
          <p className="text-lg text-gray-800 mb-6 ">
            Indicadores de sostenibilidad urbana para la ciudad de Cuenca –
            Ecuador.
          </p>
          <p className="text-lg text-gray-800 mb-6 ">
            El plan de ordenamiento urbano 2014 en la ciudad de cuenca: impacto
            en la morfología de las áreas periféricas de expansión urbana;
            Universidad Católica de Cuenca.
          </p>
          <p className="text-lg text-gray-800 mb-6 ">
            Estudio de cambios en la fenología de la vegetación de la península
            ibérica: la fenología observada desde satélite como indicadora de
            cambios en el clima.
          </p>
          <h2 className="text-2xl font-semibold text-black mb-6">Urbamed</h2>
          <p className="text-lg text-gray-800 mb-6 ">
            Caracterización hidrológica-hidráulica de la cuenca del río paute.
            etapa i: Gestión de la información y modelación numérica.
          </p>
          <p className="text-lg text-gray-800 mb-6 ">
            Igualmente, contribuye en colaboración en los proyectos:
            Aplicaciones interdisciplinarias de sistemas complejos en la gestión
            integrada de cuencas hidrográficas en los altos Andes del Macizo del
            Cajas y en proyectos con instituciones: Ministerio del Ambiente,
            Agua, Energía y Tecnología (MAAET), Proyecto” Mi Barrio Verde”,
            Ministerio de Producción, Comercio Exterior e Inversiones, Consejo
            Cantonal de Derechos Humanos Cuenca.
          </p>
          <h2 className="text-2xl font-semibold text-black mb-6">Proyectos</h2>
          <p className="text-lg text-gray-800 mb-6 ">
            Deslizamiento: caracterización de sus factores ambientales y
            morfológicos.
          </p>
          <p className="text-lg text-gray-800 mb-6 ">
            Igualmente, contribuye en colaboración en los proyectos:
            Aplicaciones interdisciplinarias de sistemas complejos en la gestión
            integrada de cuencas hidrográficas en los altos Andes del Macizo del
            Cajas y en proyectos con instituciones: Ministerio del Ambiente,
            Agua, Energía y Tecnología (MAAET), Proyecto” Mi Barrio Verde”,
            Ministerio de Producción, Comercio Exterior e Inversiones, Consejo
            Cantonal de Derechos Humanos Cuenca.
          </p>
        </>
      )}

      {/* Sexto observatorio */}
      <h2
        className="text-2xl font-semibold text-red-500 mb-8 cursor-pointer border-b-2 border-red-300 w-full"
        onClick={() => setShowInfo6(!showInfo6)}
      >
        Observatorio Natural
      </h2>

      {/* Mostrar información si showInfo es verdadero */}
      {showInfo6 && (
        <>
          <p className="text-lg text-gray-500 text-opacity-80 font-bold mb-10  pl-4 border-l-4 border-gray-500">
            El observatorio natural tiene por objeto entender los procesos
            biogeoquímicos, hidrológicos y microbiológicos del ecosistema
            altoandino del sur del Ecuador.
          </p>
          <div className="mb-10 text-center">
            <Image
              className="mx-auto rounded-lg"
              src="/img/blg_jazmin.png"
              alt="RIOUC"
              width={280}
              height={155}
            />
            <h1 className="text-center font-semibold p-3 mb-2 bg-gradient-to-r from-black to-black bg-clip-text text-transparent border-b-2 border-red-400 w-2/4 mx-auto">
              Blg. Jazmín Salazar MSc
            </h1>
          </div>
          <p className="text-lg text-gray-800 mb-6 ">
            El Observatorio Natural es parte de la Red de Investigación y
            Observatorios de la Universidad Católica de Cuenca. Se crea con base
            en la necesidad imperante de realizar continuos monitoreos y
            seguimiento de los cambios en los procesos biogeoquímicos,
            hidrológicos y microbiológicos dentro de los ecosistemas que forman
            parte de una microcuenca hidrográfica, estos estudios bases
            permitirán generar herramientas adecuadas para la toma de decisiones
            de los gestores de los recursos naturales.
          </p>
          <p className="text-lg text-gray-800 mb-6 ">
            Inicialmente, cuenta con el apoyo de la Universidad Católica de
            Cuenca y la Universidad de Bayreuth para continuar con el registro y
            análisis de datos. Blg. Jazmín Salazar MSc. Responsable Observatorio
            Natural.
          </p>
          <p className="text-lg text-gray-800 mb-6 ">
            El observatorio será un instrumento para:
          </p>
          <li className="text-lg text-gray-800 mb-6 ">
            Gestionar recursos a través de la formulación y presentación de
            proyectos de investigación.
          </li>
          <li className="text-lg text-gray-800 mb-6 ">
            Proporcionar información específica a los diferentes actores para la
            implementación de medidas y la toma de decisiones.
          </li>
          <li className="text-lg text-gray-800 mb-6 ">
            Permitir la vinculación de diversos Grupos de Investigación tanto
            nacionales como internacionales, logrando generar productos de
            impacto.
          </li>
          <li className="text-lg text-gray-800 mb-6 ">
            Monitorear de manera constante procesos hidrológicos, biogeoquímicos
            y microbiológicos para evaluar las relaciones ecosistémicas.
          </li>
          <li className="text-lg text-gray-800 mb-6 ">
            Comprender la dinámica ecosistémica en relación con su resiliencia
            al cambio climático a través de la colecta de datos de mediano y
            largo plazo, que nos permitan generar políticas públicas basadas en
            evidencia real del comportamiento de estos lugares frente a las
            presiones antropogénicas.
          </li>
          <h2 className="text-2xl font-semibold text-black mb-6">
            Principales acciones del observatorio:
          </h2>
          <li className="text-lg text-gray-800 mb-6 ">
            Recopilar datos periódicamente que proporcionan los equipos
            instalados en cada una de las parcelas.
          </li>
          <li className="text-lg text-gray-800 mb-6 ">
            Involucrar a estudiantes de grado y pregrado de las Instituciones de
            Educación Superior a nivel nacional e internacional.
          </li>
          <li className="text-lg text-gray-800 mb-6 ">
            Gestionar la cooperación nacional e internacional en el área de
            hidrología y manejo de cuencas hidrográficas.
          </li>
          <li className="text-lg text-gray-800 mb-6 ">
            Garantizar el mantenimiento de los equipos instalados en cada una de
            las parcelas.
          </li>
          <h2 className="text-2xl font-semibold text-black mb-6">
            Proyecto de investigación
          </h2>
          <p className="text-lg text-gray-800 mb-6 ">
            Hipótesis del refugio hiporreico: Descripción de nichos ecológicos
            en macroinvertebrados acuáticos con isótopos estables en la
            subcuenca del Machángara
          </p>
        </>
      )}

      {/* Septimo observatorio */}
      <h2
        className="text-2xl font-semibold text-red-500 mb-8 cursor-pointer border-b-2 border-red-300 w-full"
        onClick={() => setShowInfo7(!showInfo7)}
      >
        Observatorio Innovación Educativa
      </h2>

      {/* Mostrar información si showInfo es verdadero */}

      {showInfo7 && (
        <>
          <p className="text-lg text-gray-500 text-opacity-80 font-bold mb-10  pl-4 border-l-4 border-gray-500">
            La innovación es un recurso que se utiliza dentro de distintas áreas
            para renovar o impulsar las nuevas formas en que se pueden
            desarrollar los procesos con puntos de vistas más novedosos.
          </p>
          <div className="mb-10 text-center">
            <Image
              className="mx-auto rounded-lg"
              src="/img/augusto.png"
              alt="RIOUC"
              width={300}
              height={155}
            />
            <h1 className="text-center font-semibold p-3 mb-2 bg-gradient-to-r from-black to-black bg-clip-text text-transparent border-b-2 border-red-400 w-2/4 mx-auto">
              Ing. Augusto Cabrera MSc
            </h1>
          </div>
          <p className="text-lg text-gray-800 mb-6 ">
            Impulsar las nuevas herramientas tecnológicas que se han
            desarrollado en los últimos años dentro de la enseñanza-aprendizaje
            es lo que se pretende en el observatorio con la finalidad de
            monitorear sus efectos dentro del proceso.
          </p>
          <p className="text-lg text-gray-800 mb-6 ">
            Es la inquietud que tiene el Ing. Augusto Cabrera MSc., quien ha
            impulsado dentro de la Universidad Católica el área de Innovación y
            Emprendimiento como una unidad que aporta en el eje transversal de
            la formación recibida en las distintas carreras que se desarrollan
            dentro de la universidad.
          </p>
          <p className="text-lg text-gray-800 mb-6 ">
            Es miembro de la Red de Educación Inmersiva en el país y es el
            Coordinador del Centro de Investigación e Innovación y Transferencia
            Tecnológica CIITT de la Universidad Católica de Cuenca.
          </p>
          <p className="text-lg text-gray-800 mb-6 ">
            Este Observatorio cuenta con el apoyo del Laboratorio de Innovación
            Educativa Tecnológica.
          </p>
          <h2 className="text-2xl font-semibold text-black mb-6">Proyectos</h2>
          <li className="text-lg text-gray-800 mb-6 ">
            Impacto de las tecnologías en el sector educativo.
          </li>
          <li className="text-lg text-gray-800 mb-6 ">
            Impacto en las conexiones entre las redes de educación.
          </li>
          <h2 className="text-2xl font-semibold text-black mb-6">
            Articulación con los ejes sustantivos
          </h2>
          <p className="text-lg text-gray-800 mb-6 ">
            La RIOUC contribuyendo con la articulación entre los ejes
            sustantivos de las instituciones universitarias, participa con
            actividades de formación investigativa, con la participación de los
            estudiantes de pregrado en las actividades que se realizan en RIOUC.
            Así mismo, los estudiantes de pregrado que desean realizar sus
            tesis, y prácticas de vinculación con la sociedad a través de
            proyectos de vinculación.
          </p>
          <p className="text-lg text-gray-800 mb-6 ">
            También, RIOUC ha recibido estudiantes de intercambio con otras
            universidades, que participan de manera activa en proyectos de
            investigación, es el caso de estudiantes de los últimos ciclos de
            matemática y física de la Universidad de Yachay.
          </p>
          <p className="text-lg text-gray-800 mb-6 ">
            Al mismo tiempo, gracias a la invitación de DatAcademics, RIOUC ha
            contribuido con el apoyo en formación en el área de investigación
            con cursos para promover el uso de herramientas estadísticas, de
            simulación, modelado y lógica difusa para de esta manera contribuir
            en el desarrollo de los proyectos de investigación.
          </p>
        </>
      )}
    </div>
  );
}
