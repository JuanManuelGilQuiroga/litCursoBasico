import  {LitElement, html, css} from "lit";
export class MyPlayer extends LitElement{
  static properties = {
    titule: {type: String}
  }
  constructor(){
    super();

    this.titule = "Now Playing"

    this.song = "Villians and Heroes"
    this.album = "heros and villians"

    this.plustime = "2:14"
    this.negativetime = " -1:15"

    this.imagen = "/public/metroboom.png"

    this.dispositive = "Airpos Pro (Dave)"
  }
//CSS DEL OSOCOCOCOCOCOCOSOSOSOSOSOSOSOSOSOSOS
  static styles = css`

  * {
    margin: 0;
    padding: 0
  }

  my-element{
    background: green;
    width: 100dvw
  }


  .container{
    
    display: grid;
    width:100% !important;
    height:100vh;;
    grid-template-columns: 1fr;
    grid-template-rows: 0.3fr 3fr 0.5fr 0.5fr 0.5fr 0.5fr 0.3fr;   
    grid-template-areas: 
    "titule"
    "container__image"
    "song_name"
    "line_song"
    "change_song"
    "song_volumen"
    "dispositive"
  
  }
  

  /*TITULO DE NOW PLAYING ---------------------------------*/ 
  .titule{
    grid-area: titule;
    color: black;
    // background: purple;
    display: flex;
    align-items: center;
    justify-content: center;
  }


  /*/IMAGEN DEL MEDIO PARA POER CONTROLARLA----------------/*/
  .container__image{
    grid-area: container__image;
    // background: red;
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    justify-content: center;
    height:100%;
    width:100%;

  }
  .container__image > img {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    width: 60%;
  }


  /*PARTE DE NOMBRE SONG_NAME----------------------/*/
  .song_name{
    grid-area: song_name;
    color: #1DB954;
    // background: gray;
    display:flex;
    justify-content: space-evenly;
    flex-direction: row;
    align-items: center;
    
    
  }

  .song_name .titule_song{
    
    color: black;
    display:flex;
    flex-direction: column;
    align-items: center;
    flex-direction: center;
 

  }


  /*/PARTE DE TIEMPO DE LA CANCION------------------------------------/*/
  .line_song{
    // background: brown;
    display:flex;
    flex-direction: column;
    color: black
  
  }
  .line_song .time{
    display:flex;
    justify-content: space-between;
    color: gray
  }

  .line_song .time_line input[type="range"] {
    background-color: gray; /* Color de fondo del input */
    height: 5px; /* Altura del input */
    border-radius: 2px; /* Redondeamos los bordes */
    accent-color: #1DB954; /* Color del thumb (verde) */

  }

  .line_song .time_line input[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none; /* Quitamos la apariencia por defecto del thumb */
    width: 20px; /* Ancho del thumb */
    height: 20px; /* Alto del thumb */
    border-radius: 50%; /* Redondeamos el thumb */
    background-color: #00ff00; /* Color del thumb (verde) */
    cursor: pointer; /* Cambiamos el cursor a una mano */
  }
  .line_song input{
    width: 90%

  }
  .line_song .time_line{
    display:flex;
    justify-content: center
  }


 /*  /PARTE DE CAMBIAR LA CANCION CHANGE_SONG----------------------/*/
  .change_song{
    grid-area: change_song;
    // background: orange;
    display:flex;
    justify-content: space-evenly;

  }
  .change_song img{


    background-size: contain;
    width: 1.5vw; /* ajusta el ancho y alto según sea necesario */
    height: 100%;
    border: none;
    cursor: pointer; /* cambia el cursor a una mano para indicar que es clickable */

  }
  .change_song .play{

    background-size: contain;
    width: 6vw; /* ajusta el ancho y alto según sea necesario */
    height: 100%;
    border: none;
    cursor: pointer; /* cambia el cursor a una mano para indicar que es clickable */

  }


  /*PARTE DE VOLUMEN DEL DISPOSITIVO-----------------------------/ */
  .song_volumen{
    grid-area: song_volumen;
    // background: blue;
    display:flex;
    justify-content: center;
  
  }
  .song_volumen .volumen_line input[type="range"] {
    background-color: gray; /* Color de fondo del input */
    height: 5px; /* Altura del input */
    width:50%;
    border-radius: 2px; /* Redondeamos los bordes */
    accent-color: #1DB954; /* Color del thumb (verde) */

  }

  .song_volumen .volumen_line input[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none; /* Quitamos la apariencia por defecto del thumb */
    width: 20px; /* Ancho del thumb */
    height: 20px; /* Alto del thumb */
    border-radius: 50%; /* Redondeamos el thumb */
    background-color: #00ff00; /* Color del thumb (verde) */
    cursor: pointer; /* Cambiamos el cursor a una mano */
  }
  .volumen_line{
    display:flex;
    justify-content: center;
    align-items: center;
    width:100%

  }
  .volumen_line input{
    width: 80%

  }
  .song_volumen .aleatory{
    background-size: contain;
    width: 1.5vw; /* ajusta el ancho y alto según sea necesario */
    height: 100%;
    border: none;
    cursor: pointer; /* cambia el cursor a una mano para indicar que es clickable */

  }


  /*DISPOSITIVE--------------------------------------------------*/
  .dispositive{
    grid-area: dispositive;
    display: flex;
    align-items: center;
    align-content: center;
    justify-content: center;
    

  }
  .info_dispositive {
    display: flex;
    align-items: center;
    background: #1db95434;
    border-radius: 20px;
    width: 10vw;
    color: gray;
    align-content: stretch;
    justify-content: space-around;
    
  }

  @media screen and (max-width: 768px){
/*  /PARTE DE CAMBIAR LA CANCION CHANGE_SONG----------------------/*/
 .change_song{
  grid-area: change_song;
  // background: orange;
  display:flex;
  justify-content: space-evenly;

}

.change_song .play{

  width: 20vw;
  height: 100%;
  border: none;
  cursor: pointer;
}

}
.change_song img{
  width: 6%; /* ajusta el ancho y alto según sea necesario */
  height: 100%;
  border: none;
  cursor: pointer; /* cambia el cursor a una mano para indicar que es clickable */

}


      /*DISPOSITIVE--------------------------------------------------*/
  .dispositive{
    grid-area: dispositive;
    display: flex;
    align-items: center;
    align-content: center;
    justify-content: center;
    

  }
  .info_dispositive {
    display: flex;
    align-items: center;
    background: #1db95434;
    border-radius: 20px;
    width: 50%;
    color: gray;
    align-content: stretch;
    justify-content: space-around;
    
  }
  }

  `

//HTML DEL COSOSOSOSOSOSOSOOCODOCOSOCSOCSOCSOSOSOS
  render(){
    return html`
  <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>


      <div class="container">
        <div class="titule">
          <h3>${this.titule}<h3>
        </div>

        <div class="container__image">
          <img src=${this.imagen}>
        </div>

        <div  class="song_name">
        
          <div class="plus">
            <i class='bx bx-plus'></i>
          </div>

          <div class="titule_song">
            <h2>${this.song}</h2>
            <p>${this.album}</p>
          </div>

          <div class="like">
            <i class='bx bx-heart' ></i>
          </div>
        </div>

        <div class="line_song">
          <div class="time">
            <p>${this.plustime}</p>
            <p>${this.negativetime}</p>
          </div>
          <div class="time_line">
            <input type="range" name="slider" id="slide2">
          </div>
        </div>
        <div class="change_song">
          <img src="public/Group 45.svg" class="aleatory">
          <img src="public/Group.svg"  class="left">
          <img src="public/play button.svg" class="play">
          <img src="public/Group right.svg" class="right">
          <img src="public/Group 44.svg" class="rewind">
        </div>

        <div class="song_volumen">

          <div class="volumen_line">
            <img src="public/low_sound.svg" class="aleatory">
            <input type="range" name="slider" id="slide2">
            <img src="public/up_sound.svg" class="aleatory">
          </div>

        </div>
        <div class="dispositive">
          <div class="info_dispositive">
            <img src="public/Vector.svg" class="aleatory">
            <p>${this.dispositive}</p>
          </div>
        </div>
      </div>
        

    `
  }
  _mostrar(){
    this.name = e.target.value
  }
}
customElements.define("my-player", MyPlayer)