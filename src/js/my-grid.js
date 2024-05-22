import { LitElement, html, css } from "lit";
import { Cardnewmusic } from "./my-element"
import { myTrack } from "./my-track-list"
import { MyLeftBar } from "./my-left-bar";
import trackList1 from "/Group 45.png"
import trackList2 from "/Group 44.png"
import { MyPlayer } from "./my-player";

class myGrid extends LitElement {

    static styles = css`
    *{
        margin: none;
        padding: none;
        box-sizing: border-box;

    }
    ::-webkit-scrollbar {
        display: none
      }
    .main{
        height: 100vh;
        width: 100vw;
        display: grid;
        grid-template-columns: 80px 1fr 1.5fr 1fr;
        grid-template-rows: 1fr;
    }

    .main__aside{
        background: #FAFAFA;
        padding: 10px;
        display: grid;
        grid-template-rows: 130px 1fr 130px
    }
    .aside__profile{
        border-bottom: 1px solid gray
    }
    .aside__buttons{
        
    }
    .aside__exit{
        
    }

    .main__section1{
    }
    .main__section2{
        background: #EF233C;
        overflow-y: hidden
    }
    .main__section2{
        background:  #E8E9ED;
    }
    .main__section3 h1{
        font-size: 2em
    }
    .main__section1 h1{
        font-size: 3em;
        margin-left: 5%
    }

    .top__chart__title{
        display: flex;
        justify-content: space-between;
        padding: 0 5%;
    }
    .card-new-music{
        display:flex;
        justify-content: center

    }
    .padre1{
        height: 30vh;
        overflow-y: scroll;
        bottom: 0
    }
    .padre2{
        height: 80vh;
        overflow-y: scroll;
        bottom: 0
    }
    @media (max-width: 849px){
        .main{
            grid-template-columns: 1fr;
            grid-template-rows: 1fr 80px;
        }
        .aside__profile{
            display: none
        }
        .aside__exit{
            display: none
        }

        .main__section1{
            display: none
        }
        .main__section2{
            display: none
        }
    }
    `

    render(){
        return html`
        <main class="main">
            <aside class="main__aside">
                <my-left-bar></my-left-bar>
            </aside>
            <section class="main__section1">
                <h1>Discover<br>New music</h1>
                <div class="top__chart__title">
                    <h2>Top-chart</h2><h2>Week</h2>
                </div>
                <card-new-music></card-new-music>
                <div class="you__may__like">
                    <h2>You may like</h2>
                    <div class="padre1">
                        <my-track></my-track>
                    </div>
                </div>
            </section>
            <section class="main__section2">
                <my-player></my-player>
            </section>
            <section class="main__section3">
                <h1>Track list</h1>
                <div>
                    <a href="#">
                        <img src=${trackList1}>
                    </a>
                    <a href="#">
                        <img src=${trackList2}>
                    </a>
                </div>
                <div>
                    <h3>Playing next</h3>
                    <div class="padre2">
                        <my-track></my-track>
                    </div>
                </div>
            </section>
        </main>
        `
    }
}

customElements.define('my-left-bar', MyLeftBar);
customElements.define('my-track', myTrack);
customElements.define("my-grid" , myGrid)
