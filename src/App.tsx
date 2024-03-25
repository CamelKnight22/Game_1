import {
  PresentationControls,
  Environment,
  ContactShadows,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";
import {
  MemoModel,
  VisibleMesh,
  MaterialOptions,
  AnimationControl,
} from "./components/Model";
import CardContainer from "./components/CardContainer";
import { MemoProjectile } from "./components/Projectile";
import { getProjectileMeshes } from "./components/projectileLogic";
import { Room } from "./components/Room";
import { Hallway } from "./components/Hallway";

interface MeshConfig extends Omit<VisibleMesh, "material"> {
  material: MaterialOptions;
}
const enemyVisibleMeshes: VisibleMesh[] = [
  {
    name: "Body",
    meshType: "SkinnedMesh",
    visible: true,
    material: {
      type: "meshStandardMaterial",
      props: {
        color: "#deb887",
        opacity: 1,
      },
    },
  },
  {
    name: "Hair_Base",
    meshType: "SkinnedMesh",
    visible: true,
    material: {
      type: "meshStandardMaterial",
      props: {
        color: "#000000",
        roughness: 0.5,
        metalness: 0.1,
      },
    },
  },
  {
    name: "Wand_Phoenix_1",
    meshType: "SkinnedMesh",
    visible: true,
    material: {
      type: "meshStandardMaterial",
      props: {
        color: "#000000",
        roughness: 0.5,
        metalness: 0.1,
      },
    },
  },
  {
    name: "Wand_Phoenix_2",
    meshType: "SkinnedMesh",
    visible: true,
    material: {
      type: "meshStandardMaterial",
      props: {
        color: "#000000",
        roughness: 0.5,
        metalness: 0.1,
      },
    },
  },
  {
    name: "Buttom_Base",
    meshType: "SkinnedMesh",
    visible: true,
    material: {
      type: "meshStandardMaterial",
      props: {
        color: "#5f9ea0",
        roughness: 0.5,
        metalness: 0.1,
      },
    },
  },
  {
    name: "Top_Base",
    meshType: "SkinnedMesh",
    visible: true,
    material: {
      type: "meshStandardMaterial",
      props: {
        color: "#ffffff",
        roughness: 0.5,
        metalness: 0.1,
      },
    },
  },
  {
    name: "Eyes_Base",
    meshType: "SkinnedMesh",
    visible: true,
    material: {
      type: "meshStandardMaterial",
      props: {
        color: "#ffffff",
        roughness: 0.5,
        metalness: 0.1,
      },
    },
  },
  {
    name: "Shoes_Base",
    meshType: "SkinnedMesh",
    visible: true,
    material: {
      type: "meshStandardMaterial",
      props: {
        color: "#ffffff",
        roughness: 0.5,
        metalness: 0.1,
      },
    },
  },
];
function App() {
  const [visibleMeshes, setVisibleMeshes] = useState<VisibleMesh[]>([]);

  const [canvasKey, setCanvasKey] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility
  const forceCanvasRender = () => {
    setCanvasKey((prevKey) => prevKey + 1);
  };

  const addMesh = (meshConfig: MeshConfig) => {
    setVisibleMeshes((currentMeshes) => [...currentMeshes, meshConfig]);
    forceCanvasRender();
    console.log(visibleMeshes);
  };
  const removeMesh = (namePattern: string) => {
    setVisibleMeshes((currentMeshes) => {
      const filteredMeshes = currentMeshes.filter(
        (mesh) => !mesh.name.includes(namePattern)
      );
      return filteredMeshes;
    });
    console.log(visibleMeshes);
  };

  const [playerProjectile, setPlayerProjectile] = useState(
    getProjectileMeshes(visibleMeshes)
  );
  const [enemyProjectile, setEnemyProjectile] = useState(
    getProjectileMeshes(enemyVisibleMeshes)
  );
  const [playerAnimation, setPlayerAnimation] = useState<AnimationControl>({
    mode: "continuous",
    animation: "attack_animation_1",
    animationSpeed: 1,
  });
  const [enemyAnimation, setEnemyAnimation] = useState<AnimationControl>({
    mode: "continuous",
    animation: "attack_animation_2",
    animationSpeed: 1,
  });
  const toggleModal = () => {
    setPlayerAnimation({
      mode: "continuous",
      animation: "attack_animation_1",
      animationSpeed: 1.5,
    });
    setEnemyAnimation({
      mode: "continuous",
      animation: "attack_animation_2",
      animationSpeed: 1.5,
    });
    setPlayerProjectile(getProjectileMeshes(visibleMeshes));
    setEnemyProjectile(getProjectileMeshes(enemyVisibleMeshes));
    forceCanvasRender();
    setIsModalOpen(!isModalOpen);
  };
  return (
    <div>
      <h2 className="text-5xl text-center py-2 text-teal-600 font-medium md:text-6xl">
        Welcome to Wizard Wars!
      </h2>
      <div className="p-10 py-10 flex flex-col gap-10 lg:flex-row lg:flex-wrap">
        <div className="basis-1/3 flex-1">
          <div className="mx-auto w-full h-full mt-5 md:h-96 md:w-96">
            <Canvas
              className="touch-none"
              key={canvasKey}
              shadows
              dpr={[1, 2]}
              camera={{ fov: 45, position: [-7, 2, 0] }}
            >
              <Suspense fallback={null}>
                <PresentationControls
                  config={{ mass: 2, tension: 200 }}
                  snap
                  global
                  polar={[0, 0]}
                  azimuth={[-Math.PI / 2, Math.PI / 2]}
                >
                  <ambientLight intensity={0.7} />
                  <Environment preset="city" />
                  <MemoModel
                    position={[0, -3, 0]}
                    scale={3}
                    animationControl={{
                      mode: "continuous",
                      animation: "idle",
                    }}
                    rotation={[0, -Math.PI / 1.6, 0]}
                    visibleMeshes={visibleMeshes}
                  />
                </PresentationControls>
                <Room
                  rotation={[0, -Math.PI / 1.6, 0]}
                  scale={8}
                  position={[5, -5, -3]}
                />
                <ContactShadows position={[0, -3, 0]} opacity={1} blur={2.5} />
              </Suspense>
            </Canvas>
          </div>
        </div>
        <div className="basis-1/3 flex-1">
          <div>
            <button
              onClick={toggleModal}
              className="mt-4 p-2 bg-teal-500 text-white rounded"
            >
              Battle Phase
            </button>
            <h4 className="text-lg pt-14 pl-16 text-teal-600 font-medium md:text-lg">
              Shop:
            </h4>
            <div className="m-4 p-3 bg-gray-200 text-white rounded-3xl border-2 border-black shadow-lg">
              <CardContainer addMesh={addMesh} removeMesh={removeMesh} />
            </div>
          </div>
          <h4 className="text-lg pt-14 pl-16 text-teal-600 font-medium md:text-lg">
            Stats:
          </h4>
          <div className="m-4 p-3 bg-gray-200 text-xl text-black font-bold rounded-3xl text-center border-2 border-black shadow-lg">
            St: 50 Int: 45 Agi: 30 Eff: 0
          </div>
        </div>

        {isModalOpen && (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="modal-content w-full h-full flex items-center justify-center">
              <button
                onClick={toggleModal}
                className="modal-close z-50 absolute top-0 right-0 m-4"
              >
                x
              </button>
              <div className="w-full h-full flex items-center justify-center p-4">
                <Canvas
                  className="touch-none w-full h-full bg-slate-100"
                  key={canvasKey}
                  shadows
                  dpr={[1, 2]}
                  camera={{ fov: 50, position: [-18, 3, -6] }}
                >
                  <Suspense fallback={null}>
                    <PresentationControls
                      config={{ mass: 2, tension: 200 }}
                      snap
                      global
                      polar={[0, 0]}
                      azimuth={[-Math.PI / 2, Math.PI / 2]}
                    >
                      <ambientLight intensity={0.7} />
                      <Environment preset="city" />
                      <Hallway
                        rotation={[0, Math.PI / 3.7, 0]}
                        scale={1}
                        position={[5, -4.5, 4]}
                      />
                      <MemoModel
                        position={[-6, -3, -6]}
                        scale={3}
                        animationControl={playerAnimation}
                        rotation={[0, Math.PI / 3.7, 0]}
                        visibleMeshes={visibleMeshes}
                      />

                      <MemoProjectile
                        scale={0.1}
                        position={[-4.2, 0, -4.2]}
                        animationControl={{
                          mode: "continuous",
                          animation: "Attack_Animation",
                          animationSpeed: 1.5,
                        }}
                        rotation={[0, -Math.PI / 4, 0]}
                        visibleMeshes={playerProjectile}
                      />
                      <MemoModel
                        position={[6, -3, 6]}
                        scale={3}
                        animationControl={enemyAnimation}
                        rotation={[0, -Math.PI / 1.32, 0]}
                        visibleMeshes={enemyVisibleMeshes}
                      />
                      <MemoProjectile
                        scale={0.1}
                        position={[4, 0, 4]}
                        animationControl={{
                          mode: "continuous",
                          animation: "Attack_Animation",
                          animationSpeed: 1.5,
                        }}
                        rotation={[0, Math.PI / 1.34, 0]}
                        visibleMeshes={enemyProjectile}
                      />
                    </PresentationControls>
                  </Suspense>
                </Canvas>
                <div className="button-container absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10 flex justify-center w-full">
                  <button
                    onClick={() => {
                      setPlayerAnimation({
                        mode: "continuous",
                        animation: "attack_animation_1",
                        animationSpeed: 1,
                      });
                      setEnemyAnimation({
                        mode: "continuous",
                        animation: "attack_animation_2",
                        animationSpeed: 1,
                      });
                      setPlayerProjectile(getProjectileMeshes(visibleMeshes));
                      setEnemyProjectile(
                        getProjectileMeshes(enemyVisibleMeshes)
                      );
                      forceCanvasRender();
                    }}
                    className="mr-2 px-4 py-2 bg-blue-500 text-white rounded"
                  >
                    Fight
                  </button>
                  <button
                    onClick={() => {
                      setPlayerAnimation({
                        mode: "continuous",
                        animation: "victory",
                        animationSpeed: 1,
                      });
                      setEnemyAnimation({
                        mode: "once",
                        animation: "defeat",
                        animationSpeed: 1,
                      });
                      setPlayerProjectile([]);
                      setEnemyProjectile([]);
                      forceCanvasRender();
                    }}
                    className="mr-2 px-4 py-2 bg-blue-500 text-white rounded"
                  >
                    Victory
                  </button>
                  <button
                    onClick={() => {
                      setPlayerAnimation({
                        mode: "once",
                        animation: "defeat",
                        animationSpeed: 1,
                      });
                      setEnemyAnimation({
                        mode: "continuous",
                        animation: "victory",
                        animationSpeed: 1,
                      });
                      setPlayerProjectile([]);
                      setEnemyProjectile([]);
                      forceCanvasRender();
                    }}
                    className="mr-2 px-4 py-2 bg-blue-500 text-white rounded"
                  >
                    Defeat
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
