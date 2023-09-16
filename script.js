



document.addEventListener("DOMContentLoaded", function () {
  let carousel = document.querySelector('.carousel');
  let slides = document.querySelectorAll('.slide');
  let slideWidth = slides[0].offsetWidth;
  let currentIndex = 0;

  function rotateCarousel() {
    let newPosition = currentIndex * -slideWidth;
    carousel.style.transform = 'translateX(' + newPosition + 'px)';
  }

  function nextSlide() {
    currentIndex++;
    if (currentIndex === slides.length) {
      currentIndex = 0;
    }
    rotateCarousel();
  }

  setInterval(nextSlide, 3000);
});



// Adicione o seguinte código após o carregamento do DOM

document.addEventListener("DOMContentLoaded", function() {
  var slides = document.querySelectorAll(".carousel-manual .slide-servicos");
  var currentSlide = 0;

  function showSlide(index) {
    if (index < 0 || index >= slides.length) return;

    slides[currentSlide].classList.remove("active");
    slides[index].classList.add("active");
    currentSlide = index;
  }

  // Botão de próximo slide
  document.getElementById("nextSlide").addEventListener("click", function() {
    showSlide(currentSlide + 1);
  });

  // Botão de slide anterior
  document.getElementById("prevSlide").addEventListener("click", function() {
    showSlide(currentSlide - 1);
  });
});




function enviarMensagem() {

  let nome = document.getElementById('nome').value;
  let telefone = document.getElementById('telefone').value;
  let servico = document.getElementById('servico').value;
  let profissional = document.getElementById('profissional').value;
  let horario = document.getElementById('horario').value;
  let dia = document.getElementById('dia').value;

  let parts = dia.split("-");
  let diaFormatado = parts[2] + '/' + parts[1] + '/' + parts[0];

  let mensagem = "Olá, meu nome é " + nome + ". Gostaria de marcar um horário com " + profissional + " para " + servico + ". Horário: " + horario + ", Dia: " + diaFormatado;

  let numeroTelefone = telefone.replace(/\D/g, '');

  if (!nome || !telefone || !servico || !profissional || !horario || !dia) {
    alert("Por favor, preencha todos os campos do formulário.");
    return;
  }

  if (!numeroTelefone || numeroTelefone.length < 10) {
    alert("Por favor, insira um número de telefone válido.");
    return;
  }

  let url = "https://api.whatsapp.com/send?phone=558498637362&text=" + encodeURIComponent(mensagem);
  window.open(url, "_blank");
}


//Seleciona os itens clicado
var menuItem = document.querySelectorAll('.item-menu')

function selectLink(){
    menuItem.forEach((item)=>
        item.classList.remove('ativo')
    )
    this.classList.add('ativo')
}

menuItem.forEach((item)=>
    item.addEventListener('click', selectLink)
)

//Expandir o menu

var btnExp = document.querySelector('#btn-exp')
var menuSide = document.querySelector('.menu-lateral')

btnExp.addEventListener('click', function(){
    menuSide.classList.toggle('expandir')
})









