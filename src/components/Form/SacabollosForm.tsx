"use client";

import {
  User,
  Car,
  Truck,
  ClipboardList,
  BadgeDollarSign,
  CalendarClock,
} from "lucide-react";

import { FormChangeEvent, SacabollosData } from "../../types/types";

import styles from "../../styles/form/SacabollosForm.module.css";

interface Props {
  data: SacabollosData;
  onChange: (e: FormChangeEvent) => void;
}

export default function SacabollosForm({ data, onChange }: Readonly<Props>) {
  function handleVehiculoSelect(tipo: "Auto" | "Camioneta") {
    onChange({
      target: { name: "vehiculo", value: tipo },
    } as FormChangeEvent);
  }

  return (
    <form className={styles.form}>
      {/* ================= CLIENTE ================= */}

      <section className={styles.card}>
        <div className={styles.cardHeader}>
          <div className={styles.cardTitle}>
            <div className={styles.icon}>
              <User size={22} />
            </div>

            <div>
              <h2>Datos del Cliente</h2>
              <p>Información del propietario del vehículo.</p>
            </div>
          </div>
        </div>

        <div className={styles.group}>
          <label htmlFor="fechaEmision">Fecha de emisión</label>

          <input
            id="fechaEmision"
            type="date"
            name="fechaEmision"
            value={data.fechaEmision}
            onChange={onChange}
          />
        </div>

        <div className={styles.group}>
          <label htmlFor="nombre">Nombre y Apellido</label>

          <input
            id="nombre"
            name="nombre"
            value={data.nombre}
            onChange={onChange}
            placeholder="Ingrese el nombre del cliente"
          />
        </div>

        <div className={styles.group}>
          <label htmlFor="domicilio">Domicilio</label>

          <input
            id="domicilio"
            name="domicilio"
            value={data.domicilio}
            onChange={onChange}
            placeholder="Ingrese el domicilio"
          />
        </div>

        <div className={styles.group}>
          <label htmlFor="telefono">Teléfono</label>

          <input
            id="telefono"
            name="telefono"
            value={data.telefono}
            onChange={onChange}
            placeholder="264..."
          />
        </div>
      </section>

      {/* ================= VEHÍCULO ================= */}

      <section className={styles.card}>
        <div className={styles.cardHeader}>
          <div className={styles.cardTitle}>
            <div className={styles.icon}>
              <Car size={22} />
            </div>

            <div>
              <h2>Datos del Vehículo</h2>
              <p>Información básica del vehículo.</p>
            </div>
          </div>
        </div>

        <div className={styles.group}>
          <label>Tipo de vehículo</label>

          <div className={styles.vehiculoOptions}>
            <button
              type="button"
              className={`${styles.vehiculoCard} ${
                data.vehiculo === "Auto" ? styles.vehiculoCardActive : ""
              }`}
              onClick={() => handleVehiculoSelect("Auto")}
            >
              <Car size={40} strokeWidth={1.5} />
              <span>Auto</span>
            </button>

            <button
              type="button"
              className={`${styles.vehiculoCard} ${
                data.vehiculo === "Camioneta" ? styles.vehiculoCardActive : ""
              }`}
              onClick={() => handleVehiculoSelect("Camioneta")}
            >
              <Truck size={40} strokeWidth={1.5} />
              <span>Camioneta</span>
            </button>
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.group}>
            <label htmlFor="modelo">Modelo</label>

            <input
              id="modelo"
              name="modelo"
              value={data.modelo}
              onChange={onChange}
              placeholder="2023"
            />
          </div>

          <div className={styles.group}>
            <label htmlFor="color">Color</label>

            <input
              id="color"
              name="color"
              value={data.color}
              onChange={onChange}
              placeholder="Blanco"
            />
          </div>
        </div>

        <div className={styles.group}>
          <label htmlFor="patente">Patente</label>

          <input
            id="patente"
            name="patente"
            value={data.patente}
            onChange={onChange}
            placeholder="AA123BB"
          />
        </div>
      </section>

      {/* ================= OBSERVACIONES ================= */}

      <section className={styles.card}>
        <div className={styles.cardHeader}>
          <div className={styles.cardTitle}>
            <div className={styles.icon}>
              <ClipboardList size={22} />
            </div>

            <div>
              <h2>Observaciones</h2>
              <p>Detalle los daños o trabajos a realizar.</p>
            </div>
          </div>
        </div>

        <div className={styles.group}>
          <label htmlFor="observaciones">Observaciones</label>

          <textarea
            id="observaciones"
            name="observaciones"
            value={data.observaciones}
            onChange={onChange}
            rows={6}
            placeholder="Ej: Bollo en guardabarros delantero derecho, puerta trasera izquierda..."
          />
        </div>
      </section>

      {/* ================= PRESUPUESTO ================= */}

      <section className={styles.card}>
        <div className={styles.cardHeader}>
          <div className={styles.cardTitle}>
            <div className={styles.icon}>
              <BadgeDollarSign size={22} />
            </div>

            <div>
              <h2>Presupuesto</h2>
              <p>Importes acordados con el cliente.</p>
            </div>
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.group}>
            <label htmlFor="valor">Valor Total</label>

            <input
              id="valor"
              type="number"
              name="valor"
              value={data.valor}
              onChange={onChange}
              placeholder="120000"
            />
          </div>

          <div className={styles.group}>
            <label htmlFor="sena">Seña</label>

            <input
              id="sena"
              type="number"
              name="sena"
              value={data.sena}
              onChange={onChange}
              placeholder="30000"
            />
          </div>
        </div>
      </section>

      {/* ================= TURNO ================= */}

      <section className={styles.card}>
        <div className={styles.cardHeader}>
          <div className={styles.cardTitle}>
            <div className={styles.icon}>
              <CalendarClock size={22} />
            </div>

            <div>
              <h2>Turno</h2>
              <p>Fecha y horario asignados.</p>
            </div>
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.group}>
            <label htmlFor="fecha">Fecha</label>

            <input
              id="fecha"
              type="date"
              name="fecha"
              value={data.fecha}
              onChange={onChange}
            />
          </div>

          <div className={styles.group}>
            <label htmlFor="horario">Horario</label>

            <input
              id="horario"
              type="time"
              name="horario"
              value={data.horario}
              onChange={onChange}
            />
          </div>
        </div>
      </section>
    </form>
  );
}
