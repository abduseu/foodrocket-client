const CardMenu = ({ obj }) => {
    const { food_image, food_name, ingredients, price } = obj
    
    return (
        <div className="flex justify-between items-center my-4">
            <div className="md:flex items-center">
                <img src={food_image} className=" w-24" />
                <div>
                    <h3 className="font-bold text-xl">{food_name}</h3>
                    <p className="text-sm px-2">{ingredients}</p>
                </div>
            </div>
            <div className="flex items-center gap-2">
                <h3 className="prim font-bold text-xl">${price}</h3>
                <button className="btn btn-sm btn-circle btn-success text-xl text hover:bg-black">+</button>
            </div>
        </div>
    );
};

export default CardMenu;