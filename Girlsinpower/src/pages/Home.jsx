import Blog from "../Blog"
import Events from "../Events"
import Footer from "../Footer"
import Hero from "../Hero"
import Impact from "../Impact"
import Programs from "../Programs"

function Home(){
    return(
        <div className="home">
             <Hero/>
     <Impact/>
    {/* <About/>  */}
    <Programs/>
     {/* <Get/> */  }
     {/* <Events/> */}
     <Blog/>
     {/* <Contact/> */}
        </div>
    )
}
export default Home