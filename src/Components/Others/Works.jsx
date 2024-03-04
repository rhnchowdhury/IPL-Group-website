
const Works = () => {
    return (
        <div className=" bg-[#E8E4D8] py-12">
            <h1 className="text-3xl font-bold py-4 text-center">Our Works</h1>
            <h1 className="text-center">Work is what we make it to be. We all have similar work to do. Yet it is the attitude <br /> with which one works that makes the difference to it.</h1>

            <div className="card-actions justify-center">
                <div className="grid lg:grid-cols-5 grid-cols-1 gap-8 mt-12">
                    <div className="radial-progress" style={{ "--value": "90", "--size": "12rem", "--thickness": "2px" }} role="progressbar"><p className="text-center">90%</p>
                        <h1>South Korea</h1>
                    </div>
                    <div className="radial-progress" style={{ "--value": "80", "--size": "12rem", "--thickness": "2px" }} role="progressbar"><p className="text-center">80%</p>
                        <h1>Australia</h1>
                    </div>
                    <div className="radial-progress" style={{ "--value": "85", "--size": "12rem", "--thickness": "2px" }} role="progressbar"><p className="text-center">85%</p>
                        <h1>Canada</h1>
                    </div>
                    <div className="radial-progress" style={{ "--value": "80", "--size": "12rem", "--thickness": "2px" }} role="progressbar"><p className="text-center">80%</p>
                        <h1>Europe</h1>
                    </div>
                    <div className="radial-progress" style={{ "--value": "86", "--size": "12rem", "--thickness": "2px" }} role="progressbar"><p className="text-center">86%</p>
                        <h1>Italy</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Works;