import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = () => {
  /*
  const [repositories, setRepositories] = useState();
  const [loading, setLoading] = useState(false);

   const fetchRepositories = async () => {
     setLoading(true);

    // Replace the IP address part with your own IP address!
    const { data, error, loading } = useQuery(GET_REPOSITORIES, {
      fetchPolicy: 'cache-and-network'
    })
    //const json = await data.json();
    console.log("json done and loading is: ")

    setLoading(false);
    setRepositories(data);
   
  };

  useEffect(() => {
    fetchRepositories();
  }, []);

  return { repositories, loading, refetch: fetchRepositories };
  */

  const [repositories, setRepositories] = useState();

  const { data, error, loading } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network'
  })

  useEffect(() => {
    setRepositories(data);
    
  }, [loading])

  return { repositories, error, loading };
};

export default useRepositories;