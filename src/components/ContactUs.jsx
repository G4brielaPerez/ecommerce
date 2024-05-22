import img from "../assets/contact_us.jpg";
import Input from "./login/Input";
import { SlPhone, SlEnvolope , SlLocationPin } from "react-icons/sl";

const ContactUs = () => {
  return (
    <>
      <div
        className="bg-cover bg-no-repeat bg-center py-36"
        style={{ backgroundImage: `url(${img})` }}
      >
        <div className="container flex items-center justify-center">
          <h1 className="text-4xl font-medium mb-4 text-white text-center uppercase">
            Contact us
          </h1>
        </div>
      </div>
      <div className="container grid grid-cols-12 items-start gap-10 px-14 py-16">
        <div className="col-span-8 space-y-6 border border-gray-200 rounded p-6">
          <div>
            <h2 className="text-2xl font-medium">LEAVE US A MESSAGE</h2>
            <p className="text-gray-600">
              Use the form below to get in touch with the sales team
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Input title="First Name" id="first name" placeholder="First Name" />
            <Input title="Last Name" id="last name" placeholder="Last Name" />
          </div>

          <Input title="Email Address" id="email" placeholder="Email Address" />
          <Input title="Subject" id="subject" placeholder="Subject" />
          <Input title="Your Message" id="message" placeholder="Your Message" />
          
          <button className="btn w-1/4 p-2">SEND MESSAGE</button>
        </div>
        <div className="col-span-4 space-y-6 border border-gray-200 rounded p-6">
            <p className="text-lg font-semibold">OUR STORE</p>
            <div className="flex gap-4">
                <SlLocationPin className="text-3xl"/>
                <p>7895 Dr New Albuquerue, NM 19800, nited States Of America</p>
            </div>
            <div className="flex items-center gap-4">
                <SlPhone className="text-xl"/>
                <p>+566 477 256, +566 254 575</p>
            </div>
            <div className="flex items-center gap-4">
                <SlEnvolope className="text-lg"/>
                <p>info@domain.com</p>
            </div>

            <p className="text-lg font-semibold">CAREERS</p>
            <p>
                If you are interesting in emplyment opportunities at RAFCARTs. Please email us:
                <span className="text-primary"> info@domain.com</span>
            </p>
        </div>
      </div>
    </>
  )
}

export default ContactUs
