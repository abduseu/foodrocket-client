const Favorite = () => {
    return (
        <div className="border rounded-lg min-h-screen">
            <div className="text-center p-10 bg-banner rounded-t-lg uppercase">
                <h2 className="prim font-bold text-2xl md:text-4xl">My Favorite</h2>
                {/* <p className="font-medium">Home / Favorite</p> */}
            </div>
            <div className="lg:flex">
                <div className="p-5 w-full space-y-12">
                    <div>
                        content
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Favorite;