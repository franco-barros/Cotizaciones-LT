"use client";

import { useState } from "react";

import SacabollosForm from "../Form/SacabollosForm";
import SacabollosPreview from "../Preview/SacabollosPreview";

import { generatePdf } from "../../lib/pdf";

import { FormChangeEvent, SacabollosData } from "../../types/types";

import styles from "../../styles/Sacabollos.module.css";

const initialData: SacabollosData = {
  nombre: "",
  domicilio: "",
  telefono: "",

  vehiculo: "",
  patente: "",
  modelo: "",
  color: "",

  fechaEmision: "",

  observaciones: "",

  valor: "",
  sena: "",

  fecha: "",
  horario: "",
};

export default function Sacabollos() {
  const [data, setData] = useState<SacabollosData>(initialData);

  const handleChange = (e: FormChangeEvent) => {
    setData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleGeneratePdf = async () => {
    await generatePdf("sacabollos-preview", "Cotizacion-Sacabollos");
  };

  return (
    <main className={styles.container}>
      <header className={styles.header}>
        <div>
          <h1 className={styles.title}>Cotización - Sacabollos</h1>

          <p className={styles.subtitle}>
            Complete el formulario para generar la cotización.
          </p>
        </div>
      </header>

      <section className={styles.content}>
        <div className={styles.formContainer}>
          <SacabollosForm data={data} onChange={handleChange} />
        </div>

        <div className={styles.previewContainer}>
          <SacabollosPreview data={data} />
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
