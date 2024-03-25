import { VisibleMesh } from "./Projectile";

export const getProjectileMeshes = (visibleMeshes: VisibleMesh[]) => {
  const projectileMeshes: VisibleMesh[] = [];
  const processedPhoenixParts = new Set<string>();
  const processedCrystalgemParts = new Set<string>();

  visibleMeshes.forEach((mesh) => {
    if (mesh.name.includes("Wand")) {
      if (mesh.name.includes("Base")) {
        projectileMeshes.push({
          name: "Base",
          meshType: "SkinnedMesh",
          visible: true,
          material: {
            type: "meshStandardMaterial",
            props: {
              color: "#deb887",
              opacity: 1,
            },
          },
        });
      } else if (mesh.name.includes("Phoenix")) {
        const phoenixParts = ["Fire_1", "Fire_2"];
        phoenixParts.forEach((part) => {
          if (!processedPhoenixParts.has(part)) {
            processedPhoenixParts.add(part);
            projectileMeshes.push({
              name: part,
              meshType: "SkinnedMesh",
              visible: true,
              material: {
                type: "meshStandardMaterial",
                props: {
                  color: "#deb887",
                  opacity: 1,
                },
              },
            });
          }
        });
      } else if (mesh.name.includes("Powerstone")) {
        const phoenixParts = ["Power"];
        phoenixParts.forEach((part) => {
          if (!processedCrystalgemParts.has(part)) {
            processedCrystalgemParts.add(part);
            projectileMeshes.push({
              name: part,
              meshType: "SkinnedMesh",
              visible: true,
              material: {
                type: "meshStandardMaterial",
                props: {
                  color: "#deb887",
                  opacity: 1,
                },
              },
            });
          }
        });
      } else if (mesh.name.includes("Crystalgem")) {
        const phoenixParts = ["Ice"];
        phoenixParts.forEach((part) => {
          if (!processedCrystalgemParts.has(part)) {
            processedCrystalgemParts.add(part);
            projectileMeshes.push({
              name: part,
              meshType: "SkinnedMesh",
              visible: true,
              material: {
                type: "meshStandardMaterial",
                props: {
                  color: "#deb887",
                  opacity: 1,
                },
              },
            });
          }
        });
      } else if (mesh.name.includes("Crescentshade")) {
        projectileMeshes.push({
          name: "Lunar",
          meshType: "SkinnedMesh",
          visible: true,
          material: {
            type: "meshStandardMaterial",
            props: {
              color: "#deb887",
              opacity: 1,
            },
          },
        });
      } else if (mesh.name.includes("AncientTree")) {
        projectileMeshes.push({
          name: "Leech",
          meshType: "SkinnedMesh",
          visible: true,
          material: {
            type: "meshStandardMaterial",
            props: {
              color: "#deb887",
              opacity: 1,
            },
          },
        });
      }
    }
  });

  return projectileMeshes;
};
