import { useState } from "react";
import { IoAddOutline } from "react-icons/io5";
import { AiOutlineClose } from "react-icons/ai";
import DOMPurify from 'dompurify';
import '../styles/accordion.css';

export default function Accordion() {
    const [expandedIndex, setExpandedIndex] = useState(null);

    const items = [
        {
            label: "What is Netflix",
            info: "<p>Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.</p> You can watch as much as you want, whenever you want – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!"
        },
        {
            label: "How much does Netflix cost?",
            info: "<p>Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from $6.99 to $22.99 a month (pre-tax). No extra costs, no contracts.</p>"
        },
        {
            label: "Where can I watch",
            info: "<p>Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.</p><p>You can also download your favorite shows with the iOS or Android app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.</p>"
        },
        {
            label: "How do I cancel?",
            info: "<p>Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.</p>"
        },
        {
            label: "What can I watch on Netflix",
            info: "<p>Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.</p>"
        },
        {
            label: "Is Netflix good for kids?",
            info: "<p>The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.</p><p>Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.</p>"
        }
    ];

    const handleItemClick = (index) => {
        setExpandedIndex(prevIndex => prevIndex === index ? null : index);
    };

    const formatTextToHtml = (text) => {
        const paragraphs = text.split('\n').filter(paragraph => paragraph.trim() !== '');
        return paragraphs.map(paragraph => `<p>${paragraph}</p>`).join('');
    };

    return (
        <div className="accordion">
            {items.map((item, index) => {
                const isVisible = index === expandedIndex;
                const formattedContent = formatTextToHtml(item.info);
                const sanitizedContent = DOMPurify.sanitize(formattedContent);

                return (
                    <div key={item.label} className="accordion-item">
                        <div 
                            className="accordion-item-header" 
                            onClick={() => handleItemClick(index)}
                        >
                            <span>{item.label}</span>
                            <span>
                                {isVisible ? <AiOutlineClose /> : <IoAddOutline />}
                            </span>
                        </div>
                        <div 
                            className={`accordion-item-content ${isVisible ? 'open' : ''}`}
                            dangerouslySetInnerHTML={{ __html: sanitizedContent }}
                        />
                    </div>
                );
            })}
        </div>
    );
}
