"use client";

import {
  BadgeDollarSign,
  CalendarDays,
  CarFront,
  UserRound,
  Wrench,
} from "lucide-react";

import { CotizacionData, FormChangeEvent } from "../../types/types";
import styles from "../../styles/form/EsteticaForm.module.css";

interface Props {
  data: CotizacionData;
  onChange: (e: FormChangeEvent) => void;
}

const HOURS = Array.from({ length: 12 }, (_, i) =>
  String(i + 1).padStart(2, "0"),
);

const MINUTES = Array.from({ length: 60 }, (_, i) =>
  String(i).padStart(2, "0"),
);

export default function EsteticaForm({ data, onChange }: Readonly<Props>) {
  const [currentTime, currentMeridiem] = (data.horario || "12:00 AM").split(
    " ",
  );

  const [currentHour, currentMinute] = (currentTime || "12:00").split(":");

  const meridiem = currentMeridiem || "AM";

  function handleTimePartChange(
    part: "hour" | "minute" | "meridiem",
    value: string,
  ) {
    const hour = part === "hour" ? value : currentHour || "12";
    const minute = part === "minute" ? value : currentMinute || "00";
    const period = part === "meridiem" ? value : meridiem;

    const newValue = `${hour}:${minute} ${period}`;

    onChange({
      target: { name: "horario", value: newValue },
    } as FormChangeEvent);
  }

  return (
    <form className={styles.form}>
      {/* ================= CLIENTE ================= */}

      <section className={styles.card}>
        <div className={styles.cardHeader}>
          <div className={styles.cardTitle}>
            <div className={styles.icon}>
              <UserRound size={20} strokeWidth={2} />
            </div>

            <div>
              <h2>Datos del Cliente</h2>
              <p>Información del propietario del vehículo.</p>
            </div>
          </div>
        </div>

        <div className={styles.group}>
          <label htmlFor="fecha">Fecha de emisión</label>

          <input
            id="fecha"
            type="date"
            name="fecha"
            value={data.fecha}
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
              <CarFront size={20} strokeWidth={2} />
            </div>

            <div>
              <h2>Datos del Vehículo</h2>
              <p>Información básica del vehículo.</p>
            </div>
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.group}>
            <label htmlFor="vehiculo">Vehículo</label>

            <input
              id="vehiculo"
              name="vehiculo"
              value={data.vehiculo}
              onChange={onChange}
              placeholder="Ej: Toyota Hilux"
            />
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
        </div>

        <div className={styles.row}>
          <div className={styles.group}>
            <label htmlFor="modelo">Modelo</label>

            <input
              id="modelo"
              name="modelo"
              value={data.modelo}
              onChange={onChange}
              placeholder="Ej: 2023"
            />
          </div>

          <div className={styles.group}>
            <label htmlFor="color">Color</label>

            <input
              id="color"
              name="color"
              value={data.color}
              onChange={onChange}
              placeholder="Ej: Blanco"
            />
          </div>
        </div>
      </section>

      {/* ================= SERVICIOS ================= */}

      <section className={styles.card}>
        <div className={styles.cardHeader}>
          <div className={styles.cardTitle}>
            <div className={styles.icon}>
              <Wrench size={20} strokeWidth={2} />
            </div>

            <div>
              <h2>Servicios</h2>
              <p>Seleccione el trabajo que se realizará.</p>
            </div>
          </div>
        </div>

        <div className={styles.group}>
          <label htmlFor="servicio">Servicio</label>

          <select
            id="servicio"
            name="servicio"
            value={data.servicio}
            onChange={onChange}
          >
            <option value="Tratamiento Cerámico">Tratamiento Cerámico</option>
            <option value="Tratamiento Acrílico">Tratamiento Acrílico</option>
            <option value="Tratamiento Abrillantado">
              Tratamiento Abrillantado
            </option>
            <option value="Pulido de ópticas">Pulido de ópticas</option>
            <option value="Limpieza Interior">Limpieza Interior</option>
            <option value="Limpieza de Motor">Limpieza de Motor</option>
            <option value="Servicio Pre-venta">Servicio Pre-venta</option>
          </select>
        </div>

        <div className={styles.group}>
          <label htmlFor="descripcion">Descripción</label>

          <textarea
            id="descripcion"
            name="descripcion"
            value={data.descripcion}
            onChange={onChange}
            rows={5}
            placeholder="Ej: Lavado completo, descontaminado químico y mecánico, pulido de una etapa y aplicación de coating cerámico."
          />
        </div>
      </section>

      {/* ================= PRESUPUESTO ================= */}

      <section className={styles.card}>
        <div className={styles.cardHeader}>
          <div className={styles.cardTitle}>
            <div className={styles.icon}>
              <BadgeDollarSign size={20} strokeWidth={2} />
            </div>

            <div>
              <h2>Presupuesto</h2>
              <p>Valor total del servicio.</p>
            </div>
          </div>
        </div>

        <div className={styles.group}>
          <label htmlFor="valor">Valor Total</label>

          <input
            id="valor"
            type="number"
            name="valor"
            value={data.valor}
            onChange={onChange}
            placeholder="250000"
          />
        </div>
      </section>

      {/* ================= TURNO ================= */}

      <section className={styles.card}>
        <div className={styles.cardHeader}>
          <div className={styles.cardTitle}>
            <div className={styles.icon}>
              <CalendarDays size={20} strokeWidth={2} />
            </div>

            <div>
              <h2>Turno</h2>
              <p>Fecha y horario asignado para el servicio.</p>
            </div>
          </div>
        </div>

        <div className={styles.group}>
          <label htmlFor="fechaTurno">Fecha</label>

          <input
            id="fechaTurno"
            type="date"
            name="fechaTurno"
            value={data.fechaTurno}
            onChange={onChange}
          />
        </div>

        <div className={styles.group}>
          <label htmlFor="horarioHora">Horario</label>

          <div className={styles.timeRow}>
            <select
              id="horarioHora"
              value={currentHour || "12"}
              onChange={(e) => handleTimePartChange("hour", e.target.value)}
            >
              {HOURS.map((h) => (
                <option key={h} value={h}>
                  {h}
                </option>
              ))}
            </select>

            <select
              id="horarioMinuto"
              value={currentMinute || "00"}
              onChange={(e) => handleTimePartChange("minute", e.target.value)}
            >
              {MINUTES.map((m) => (
                <option key={m} value={m}>
                  {m}
                </option>
              ))}
            </select>

            <select
              id="horarioMeridiem"
              value={meridiem}
              onChange={(e) => handleTimePartChange("meridiem", e.target.value)}
            >
              <option value="AM">AM</option>
              <option value="PM">PM</option>
            </select>
          </div>
        </div>
      </section>
    </form>
  );
}
