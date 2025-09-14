import React from 'react';
import PageTitle from '../components/PageTitle';
import CardDataStats from '../components/CardDataStats';
import icon from '../images/icon/produccion.png';
import TableProcesosProduccion from '../components/Tables/TableProcesosProduccion';

const Produccion: React.FC = () => {
  return (
    <div className="p-4">

      <PageTitle title="Producción" />
      <div className="mb-6">
        <div className="rounded bg-white dark:bg-boxdark p-6 shadow">
          <h2 className="text-lg font-bold mb-2 text-black dark:text-white">Producción</h2>
          <p className="text-base text-bodydark1 dark:text-bodydark2">Responsabilidad: Gestionar órdenes de producción, control de procesos productivos y recepción de registros de asistencia desde los relojes checadores.</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <CardDataStats title="Órdenes de Producción" total="--" rate="--">
          <img src={icon} alt="Producción" className="w-8 h-8" />
        </CardDataStats>
        <CardDataStats title="Procesos Productivos" total="--" rate="--">
          <img src={icon} alt="Procesos" className="w-8 h-8" />
        </CardDataStats>
        <CardDataStats title="Registros de Asistencia" total="--" rate="--">
          <img src={icon} alt="Asistencia" className="w-8 h-8" />
        </CardDataStats>
      </div>
      {/* ChartOne removed as requested */}
      <div>
        <TableProcesosProduccion />
      </div>
    </div>
  );
};

export default Produccion;
