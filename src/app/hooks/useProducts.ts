import axios from "axios";
import { useQuery } from '@tanstack/react-query';
import { axiosInstance } from "../lib/axios";
import { PostType } from "../type/post";


const fetchProducts = async (): Promise<PostType[]> => {
    const { data } = await axiosInstance.get('/products');
    return data;
};

export const useProducts = () => {
    return useQuery({
        queryKey: ['products'],
        queryFn: fetchProducts,
    });
};