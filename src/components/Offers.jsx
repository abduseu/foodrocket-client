const Offers = () => {
    return (
        <div className="text-black text-2xl font-bold">
            <div className="bg-prim p-8 rounded-lg">
                <h1 className="text">Get 25% off</h1>
                <div className="my-14 gap-5 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 w-full">
                    <div className="p-5 bg-green-100 rounded-lg flex flex-col justify-center items-center">
                        <img src="https://i.ibb.co/SVLQTMc/plate-04.png" className="py-4" />
                        Safroon
                    </div>
                    <div className="p-5 bg-green-100 rounded-lg flex flex-col justify-center items-center">
                        <img src="https://i.ibb.co/SVLQTMc/plate-04.png" className="py-4" />
                        Mugal Masala
                    </div>
                    <div className="p-5 bg-green-100 rounded-lg flex flex-col justify-center items-center">
                        <img src="https://i.ibb.co/SVLQTMc/plate-04.png" className="py-4" />
                        Alpine Restauran
                    </div>
                    <div className="p-5 bg-green-100 rounded-lg flex flex-col justify-center items-center">
                        <img src="https://i.ibb.co/SVLQTMc/plate-04.png" className="py-4" />
                        Yokoso
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Offers;