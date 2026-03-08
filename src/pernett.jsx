import React from "react";

const Pernett = () => {

  const news = [
    {
      image: "https://tn.com.ar/resizer/v2/barcelona-recibio-al-atletico-de-madrid-por-la-copa-del-rey-foto-reuters-LPM5QYZWSNG2JEQT7EKH2GG7XE.png?auth=197e562e6d1cedf01ac70428275462def27a9d7c5049360603fa108c15e7685f&width=767",
      title: "HIGHLIGHTS | Barça 3-0 Atlético de Madrid",
      info: "04:08"
    },
    {
      image: "https://www.fcbarcelona.com/photo-resources/2025/09/09/6b074293-dfb2-4f25-a0e3-3c02b351d730/00-Hansi_Flick.jpg?width=1200&height=750",
      title: "Podemos estar muy orgullosos",
      info: "PRIMER EQUIPO · Hace 6 h"
    },
    {
      image: "https://album.mediaset.es/eimg/2026/02/03/ronald-araujo-celebra-su-gol-al-albacete-16-9-aspect-ratio-default-1031355_da39.jpg?w=1024",
      title: "200 partidos de Araujo con el Barça",
      info: "PRIMER EQUIPO · Hace 6 h"
    }
  ];

  return (
    <>
      <style>
        {`
        .pernett-container{
            padding:40px;
            background: linear-gradient(180deg, #0b0033, #8b0000);
            font-family: Arial, Helvetica, sans-serif;
        }

        .news-grid{
          display:grid;
          grid-template-columns:repeat(3,1fr);
          gap:20px;
        }

        .news-card{
          background:#1a003f;
          color:white;
          border-radius:12px;
          overflow:hidden;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          cursor:pointer;
        }

        .news-card:hover{
          transform:scale(1.04);
          box-shadow:0px 10px 25px rgba(240, 28, 28, 0.4);
        }

        .news-card img{
          width:100%;
          height:200px;
          object-fit:cover;
        }

        .news-content{
          padding:15px;
        }

        .news-title{
          font-size:18px;
          font-weight:bold;
          margin-bottom:8px;
        }

        .news-info{
          font-size:14px;
          color:#cfcfcf;
        }

        .sponsors{
          margin-top:50px;
          text-align:center;
          color:white;
        }

        .sponsor-title{
          font-size:14px;
          margin-bottom:20px;
          opacity:0.8;
        }

        .sponsor-logos{
          display:flex;
          justify-content:center;
          gap:40px;
          align-items:center;
        }

        .sponsor-logos img{
          height:40px;
          opacity:0.8;
          transition:0.3s;
        }

        .sponsor-logos img:hover{
          opacity:1;
          transform:scale(1.1);
        }

        @media(max-width:900px){
          .news-grid{
            grid-template-columns:1fr;
          }
        }
        `}
      </style>

      <div className="pernett-container">

        <div className="news-grid">

          {news.map((item,index)=>(
            <div className="news-card" key={index}>

              <img src={item.image} alt="news"/>

              <div className="news-content">
                <div className="news-title">{item.title}</div>
                <div className="news-info">{item.info}</div>
              </div>

            </div>
          ))}

        </div>

        <div className="sponsors">

          <div className="sponsor-title">
            PRINCIPALES PATROCINADORES DEL CLUB
          </div>

          <div className="sponsor-logos">
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg" alt="nike"/>
            <img src="https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg" alt="spotify"/>
            <img src="https://mb.cision.com/Public/1888/3774753/873ccc7917c69e2a_org.jpg"/>
          </div>

        </div>

      </div>
    </>
  );
};

export default Pernett;