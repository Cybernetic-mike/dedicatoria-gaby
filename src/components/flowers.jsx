import React, { Suspense } from "react";
import { NavLink } from "react-router-dom";
import Home from "./Index";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, useAnimations } from "@react-three/drei";
import Flores3d from "../models/floresAmarillas.glb";
import { Button } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import LocalFloristIcon from "@mui/icons-material/LocalFlorist";
import "animate.css";

function Model() {
  const { scene, animations } = useGLTF(Flores3d); // Cargar el modelo .glb
  const { actions } = useAnimations(animations, scene); // Acceder a las animaciones
  React.useEffect(() => {
    if (actions) {
      // Reproducir la primera animación (o puedes seleccionar otra)
      actions[Object.keys(actions)[0]].play();
    }
  }, [actions]);

  return <primitive object={scene} scale={3} />;
}

function flowers() {
  return (
    <div
      style={{
        background: "#b1a3ff",
        position: "absolute",
        height: "100vh",
        width: "100vw",
      }}
    >
      <div style={{ height: "80vh", width: "100%", background: "#b1a3ff" }}>
        <Canvas>
          {/* Suspense para mostrar el modelo cuando esté completamente cargado */}
          <Suspense fallback={null}>
            {/* Luz y modelo */}
            <ambientLight intensity={3} />
            <directionalLight intensity={1.5} position={[2, 5, 2]} />
            <Model />
            {/* Permite al usuario mover el modelo */}
            <OrbitControls enableZoom={true} />
          </Suspense>
        </Canvas>
        <div
          style={{
            position: "absolute",
            backgroundColor: "rgba(77, 163, 255, 0)",
            textAlign: "center",
            width: "100vw",
            margin: "0",
            bottom: "20%",
          }}
        >
          <h1
            style={{
              background: "rgba(77, 163, 255, 0)",
              color: "#5c3fff",
              textShadow:
                "2px 3px 15px rgb(255,255,255) ,1px 1px 15px rgb(255,255,255), 1px 1px 15px rgb(255,255,255)",
            }}
            className="animate__animated animate__zoomIn animate__slower"
          >
            Con mucho cariño te regalo este ramo de flores 🥰​
          </h1>
        </div>
        <div
          style={{
            width: "100vw",
            textAlign: "center",
          }}
        >
          <Button
            component={NavLink}
            to="/"
            variant="contained"
            sx={{ background: "#9738ff" }}
          >
            <HomeIcon />
            Inicio
          </Button>
          <Button
            component={NavLink}
            to="/flores-rojas"
            variant="contained"
            sx={{ background: "#9738ff" }}
          >
            <LocalFloristIcon />
            Mas Flores
          </Button>
        </div>
      </div>
    </div>
  );
}

export default flowers;
