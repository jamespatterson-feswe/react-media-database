export interface ICard {
    movie: Movie;
}

export type Movie = {
    description: string;
    genre: string;
    title: string;
    year: string;
}

export type MediaTelevisionShow = {
    [show: string]: {
        [season: string]: Show[];
    }
}

export type MediaFranchiseTelevisionShow = {
    [title: string]: {
        [show: string]: {
            [season: string]: Show[];
        }
    }
}

export interface Show {
    "description": string;
    "episode": string;
    "season": string;
    "show": string;
    "title": string;
    "year": string;
}

export interface IMovie {
    movie: Movie;
}

export interface IMovies {
    movies: Movie[];
}

/** @important Use the below type if you have to pass props where you will not know what to expect */
export type DynamicProps<T> = {
    [k: string]: T;
}