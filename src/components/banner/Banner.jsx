import banner from "../../assets/banner-bg.jpg"

const Banner = ({ navigate }) => {
    return (
        <div className="bg-cover bg-no-repeat bg-center py-36" style={{ backgroundImage: `url(${banner})` }}>
            <div className="container">
                <h1 className="text-6xl text-gray-800 font-medium mb-4">
                    Best Collection For <br /> Home Decoration
                </h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa <br />
                    assumenda aliquid inventore nihil laboriosam odio
                </p>
                <div className="mt-12">
                    <button 
                        className="bg-primary border border-primary text-white px-8 py-3 font-medium rounded-md hover:bg-transparent hover:text-primary transition"
                        onClick={() => navigate("/shop")}
                    >
                        Shop Now
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Banner