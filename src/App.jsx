import { BrowserRouter } from 'react-router-dom';
import { Navbar,Home,About,Experience,Tech,Work,Contact,StarsCanvas,ComputersCanvas } from './components';
const App = () => {
  return (

    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className=' bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <div className=' relative z-0'>

          <Home />
        <StarsCanvas />
          </div>
        </div>
        <About />
        {/* <Experience /> */}
        <Tech />
        <Work />
        <div className=' relative z-0'>
        <Contact />
        <StarsCanvas />

        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
