import CardOffers from "./CardOffers";
import Marquee from "react-fast-marquee";

const Offers = ({ obj }) => {

    return (
        <div className="bg-[#2F2D2D] text-white p-8 rounded-lg my-8">
            <h1 className="mb-4 text-2xl font-bold">Top Deals</h1>
            <Marquee>
                <div className="text gap-5 flex w-full mx-2">
                    {
                        obj.map((x, i) => x.deal > 10 && <CardOffers key={i} obj={x} />)
                    }
                </div>
            </Marquee>
        </div>
    );
};

export default Offers;