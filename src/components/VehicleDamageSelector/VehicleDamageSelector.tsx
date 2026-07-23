"use client";

import { useState } from "react";
import Image from "next/image";

import styles from "../../styles/VehicleDamageSelector/VehicleDamageSelector.module.css";

interface Props {
  vehiculo: "Auto" | "Camioneta";
  derecho: string;
  izquierdo: string;
  superior: string;
}

export default function VehicleDamageSelector({
  vehiculo,
  derecho,
  izquierdo,
  superior,
}: Readonly<Props>) {
  const [selectedParts, setSelectedParts] = useState<string[]>([]);

  const vehicleClass = vehiculo === "Camioneta" ? styles.hilux : styles.bmw;

  const areas = [
    {
      id: "lateralDerecho",
      title: "Lateral Derecho",
      image: derecho,
      zones: [
        {
          id: "delantera-derecha",
          name: "Parte delantera derecha",
        },
        {
          id: "puerta-delantera-derecha",
          name: "Puerta delantera derecha",
        },
        {
          id: "puerta-trasera-derecha",
          name: "Puerta trasera derecha",
        },
        {
          id: "trasera-derecha",
          name: "Parte trasera derecha",
        },
      ],
    },

    {
      id: "lateralIzquierdo",
      title: "Lateral Izquierdo",
      image: izquierdo,
      zones: [
        {
          id: "delantera-izquierda",
          name: "Parte delantera izquierda",
        },
        {
          id: "puerta-delantera-izquierda",
          name: "Puerta delantera izquierda",
        },
        {
          id: "puerta-trasera-izquierda",
          name: "Puerta trasera izquierda",
        },
        {
          id: "trasera-izquierda",
          name: "Parte trasera izquierda",
        },
      ],
    },

    {
      id: "superior",
      title: "Capot / Techo / Baúl",
      image: superior,
    },
  ];

  const togglePart = (name: string) => {
    setSelectedParts((prev) =>
      prev.includes(name)
        ? prev.filter((item) => item !== name)
        : [...prev, name],
    );
  };

  const selectedText =
    selectedParts.length === 0
      ? "Ninguna"
      : selectedParts.length <= 3
        ? selectedParts.join(", ")
        : `${selectedParts.slice(0, 3).join(", ")} y ${
            selectedParts.length - 3
          } partes más`;

  return (
    <div className={`${styles.container} damage-selector`}>
      <div className={styles.options}>
        {areas.map((area) => (
          <div key={area.id} className={styles.card}>
            <div className={`${styles.carPlaceholder} ${vehicleClass}`}>
              {/* ================= LATERALES ================= */}

              {area.zones && (
                <div
                  className={`
                    ${styles.sideView}
                    ${area.id === "lateralDerecho" ? styles.rightSideView : ""}
                  `}
                >
                  <Image
                    src={area.image}
                    alt={area.title}
                    fill
                    className={styles.sideImage}
                  />

                  {area.zones.map((zone, index) => (
                    <button
                      key={zone.id}
                      type="button"
                      className={`
                        ${styles.sideZone}
                        ${styles[`sideZone${index + 1}`]}
                        ${
                          selectedParts.includes(zone.name)
                            ? styles.selectedZone
                            : ""
                        }
                      `}
                      onClick={() => togglePart(zone.name)}
                    />
                  ))}
                </div>
              )}

              {/* ================= SUPERIOR ================= */}

              {area.id === "superior" && (
                <div className={styles.topView}>
                  <Image
                    src={area.image}
                    alt="Vista superior vehículo"
                    fill
                    className={styles.topImage}
                  />

                  <button
                    type="button"
                    className={`
                      ${styles.zone}
                      ${styles.capot}
                      ${
                        selectedParts.includes("Capot")
                          ? styles.selectedZone
                          : ""
                      }
                    `}
                    onClick={() => togglePart("Capot")}
                  />

                  <button
                    type="button"
                    className={`
                      ${styles.zone}
                      ${styles.techo}
                      ${
                        selectedParts.includes("Techo")
                          ? styles.selectedZone
                          : ""
                      }
                    `}
                    onClick={() => togglePart("Techo")}
                  />

                  <button
                    type="button"
                    className={`
                      ${styles.zone}
                      ${styles.baul}
                      ${
                        selectedParts.includes("Baúl")
                          ? styles.selectedZone
                          : ""
                      }
                    `}
                    onClick={() => togglePart("Baúl")}
                  />
                </div>
              )}
            </div>

            <span>{area.title}</span>
          </div>
        ))}
      </div>

      <p className={styles.selected}>
        <strong>Partes seleccionadas:</strong> {selectedText}
      </p>
    </div>
  );
}
