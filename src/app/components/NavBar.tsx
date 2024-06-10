const NavBar = () => {
    return (
        <header className="fixed top-0 z-50 w-full bg-white shadow-md">
            <div className="container flex h-14 items-center justify-between px-4 md:px-6">
                <a className="flex items-center gap-2" href="#">
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
                        <path d="m8 3 4 8 5-5 5 15H2L8 3z"></path>
                    </svg>
                    <span className="text-lg font-semibold">NFX</span>
                </a>
            </div>
        </header>
    )
}

export default NavBar;