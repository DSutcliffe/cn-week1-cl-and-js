let favFilm = [
    "Rocky I",
    "Rocky II",
    "Rocky III",
    "Ghostbusters",
]

for (i=0; i<favFilm.length; i++){
    if (favFilm[i] == "Ghostbusters") {
        console.log(`${favFilm[i]}: yey it\'s Ghostbusters`)
    } else {
        console.log(`${favFilm[i]}: booo, we want Ghostbusters`)
    }
}