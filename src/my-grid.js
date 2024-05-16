import { LitElement, html, css } from "lit";
import { myTrack } from "./my-track-list"

class myGrid extends LitElement {

    static styles = css`
    
    .main{
        height: 100vh;
        width: 100vw;
        display: grid;
        grid-template-columns: 80px 1fr 1.5fr 1fr;
        grid-template-rows: 1fr;
    }

    .main__aside{
        background: #2B2D42;
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
        background: #EC9A29;
    }
    .main__section2{
        background: #EF233C;
    }
    .main__section2{
        background: #35A7FF;
    }
    .main__section3{
        background: #E8E9ED;
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
                <article class="aside__profile"></article>
                <article class="aside__buttons">
                </article>
                <article class="aside__exit"></article>
            </aside>
            <section class="main__section1"></section>
            <section class="main__section2"></section>
            <section class="main__section3">
                <my-track></my-track>
            </section>
        </main>
        `
    }
}
customElements.define('my-track', myTrack);
customElements.define("my-grid" , myGrid)
