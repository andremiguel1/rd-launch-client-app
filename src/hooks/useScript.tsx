import { useEffect } from 'react';

const useScript = (url: string) => {
  useEffect(() => {
    const script = document.createElement('script');

    script.src = url;
    script.async = true;

    document.head.prepend(script);

    return () => {
      document.head.removeChild(script);
    }
  }, [url]);
};
export default useScript;
