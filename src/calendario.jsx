import React, { useState } from "react";

export default function Calendario() {

  const [verPartido, setVerPartido] = useState(null);

  const partidos = [
    {
      id: 1,
      rival: "Sevilla",
      fecha: "Domingo, 15 marzo",
      hora: "16:15",
      competicion: "La Liga - Jornada 28",
      estadio: "Spotify Camp Nou",
      img: "https://phantom.estaticos-marca.com/282ea39747d89f4bc34aed1a6d7d2be7/resize/1200/f/jpg/assets/multimedia/imagenes/2022/04/02/16488974685761.jpg"
    },
    {
      id: 2,
      rival: "Newcastle",
      fecha: "Miércoles, 18 marzo",
      hora: "18:45",
      competicion: "Champions League",
      estadio: "Spotify Camp Nou",
      img: "https://cdn2.mediotiempo.com/uploads/media/2026/03/10/consulta-previa-newcastle-vs-barcelona-1.jpg"
    },
    {
      id: 3,
      rival: "Rayo Vallecano",
      fecha: "Domingo, 22 marzo",
      hora: "14:00",
      competicion: "La Liga - Jornada 29",
      estadio: "Spotify Camp Nou",
      img: "https://cdn2.mediotiempo.com/uploads/media/2025/08/31/rayo-vallecano-vs-barcelona-horario.jpg"
    }
  ];

  if (verPartido) {
    return (
      <div style={{ maxWidth: 900, margin: "20px auto", padding: 20, fontFamily: "sans-serif" }}>
        
        <button
          onClick={() => setVerPartido(null)}
          style={{
            marginBottom: 20,
            background: "none",
            border: "none",
            color: "#0b1c4d",
            cursor: "pointer",
            fontSize: "1rem",
          }}
        >
          ← Volver
        </button>

        <img
          src={verPartido.img}
          alt={verPartido.rival}
          style={{ width: "100%", borderRadius: 10, marginBottom: 20 }}
        />

        <h2 style={{ fontSize: "1.8rem", fontWeight: "bold", marginBottom: 10 }}>
          FC Barcelona vs {verPartido.rival}
        </h2>

        <p><b>Fecha:</b> {verPartido.fecha}</p>
        <p><b>Hora:</b> {verPartido.hora}</p>
        <p><b>Competición:</b> {verPartido.competicion}</p>
        <p><b>Estadio:</b> {verPartido.estadio}</p>

        <button
          style={{
            marginTop: 20,
            backgroundColor: "#f2c94c",
            border: "none",
            padding: "12px 20px",
            fontWeight: "bold",
            borderRadius: 6,
            cursor: "pointer"
          }}
        >
          COMPRAR ENTRADAS
        </button>

      </div>
    );
  }

  return (
    <div style={{ fontFamily: "sans-serif", maxWidth: 900, margin: "0 auto" }}>

      <h1 style={{ margin: "20px 0", fontSize: "2rem" }}>CALENDARIO</h1>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>

        {partidos.map((partido) => (
          <div
            key={partido.id}
            style={{
              cursor: "pointer",
              borderRadius: 10,
              overflow: "hidden",
              boxShadow: "0 3px 8px rgba(0,0,0,0.15)"
            }}
            onClick={() => setVerPartido(partido)}
          >

            <img
              src={partido.img}
              alt={partido.rival}
              style={{ width: "100%", height: 180, objectFit: "cover" }}
            />

            <div style={{ padding: 15 }}>

              <h3 style={{ marginBottom: 8 }}>
                FC Barcelona vs {partido.rival}
              </h3>

              <p style={{ margin: 0 }}>{partido.fecha}</p>
              <p style={{ margin: 0 }}>{partido.hora}</p>

              <p style={{ marginTop: 6, color: "#555" }}>
                {partido.competicion}
              </p>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}