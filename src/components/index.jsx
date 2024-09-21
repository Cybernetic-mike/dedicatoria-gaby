import React, { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import Flores from "./flowers";
import "animate.css";
import Fondo from "../images/fondo.jpg";
import { Button } from "@mui/material";
import LocalFloristIcon from "@mui/icons-material/LocalFlorist";
// import Swiper core and required modules
import {
  Autoplay,
  Pagination,
  Navigation,
  EffectFade,
  EffectCards,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import Foto1 from "../images/foto1.jpg";
import Foto2 from "../images/foto2.jpg";
import Foto3 from "../images/foto3.jpg";
import Foto4 from "../images/foto4.jpg";
import Foto5 from "../images/foto5.jpg";
import Foto6 from "../images/foto6.jpg";
import Foto7 from "../images/foto7.jpg";
import Foto8 from "../images/foto8.jpg";
import Foto9 from "../images/foto9.jpg";
import Foto10 from "../images/foto10.jpg";
import Foto11 from "../images/foto11.jpg";
import Foto12 from "../images/foto12.jpg";
import Foto13 from "../images/foto13.jpg";
import Foto14 from "../images/foto14.jpg";
import Foto15 from "../images/foto15.jpg";
import Foto16 from "../images/foto16.jpg";
import Foto17 from "../images/foto17.jpg";
import Foto18 from "../images/foto18.jpg";
import Foto19 from "../images/foto19.jpg";
import Foto20 from "../images/foto20.jpg";
import Foto21 from "../images/foto21.jpg";
import Foto22 from "../images/foto22.jpg";
import Foto23 from "../images/foto23.jpg";
import Foto24 from "../images/foto24.jpg";
import Foto25 from "../images/foto25.jpg";
import Foto26 from "../images/foto26.jpg";

function Index() {
  const [activeIndex, setActiveIndex] = useState(0); // Estado para controlar la diapositiva activa
  return (
    <div
      style={{
        backgroundImage: `url(${Fondo})`,
        backgroundSize: "100% 100%",
        textAlign: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div>
        <div style={{ top: "1vw", position: "relative" }}>
          <h1
            className="animate__animated custom-delay animate__fadeInDown animate__slower	"
            style={{
              margin: "0",
              fontSize: "5vw",
              color: "white",
              textShadow: "5px 5px 10px rgb(0,0,0)",
              fontFamily: "sans-serif",
            }}
          >
            ¡¡¡FELIZ DIA DE LA PRIMAVERA!!!
          </h1>
        </div>
        <div
          style={{
            position: "relative",
            display: "flex",
            paddingTop: "15px",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              position: "relative",
              width: "40vw",
              height: "40vh",
              //top: "11vw",
              display: "block",
              alignContent: "center",
            }}
          >
            <Swiper
              spaceBetween={30}
              effect={"fade"}
              navigation={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              pagination={{
                dynamicBullets: true,
              }}
              modules={[
                Autoplay,
                EffectFade,
                Navigation,
                Pagination,
                EffectCards,
              ]}
              speed={800}
              className="mySwiper"
              onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)} // Detecta el cambio de diapositiva
            >
              <SwiperSlide>
                <img className="dim-fotos" src={Foto1} alt="foto1" />
              </SwiperSlide>
              <SwiperSlide>
                <img className="dim-fotos" src={Foto2} alt="foto2" />
              </SwiperSlide>
              <SwiperSlide>
                <img className="dim-fotos" src={Foto3} alt="foto3" />
              </SwiperSlide>
              <SwiperSlide>
                <img className="dim-fotos" src={Foto4} alt="foto4" />
              </SwiperSlide>
              <SwiperSlide>
                <img className="dim-fotos" src={Foto5} alt="foto5" />
              </SwiperSlide>
              <SwiperSlide>
                <img className="dim-fotos" src={Foto6} alt="foto6" />
              </SwiperSlide>
              <SwiperSlide>
                <img className="dim-fotos" src={Foto7} alt="foto7" />
              </SwiperSlide>
              <SwiperSlide>
                <img className="dim-fotos" src={Foto8} alt="foto8" />
              </SwiperSlide>
              <SwiperSlide>
                <img className="dim-fotos" src={Foto9} alt="foto9" />
              </SwiperSlide>
              <SwiperSlide>
                <img className="dim-fotos" src={Foto10} alt="foto10" />
              </SwiperSlide>
              <SwiperSlide>
                <img className="dim-fotos" src={Foto11} alt="foto11" />
              </SwiperSlide>
              <SwiperSlide>
                <img className="dim-fotos" src={Foto12} alt="foto12" />
              </SwiperSlide>
              <SwiperSlide>
                <img className="dim-fotos" src={Foto13} alt="foto13" />
              </SwiperSlide>
              <SwiperSlide>
                <img className="dim-fotos" src={Foto14} alt="foto14" />
              </SwiperSlide>
              <SwiperSlide>
                <img className="dim-fotos" src={Foto15} alt="foto15" />
              </SwiperSlide>
              <SwiperSlide>
                <img className="dim-fotos" src={Foto16} alt="foto16" />
              </SwiperSlide>
              <SwiperSlide>
                <img className="dim-fotos" src={Foto17} alt="foto17" />
              </SwiperSlide>
              <SwiperSlide>
                <img className="dim-fotos" src={Foto18} alt="foto18" />
              </SwiperSlide>
              <SwiperSlide>
                <img className="dim-fotos" src={Foto19} alt="foto19" />
              </SwiperSlide>
              <SwiperSlide>
                <img className="dim-fotos" src={Foto20} alt="foto20" />
              </SwiperSlide>
              <SwiperSlide>
                <img className="dim-fotos" src={Foto21} alt="foto21" />
              </SwiperSlide>
              <SwiperSlide>
                <img className="dim-fotos" src={Foto22} alt="foto22" />
              </SwiperSlide>
              <SwiperSlide>
                <img className="dim-fotos" src={Foto23} alt="foto23" />
              </SwiperSlide>
              <SwiperSlide>
                <img className="dim-fotos" src={Foto24} alt="foto24" />
              </SwiperSlide>
              <SwiperSlide>
                <img className="dim-fotos" src={Foto25} alt="foto25" />
              </SwiperSlide>
              <SwiperSlide>
                <img className="dim-fotos" src={Foto26} alt="foto26" />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        <div style={{ position: "flex", lineHeight: "1", top: "7vh" }}>
          <div class="greetings">
            <span>M</span>
            <span>I</span>
            &nbsp;
            <span>A</span>
            <span>M</span>
            <span>O</span>
            <span>R</span>
          </div>

          <div class="greetings">
            <span>♥</span>
            &nbsp;
            <span>G</span>
            <span>A</span>
            <span>B</span>
            <span>Y</span>
            &nbsp;
            <span>♥</span>
          </div>
          <div class="mensaje animate__animated custom-delay animate__fadeIn">
            <span
              style={{
                position: "relative",

                color: "#9738ff",
                textShadow:
                  "0 0 8px rgb(255,255,255), 0 0 5px rgb(255,255,255),0 0 2px rgb(255,255,255)",
              }}
            >
              Tengo un regalito para tí ♥!!
            </span>
          </div>
          <div style={{ paddingTop: "25px", position: "flex" }}>
            <Button
              component={NavLink}
              to="/flores-amarillas"
              variant="contained"
              sx={{ background: "#9738ff" }}
              className="animate__animated custom-delay animate__bounce animate__repeat-3"
            >
              <LocalFloristIcon />
              Click
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
