console.log("hello");


let artistName = ""
const fetchArtistName = async () => {
    try {
        const response = await fetch (`https://striveschool-api.herokuapp.com/api/deezer/search?q=queen`)
        const data1 = await response.json()
        console.log(data1);
        artistName = data1.data[0].artist.name
        console.log(artistName);
    } catch (error) {
        console.log(error);
        
    }
}



const fetchData = async () => {
    try {
        const parent = document.querySelector(".listCards")
        parent.innerHTML = ""
        const response = await fetch ('https://striveschool-api.herokuapp.com/api/deezer/artist/412/albums')
        const data = await response.json()
        console.log(data);
        const albumData = data.data
        console.log(albumData);
        albumData.forEach((album) => {
            console.log(album.cover);
            const card = `<div class="col-12 col-sm-6 col-md-3 col-lg-2 ">

            <div class="card">
              <img src="${album.cover}" class="card-img-top" alt="...">
              <h6 class="card-title pt-2 mb-1">
                ${album.title}
              </h6>
              <p class="card-text">
                ${artistName}
              </p>
            </div>

          </div>`;
          parent.innerHTML += card
            
        });
    } catch (error) {
        console.log(error);
        
    }
}
fetchArtistName()
fetchData()