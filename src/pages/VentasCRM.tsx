import React from 'react';
import PageTitle from '../components/PageTitle';
import CardDataStats from '../components/CardDataStats';
import icon from '../images/icon/ventas.png';
import TableTwo from '../components/Tables/TableTwo';

const VentasCRM: React.FC = () => {
  return (
    <div className="p-4">
      <PageTitle title="Ventas/CRM" />
      <div className="mb-6">
        <div className="rounded bg-white dark:bg-boxdark p-6 shadow">
          <h2 className="text-lg font-bold mb-2 text-black dark:text-white">Ventas/CRM</h2>
          <p className="text-base text-bodydark1 dark:text-bodydark2">Responsabilidad: Gestionar pedidos de clientes, seguimiento de oportunidades de venta, relaciones con clientes y actualización de información comercial.</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <CardDataStats title="Clientes" total="--" rate="--">
          <img src={icon} alt="Clientes" className="w-8 h-8" />
        </CardDataStats>
        <CardDataStats title="Oportunidades" total="--" rate="--">
          <img src={icon} alt="Oportunidades" className="w-8 h-8" />
        </CardDataStats>
        <CardDataStats title="Cotizaciones" total="--" rate="--">
          <img src={icon} alt="Cotizaciones" className="w-8 h-8" />
        </CardDataStats>
      </div>
      <div>
        <TableTwo />
      </div>
    </div>
  );
};

export default VentasCRM;
