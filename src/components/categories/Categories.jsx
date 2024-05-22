import c1 from '../../assets/categories/category-1.jpg'
import c2 from '../../assets/categories/category-2.jpg'
import c3 from '../../assets/categories/category-3.jpg'
import c4 from '../../assets/categories/category-4.jpg'
import c5 from '../../assets/categories/category-5.jpg'
import c6 from '../../assets/categories/category-6.jpg'
import Item from './Item'

const Categories = () => {
    return (
        <div className="w-full">
            <h2 className="text-3xl font-medium text-gray-800 mb-6">SHOP BY CATEGORY</h2>

            <div className="grid grid-cols-3 gap-3">
                <Item text="Bedroom" src={c1} />
                <Item text="Sofa" src={c2} />
                <Item text="Office" src={c3} />
                <Item text="Outdoor" src={c4} />
                <Item text="Mattress" src={c5} />
                <Item text="Dinnings" src={c6} />
            </div>
        </div>
    )
}

export default Categories