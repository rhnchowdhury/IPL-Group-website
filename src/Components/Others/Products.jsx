import img1 from '../../assets/wash-1.png';
import img2 from '../../assets/wash-2.png';
import img3 from '../../assets/wash-3.png';
import img4 from '../../assets/wash-4.png';
import img5 from '../../assets/wash-5.png';

const Products = () => {
    return (
        <div className='px-8 py-10 bg-[#F1EFF5]'>
            <h1 className="text-3xl font-bold text-center py-4">Our Products</h1>
            <h1 className="text-center">The greater the attention to product quality in production,  the fewer the demands on the <br /> customer service operation to correct subsequent problems.</h1>
            <div className='grid lg:grid-cols-5 grid-cols-1 gap-8 mt-5'>
                <div className='border-2 rounded-xl shadow-xl'>
                    <div className='card-actions justify-center items-center'>
                        <img src={img1} alt="" className='w-28 h-44' />
                    </div>
                    <div className='text-center font-bold py-2'>
                        <h1>Liquid Detergent</h1>
                    </div>
                </div>
                <div className='border-2 rounded-xl shadow-xl'>
                    <div className='card-actions justify-center items-center'>
                        <img src={img2} alt="" className=' w-28 h-44' />
                    </div>
                    <div>
                        <h1 className='text-center'>Test Group</h1>
                    </div>
                </div>
                <div className='border-2 rounded-xl shadow-xl'>
                    <div className='card-actions justify-center items-center'>
                        <img src={img3} alt="" className=' w-28 h-44' />
                    </div>
                    <div>
                        <h1>Test Group</h1>
                    </div>
                </div>
                <div className='border-2 rounded-xl shadow-xl'>
                    <div className='card-actions justify-center items-center'>
                        <img src={img4} alt="" className='w-28 h-44' />
                    </div>
                    <div>
                        <h1>Test Group</h1>
                    </div>
                </div>
                <div className='border-2 rounded-xl shadow-xl'>
                    <div className='card-actions justify-center items-center'>
                        <img src={img5} alt="" className='w-28 h-44' />
                    </div>
                    <div>
                        <h1>Test Group</h1>
                    </div>
                </div>
                {/* <div className="card w-60 glass ">
                    <figure className='mt-2 '><img src={img1} alt="" className='w-24 bg-red-300 h-28' />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title"></h2>
                    </div>
                </div>
                <div className="card w-60 glass ">
                    <figure className='mt-2'><img src={img2} alt="" className='w-24 bg-red-300 h-28' /></figure>
                    <div className="card-body ">
                        <h2 className="card-title">Synthetic Powder</h2>
                    </div>
                </div>
                <div className="card w-60 glass ">
                    <figure className='mt-2'><img src={img3} alt="" className='w-16' /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Dish Wash Powder</h2>
                    </div>
                </div>
                <div className="card w-60 glass ">
                    <figure className='mt-2'><img src={img4} alt="" className='w-24' /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Hand Wash Liquid</h2>
                    </div>
                </div>
                <div className="card w-60 glass ">
                    <figure className='mt-2'><img src={img5} alt="" className='w-20' /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Detergent Powder</h2>
                    </div>
                </div> */}
            </div>
        </div>
    );
};

export default Products;