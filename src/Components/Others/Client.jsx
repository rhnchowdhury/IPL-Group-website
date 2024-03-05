
const Client = () => {
    return (
        <div className='px-8 py-10 bg-[#E8E4D8]'>
            <h1 className="text-3xl font-bold text-center py-4">Client Reviews</h1>
            <h1 className="text-center">You can give reviews also provide valuable feedback and insights into how we<br /> can improve our products and store to increase sales.</h1>
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-5 lg:py-6 lg:px-32">
                <div className="card-actions justify-center items-center">
                    <div className="radial-progress bg-black text-black border-4" ></div>
                    <p className="font-medium">Quick service, trustworthy & faithful.</p>
                    <div className="rating ">
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#F01E27]" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#F01E27]" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#F01E27]" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#F01E27]" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#F01E27]" />
                    </div>
                </div>
                <div className="card-actions justify-center items-center">
                    <div className="radial-progress bg-black text-black border-4" ></div>
                    <div>
                        <p className="font-medium">Keep things very friendly and courteous.</p>
                    </div>
                    <div className="rating">
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#F01E27]" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#F01E27]" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#F01E27]" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#F01E27]" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#F01E27]" />
                    </div>
                </div>
                <div className="card-actions justify-center items-center">
                    <div className="radial-progress bg-black text-black border-4" ></div>
                    <div>
                        <p className="font-medium">Highly Recommended for their support.</p>
                    </div>
                    <div className="rating">
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#F01E27]" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#F01E27]" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#F01E27]" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#F01E27]" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#F01E27]" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Client;