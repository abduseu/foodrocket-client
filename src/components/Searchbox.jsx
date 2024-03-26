const Searchbox = () => {
    return (
        <div className="bg-prim rounded-lg">
            <div className="p-8">
                <form className="bg-white flex rounded-lg">
                    <button className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="black"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    </button>
                    <input type="text" name="search" placeholder="Search Restaurant" className="focus:outline-none rounded-lg w-full" />
                </form>
            </div>
        </div>
    );
};

export default Searchbox;