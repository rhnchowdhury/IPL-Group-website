import img from '../../assets/sir.jpg';

const FirstPart = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-[#E8E4D8]">
                <div className="hero-content mx-20 flex-col lg:flex-row-reverse">
                    <img src={img} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className=" font-medium">We&apos;re awessome</h1>
                        <p className='font-bold text-xl'>What We Are Done Good</p>
                        <p className="py-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid repudiandae earum quo odio minus atque corporis? Placeat porro eaque dicta, nam ea distinctio enim nostrum ex atque sint <br /> <br />saepe iusto quae? Asperiores sunt aspernatur, odio dolorem possimus excepturi vero sapiente mollitia fuga obcaecati laborum quam omnis repudiandae ea iure perferendis.</p>
                        <button className="btn ">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FirstPart;