let myFavoriteFilm = {
    filmName: 'Rango',
    release: 2011,
    boss: "Гор Вербинский",
    country: "USA"
}

myFavoriteFilm.reven = '10000000$';

console.log(myFavoriteFilm.filmName);

delete myFavoriteFilm.release;

console.log(myFavoriteFilm);