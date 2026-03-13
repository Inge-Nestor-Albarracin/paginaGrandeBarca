import React, { useState } from "react";

/* ===========================
   IMÁGENES
   =========================== */

import Champions from "./assets/Champions.jpg";
import Entrenamiento from "./assets/Entrenamiento.jpg";
import Fichaje from "./assets/Fichaje.jpg";
import NoticiaPrincipal from "./assets/Noticiaprincipal.jpg";
import VictoriaBarca from "./assets/victoriaBarca.jpg";

/* ===========================
   DATOS DE NOTICIAS
   =========================== */

const noticias = [
  {
    id: 1,
    titulo: "Victoria del Barça",
    img: VictoriaBarca,
    contenido: `
El Barcelona consiguió una importante victoria después de un partido intenso y muy disputado. El equipo mostró un gran control del balón y logró imponer su estilo de juego durante gran parte del encuentro.

Los jugadores destacaron por su intensidad y compromiso dentro del campo. La defensa se mantuvo sólida y el ataque generó varias oportunidades claras de gol.

La afición celebró el resultado, ya que el triunfo permite al equipo mantenerse en la lucha por los primeros puestos de la tabla. El entrenador destacó el trabajo colectivo y aseguró que el equipo seguirá mejorando en los próximos partidos.
`
  },
  {
    id: 2,
    titulo: "Entrenamiento previo al clásico",
    img: Entrenamiento,
    contenido: `
El equipo realizó una intensa sesión de entrenamiento antes del esperado clásico. El cuerpo técnico trabajó diferentes aspectos tácticos y físicos para preparar el partido.

Durante la práctica se pudieron observar ejercicios de presión, circulación rápida del balón y jugadas ofensivas que podrían utilizarse en el próximo encuentro.

Los jugadores se mostraron concentrados y motivados. El entrenador destacó la importancia de mantener la calma y aprovechar las oportunidades frente a un rival siempre exigente.
`
  },
  {
    id: 3,
    titulo: "Nuevo fichaje",
    img: Fichaje,
    contenido: `
El club anunció oficialmente la llegada de un nuevo fichaje que reforzará la plantilla para la temporada actual. El jugador llega con grandes expectativas y con la intención de aportar calidad al equipo.

Durante su presentación, el futbolista expresó su entusiasmo por formar parte del club y aseguró que dará lo mejor de sí para ayudar al equipo a conseguir títulos.

La directiva confía en que su incorporación aporte nuevas alternativas tácticas y aumente la competitividad dentro del plantel.
`
  },
  {
    id: 4,
    titulo: "Preparación Champions",
    img: Champions,
    contenido: `
El Barcelona continúa su preparación para el próximo partido de Champions League. El equipo ha intensificado los entrenamientos y ha analizado detenidamente al rival.

El cuerpo técnico trabaja en diferentes estrategias para enfrentar un partido que se considera clave para el futuro del equipo en la competición.

Los jugadores son conscientes de la importancia del encuentro y han mostrado una gran concentración durante las sesiones de entrenamiento. El objetivo es lograr una victoria que acerque al equipo a la siguiente fase.
`
  }
];

const noticiaPrincipal = {
  titulo: "Es una de las semanas más importantes de la temporada",
  img: NoticiaPrincipal,
  contenido: `
El FC Barcelona afronta una de las semanas más decisivas de la temporada. El equipo se prepara para disputar partidos clave que pueden definir su camino en las competiciones.

Durante los entrenamientos recientes, los jugadores han demostrado una gran intensidad y compromiso con el trabajo del cuerpo técnico.

El entrenador destacó la importancia de mantener la concentración y la disciplina táctica para afrontar los próximos desafíos.

La afición confía en el equipo y espera grandes resultados en esta etapa crucial de la temporada.
`
};

/* ===========================
   COMPONENTE
   =========================== */

export default function Header() {
  const [noticiaActiva, setNoticiaActiva] = useState(null);

  /* ===== VISTA NOTICIA ===== */

  if (noticiaActiva) {
    return (
      <div style={styles.paginaNoticia}>
        <div style={styles.contenidoNoticia}>
          <button
            style={styles.botonVolver}
            onClick={() => setNoticiaActiva(null)}
          >
            ← Volver
          </button>

          <h2 style={styles.titulo}>{noticiaActiva.titulo}</h2>

          <img
            src={noticiaActiva.img}
            alt={noticiaActiva.titulo}
            style={styles.imagenPrincipal}
          />

          <div style={styles.texto}>
            {noticiaActiva.contenido
              .split("\n")
              .filter((p) => p.trim() !== "")
              .map((parrafo, i) => (
                <p key={i} style={styles.parrafo}>
                  {parrafo}
                </p>
              ))}
          </div>

          <h2 style={styles.subtitulo}>Más Noticias</h2>

          <div style={styles.gridNoticias}>
            {noticias.map((item) => (
              <div
                key={item.id}
                style={styles.card}
                onClick={() => setNoticiaActiva(item)}
              >
                <img src={item.img} alt={item.titulo} style={styles.cardImg} />
                <p style={styles.cardTitulo}>{item.titulo}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  /* ===== VISTA INICIAL ===== */

  return (
    <div style={styles.hero} onClick={() => setNoticiaActiva(noticiaPrincipal)}>
      <img
        src={noticiaPrincipal.img}
        alt={noticiaPrincipal.titulo}
        style={styles.heroImg}
      />

      <div style={styles.heroTexto}>
        <h1 style={styles.heroTitulo}>{noticiaPrincipal.titulo}</h1>
      </div>
    </div>
  );
}

/* ===========================
   ESTILOS
   =========================== */

const styles = {
  /* HERO PRINCIPAL */

  hero: {
    position: "relative",
    cursor: "pointer",
    width: "100%"
  },

  heroImg: {
    width: "100%",
    height: "100vh",
    objectFit: "cover"
  },

  heroTexto: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    padding: 30,
    background: "rgba(0,0,0,0.5)",
    color: "white",
    textAlign: "center"
  },

  heroTitulo: {
    fontSize: 38,
    fontWeight: "bold",
    textTransform: "uppercase"
  },

  /* PAGINA NOTICIA */

  paginaNoticia: {
    background: "linear-gradient(135deg,#a50044,#004d98)",
    minHeight: "100vh",
    padding: 30,
    color: "white"
  },

  contenidoNoticia: {
    maxWidth: 900,
    margin: "0 auto"
  },

  botonVolver: {
    marginBottom: 20,
    border: "none",
    background: "white",
    padding: "8px 14px",
    borderRadius: 6,
    cursor: "pointer"
  },

  titulo: {
    fontSize: 30,
    marginBottom: 15
  },

  imagenPrincipal: {
    width: "100%",
    marginBottom: 20,
    borderRadius: 8
  },

  texto: {
    fontSize: 16,
    lineHeight: 1.6
  },

  parrafo: {
    marginBottom: 12
  },

  subtitulo: {
    marginTop: 30,
    marginBottom: 15
  },

  gridNoticias: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 15
  },

  card: {
    cursor: "pointer",
    borderRadius: 8,
    overflow: "hidden",
    background: "white",
    color: "black"
  },

  cardImg: {
    width: "100%",
    height: 150,
    objectFit: "cover"
  },

  cardTitulo: {
    margin: 10,
    fontWeight: 500
  }
};