'use client'

interface IPost {
    title: string;
    id: number;
    category: string;
    ratingCount: number;
    ratingRate: number;
    image: string;
}

const Post = (props: IPost) => {
    return (
        <div className="border text-card-foreground bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg hover:bg-gray-50" data-v0-t="card">
            <div className="relative">
                <img
                    src={props.image}
                    alt="Cozy Mountain Retreat"
                    className="h-48 w-full object-cover"
                    width="350"
                    height="200"
                />
            </div>
            <div className="p-4">
                <h3 className="text-lg font-medium leading-6">{props.title}</h3>
                <div className="flex items-center mt-2 text-sm text-gray-500">
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
                        className="h-4 w-4 mr-1"
                    >
                        <circle cx="12" cy="12" r="10"></circle>
                        <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                    {props.category}
                </div>
                <div className="flex items-center mt-1 text-sm text-gray-500">
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
                        className="h-4 w-4 mr-1"
                    >
                        <line x1="2" x2="5" y1="12" y2="12"></line>
                        <line x1="19" x2="22" y1="12" y2="12"></line>
                        <line x1="12" x2="12" y1="2" y2="5"></line>
                        <line x1="12" x2="12" y1="19" y2="22"></line>
                        <circle cx="12" cy="12" r="7"></circle>
                    </svg>
                    {props.ratingRate}
                </div>
            </div>
            <div className="p-4 border-t">
                <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:bg-gray-200 h-10 px-4 py-2 w-full">
                    View Details
                </button>
            </div>
        </div>
    )
}

export default Post;