import sofa from "../../assets/icons/sofa.svg";
import bed from "../../assets/icons/bed.svg";
import office from "../../assets/icons/office.svg";
import terrace from "../../assets/icons/terrace.svg";
import bed2 from "../../assets/icons/bed-2.svg"; 
import restaurant from "../../assets/icons/restaurant.svg";

const Dropdown = () => {
  return (
    // Simplemente muestra u oculta el elemento
    // hidden group-hover:block

    // Permite transiciones suaves entre los estados de visibilidad
    //opacity-0 group-hover:opacity-100

    // invisible group-hover:visible

    <div className="absolute w-full left-0 top-full bg-white shadow-xl py-3 divide-y divide-gray-300 divide-dashed opacity-0 group-hover:opacity-100 transition duration-400 invisible group-hover:visible">
      <Item text="Bedroom" src={bed} />
      <Item text="Sofa" src={sofa} />
      <Item text="Office" src={office} />
      <Item text="Outdoor" src={terrace} />
      <Item text="Mattress" src={bed2} />
      <Item text="Dining" src={restaurant} />
    </div>
  )
}

const Item = ({ text, src }) => {
  return (
    <div className="flex items-center px-6 py-3 hover:bg-gray-100 transition">
      <img src={src} alt="sofa" className="w-5 h-5 object-contain" />
      <span className="ml-6 text-gray-600 text-sm">{text}</span>
    </div>
  )
}

export default Dropdown
