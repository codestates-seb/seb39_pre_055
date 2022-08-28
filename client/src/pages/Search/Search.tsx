import axios from 'axios';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

const Search = () => {
  const [params] = useSearchParams();
  const keyword = params.get('q');

  useEffect(() => {
    // const req = axios.get('');
  }, []);

  return <div>{keyword}</div>;
};

export default Search;
