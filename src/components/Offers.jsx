const Offers = () => {
    return (
        <div className="text-black text-2xl font-bold">
            <div className="bg-prim p-8 rounded-lg">
            <h1 className="text">Get 25% off</h1>
                <div className="my-14 gap-5 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 w-full">
                    <div className="p-5 bg-green-100 rounded-lg flex flex-col justify-center items-center">
                        
                        Safroon
                    </div>
                    <div className="p-5 bg-green-100 rounded-lg flex flex-col justify-center items-center">
                        
                        Mugal Masala
                    </div>
                    <div className="p-5 bg-green-100 rounded-lg flex flex-col justify-center items-center">
                        
                        Alpine Restauran
                    </div>
                    <div className="p-5 bg-green-100 rounded-lg flex flex-col justify-center items-center">
                        
                        Yokoso
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Offers;