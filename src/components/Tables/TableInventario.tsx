import React, { useState } from 'react';
import ModalInventarioNuevo from './ModalInventarioNuevo';
const ModalInventario = ({ onClose, onAdd }) => {
  const [form, setForm] = useState({
    nombre: '',
    categoria: '',
    cantidad: '',
    ubicacion: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(form);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
      <div className="bg-white dark:bg-boxdark p-6 rounded shadow-lg w-full max-w-md">
        <h3 className="text-lg font-bold mb-4 text-black dark:text-white">Agregar al Inventario</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input name="nombre" value={form.nombre} onChange={handleChange} placeholder="Producto" className="w-full px-3 py-2 border rounded text-black" required />
          <input name="categoria" value={form.categoria} onChange={handleChange} placeholder="Categoría" className="w-full px-3 py-2 border rounded text-black" required />
          <input name="cantidad" value={form.cantidad} onChange={handleChange} placeholder="Cantidad" type="number" className="w-full px-3 py-2 border rounded text-black" required />
          <input name="ubicacion" value={form.ubicacion} onChange={handleChange} placeholder="Ubicación" className="w-full px-3 py-2 border rounded text-black" required />
          <div className="flex justify-end gap-2 mt-4">
            <button type="button" onClick={onClose} className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors">Cancelar</button>
            <button type="submit" className="px-4 py-2 bg-primary text-white rounded">Agregar</button>
          </div>
        </form>
      </div>
    </div>
  );
};
import iconInventario from '../../images/icon/inventario.png';

const inventarioData = [
  { nombre: 'Viga de Acero', categoria: 'Materiales', cantidad: 20, ubicacion: 'Almacén Principal' },
  { nombre: 'Placa Base', categoria: 'Materiales', cantidad: 35, ubicacion: 'Almacén Secundario' },
  { nombre: 'Tornillo de Alta Resistencia', categoria: 'Herramientas', cantidad: 100, ubicacion: 'Almacén Principal' },
  { nombre: 'Soldadora Industrial', categoria: 'Maquinaria', cantidad: 2, ubicacion: 'Taller' },
  { nombre: 'Casco de Seguridad', categoria: 'Equipo de Seguridad', cantidad: 15, ubicacion: 'Almacén Principal' },
  { nombre: 'Guantes Anticorte', categoria: 'Equipo de Seguridad', cantidad: 30, ubicacion: 'Almacén Secundario' },
  { nombre: 'Cinta Métrica', categoria: 'Herramientas', cantidad: 25, ubicacion: 'Almacén Principal' },
  { nombre: 'Taladro', categoria: 'Maquinaria', cantidad: 4, ubicacion: 'Taller' },
  { nombre: 'Perfil Tubular', categoria: 'Materiales', cantidad: 40, ubicacion: 'Almacén Principal' },
  { nombre: 'Pintura Epóxica', categoria: 'Materiales', cantidad: 10, ubicacion: 'Almacén Secundario' },
];

const TableInventario = () => {
  const [showModal, setShowModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [data, setData] = useState(inventarioData);

  const handleAdd = (item) => {
    setData([...data, item]);
  };

  const handleEdit = (item) => {
    setData(data.map((d, idx) => idx === editIndex ? item : d));
    setShowEditModal(false);
    setEditIndex(null);
  };

  const handleDelete = (idx) => {
    setData(data.filter((_, i) => i !== idx));
  };

  return (
    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="flex items-center justify-between py-6 px-4 md:px-6 xl:px-7.5">
        <h4 className="text-xl font-semibold text-black dark:text-white">
          Inventario
        </h4>
        <button className="bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark transition-colors text-sm font-medium" onClick={() => setShowModal(true)}>
          Agregar al inventario
        </button>
      </div>
      {showModal && <ModalInventario onClose={() => setShowModal(false)} onAdd={handleAdd} />}
      {showEditModal && (
        <ModalInventarioNuevo
          onClose={() => { setShowEditModal(false); setEditIndex(null); }}
          onAdd={handleEdit}
          defaultValue={editIndex !== null ? data[editIndex] : undefined}
        />
      )}
      <div className="grid grid-cols-7 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-9 md:px-6 2xl:px-7.5">
        <div className="col-span-2 flex items-center">
          <p className="font-medium">Producto</p>
        </div>
        <div className="col-span-2 flex items-center">
          <p className="font-medium">Categoría</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="font-medium">Cantidad</p>
        </div>
        <div className="col-span-2 flex items-center">
          <p className="font-medium">Ubicación</p>
        </div>
        <div className="col-span-1 flex items-center justify-center">
          <p className="font-medium">Acciones</p>
        </div>
      </div>
  {data.map((item, key) => (
        <div
          className="grid grid-cols-7 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-9 md:px-6 2xl:px-7.5"
          key={key}
        >
          <div className="col-span-2 flex items-center">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <div className="h-12.5 w-15 rounded-md">
                <img src={iconInventario} alt="Inventario" />
              </div>
              <p className="text-sm text-black dark:text-white">
                {item.nombre}
              </p>
            </div>
          </div>
          <div className="col-span-2 flex items-center">
            <p className="text-sm text-black dark:text-white">
              {item.categoria}
            </p>
          </div>
          <div className="col-span-1 flex items-center">
            <p className="text-sm text-black dark:text-white">
              {item.cantidad}
            </p>
          </div>
          <div className="col-span-2 flex items-center">
            <p className="text-sm text-black dark:text-white">
              {item.ubicacion}
            </p>
          </div>
          <div className="col-span-1 flex items-center justify-center gap-2">
            <button
              className="bg-yellow-400 text-white px-2 py-1 rounded text-xs hover:bg-yellow-500 transition-colors"
              title="Editar"
              onClick={() => { setEditIndex(key); setShowEditModal(true); }}
            >
              Editar
            </button>
            <button
              className="bg-red-500 text-white px-2 py-1 rounded text-xs hover:bg-red-600 transition-colors"
              title="Eliminar"
              onClick={() => handleDelete(key)}
            >
              Eliminar
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TableInventario;
