import React, { useRef } from "react";
import { NavLink } from "react-router-dom";
import Flores from "./flowers";
import "animate.css";
import Fondo from "../images/fondo.jpg";
import { Button } from "@mui/material";
import LocalFloristIcon from "@mui/icons-material/LocalFlorist";

function Index() {
  return (
    <div
      style={{
        backgroundImage: `url(${Fondo})`,
        backgroundSize: "cover",
        textAlign: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <div>
        <div>
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
        <div>
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
                color: "#9738ff",
                textShadow:
                  "0 0 8px rgb(255,255,255), 0 0 5px rgb(255,255,255),0 0 2px rgb(255,255,255)",
              }}
            >
              Tengo un regalito para tí ♥!!
            </span>
          </div>
          <div style={{ paddingTop: "25px" }}>
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
