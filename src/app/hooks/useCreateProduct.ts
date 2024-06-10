import { useMutation, useQueryClient, UseMutationResult } from "@tanstack/react-query";
import { axiosInstance } from "../lib/axios";
import { PostType } from "../type/post";

export interface NewProduct {
    title: string,
    price: number,
    description: string,
    image: string,
    category: string
}

const createBlog = async (blogData: NewProduct): Promise<PostType> => {
    const res = await axiosInstance.post<PostType>('/products', blogData);
    return res.data;
}

const useCreatePost = () => {
    const queryClient = useQueryClient();

    return useMutation<PostType, Error, NewProduct>({
        mutationFn: createBlog,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['products']
            });
        },
    });
}

export { useCreatePost };