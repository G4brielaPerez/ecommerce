import { useState } from "react";
import Item from "./Item";
import SizeSelector from "./SizeSelector";
import Input from "./Input";
import ColorSelector from "./ColorSelector";

const SiteBar = () => {
  const [selectedSize, setSelectedSize] = useState("m");
  const [selectedColor, setSelectedColor] = useState("#FC3D57");

  const handleSizeChange = (size) => {
    setSelectedSize(size);
  }

  const handleColorChange = (color) => {
    setSelectedColor(color);
  }

  return (
    <div className="divide-y divide-gray-200 space-y-4">
      <Filter title="Categories">
        <Item text="Bedroom" id={"bedroom"} num={15} />
        <Item text="Sofa" id={"sofa"} num={5} />
        <Item text="Office" id={"office"} num={9} />
        <Item text="Outdoor" id={"outdoor"} num={19} />
      </Filter>

      <Filter title="Brands">
        <Item text="Dominik" id={"dominik"} num={15} />
        <Item text="Karl" id={"karl"} num={18} />
        <Item text="Maxing" id={"maxing"} num={9} />
        <Item text="Ernest" id={"ernest"} num={12} />
      </Filter>

      <Filter title="Price">
        <div className="flex items-center">
          <Input placeholder="Min" />
          <span className="mx-3 text-gray-500">-</span>
          <Input placeholder="Max" />
        </div>
      </Filter>

      <Filter title="Size">
        <SizeSelector
          sizes={["xs", "s", "m", "l", "xl"]}
          selectedSize={selectedSize}
          onSelectSize={handleSizeChange}
        />
      </Filter>

      <Filter title="Color">
        <ColorSelector
          colors={["#FC3D57", "white", "black"]}
          selectedColor={selectedColor}
          onSelectColor={handleColorChange}
        />
      </Filter>
    </div>
  )
}

const Filter = ({ title, children }) => {
  return (
    <div className="py-4">
      <h3 className="text-xl text-gray-800 mb-3 font-medium uppercase">
        {title}
      </h3>
      <div className="space-y-2">{children}</div>
    </div>
  )
}

export default SiteBar
