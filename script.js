
     let Images = document.querySelectorAll(".container img");
     let popupDiv = document.querySelector(".popup");
     let popupImage = document.querySelector(".popup-img");
     
     
     for(img of Images){
         img.onclick = function(){
             popupDiv.style.display = "flex";
             popupImage.src = this.src;
         }
     }
     function closepopup(){
         popupDiv.style.display = "none";
     }
