import React from 'react';
import PageTitle from '../components/PageTitle';
import CardDataStats from '../components/CardDataStats';
import icon from '../images/icon/charts.png';
import ChartOne from '../components/Charts/ChartOne';
import ChartTwo from '../components/Charts/ChartTwo';
import ChartThree from '../components/Charts/ChartThree';

const Dashboards: React.FC = () => {
  return (
    <div className="p-4">
  <PageTitle title="Panel de ESTRUCTURAS S de RL de CV" />
      <div className="mb-6">
        <div className="rounded bg-white dark:bg-boxdark p-6 shadow">
          <h2 className="text-lg font-bold mb-2 text-black dark:text-white">Panel de ESTRUCTURAS S de RL de CV</h2>
          <p className="text-base text-bodydark1 dark:text-bodydark2">Responsabilidad: Visualizar reportes de producción, ventas, inventario y finanzas para la toma de decisiones en la empresa.</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <CardDataStats title="Producción Mensual" total="--" rate="--">
          <img src={icon} alt="Producción" className="w-8 h-8" />
        </CardDataStats>
        <CardDataStats title="Ventas Realizadas" total="--" rate="--">
          <img src={icon} alt="Ventas" className="w-8 h-8" />
        </CardDataStats>
        <CardDataStats title="Inventario Actual" total="--" rate="--">
          <img src={icon} alt="Inventario" className="w-8 h-8" />
        </CardDataStats>
      </div>
      <div className="mb-8">
        <ChartOne />
      </div>
      <div className="mb-8">
        <ChartTwo />
      </div>
      <div>
        <ChartThree />
      </div>
    </div>
  );
};

export default Dashboards;
