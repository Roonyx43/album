// Função para abrir o modal
function openModal(imageSrc, captionText, fixedText) {
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("modalImg");
    var caption = document.getElementById("captionText");
    var textBox = document.getElementById("fixedText");

    modal.style.display = "block";
    modalImg.src = imageSrc;
    caption.innerHTML = captionText;
    textBox.innerHTML = fixedText;
}

// Função para fechar o modal
function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
}
