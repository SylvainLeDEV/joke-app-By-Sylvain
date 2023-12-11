import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const usePageLoadRedirect = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('firstLoadDone') === null) {
      localStorage.setItem('firstLoadDone', '1');
    } else {
      navigate('/joke-app-By-Sylvain');
    }
  }, []);
};

export default usePageLoadRedirect;