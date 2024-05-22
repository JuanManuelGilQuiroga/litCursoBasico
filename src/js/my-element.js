import { LitElement, css, html } from 'lit'
import { sortSongsForPopularity} from "./modules/data.js"


export class Cardnewmusic extends LitElement {

  static properties = {
    data: { type: Array }
  }

  constructor() {
    super();
    this.data = sortSongsForPopularity()
    //this.dataAlbumes = ["18NOKLkZETa4sWwLMIm0UZ", "444LqH6QlvR62nY8Vxn37u", "5r36AJ6VOJtp00oxSkBZ5h", "4jox3ip1I39DFC2B7R5qLH"]
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
        width: 315px;
        height: 345px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        flex: 1;
        align-items: center;
        overflow-x: scroll
      }
      .container__cards::-webkit-scrollbar {
        display: none
      }
      .container__card__new__music{
        width: 48%;
        height: 60%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        overflow: hidden
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
        align-items: start;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow-x: hidden;
        padding: 0 5px;
      }
      .new__music__info h4{
        color: var(--grey-1);
        text-transform: capitalize;
        font-size: 1.3vw;
        text-overflow: hidden
      }
      .new__music__info p{
        color: var(--grey-2);
        font-size: 1vw;
        text-overflow: hidden
      }
      .new__music__info span{
        color: var(--grey-3);
        text-overflow: hidden
      }

  `

  render(){
    return html`
    <div id="container__cards" class="container__cards">
      ${this.data.map(val => html`
      <div class="container__card__new__music">
        <div class="new__music__img">
          <img src=${val.album.images[1].url} alt="">
        </div>
        <div class="new__music__info">
          <h4>${val.album.name}</h4>
          <p>${val.album.artists[0].name}, <span>${new Date(val.album.release_date).getFullYear()}</span></p>
        </div>
      </div>
      `)}
    </div>
    `
  }
}
customElements.define('card-new-music', Cardnewmusic)