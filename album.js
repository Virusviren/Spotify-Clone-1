console.log("hello");

const fetchData = async () => {
  try {
    const parent = document.querySelector(".tracklist");
    parent.innerHTML = "";
    const response = await fetch(
      "https://striveschool-api.herokuapp.com/api/deezer/album/75621062"
    );
    const data1 = await response.json();
    const tracks = data1.tracks.data;
    // console.log(data1);
    // let { tracks } = data1;
    // console.log(tracks);
    // let { data } = tracks;
    // console.log(data[0].title);
    console.log(tracks);

    tracks.forEach((track) => {
      console.log(track.artist.name);
      const listofTracks = `<div class="row m-0">
  <div class="col-1 d-none d-md-flex justify-content-center align-items-center">
    <i class="fas fa-music text-muted"></i>

    <i class="fas fa-play play d-none"></i>
  </div>
  <div class="col-8">
    <p class="song">
      ${track.title}
      <span class="text-muted">
        <br />
        ${track.artist.name}
      </span>
    </p>
  </div>
  <div class="col-3">
    <p class="time d-flex justify-content-center align-items-center">
      <span class="heart d-none">
        <i class="far fa-heart p-2"></i>
      </span>
      <span class="text-muted p-2">${(track.duration / 60).toFixed(2)}</span>
      <i class="fas fa-ellipsis-h p-2 d-none"></i>
    </p>
  </div>
</div> `;
      parent.innerHTML += listofTracks;
    });
  } catch (error) {
    console.log(error);
  }
};

fetchData();

/* <div class="row m-0">
  <div class="col-1 d-none d-md-flex justify-content-center align-items-center">
    <i class="fas fa-music text-muted"></i>

    <i class="fas fa-play play d-none"></i>
  </div>
  <div class="col-8">
    <p class="song">
      ${track.title}
      <span class="text-muted">
        <br />
        $(track.artist.name)
      </span>
    </p>
  </div>
  <div class="col-3">
    <p class="time d-flex justify-content-center align-items-center">
      <span class="heart d-none">
        <i class="far fa-heart p-2"></i>
      </span>
      <span class="text-muted p-2">${track.duration}</span>
      <i class="fas fa-ellipsis-h p-2 d-none"></i>
    </p>
  </div>
</div> */
