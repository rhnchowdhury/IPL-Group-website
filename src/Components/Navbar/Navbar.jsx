import logo from '../../assets/IDEA.jpg';

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start  z-30">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn bg-white lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white rounded-box w-52">
                            <li><a>Home</a></li>
                            <li><a>About</a></li>
                            <li><a>Business</a></li>
                            <li><a>Career</a></li>
                            <li><a>News & Media</a></li>
                            <li><a>Gallery</a></li>
                            <li><a>Contact</a></li>
                            <li><a>Team</a></li>
                        </ul>
                    </div>
                    <img src={logo} alt="ipl-group" className='w-32 lg:flex hidden' />
                </div>
                <div className="navbar-center hidden lg:flex text-white z-30">
                    <ul className="menu menu-horizontal  text-lg">
                        <li><a>Home</a></li>
                        <li><a>About</a></li>
                        <li><a>Business</a></li>
                        <li><a>Career</a></li>
                        <li><a>News & Media</a></li>
                        <li><a>Gallery</a></li>
                        <li><a>Contact</a></li>
                        <li><a>Team</a></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn z-30  lg:flex hidden bg-[#F01E27] border-red-500 text-white hover:bg-black hover:border-black">Get Started</a>
                    <img src={logo} alt="ipl-group" className='w-20 z-40 flex lg:hidden' />
                </div>
            </div>

            <div className="hero min-h-screen -mt-32 " style={{ backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)' }}>
                <div className="hero-overlay bg-opacity-80"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md mt-40 ">
                        <h1 className="mb-5 text-4xl font-bold">IDEA Group Is Just What Your Business Needs</h1>
                        <p className="mb-5 ">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn  bg-[#F01E27] border-red-500 text-white hover:bg-black hover:border-black"> Lets Get Started</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Navbar;