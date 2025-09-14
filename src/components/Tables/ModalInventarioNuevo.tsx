import React, { useState } from 'react';

const ModalInventarioNuevo = ({ onClose, onAdd, defaultValue }) => {
  const [form, setForm] = useState(defaultValue || {
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

export default ModalInventarioNuevo;
