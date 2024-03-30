import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import { axiosBase } from "./useAxios";

const useFavorite = () => {
    const { user } = useAuth();
    const { refetch, data: favorite = [] } = useQuery({
        queryKey: ['favorite', user?.email],
        queryFn: async () => {
            const res = await axiosBase.get(`/favorite?email=${user.email}`);
            return res.data;
        }
    })
    return [favorite, refetch]
};

export default useFavorite;