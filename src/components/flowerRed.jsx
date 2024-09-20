import React, { Suspense } from "react";
import { NavLink } from "react-router-dom";
import Home from "./index";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, useAnimations } from "@react-three/drei";
import Flores3dRojo from "../models/floresRojas.glb";
import { Button } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import LocalFloristIcon from "@mui/icons-material/LocalFlorist";
function Model() {
  const { scene, animations } = useGLTF(Flores3dRojo); // Cargar el modelo .glb
  const { actions } = useAnimations(animations, scene); // Acceder a las animaciones
  React.useEffect(() => {
    if (actions) {
      // Reproducir la primera animación (o puedes seleccionar otra)
      actions[Object.keys(actions)[0]].play();
    }
  }, [actions]);

  return <primitive object={scene} scale={3} />;
}

function flowerRed() {
  return (
    <div style={{ height: "80vh", width: "100%", background: "#cba6ff" }}>
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
          to="/flores-amarillas"
          variant="contained"
          sx={{ background: "#9738ff" }}
        >
          <LocalFloristIcon />
          Flores Amarillas
        </Button>
      </div>
    </div>
  );
}

export default flowerRed;
