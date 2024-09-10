import PropTypes from 'prop-types';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import '../styles/ScrollBox.css';

export default function ScrollBox({movieList}) {
    const renderedMovies = movieList.map((movie) => {
        return (
            <li className='movie-card' key={movie.id}>
                <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} className='movie-card-img' alt={movie.title} />
            </li>
        );
    });

    return (
        <div className='container-1400'>
            <div className='row-flex-container'>
                <div className='scroll-backward-button'><FaChevronLeft /></div>
                <ul className='scrollbox'>
                    {renderedMovies}
                </ul>
                <div className='scroll-forward-button'><FaChevronRight />
                </div>
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