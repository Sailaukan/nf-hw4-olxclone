'use client'

import AddProduct from "@/app/components/AddProduct";
import Post from "@/app/components/Post";
import { useProducts } from "@/app/hooks/useProducts";
import { useState } from "react";
import { NewProduct } from "../hooks/useCreateProduct";
import UserProduct from "./UserProduct";

const PostsList = () => {

    const { data, error, isLoading } = useProducts();
    const [modalOpen, setModalOpen] = useState<boolean | null>(false);
    const [newProducts, setNewProducts] = useState<NewProduct[]>([]);

    const handleAddButton = () => {
        setModalOpen(true);
        console.log(modalOpen)
    }

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>An error occurred: {error.message}</div>;

    return (
        <div>
            {modalOpen ?
                <AddProduct setModalOpen={setModalOpen} newProducts={newProducts} setNewProducts={setNewProducts} /> : null
            }
            <div className="max-w-screen-xl mx-auto px-10 py-20 sm:px-10 lg:px-15">
                <div className="flex flex-col items-center">
                    <h2 className="text-2xl font-semibold leading-tight">Products</h2>
                    <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-10">
                        {newProducts?.map((product) => (
                            <UserProduct
                                category={product.category}
                                description={product.description}
                                price={product.price}
                                title={product.title}
                                image={product.image}
                            />
                        ))}
                        {data?.map((post: any) => (
                            <Post
                                key={post.id}
                                id={post.id}
                                title={post.title}
                                category={post.category}
                                ratingCount={post.rating.count}
                                ratingRate={post.rating.rate}
                                image={post.image}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <div className="fixed bottom-10 right-10 z-30">
                <button onClick={() => handleAddButton()} className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-11 px-8 rounded-full bg-blue-500 text-gray-50 shadow-lg transition-transform hover:scale-105 hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 dark:bg-blue-300 dark:text-gray-900 dark:hover:bg-blue-300/80 dark:focus:ring-blue-300">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="h-6 w-6"
                    >
                        <path d="M5 12h14"></path>
                        <path d="M12 5v14"></path>
                    </svg>
                    <span className="sr-only">Add Product</span>
                </button>
            </div>
        </div>
    )
}

export default PostsList;