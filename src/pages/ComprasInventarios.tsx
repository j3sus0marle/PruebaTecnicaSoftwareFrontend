import React from 'react';
import PageTitle from '../components/PageTitle';
import CardDataStats from '../components/CardDataStats';
import icon from '../images/icon/inventario.png';
import TableInventario from '../components/Tables/TableInventario';

const ComprasInventarios: React.FC = () => {
  return (
    <div className="p-4">
      <PageTitle title="Compras/Inventarios" />
      <div className="mb-6">
        <div className="rounded bg-white dark:bg-boxdark p-6 shadow">
          <h2 className="text-lg font-bold mb-2 text-black dark:text-white">Compras/Inventarios</h2>
          <p className="text-base text-bodydark1 dark:text-bodydark2">Responsabilidad: Administrar las adquisiciones de materiales, controlar niveles de inventario y registrar entradas/salidas de almacén.</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <CardDataStats title="Órdenes de Compra" total="--" rate="--">
          <img src={icon} alt="Compras" className="w-8 h-8" />
        </CardDataStats>
        <CardDataStats title="Inventario Total" total="--" rate="--">
          <img src={icon} alt="Inventario" className="w-8 h-8" />
        </CardDataStats>
        <CardDataStats title="Recepciones" total="--" rate="--">
          <img src={icon} alt="Recepciones" className="w-8 h-8" />
        </CardDataStats>
      </div>
      <div>
        <TableInventario />
      </div>
    </div>
  );
};

export default ComprasInventarios;
