import CardOffers from "./CardOffers";

const Offers2 = ({ obj }) => {

    return (
        <div className="bg-prim2 p-8 rounded-lg my-8">
            <h1 className="mb-4 prim text-2xl font-bold">Top Deals</h1>
            <div className="text gap-5 flex w-full mx-2 carousel carousel-end rounded-box">
                {
                    obj.map((x, i) => x.deal > 10 && <CardOffers key={i} obj={x} className="carousel-item" />)
                }
            </div>
        </div>
    );
};

export default Offers2;