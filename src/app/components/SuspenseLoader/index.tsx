import { useEffect } from 'react';
import NProgress from 'nprogress';
import Box from '../Box';

function SuspenseLoader() {
  useEffect(() => {
    NProgress.start();

    return () => {
      NProgress.done();
    };
  }, []);

  return (
    <Box
      className='loading-box'>
      Yükleniyor...
    </Box>   
  );
}

export default SuspenseLoader;
