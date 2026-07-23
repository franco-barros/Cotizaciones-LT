"use client";

import { useState } from "react";

import EsteticaForm from "../Form/EsteticaForm";
import EsteticaPreview from "../Preview/EsteticaPreview";

import { generatePdf } from "../../lib/pdf";

import { CotizacionData, FormChangeEvent } from "../../types/types";

import styles from "../../styles/Estetica.module.css";

const initialData: CotizacionData = {
  nombre: "",
  telefono: "",

  vehiculo: "",
  patente: "",
  modelo: "",
  color: "",

  servicio: "",

  descripcion: "",

  valor: "",

  fecha: "",
  horario: "",

  garantia: "",
};

export default function Estetica() {
  const [data, setData] = useState<CotizacionData>(initialData);

  const handleChange = (e: FormChangeEvent) => {
    setData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleGeneratePdf = async () => {
    await generatePdf("estetica-preview", "Cotizacion-Estetica-Vehicular");
  };

  return (
    <main className={styles.container}>
      <header className={styles.header}>
        <div>
          <h1 className={styles.title}>Cotización - Estética Vehicular</h1>

          <p className={styles.subtitle}>
            Complete el formulario para generar la cotización.
          </p>
        </div>
      </header>

      <section className={styles.content}>
        <div className={styles.formContainer}>
          <EsteticaForm data={data} onChange={handleChange} />
        </div>

        <div className={styles.previewContainer}>
          <EsteticaPreview data={data} />
        </div>
      </section>

      <div className={styles.actions}>
        <button
          type="button"
          className={styles.generateButton}
          onClick={handleGeneratePdf}
        >
          Generar PDF
        </button>
      </div>
    </main>
  );
}
