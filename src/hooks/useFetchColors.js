import { useQuery } from "@tanstack/react-query";

const fetchColors = async () => {
  const response = await fetch("http://localhost:3001/api/colors");
  if (!response.ok) {
    throw new Error("Failed to fetch colors");
  }
  return response.json();
};

export const useFetchColors = () => {
  return useQuery({
    queryKey: ["colors"],
    queryFn: fetchColors,
  });
};
