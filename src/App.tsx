import Hero from './components/Hero/Hero'
import images from './assets/2.jpg'


function App() {

  return (
    <main>
      
       <Hero 
        title="Master Frontend Development with Real React Projects"
        description="Build responsive, modern interfaces with hands-on React challenges designed to improve your skills fast."
        mainText="Start Practicing"
        subText="View Projects"
        image={images}
       />
      
    </main>
  );
}

export default App
