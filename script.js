// Efeito de Digitação
const text = "Desenvolvedor Full Stack | Freelancer | Criador de Soluções";
let index = 0;

function typeWriter() {
    if (index < text.length) {
        document.querySelector(".typing").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter, 100);
    }
}

// Iniciar a digitação ao carregar
window.onload = typeWriter;

// Mudar cor do Navbar ao rolar
/* window.addEventListener("scroll", () => {
    const nav = document.getElementById("navbar");
    if (window.scrollY > 50) {
        nav.style.background = "#0f172a";
        nav.style.boxShadow = "0 5px 20px rgba(0,0,0,0.5)";
    } else {
        nav.style.background = "transparent";
        nav.style.boxShadow = "none";
    }
});*/   