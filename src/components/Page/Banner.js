import React from 'react';
import bucket from '../../assets/images/bucketgirl.png'
const Banner = () => {
    const input = [
        { placeholder: 'Your Name' },
        { placeholder: 'Your Phone' },
        { placeholder: 'Your Email' },
        { placeholder: 'Type of cleaning' },
        { placeholder: 'Number of bedrooms' },
        { placeholder: 'Number of bathrooms' },
        { placeholder: 'Frequency of cleaning' },
        { placeholder: 'Your Address' },
    ]
    return (
        <section>
            <div class="hero bg-accent ">
                <div class="hero-content h-[622px] flex-col-reverse lg:flex-row-reverse">
                    <img className='w-[50%]' src={bucket} alt='' />
                    <div className='flex-1'>
                        <h1 className='text-2xl'>Best Quality</h1>
                        <h1 class="text-5xl font-bold">Professional Cleaning Service</h1>
                        <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button class="btn btn-primary ">Get Started</button>
                    </div>
                </div>
            </div>

            <div className='lg:w-[90%] mx-auto bg-neutral p-9 mt-[-105px] relative rounded-md'>
                <h1 className='text-primary text-2xl '>Get Free Estimate</h1>
                <div className='grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-4'>
                    {
                        input.map((elem, index) => <input
                            key={index}
                            type="text"
                            placeholder={elem.placeholder}
                            class="input w-full input-bordered max-w-xs" />)
                    }
                </div>
            </div>

        </section>
    );
};

export default Banner;