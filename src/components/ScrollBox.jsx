import PropTypes from 'prop-types';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import '../styles/ScrollBox.css';
import { useState, useRef, useEffect } from 'react';

export default function ScrollBox({ movieList }) {
    const scrollboxRef = useRef(null);
    const scrollAmount = 1400;
    const [isAtStart, setIsAtStart] = useState(true);
    const [isAtEnd, setIsAtEnd] = useState(false);
 
    const renderedMovies = movieList.map((movie) => {
        return (
            <li className='movie-card' key={movie.id}>
                <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} className='movie-card-img' alt={movie.title} />
            </li>
        );
    });

    const scrollBackward = () => {
        if (scrollboxRef.current) {
            scrollboxRef.current.scrollBy({
                left: -scrollAmount,
                behavior: 'smooth'
            });
            checkScrollPosition();
        }
    };

    const scrollForward = () => {
        if (scrollboxRef.current) {
            scrollboxRef.current.scrollBy({
                left: scrollAmount,
                behavior: 'smooth'
            });
            checkScrollPosition();
        }
    };

    const checkScrollPosition = () => {
        if (scrollboxRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollboxRef.current;
            setIsAtEnd(scrollLeft + clientWidth >= scrollWidth);
            setIsAtStart(scrollLeft === 0);
        }
    };

    useEffect(() => {
        checkScrollPosition();
        window.addEventListener('resize', checkScrollPosition);
        return () => window.removeEventListener('resize', checkScrollPosition);
    }, []);

    return (
        <div className='container-1400'>
            <div className='row-flex-container'>
                {!isAtStart && (
                    <button className='scroll-backward-button' aria-label='Scroll Left' onClick={scrollBackward}>
                        <FaChevronLeft />
                    </button>
                )}
                <ul className='scrollbox' ref={scrollboxRef} onScroll={checkScrollPosition}>
                    {renderedMovies}
                </ul>
                {!isAtEnd && (
                    <button className='scroll-forward-button' aria-label='Scroll Right' onClick={scrollForward}>
                        <FaChevronRight />
                    </button>
                )}
            </div>
        </div>
    );
}

ScrollBox.propTypes = {
    movieList: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            poster_path: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
        })
    ).isRequired,
};
