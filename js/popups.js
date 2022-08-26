let popupsToggle = document.querySelectorAll('.open-popup');
let popupClose = document.querySelectorAll('.close');

popupsToggle.forEach(function(item){
    item.addEventListener('click',function(){
        let popupName = item.getAttribute('data-popup');
        document.getElementById(popupName).style.display = "flex";
        document.getElementById(popupName).style.justifyContent = "center";
        document.getElementById(popupName).style.alignItems = "center";

    })
})

popupClose.forEach(function(item){
    item.addEventListener('click',function(){
        let popup = item.closest('.popup');
        popup.style.display="none";
    })
})

window.onclick = function(e) {
    if(e.target.classList.contains('popup')) {
        e.target.style.display = "none";
    }
}

