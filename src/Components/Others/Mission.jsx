
const Mission = () => {
    return (
        <div className='lg:px-8 px-6 py-10  bg-[#E8E4D8]'>
            <h1 className="text-3xl font-bold py-4 text-center">Mission & Vision</h1>
            <h1 className="text-center">Mission defines the organization&apos;s business, its objectives, and how it will reach these<br /> objectives.Vision details where the organization aspires to go.</h1>
            <div className='mt-8 grid lg:grid-cols-2 grid-cols-1 gap-8 lg:mx-20'>
                <div className="card lg:w-96 shadow-2xl">
                    <div className="card-body items-center text-center">
                        <h2 className="card-title font-bold">Mission</h2>
                        <p>A mission statement clarifies what the company wants to achieve, who they want to support, and why they want to support them.</p>
                    </div>
                </div>
                <div className="card lg:w-96 shadow-2xl">
                    <div className="card-body items-center text-center">
                        <h2 className="card-title font-bold">Vision</h2>
                        <p>A vision statement describes where the company wants a community, or the world, to be as a result of the company&apos;s services.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Mission;