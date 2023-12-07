import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const usePageLoadRedirect = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('firstLoadDone') === null) {
      localStorage.setItem('firstLoadDone', '1');
      console.log('This is the initial load');
    } else {
      console.log('This is a page refresh');
      navigate('/joke-app-By-Sylvain');
    }
  }, []);
};

export default usePageLoadRedirect;