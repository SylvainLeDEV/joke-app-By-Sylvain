import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const usePageLoadRedirect = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Check if this is the first load by seeing if our object exists in local storage
    if (localStorage.getItem('firstLoadDone') === null) {
      // If it's the first load, set the flag in local storage to true
      localStorage.setItem('firstLoadDone', '1');
      console.log('This is the initial load');
    } else {
      // This is a page refresh, redirect to another page
      console.log('This is a page refresh');
      navigate('/');
    }
  }, []);
};

export default usePageLoadRedirect;