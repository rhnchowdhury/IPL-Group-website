import img1 from '../../assets/tt.png';

const SecondPart = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-[#F1EFF5]">
                <div className="hero-content lg:mx-20 flex-col lg:flex-row py-6">
                    <div>
                        <img src={img1} className="lg:max-w-sm rounded-lg shadow-2xl" />
                        <h1 className='font-bold text-lg text-center mt-4'>IBNUL ASAF JAWED</h1>
                        <h1 className='font-bold text-md text-center'>Managing Director</h1>
                    </div>
                    <div className='lg:ml-10'>
                        <h1 className=" font-medium">We&apos;re awessome</h1>
                        <p className='font-bold text-xl'>What We Are Done Good</p>
                        <p className="py-6 text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid repudiandae earum quo odio minus atque corporis? Placeat porro eaque dicta, nam ea distinctio enim nostrum ex atque sint <br /> <br />saepe iusto quae? Asperiores sunt aspernatur, odio dolorem possimus excepturi vero sapiente mollitia fuga obcaecati laborum quam omnis repudiandae ea iure perferendis.</p>
                        <button className="btn bg-[#F01E27] border-red-500 text-white hover:bg-black hover:border-black">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SecondPart;