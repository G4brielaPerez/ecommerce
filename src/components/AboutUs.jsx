import img from "../assets/contact_us.jpg"
import img1 from "../assets/about_us.png"
import { BiLike } from "react-icons/bi"

const AboutUs = () => {
  return (
    <>
      <div
        className="bg-cover bg-no-repeat bg-center py-36"
        style={{ backgroundImage: `url(${img})` }}
      >
        <div className="container flex items-center justify-center">
          <h1 className="text-4xl font-medium mb-4 text-white text-center uppercase">
            about us
          </h1>
        </div>
      </div>

      <div className="container px-14 py-16 space-y-10">
        <div className="grid grid-cols-3">
            <div className="col-span-2 flex flex-col text-lg mr-12">
                <div className="space-y-3">
                    <p className="text-primary font-medium">OUR HISTORY</p>
                    <p className="font-semibold text-4xl">CREATIVE AND NEW FASHION<br />TRENDS COLLECTION</p>
                    <p>
                        Fashion is a potent visual marker of our times,” says Caroline Stevenson, 
                        head of cultural and ... “Trend analysis of any given era will reveal society's 
                        values and aspirations.” ... The urge to creative expression runs deep
                    </p>
                </div>

                <div className="grid grid-cols-3 mt-8">
                    <div>
                        <p className="text-primary text-4xl font-semibold">12</p>
                        <p className="text-lg">Years Exprience</p>
                    </div>
                    <div>
                        <p className="text-primary text-4xl font-semibold">20K</p>
                        <p className="text-lg">Happy Customer</p>
                    </div>
                    <div>
                        <p className="text-primary text-4xl font-semibold">100%</p>
                        <p className="text-lg">Clients Satisfaction</p>
                    </div>
                </div>
            </div>

            <div className="flex items-center">
                <img src={img1} alt="" className="w-full rounded"/>
            </div>
        </div>

        <div className="grid grid-cols-3">
            <div className="flex items-center">
                <img src={img1} alt="" className="w-full h-full rounded"/>
            </div>

            <div className="col-span-2 flex flex-col justify-center text-lg ml-12">
                <div className="space-y-3">
                    <p className="text-primary font-medium">OUR VISION</p>
                    <p className="font-semibold text-4xl">
                        OUR VISION IS SIMPLE - WE EXIST TO<br />ACCELERATE OUR CUSTOMERS’ PROGRESS
                    </p>
                    <p>
                        We design and deliver our customers’ digital transformation by bringing together 
                        their vision with our industry knowledge and deep technological expertise. 
                        We design and deliver our customers’ digital transformation
                    </p>
                    <div className="flex items-center">
                        <BiLike className="text-primary" />
                        <p className="ml-2">We build strong relationships</p>
                    </div>
                    <div className="flex items-center">
                        <BiLike className="text-primary" />
                        <p className="ml-2">We encourage initiative and provide opportunity</p>
                    </div>
                    <div className="flex items-center">
                        <BiLike className="text-primary" />
                        <p className="ml-2">We embrace change and creativity</p>
                    </div>
                    <div className="flex items-center">
                        <BiLike className="text-primary" />
                        <p className="ml-2">We champion an environment of honesty</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default AboutUs
