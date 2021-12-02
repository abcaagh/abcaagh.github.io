let ws = document.querySelector('.heading');
let cont = document.querySelector('.container');

ws.addEventListener('click', event => {
    cont.innerHTML = `
    <div class="ws_div">
        <input type="number" autofocus autocomplete="on" id="ws_input" placeholder="700 123 45 67" maxlength="11" minlength="10">
        <a href="" 
        target="_blank" class="ws_link">Начните чат в WhatsApp с <span class="span"></span></a>
    </div>
    `
    inp()
  });

  function inp(params) {
      let ws_input = document.querySelector('#ws_input');
      let ws_div = document.querySelector('.ws_div')
      let span = document.querySelector('.span');
      let ws_link = document.querySelector('.ws_link')
      
      ws_input.addEventListener('input', (e) => {
        let b = e.target.value
        span.innerText = b
        ws_link.href = `https://api.whatsapp.com/send/?phone=${b}&text=abcaagh.github.io&app_absent=0
        `
      })
  }


   