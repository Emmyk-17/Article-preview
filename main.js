const shareBtn = document.querySelector(".Share");
const SocialBox = document.querySelector(".social");

shareBtn.addEventListener ("click" , () => {
    SocialBox.classList.toggle("hidden");
})