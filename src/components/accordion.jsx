import { useState } from "react";
import { IoAddOutline } from "react-icons/io5";
import { AiOutlineClose } from "react-icons/ai";
import '../styles/accordion.css';


export default function Accordion() {
    const [itemVisibility, setItemVisibility] = useState(false);


    const items = [
        {
            label: "What is Netflix",
            info: ""
        },
        {
            label: "How much does Netflix cost?",
            info: "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from $6.99 to $22.99 a month (pre-tax). No extra costs, no contracts."
        },
        {
            label: "Where can I watch",
            info: "OneInfo"
        },
        {
            label: "How do I cancel?",
            info: "TwoInfo"
        },
        {
            label: "What can I watch on Netflix",
            info: "OneInfo"
        },
        {
            label: "Is netflix good for kids?",
            info: "TwoInfo"
        }
    ]

    const handleItemClick = () => {
        console.log('Icon Clicked');
        setItemVisibility(true);
    }

    const renderedItems = items.map((item) => {
        return (
            <div key={item.label} className="accordion-item" onClick={handleItemClick}>
                <span>{item.label}</span>
                <span>{itemVisibility ? <IoAddOutline /> : <AiOutlineClose />}</span>
            </div>
        )
    })


    return (
    <div className="accordion">
        {renderedItems}
    </div>);
}