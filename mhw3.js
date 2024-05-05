function scroll2Top(event)
{
    window.scrollTo({top: 0});      /*Funzione per scrollare fino all'inizio della pagina*/
}
const clickTop = document.querySelector('.back-top');
clickTop.addEventListener('click', scroll2Top);     /*attende un click sul bottone 'back-to-top*/

/*JS per cambiare l'src di un'immagine quando si ci passa sopra col cursore */
function changeImageOn(event)
{
    const img = document.querySelector('#arduOG');
    img.src = 'Immagini/what-arduino-imgOn.svg';
    img.removeEventListener('mouseenter', changeImageOn);
}
// per tornare all'immagine di prima
function changeImageOff(event)
{
    const img = document.querySelector('#arduOG');
    img.src = 'Immagini/arduinoUno.png';
    img.removeEventListener('mouseleave', changeImageOff);
}
const image = document.querySelector('.what-arduino');
image.addEventListener('mouseenter', changeImageOn);
image.addEventListener('mouseleave', changeImageOff);


/*JS per far comparire una descrizione sotto l'immagine del Cloud di Arduino*/
function freeOnclick(event){
    const container = event.currentTarget;
    const span_container = document.querySelector('#hidden-ds');
    const new_span = document.createElement('span');
    new_span.classList.add('clickedText');
    new_span.textContent = 'Scopri Arduino Cloud, con il codice SPRING24 avrai una prova gratuita di 30 giorni. Condividi quando e con chi vuoi i tuoi progetti!';
    span_container.appendChild(new_span);
    container.addEventListener('click', delOnClick);
    container.removeEventListener('click', freeOnclick);
}

//con un altro click viene eliminato il testo mostrato prima
function delOnClick(event){
    const container = event.currentTarget;
    const span_container = document.querySelector('#hidden-ds');
    span_container.innerHTML = '';
    container.addEventListener('click', freeOnclick);
    container.removeEventListener('click', delOnClick);
}

const freeTrial = document.querySelector('#free-div');
freeTrial.addEventListener('click', freeOnclick);

//far comparire una modale per la policy dei cookie
function cookieOnclick(event){
    cookie_modal.classList.remove('hidden');
    document.body.classList.add('no-scroll');
    cookieModalView.style.top = window.scrollY + 'px';        //scrollY --> equivalente di pageYOffset (deprecato)
}

//tornare indietro dalla modale
function backCookieOnClick(event){
    cookie_modal.classList.add('hidden');
    document.body.classList.remove('no-scroll');
}

const cookie = document.querySelector('#cookie-settings');
const back_cookie = document.querySelector('#cookie-arrow');
const cookie_modal = document.querySelector('#modal-hidden');
const cookieModalView = document.querySelector('#cookie-modal-container');
const cookie_continue = document.querySelector('#snc-button');
//const option = document.querySelector('.option-all');
cookie_continue.addEventListener('click', backCookieOnClick);
back_cookie.addEventListener('click', backCookieOnClick);
cookie.addEventListener('click', cookieOnclick);


//parte della REST API Tech-savvy
const tech_btn = document.querySelector('#api-button');
tech_btn.addEventListener('click', onTechy);
//tech_btn.addEventListener('click', delTech);

function onTechy(event){
    const url = 'https://techy-api.vercel.app/api/json';
    fetch(url)
        .then(onSuccess, onError)
        .then(onJson);
    
    
    function onSuccess(response){
        return response.json();
    }
    
    function onError(error){
        console.log('Error: ' + error);
    }
    
    function onJson(json){
        console.log('JSON ricevuto');
        console.log(json);
       
        const tech_section = document.querySelector('#append-p');
        const new_p = document.createElement('p'); 
        tech_section.innerHTML = '';
        new_p.classList.add('clickedAPI');
        new_p.textContent = JSON.stringify(json.message);
        tech_section.appendChild(new_p);

    
    }
}


/*parte della REST API MistralAI

function chatOnclick(event){
    chat_modal.classList.remove('hidden');
    document.body.classList.add('no-scroll');
    chatModalView.style.top = window.scrollY + 'px';        //scrollY --> equivalente di pageYOffset (deprecato)
}

//tornare indietro dalla modale
function backChatOnClick(event){
    chat_modal.classList.add('hidden');
    document.body.classList.remove('no-scroll');
}

const back_help = document.querySelector('#chat-arrow');
const help_btn = document.querySelector('.help-button');
const chat_modal = document.querySelector('#chatbot-modal-hidden');
const chatModalView = document.querySelector('#chatbot-modal-container');

back_help.addEventListener('click', backChatOnClick);
help_btn.addEventListener('click', chatOnclick);
                                API da implementare in seguito(?) --> chatbot*/       
                                
                                

/*News-API (GNews)
const apikey = '59671394cd5de8236ac4eec936630b73';        //la mia key per l'autenticazione
const endpoint = 'top-headlines';
const news_form = document.querySelector('#news-form').addEventListener('submit', onSubmit);

function onSubmit(event){
    event.preventDefault();
    const input_value = document.querySelector('#news-input').value;
    console.log(input_value);

    const search_url = 'https://gnews.io/api/v4/search?q=example&lang=en&country=us&max=10&apikey=' + apikey;

    fetch(url, {mode : 'no-cors'})
    .then(onError, onSuccess)
    .then(fetch(search_url)
            .then(onError, onSuccess)
            .then(onJson));

    function onError(error){
        console.log('Error : ' + error);
    }

    function onSuccess(response){
        return response.json;
    }

    function onJson(json){
        const articles = json.articles;

        for (i = 0; i < articles.length; i++) {
        // articles[i].title
        console.log("Title: " + articles[i]['title']);
        // articles[i].description
        console.log("Description: " + articles[i]['description']);
        // You can replace {property} below with any of the article properties returned by the API.
        // articles[i].{property}
        // console.log(articles[i]['{property}']);

        // Delete this line to display all the articles returned by the request. Currently only the first article is displayed.
        break;
        }
    }    
}
*/

