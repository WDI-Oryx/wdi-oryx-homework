Artist.destroy_all

porcupine_tree = Artist.create(name: "Porcupine tree", formed: "1987-08-17", genres: "Progressive rock", website: "http://www.porcupinetree.com/discography.cfm", image: "https://popmatters-img.rbl.ms/simage/https%3A%2F%2Fassets.rbl.ms%2F11775436%2F980x.jpg/2000%2C2000/Qmpf90W8f4X0YEkM/img.jpg")
katatonia = Artist.create(name: "Katatonia", formed: "1991-03-09", genres: "Progressive rock", website: "https://www.last.fm/music/Katatonia", image: "http://www.kscopemusic.com/wp-content/uploads/2013/08/kat-2014.jpg")


Album.destroy_all 

Album.create(title: "Deadwing", album_art: "https://images-na.ssl-images-amazon.com/images/I/81gdOnECYrL._SX466_.jpg", released: "2005-03-24", artist_id: porcupine_tree.id )
Album.create(title: "The Great Cold Distance", album_art: "https://img.discogs.com/HNN3CRGY2UZBc4vELsLoba_I4q8=/fit-in/598x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-742653-1265255084.jpeg.jpg", released: "2006-03-13", artist_id: katatonia.id )