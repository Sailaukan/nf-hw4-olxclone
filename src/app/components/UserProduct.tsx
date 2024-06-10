const UserProduct = ({ category, description, price, title, image }: any) => {
    return (
        <div>
            <div className="border text-card-foreground bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg hover:bg-gray-50" data-v0-t="card">
                <div className="relative">
                    <img
                        src={image}
                        alt="Cozy Mountain Retreat"
                        className="h-48 w-full object-cover"
                        width="350"
                        height="200"
                    />
                </div>
                <div className="p-4">
                    <h3 className="text-lg font-medium leading-6">{title}</h3>
                    <div className="flex items-center mt-2 text-sm text-gray-500">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-archive" viewBox="0 0 16 16">
                            <path d="M0 2a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v7.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 12.5V5a1 1 0 0 1-1-1zm2 3v7.5A1.5 1.5 0 0 0 3.5 14h9a1.5 1.5 0 0 0 1.5-1.5V5zm13-3H1v2h14zM5 7.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5" />
                        </svg>

                        {category}
                    </div>
                    <div className="flex items-center mt-1 text-sm text-gray-500">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cash" viewBox="0 0 16 16">
                            <path d="M8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4" />
                            <path d="M0 4a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1zm3 0a2 2 0 0 1-2 2v4a2 2 0 0 1 2 2h10a2 2 0 0 1 2-2V6a2 2 0 0 1-2-2z" />
                        </svg>

                        {price}
                    </div>
                </div>
                <div className="p-4 border-t">
                    <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:bg-gray-200 h-10 px-4 py-2 w-full">
                        View Details
                    </button>
                </div>
            </div>
        </div>
    )
}

export default UserProduct;