import './App.css'

function Hero({title, description, mainText, subText, image}: {title: string, description: string, mainText: string, subText: string, image: string}) {
  return (
        <section className='hero'>
            <div className='hero-content'>
               <h1>{title}</h1>
               <p>{description}</p>
            
                <div className='hero-buttons'>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">{mainText}</button>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">{subText}</button>
                </div>
            </div>
            <div className='hero-image'>
                <img className='h-1/6 object-cover' src={image} alt='Hero Image' />
            </div>
        </section>
  );
}

export default Hero;