import delivery from "../../assets/icons/delivery-van.svg";
import money from "../../assets/icons/money-back.svg";
import support from "../../assets/icons/service-hours.svg";
import Item from "./Item";

const Features = () => {
  return (
    <div className="w-full">
      <div className="w-10/12 grid grid-cols-3 gap-6 mx-auto justify-center">
        <Item
          text="Free Shipping"
          description="Order Over $200"
          src={delivery}
        />
        <Item
          text="Money Returns"
          description="30 Days money return"
          src={money}
        />
        <Item
          text="24/7 Support"
          description="Customer support"
          src={support}
        />
      </div>
    </div>
  )
}

export default Features
