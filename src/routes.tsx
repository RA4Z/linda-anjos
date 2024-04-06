import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Box, LinearProgress } from '@mui/material';
import Header from "components/Header";
import { Suspense } from "react";

import Homepage from "pages/Homepage";
import NotFound from 'pages/NotFound';
import Footer from 'components/Footer';

export default function AppRouter() {
  return (
    <>
      <Router>
        <Suspense fallback={<Box sx={{ width: '100%' }}>
          <LinearProgress />
        </Box>}>
          <Header />
          <Routes>
            <Route path='/' element={<Homepage />}>
              <Route index element={<Homepage />} />
              <Route path='*' element={<NotFound />} />
            </Route>
          </Routes>
          <Footer />
        </Suspense>
      </Router>
    </>
  );
}
