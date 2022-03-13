import { useEffect } from 'react';
import NProgress from 'nprogress';

function SuspenseLoader() {
  useEffect(() => {
    NProgress.start();

    return () => {
      NProgress.done();
    };
  }, []);

  return (
   <div></div>
  );
}

export default SuspenseLoader;
