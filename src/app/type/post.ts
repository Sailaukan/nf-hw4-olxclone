'use client'

export interface Rating {
    rate: number;
    count: number;
}

export interface PostType {
    id: number;
    title: string;
    price: number;
    category: string;
    rating: Rating;
    image: string;
}