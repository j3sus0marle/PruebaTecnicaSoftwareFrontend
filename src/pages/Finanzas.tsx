import React from 'react';
import PageTitle from '../components/PageTitle';
import CardDataStats from '../components/CardDataStats';
import icon from '../images/icon/finanzas.png';
import ChartOne from '../components/Charts/ChartOne';
import TableOne from '../components/Tables/TableOne';
import TableThree from '../components/Tables/TableThree';

const Finanzas: React.FC = () => {
  return (
    <div className="p-4">
      <PageTitle title="Finanzas" />
      <div className="mb-6">
        <div className="rounded bg-white dark:bg-boxdark p-6 shadow">
          <h2 className="text-lg font-bold mb-2 text-black dark:text-white">Finanzas</h2>
          <p className="text-base text-bodydark1 dark:text-bodydark2">Responsabilidad: Controlar transacciones financieras internas y comunicarse con Contpaq i mediante API REST para sincronizar contabilidad y reportes financieros.</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <CardDataStats title="Cuentas" total="--" rate="--">
          <img src={icon} alt="Cuentas" className="w-8 h-8" />
        </CardDataStats>
        <CardDataStats title="Ingresos" total="--" rate="--">
          <img src={icon} alt="Ingresos" className="w-8 h-8" />
        </CardDataStats>
        <CardDataStats title="Egresos" total="--" rate="--">
          <img src={icon} alt="Egresos" className="w-8 h-8" />
        </CardDataStats>
      </div>
      <div className="mb-8">
        <ChartOne />
      </div>
      <div className="mb-8">
        <TableOne />
      </div>
      <div>
        <TableThree />
      </div>
    </div>
  );
};

export default Finanzas;
