import './App.css'

function Hero({title, description, mainText, subText, image}: {title: string, description: string, mainText: string, subText: string, image: string}) {
  return (
        <section id='hero' className="flex flex-col lg:flex-row items-center justify-between px-6 md:px-12 lg:px-20 py-12">
            <div className='hero-content max-w-xl text-center lg:text-left'>
               <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold">{title}</h1>
               <p className="mt-4 text-gray-400 text-base md:text-lg">{description}</p>
            
                <div className='hero-buttons mt-6 flex flex-col md:flex-row gap-4'>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">{mainText}</button>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">{subText}</button>
                </div>
            </div>
            <div className='hero-image'>
                <img className='h-1/6 object-cover mt-8 lg:mt-0 w-full max-w-sm md:max-w-md' src={image} alt='Hero Image' />
            </div>
        </section>
  );
}

export default Hero;