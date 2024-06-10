import ImageShow from "./ImageShow";
import React, { useState, ChangeEvent } from 'react';
import { axiosUploadInstance } from '../lib/axios';
import { AxiosProgressEvent } from 'axios';
import { NewProduct, useCreatePost } from "../hooks/useCreateProduct";

const AddProduct = ({ setModalOpen, newProducts, setNewProducts }: any) => {
    const [files, setFiles] = useState<string[] | null>(null);
    const [uploadProgress, setUploadProgress] = useState<number>(0);
    const [status, setStatus] = useState<string>('');
    const [title, setTitle] = useState<string>('');
    const [price, setPrice] = useState<string>('');
    const [category, setCategory] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [loadedBytes, setLoadedBytes] = useState<number>(0);
    const [totalBytes, setTotalBytes] = useState<number>(0);
    const createPost = useCreatePost();

    const handleTitleChange = (event: any) => {
        setTitle(event.target.value);
    };

    const handlePriceChange = (event: any) => {
        setPrice(event.target.value);
    };

    const handleCategoryChange = (event: any) => {
        setCategory(event.target.value);
    };

    const handleDescriptionChange = (event: any) => {
        setDescription(event.target.value);
    };

    const uploadFile = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (!file) return;

        const formData = new FormData();
        formData.append("file", file);

        axiosUploadInstance.post('files/upload', formData, {
            onUploadProgress: (progressEvent: AxiosProgressEvent) => {
                if (progressEvent.total) {
                    const loaded = progressEvent.loaded;
                    const total = progressEvent.total;
                    setLoadedBytes(loaded);
                    setTotalBytes(total);
                    const percent = (loaded / total) * 100;
                    setUploadProgress(Math.round(percent));
                    setStatus(Math.round(percent) + "% uploaded...");
                }
            }
        })
            .then((response) => {
                setStatus("Upload successful!");
                setUploadProgress(100);
                setFiles((prevFiles) => (prevFiles ? [...prevFiles, response.data.location] : [response.data.location]));
            })
            .catch((error) => {
                setStatus("Upload failed!");
                console.error(error);
            });
    };

    // title: string,
    // price: number,
    // description: string,
    // image: string,
    // category: string

    const handleSaveProducts = () => {
        setNewProducts(
            files?.map((file) => ({
                title: title,
                price: price,
                description: description,
                image: file,
                category: category
            }))
        )
        setModalOpen(false)
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm ">
            <div className="relative bg-white rounded-lg shadow-xl max-w-[600px] w-full m-10 p-6 md:p-8">
                <div className="mb-6">
                    <div className="text-2xl font-bold">Add New Product</div>
                    <div className="text-gray-500">Fill out the details to create a new product.</div>
                </div>
                <form className="grid gap-6">
                    <div className="grid gap-1.5">
                        <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                            Product Name
                        </label>
                        <input
                            className="flex mb-4 h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            id="name"
                            placeholder="Enter product name"
                            onChange={handleTitleChange}
                        />
                        <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                            Description
                        </label>
                        <input
                            className="flex mb-4 h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            id="name"
                            placeholder="Enter product description"
                            onChange={handleDescriptionChange}
                        />
                        <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                            Price
                        </label>
                        <input
                            className="flex mb-4 h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            id="name"
                            placeholder="Enter product price"
                            onChange={handlePriceChange}
                        />
                        <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                            Category
                        </label>
                        <input
                            className="flex mb-4 h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            id="name"
                            placeholder="Enter product price"
                            onChange={handleCategoryChange}
                        />
                    </div>
                    <div>
                        <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                            Product Photos
                        </label>
                        <div className="grid grid-cols-3 md:grid-cols-4 gap-4 mt-2">
                            {files && files.map((file) => (
                                <ImageShow src={file} />
                            ))}
                            <div className="relative group aspect-square bg-gray-100 rounded-lg overflow-hidden">
                                <input
                                    type="file"
                                    name="file"
                                    onChange={uploadFile}
                                    className="hidden"
                                    id="file-upload"
                                />
                                <label htmlFor="file-upload" className="whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent h-10 w-10 absolute inset-0 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-50 cursor-pointer">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="w-6 h-6"
                                    >
                                        <path d="M5 12h14"></path>
                                        <path d="M12 5v14"></path>
                                    </svg>
                                    <span className="sr-only">Add Photo</span>
                                </label>
                            </div>
                        </div>
                        {uploadProgress > 0 && uploadProgress < 100 && (
                            <div className="absolute inset-0 bg-gray-900 bg-opacity-75 flex flex-col items-center justify-center p-4 rounded-lg shadow-lg">
                                <progress value={uploadProgress} max="100" className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                                    <div className="bg-blue-500 h-full" style={{ width: `${uploadProgress}%` }}></div>
                                </progress>
                                <p className="text-white mt-4 text-lg font-semibold">{status}</p>
                                <p className="text-white mt-2 text-sm">{loadedBytes.toLocaleString()} bytes of {totalBytes.toLocaleString()}</p>
                            </div>
                        )}
                    </div>
                </form>
                <div className="mt-6 flex justify-end gap-2">
                    <button onClick={() => setModalOpen(false)} className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
                        Cancel
                    </button>
                    <button onClick={handleSaveProducts} className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
                        Save Product
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;
