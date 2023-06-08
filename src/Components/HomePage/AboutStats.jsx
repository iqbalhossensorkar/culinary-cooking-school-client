import CountUp from 'react-countup';


const AboutStats = () => {
    return (
        <div className='w-2/3 mx-auto mt-20'>
            <p className='text-center text-5xl font-semibold text-[#F8A33C]'>Our Success</p>
            <p className='text-center text-gray-400 mt-3 font-medium'>Learn From Our Best Teachers and Become the Masterchef</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-20 mb-20'>
                <div className='hover:-translate-y-3 hover:shadow-2xl transition'>
                    <div className='rounded-md px-20 py-10 bg-[#c9a44d] transition hover:bg-[#ffd064]'>
                        <div className='text-5xl font-bold text-white'>
                            <CountUp end={13} duration={10} delay={2}/><span>+</span>
                        </div>
                        <p className='text-center text-lg font-medium text-gray-700'>Completed</p>
                    </div>
                </div>
                <div className='hover:-translate-y-3 hover:shadow-2xl transition'>
                    <div className='rounded-md px-20 py-10 bg-[#c9a44d] transition hover:bg-[#ffd064]'>
                        <div className='text-5xl font-bold text-white'>
                            <CountUp end={45} duration={10} delay={2}/><span>+</span>
                        </div>
                        <p className='text-center text-lg font-medium text-gray-700'>Recipes</p>
                    </div>
                </div>
                <div className='hover:-translate-y-3 hover:shadow-2xl transition'>
                    <div className='rounded-md px-20 py-10 bg-[#c9a44d] transition hover:bg-[#ffd064]'>
                        <div className='text-5xl font-bold text-white'>
                            <CountUp end={35} delay={2} duration={10}/><span>+</span>
                        </div>
                        <p className='text-center text-lg font-medium text-gray-700'>Teachers</p>
                    </div>
                </div>
                <div className='hover:-translate-y-3 hover:shadow-2xl transition'>
                    <div className='rounded-md px-20 py-10 bg-[#c9a44d] transition hover:bg-[#ffd064]'>
                        <div className='text-5xl font-bold text-white'>
                            <CountUp end={99} delay={2} duration={10}/><span>+</span>
                        </div>
                        <p className='text-center text-lg font-medium text-gray-700'>Students</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutStats;