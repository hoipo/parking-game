import { Route, Routes } from 'react-router-dom';
import Layout from './layout';
import { lazy, Suspense } from 'react';

const Home = lazy(() => import("./home/index"));
const App = lazy(() => import("./app/index"));

const RouteConfigExample = () => (
  <Layout>
    <Routes>
      <Route element={
        <Suspense fallback={<>...</>}>
          <Home />
        </Suspense>
      } index />
      <Route path="/app" element={
        <Suspense fallback={<>...</>}>
          <App />
        </Suspense>
      } />
    </Routes>
  </Layout>
);

export default RouteConfigExample;