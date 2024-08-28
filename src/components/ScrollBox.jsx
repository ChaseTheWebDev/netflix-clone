import '../styles/ScrollBox.css';
export default function ScrollBox() {

    const movieList = [
        {
            id: "1a2bc3",
            title: "Titanic",
            director: "James Cameron",
            Genre: "Drama",
            image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgm_YQ-VgtPe23_ZGKtDMOFOVD39GJQkZNoO8jZXTUkAgrmj0rjVryGyf0YslctENzvgJKZvSNKygB3QS3inObnaW4G2NJdwF878Nmaytebie-KjQsADncz1Sl3JkGFdvnKnVdNAchPSnQJe2vJV1gZ9BclL07i1QUOx0lO36vDmFPgzLEd54bjbG0/s3011/titanic%20james%20horner%201%20main%20custom.jpg",
            trailer: "trailerURL"
        },
        {
            id: "2bc3d4",
            title: "E.T.",
            director: "Steven Spielberg",
            Genre: "Science-fiction",
            image: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p10998_p_v13_au.jpg",
            trailer: "trailerURL"
        },
        {
            id: "3cd4ef",
            title: "Inception",
            director: "Christopher Nolan",
            Genre: "Action",
            image: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p7825626_p_v8_ae.jpg",
            trailer: "trailerURL"
        },
        {
            id: "4ef5gh",
            title: "The Matrix",
            director: "Wachowski Sisters",
            Genre: "Science-fiction",
            image: "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
            trailer: "trailerURL"
        },
        {
            id: "5gh6ij",
            title: "Forrest Gump",
            director: "Robert Zemeckis",
            Genre: "Drama",
            image: "https://image.tmdb.org/t/p/original/tqfdw48d74spVGmqlZ6rRyOywUM.jpg",
            trailer: "trailerURL"
        },
        {
            id: "6ij7kl",
            title: "The Shawshank Redemption",
            director: "Frank Darabont",
            Genre: "Drama",
            image: "https://roundaboutbookstore.com/cdn/shop/files/51zUbui_gbL_00c52543-0b37-407e-892f-7d0f71c7718a.jpg?v=1691334865",
            trailer: "trailerURL"
        },
        {
            id: "7kl8mn",
            title: "The Avengers",
            director: "Joss Whedon",
            Genre: "Action",
            image: "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
            trailer: "trailerURL"
        },
        {
            id: "8mn9op",
            title: "Jurassic Park",
            director: "Steven Spielberg",
            Genre: "Adventure",
            image: "https://image.tmdb.org/t/p/original/gG2A8My5VOkw6O3aWx2hxjz0IjT.jpg",
            trailer: "trailerURL"
        },
        {
            id: "9op0qr",
            title: "Pulp Fiction",
            director: "Quentin Tarantino",
            Genre: "Crime",
            image: "https://image.tmdb.org/t/p/original/rA67SIRd41oiB1KiGV5RUL85j3h.jpg",
            trailer: "trailerURL"
        },
        {
            id: "0qr1st",
            title: "The Godfather",
            director: "Francis Ford Coppola",
            Genre: "Crime",
            image: "https://image.tmdb.org/t/p/original/6owZZqP8rkR2PekrK1zpK1iI7uF.jpg",
            trailer: "trailerURL"
        },
        {
            id: "1st2uv",
            title: "The Dark Knight",
            director: "Christopher Nolan",
            Genre: "Action",
            image: "https://image.tmdb.org/t/p/original/qJ2tW6WMUDux911s8wD2w2d8QKQ.jpg",
            trailer: "trailerURL"
        },
        {
            id: "2uv3wx",
            title: "Fight Club",
            director: "David Fincher",
            Genre: "Drama",
            image: "https://image.tmdb.org/t/p/original/4wZ8u8jGmEUSYh6KhW2A2zTShPm.jpg",
            trailer: "trailerURL"
        },
        {
            id: "3wx4yz",
            title: "The Lord of the Rings: The Return of the King",
            director: "Peter Jackson",
            Genre: "Fantasy",
            image: "https://image.tmdb.org/t/p/original/9wZ8u8jGmEUSYh6KhW2A2zTShPm.jpg",
            trailer: "trailerURL"
        },
        {
            id: "4yz5za",
            title: "Gladiator",
            director: "Ridley Scott",
            Genre: "Action",
            image: "https://image.tmdb.org/t/p/original/8kOu54b9ExQhf4wT9iW2UlM8ZCC.jpg",
            trailer: "trailerURL"
        },
        {
            id: "5za6ab",
            title: "Interstellar",
            director: "Christopher Nolan",
            Genre: "Science-fiction",
            image: "https://image.tmdb.org/t/p/original/y8p0l7Jby1oCFtK5WhtlhJwR6W0.jpg",
            trailer: "trailerURL"
        },
        {
            id: "6ab7bc",
            title: "The Lion King",
            director: "Roger Allers, Rob Minkoff",
            Genre: "Animation",
            image: "https://image.tmdb.org/t/p/original/xOM1dZqQ0xMlCwA0p38lmQXHzmH.jpg",
            trailer: "trailerURL"
        },
        {
            id: "7bc8cd",
            title: "The Departed",
            director: "Martin Scorsese",
            Genre: "Crime",
            image: "https://image.tmdb.org/t/p/original/aE5lYkOY6a5dbBfW8VShuAKj0kH.jpg",
            trailer: "trailerURL"
        },
        {
            id: "8cd9de",
            title: "The Silence of the Lambs",
            director: "Jonathan Demme",
            Genre: "Thriller",
            image: "https://image.tmdb.org/t/p/original/tHkF05Op26biYJ9dY2nFhQRGndY.jpg",
            trailer: "trailerURL"
        },
        {
            id: "9de0ef",
            title: "Se7en",
            director: "David Fincher",
            Genre: "Thriller",
            image: "https://image.tmdb.org/t/p/original/19Ezw7iozPUV8zTXDshQWud08QZ.jpg",
            trailer: "trailerURL"
        },
        {
            id: "0ef1gh",
            title: "The Usual Suspects",
            director: "Bryan Singer",
            Genre: "Crime",
            image: "https://image.tmdb.org/t/p/original/zuRvpRQZMlKkzv4Ogdy9u6iGsMn.jpg",
            trailer: "trailerURL"
        }
    ];
    
    
    

    const renderedMovies = movieList.map((movie) => {
        return (
            <li className='movie-card' key={movie.id}>
                <img className='movie-card-img' src={movie.image} alt={movie.title} />
            </li>
        );
    });

    return (
        <div className='container-1400'>
            <ul className='scrollbox'>
                {renderedMovies}
            </ul>
        </div>
    );
}