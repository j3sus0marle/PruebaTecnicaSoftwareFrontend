import React from 'react';
import iconProduccion from '../../images/icon/produccion.png';

const procesosData = [
  { nombre: 'Fabricación de Vigas', tipo: 'Estructuras Metálicas', estado: 'En Proceso', responsable: 'Juan Pérez' },
  { nombre: 'Montaje de Columnas', tipo: 'Estructuras Metálicas', estado: 'Completado', responsable: 'Ana Gómez' },
  { nombre: 'Soldadura de Uniones', tipo: 'Soldadura', estado: 'Pendiente', responsable: 'Carlos Ruiz' },
  { nombre: 'Pintura Anticorrosiva', tipo: 'Acabados', estado: 'En Proceso', responsable: 'Laura Torres' },
  { nombre: 'Corte de Placas', tipo: 'Materiales', estado: 'Completado', responsable: 'Luis Martínez' },
  { nombre: 'Control de Calidad', tipo: 'Inspección', estado: 'En Proceso', responsable: 'Sofía Ramírez' },
  { nombre: 'Empaque de Componentes', tipo: 'Logística', estado: 'Pendiente', responsable: 'Pedro Sánchez' },
  { nombre: 'Registro de Asistencia', tipo: 'Administrativo', estado: 'Completado', responsable: 'Marta López' },
  { nombre: 'Recepción de Material', tipo: 'Almacén', estado: 'En Proceso', responsable: 'José Hernández' },
  { nombre: 'Armado de Estructuras', tipo: 'Montaje', estado: 'Pendiente', responsable: 'Elena Castro' },
];

const TableProcesosProduccion = () => {
  return (
    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="py-6 px-4 md:px-6 xl:px-7.5">
        <h4 className="text-xl font-semibold text-black dark:text-white">
          Procesos de Producción
        </h4>
      </div>
      <div className="grid grid-cols-6 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5">
        <div className="col-span-2 flex items-center">
          <p className="font-medium">Proceso</p>
        </div>
        <div className="col-span-2 flex items-center">
          <p className="font-medium">Tipo</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="font-medium">Estado</p>
        </div>
        <div className="col-span-2 flex items-center">
          <p className="font-medium">Responsable</p>
        </div>
      </div>
      {procesosData.map((item, key) => (
        <div
          className="grid grid-cols-6 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5"
          key={key}
        >
          <div className="col-span-2 flex items-center">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <div className="h-12.5 w-15 rounded-md">
                <img src={iconProduccion} alt="Proceso" />
              </div>
              <p className="text-sm text-black dark:text-white">
                {item.nombre}
              </p>
            </div>
          </div>
          <div className="col-span-2 flex items-center">
            <p className="text-sm text-black dark:text-white">
              {item.tipo}
            </p>
          </div>
          <div className="col-span-1 flex items-center">
            <p className="text-sm text-black dark:text-white">
              {item.estado}
            </p>
          </div>
          <div className="col-span-2 flex items-center">
            <p className="text-sm text-black dark:text-white">
              {item.responsable}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TableProcesosProduccion;
