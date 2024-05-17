import { LitElement, css, html } from 'lit'

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
export class Cardnewmusic extends LitElement {

  constructor() {
    super()
    this.dataAlbumes = ["18NOKLkZETa4sWwLMIm0UZ", "444LqH6QlvR62nY8Vxn37u", "5r36AJ6VOJtp00oxSkBZ5h", "4jox3ip1I39DFC2B7R5qLH"]
  }

  static styles = css`
      :root{
        --grey-1: #333333;
        --grey-2: #4F4F4F;
        --grey-3: #828282
      }
      *{
        /*border: .2px solid black;*/
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      .container__cards{
        border: 1px solid black;
        width: 20vw;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
      }
      .container__card__new__music{
      
        width: 45%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
      .new__music__img{
        width: 95%;
        display: flex;
        border-radius: 5%;
        overflow: hidden;
      }
      .new__music__img img{
        object-fit: contain;
        width: 100%;
        border: none;
      }
      .new__music__info{
        display: flex;
        flex-direction: column;
        padding: 3% 5%;
      }
      .new__music__info h4{
        color: var(--grey-1);
        font-size: 1.3vw;
      }
      .new__music__info p{
        color: var(--grey-2);
        font-size: 1vw;
      }
      .new__music__info span{
        color: var(--grey-3);
      }

  `
  async getInfoCard(val){
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '81878cbf8bmsh6237fac9a4dbdcbp1b2a43jsnad3e05700a4d',
        'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
      }
    }
    //let container__cards = document.querySelector("#container__cards")
    //container__cards.innerHTML = "";
    
    let res = await fetch(`https://spotify23.p.rapidapi.com/albums/?ids=${val}`, options)
    let album = await res.json()
    let {albums:[{name: albumName}]} = album
    let {albums:[{artists:[{name: artistName}]}]} = album
    let {albums:[{images:[{url}]}]} = album
    let {albums:[{release_date}]} = album
    let fecha = new Date(release_date);
    let year = fecha.getFullYear()
    let content = html`
      <div class="container__card__new__music">
        <div class="new__music__img">
          <img src=${url} alt="">
        </div>
        <div class="new__music__info">
          <h4>${albumName}</h4>
          <p>${artistName}, <span>${year}</span></p>
        </div>
      </div>
    `;
    console.log(content)
    return content
  }

  render(){
    return html`
    <div id="container__cards" class="container__cards">
      ${Promise.all(this.dataAlbumes.map(async (val) => await getInfoCard(val)))}
    </div>
    `
  }
}