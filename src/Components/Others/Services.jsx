import img1 from '../../assets/KHUKUMONE PNG.png';
import img2 from '../../assets/IPL logo.jpeg';
import img3 from '../../assets/multy.png';

const Services = () => {
    return (
        <div className='mx-8 mt-5'>
            <h1 className="text-3xl font-bold py-4 text-center">Our Services</h1>
            <h1 className="text-center">We understand the importance of approaching each work integrally and believe in<br />  the power of simple and easy communication.</h1>
            <div className='mt-8 grid grid-cols-3 gap-5'>
                <div className='border '>
                    <div className='flex justify-center items-center '>
                        <img src={img1} alt="" className='w-32' />
                    </div>
                    <div className='mx-2'>
                        <h1 className='text-center font-bold'>Khukumoni Foundation</h1>
                        <p className='text-center'>Khukumoni Foundation is empower unprivileged children and youth societies.</p>
                    </div>
                </div>
                <div className='border'>
                    <div className='flex justify-center items-center'>
                        <img src={img2} alt="" className='w-32' />
                    </div>
                    <div className='mx-2'>
                        <h1 className='text-center font-bold'>IPL Immigration Expert</h1>
                        <p className='text-center'>Processing immigration and work files by experienced immigration experts and own lawyers in short time.</p>
                    </div>
                </div>
                <div className='border'>
                    <div className='flex justify-center items-center'>
                        <img src={img3} alt="" className='w-32' />
                    </div>
                    <div className='mx-2'>
                        <h1 className='text-center font-bold'>Multi Wash Powder</h1>
                        <p className='text-center'>Powerful cleaning agent specifically designed to tackle tough stains and dirt on clothing.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;