import React, { useState } from 'react';
import ModalInventarioNuevo from './ModalInventarioNuevo';
import iconInventario from '../../images/icon/inventario.png';

// Los datos se cargarán desde la base de datos vía API
// const inventarioData = [];

const TableInventario = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [showEditModal, setShowEditModal] = useState<boolean>(false);
  const [editIndex, setEditIndex] = useState<number | null>(null);
  type InventarioItem = {
    nombre: string;
    categoria: string;
    cantidad: number;
    ubicacion: string;
  };
  const [data, setData] = useState<InventarioItem[]>([]); // Inicialmente vacío

  // Cargar datos desde el backend al montar el componente
  React.useEffect(() => {
    fetch('http://localhost:3001/api/inventario') // Cambia la URL según tu backend
      .then(res => res.json())
      .then(resData => setData(resData))
      .catch(err => {
        setData([]); // Si hay error, muestra vacío
        console.error('Error al cargar inventario:', err);
      });
  }, []);

    // Agrega un nuevo item al backend y actualiza la lista local
  const handleAdd = async (item: InventarioItem) => {
    try {
      const res = await fetch('http://localhost:3001/api/inventario', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(item),
      });
      if (res.ok) {
        setData([...data, item]);
      } else {
        const error = await res.json();
        alert('Error al agregar: ' + (error.error || 'Error desconocido'));
      }
    } catch (err) {
      alert('Error de red al agregar item');
    }
  };

  // Editar item en el backend y actualizar la lista local
  const handleEdit = async (item: InventarioItem) => {
    if (editIndex === null) return;
    try {
      const res = await fetch(`http://localhost:3001/api/inventario/${encodeURIComponent(item.nombre)}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          categoria: item.categoria,
          cantidad: item.cantidad,
          ubicacion: item.ubicacion
        }),
      });
      if (res.ok) {
        setData(data.map((d, idx) => idx === editIndex ? item : d));
      } else {
        const error = await res.json();
        alert('Error al editar: ' + (error.error || 'Error desconocido'));
      }
    } catch (err) {
      alert('Error de red al editar item');
    }
    setShowEditModal(false);
    setEditIndex(null);
  };

  // Eliminar item en el backend y actualizar la lista local
  const handleDelete = async (idx: number) => {
    const nombre = data[idx].nombre;
    try {
      const res = await fetch(`http://localhost:3001/api/inventario/${encodeURIComponent(nombre)}`, {
        method: 'DELETE',
      });
      if (res.ok) {
        setData(data.filter((_, i) => i !== idx));
      } else {
        const error = await res.json();
        alert('Error al eliminar: ' + (error.error || 'Error desconocido'));
      }
    } catch (err) {
      alert('Error de red al eliminar item');
    }
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
  {showModal && <ModalInventarioNuevo onClose={() => setShowModal(false)} onAdd={handleAdd} />} 
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
