import img1 from '../../assets/ipl.png';
import img2 from '../../assets/multi.png';

const Services = () => {
    return (
        <div className='lg:px-8 px-6 py-10 bg-red-600'>
            {/* bg-[#F1EFF5] */}
            <h1 className="text-3xl font-bold py-4 text-center">Our Services</h1>
            <h1 className="text-center">We understand the importance of approaching each work integrally and believe in<br />  the power of simple and easy communication.</h1>
            <div className='mt-8 grid lg:grid-cols-2 grid-cols-1 gap-8 lg:mx-20'>
                <div className='border-2'>
                    <div className='flex justify-center items-center'>
                        <img src={img1} alt="" className='w-32 mt-8' />
                    </div>
                    <div className='mx-2'>
                        <h1 className='text-center font-bold'>IPL Immigration Expert</h1>
                        <p className='text-center lg:px-12'>Processing immigration and work files by experienced immigration experts and own lawyers in short time.</p>
                    </div>
                </div>
                <div className='border-2'>
                    <div className='flex justify-center items-center'>
                        <img src={img2} alt="" className='w-32 mt-4' />
                    </div>
                    <div className=''>
                        <h1 className='text-center font-bold'>Multi Wash Powder</h1>
                        <p className='text-center lg:px-12 pb-2'>Powerful cleaning agent specifically designed to tackle tough stains and dirt on clothing.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;