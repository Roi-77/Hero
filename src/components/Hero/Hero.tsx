
type HeroProps = {
  title: string;
  description: string;
  mainText: string;
  subText: string;
  image: string;
};

function Hero({title, description, mainText, subText, image}: HeroProps) {
  return (
        <section 
        id="hero" 
        className="hero-section min-h-screen flex flex-col-reverse lg:flex-row items-center justify-between gap-12 px-6 md:px-12 lg:px-20 py-16 bg-white h-screen overflow-y-auto no-scrollbar">
            <header className='hero-content max-w-2xl text-center lg:text-left'>
               <h1 className="hero-title text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-black">
                    {title}
                </h1>
               <p className="hero-description mt-6 text-lg md:text-xl leading-8 text-gray-600">{description}</p>
            
                <div className='hero-actions mt-6 flex flex-col md:flex-row gap-4'>
                    <a
                    href="#"
                    className="hero-main-button inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-full transition">
                        {mainText}
                    </a>

                    <a
                    href="#"
                    className="hero-sub-button inline-block border border-gray-300 hover:border-blue-500 text-gray-900 font-semibold py-3 px-6 rounded-full transition bg-white">
                        {subText}
                    </a>
                </div>
            </header>
            <div className='hero-image w-full max-w-xl flex justify-center'>
                <img className='w-full max-w-md lg:max-w-xl object-contain' src={image} alt='Frontend dev Illustration' />
            </div>
        </section>
  );
}

export default Hero;