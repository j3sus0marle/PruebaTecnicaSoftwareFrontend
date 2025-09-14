import ComprasInventarios from './pages/ComprasInventarios';
import VentasCRM from './pages/VentasCRM';
import Dashboards from './pages/Dashboards';
import Finanzas from './pages/Finanzas';
import Produccion from './pages/Produccion';
import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import Loader from './common/Loader';
import PageTitle from './components/PageTitle';
import SignIn from './pages/Authentication/SignIn';
import SignUp from './pages/Authentication/SignUp';
import ECommerce from './pages/Dashboard/ECommerce';
import DefaultLayout from './layout/DefaultLayout';

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <DefaultLayout>
  <Routes>
        <Route index element={<><PageTitle title="eCommerce Dashboard | TailAdmin - Tailwind CSS Admin Dashboard Template" /><ECommerce /></>}/>
        <Route path="/Produccion" element={<Produccion />} />
        <Route path="/compras-inventarios" element={<ComprasInventarios />} />
        <Route path="/ventas-crm" element={<VentasCRM />} />
        <Route path="/dashboards" element={<Dashboards />} />
        <Route path="/finanzas" element={<Finanzas />} />
        <Route path="/auth/signin" element={<><PageTitle title="Signin | TailAdmin - Tailwind CSS Admin Dashboard Template" /><SignIn /></>} />
        <Route path="/auth/signup" element={<><PageTitle title="Signup | TailAdmin - Tailwind CSS Admin Dashboard Template" /><SignUp /></>} />

      </Routes>
    </DefaultLayout>
  );
}

export default App;
