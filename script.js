const btnEl = document.querySelector(".btn");

btnEl.addEventListener("mouseover",(e)=>{
    const x = (e.pageY-btnEl.offsetLeft);
    const y = (e.pageY-btnEl.offsetTop);

    btnEl.style.setProperty("--xPos", x+"px");
    btnEl.style.setProperty("--yPos", y+"px");
})