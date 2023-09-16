//change background image 
let header=document.querySelector("header");
setInterval(()=>{
    header.style.backgroundImage=`url(image/${Math.floor(Math.random()*6)}.png)`;
},4000)

// To show nav bar on small screen
let barIcon=document.querySelector(".fa-bars");
let navBar=document.querySelector(".nav-heading");
barIcon.onclick=()=>{
    navBar.classList.toggle("show-nav");
    if(navBar.classList.contains("show-nav")){
        barIcon.style.setProperty("animation",`bounce 2S ease-in-out forwards infinite`);
    }
    else{
        barIcon.style.setProperty("animation",`none`);
    }
}

//change active class in search container
let searchFields=document.querySelectorAll(".search-container ul li");
searchFields.forEach((searchField)=>{
    searchField.onclick=()=>{
        searchField.parentElement.querySelectorAll(".active").forEach((el)=>{
            el.classList.remove("active")
        })
        searchField.classList.add("active");
        console.log(searchField);
    }
})

let defintion =document.querySelector(".defintion");
let defintionHead =document.querySelector(".defintion h3");
let defintionP=document.querySelector(".defintion p");
let callCenter =document.querySelector(".defintion .call-center ");
let carBoxes=document.querySelectorAll(".car-box");
window.onscroll=()=>{
    
    //#################################
    // animation on reach Defintion
    if (window.scrollY>=defintion.offsetTop-400) {
        defintionHead.style.setProperty("animation",`fadeInRight 1S ease-in-out forwards`);
        defintionP.style.setProperty("animation",`fadeIn 1S ease-in-out 1s forwards`);
        callCenter.style.setProperty("animation",`bounce 1S ease-in forwards infinite`);
    }


    //#################################
    // animation on reach car box
    carBoxes.forEach((carBox,index)=>{
        if (window.scrollY>=carBox.offsetTop-400) {
            let waitTime=(index+1)*0.2;
            carBox.style.setProperty("Animation",`fadeInUp 1s ease-in-out ${waitTime}S forwards`)
        }   
    })

    //#################################
    // animation on reach ad Boxes

    let adBoxes=document.querySelectorAll(".ad-box")
    adBoxes.forEach((adBox,index)=>{
        if (window.scrollY>=adBox.offsetTop-400) {
            let animateTime=(index+1)*0.9;
            adBox.style.setProperty("Animation",`zoomInOut ${animateTime}S ease-in-out 1s forwards`)
        }
    })
    
    //#################################
    // animation on reach car Recomendation Box
    let rideTitle=document.querySelector(".ride-title");
    let carRecomendationBoxes=document.querySelectorAll(".car-recomendation-box");
    let recoImage=document.querySelector(".ride-destination img");
    carRecomendationBoxes.forEach((carRecomendationBox,index)=>{
        let animateTime=(index+1)*0.5;
        if(window.scrollY>=carRecomendationBox.offsetTop-400){
            carRecomendationBox.style.setProperty("animation",`fadeIn ${animateTime}S ease-in-out  forwards`);
        }
    })
    if(window.scrollY>=recoImage.offsetTop-400){
        recoImage.style.setProperty("animation",`fadeIn 1S ease-in-out 0.5s forwards`);
    }
    if(window.scrollY>=rideTitle.offsetTop-400){
        rideTitle.style.setProperty("animation",`rotateIn 1S ease-in-out forwards`);
    }


    //#################################
    // animation on reach car support Part Box
    let supportPartBoxes= document.querySelectorAll(".support-part-box");
    supportPartBoxes.forEach((supportPartBox,index)=>{
        if(window.scrollY>=supportPartBox.offsetTop-400){
            let animateTime=(index+1)*0.5;
            console.log(` iam in box ${animateTime}`)
            supportPartBox.style.setProperty("animation",`fadeOut ${animateTime}S ease-in-out forwards`);
        }
    })
}
//colored stars 
carBoxes.forEach((carBox,indexP)=>{
    let stars= carBox.querySelectorAll(".stars li i");
    let storedStar=localStorage.getItem(`stars-${indexP}`);
    if(storedStar===null){
        stars.forEach((star,index)=>{
            star.onclick=()=>{
                for(let i=0;i<=index;i++){
                    stars[i].style.setProperty("color",`#BB0000`) 
                    localStorage.setItem(`stars-${indexP}`,i+1)
                } 
            }
        })
    }
    else{
        for(let i=0;i<=storedStar;i++){
            stars[i].style.setProperty("color",`#BB0000`) 
        }
    }
    let deleteBtn=document.querySelector(".delete-rate");
    deleteBtn.onclick=()=>{
        
        for (let i = 0; i < 6; i++) {
            localStorage.removeItem(`stars-${i}`)
            
        }
    }
})

// car gallary Section
    let imageContainer=document.querySelector(".car-gallary-container"),
    gallaryImages=Array.from(document.querySelectorAll(".car-gallary-container img")),
    nextBtn=document.getElementById("next"),
    lastBtn=document.getElementById("last"),
    currentPosition=0,
    currentImage=0;

    let removeActive=()=>{
        gallaryImages.forEach((img)=>{
            img.classList.remove("active-image");
        })
    }
    let acitiveNextBtn=()=>{
        if(currentImage>=7){
            nextBtn.classList.add("disable-btn")
        }else{
            nextBtn.classList.remove("disable-btn")
        }
    }
    let acitiveLastBtn=()=>{
        if(currentImage<=0){
            lastBtn.classList.add("disable-btn")
        }else{
            lastBtn.classList.remove("disable-btn")
        }
    }
    acitiveNextBtn();
    acitiveLastBtn();
    nextBtn.onclick=()=>{
        acitiveNextBtn();
        acitiveLastBtn();
        if(nextBtn.classList.contains("disable-btn")){
            return false;
        }
        else{
            removeActive();
            currentImage++;
            gallaryImages[currentImage].classList.add("active-image")
            currentPosition-=325;
            imageContainer.style.setProperty("left",`${currentPosition}`)
        }
        
        console.log(currentImage)
    }
    lastBtn.onclick=()=>{
        
        acitiveNextBtn();
        acitiveLastBtn();
        if(lastBtn.classList.contains("disable-btn")){
            return false
        }
        else{
            removeActive();
            currentImage--;
            gallaryImages[currentImage].classList.add("active-image")
            currentPosition+=325
            imageContainer.style.setProperty("left",`${currentPosition}`)
        }
        
        console.log(currentImage)
    }



    