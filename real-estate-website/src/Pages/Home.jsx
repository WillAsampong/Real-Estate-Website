import TopRightArrow from "../Components/SVGs/TopRightArrowSVG"
import UnionSVG from "../Components/SVGs/UnionSVG"


const Home = () => {
  return (
    <>
      <section className="hero-section flex bg-grey08">
        <div className="left-side p-10 m-5 flex flex-1 flex-col gap-y-10">
          <div className="">
            <h1 className="font-bold text-4xl text-white">
              Discover Your Dream Property With Estatein
            </h1>
            <p className="text-grey50 mt-5">Your journey to finding the perfect property begins here. Explore our listings to find the home that matches your dreams.</p>
          </div>
          <div className="flex gap-x-4">
            <button className="p-2 rounded-md bg-transparent text-white border border-grey50 text-sm">Learn More</button>
            <button className="p-2 rounded md text-white bg-purple-600 text-sm">Browse Properties</button>
          </div>
          <div className="stats flex gap-x-4">
            <div className="bg-grey10 p-5 rounded-md border border-grey20">
              <span className="text-4xl text-white font-bold">200+</span>
              <p className="text-grey50">Happy Customers</p>
            </div>
            <div className="bg-grey10 p-5 rounded-md border border-grey20">
              <span className="text-4xl text-white font-bold">10k+</span>
              <p className="text-grey50">Properties For Clients</p>
            </div>
            <div className="bg-grey10 p-5 rounded-md border border-grey20">
              <span className="text-4xl text-white font-bold">16+</span>
              <p className="text-grey50">Years of Experience</p>
            </div>
            
          </div>
        </div>
        <div className="right-side flex-1">

        </div>
      </section>
      <section className="flex gap-x-4 bg-grey08 w-full px-4">
        <div className="relative flex-1 bg-grey10 px-6 py-4 border border-grey40 rounded-md">
          <div className="absolute right-4 top-2">
            <TopRightArrow className=""/>
          </div>
          <div className="icon mb-4 mx-auto">
            <UnionSVG />
          </div>
          <p className="text-white font-semibold text-center">Find Your Dream Home</p>
        </div>
        <div className="relative flex-1 bg-grey10 px-6 py-4 border border-grey40 rounded-md">
          <div className="absolute right-4 top-2">
            <TopRightArrow className=""/>
          </div>
          <div className="icon mb-4 mx-auto">
            <UnionSVG />
          </div>
          <p className="text-white font-semibold text-center">Unlock Property Value</p>
        </div>
        <div className="relative flex-1 bg-grey10 px-6 py-4 border border-grey40 rounded-md">
          <div className="absolute right-4 top-2">
            <TopRightArrow className=""/>
          </div>
          <div className="icon mb-4 mx-auto">
            <UnionSVG />
          </div>
          <p className="text-white font-semibold text-center">Effortless Property Management</p>
        </div>
        <div className="relative flex-1 bg-grey10 px-6 py-4 border border-grey40 rounded-md">
          <div className="absolute right-4 top-2">
            <TopRightArrow className=""/>
          </div>
          <div className="icon mb-4 mx-auto">
            <UnionSVG />
          </div>
          <p className="text-white font-semibold text-center">Smart Investments, Informed Decisions</p>
        </div>
      </section>
    </>
  )
}

export default Home
