import useAuth from "../hooks/useAuth";

const Searchbox = () => {
    const { search, setSearch } = useAuth()

    const handleSearch = (e)=>{
        setSearch(e.target.value)
    }

    return (
        <div>
            <form className="bg-white flex rounded-lg">
                <div className="btn btn-ghost btn-circle prim">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="black"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                </div>
                <input type="text" value={search} onChange={handleSearch} placeholder="Search" className="focus:outline-none rounded-lg w-full text-black" autoComplete="off" />
            </form>
        </div>
    );
};

export default Searchbox;