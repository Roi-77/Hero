import Hero from './components/Hero/Hero'
import images from './assets/2.jpg'


function App() {

  return (
    <>
      <div>
       <Hero 
        title="FrontEnd Practice with React"
        description="Practice your frontend skills with React and build amazing web applications. 🚀"
        mainText="Get Started"
        subText="Learn More"
        image={images}
       />
      </div>
    </>
  );
}

export default App
