import { useQuery } from "@tanstack/react-query";

const useClass = () => {
  const queryKey = ['singleClass'];

  const queryFn = async () => {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/class`);
    return res.json();
  };

  const { data: singleClass = [], isLoading: loading } = useQuery(queryKey, queryFn);

  return [singleClass, loading];
};

export default useClass;
