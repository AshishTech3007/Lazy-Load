function carouselDesign(carouselclscall) {
    let carouselIdatr=carouselclscall.id;    
    let carouselId=document.querySelector(`#${carouselIdatr}`);
    let activeitems=carouselId.querySelectorAll('.item');
    let totalItems=activeitems.length;
    let ar=[...activeitems];
    // debugger;
    let currentIndex=ar.indexOf(carouselId.querySelector('.item.active'))+1;
    let caroselactiveno=carouselId.querySelector('.carousel_active_no').innerText=`${currentIndex}/${totalItems}`;
    for(let i=0;i<totalItems;i++){
        let li=document.createElement('li');
        li.setAttribute("data-target",`${carouselId}`);
        li.setAttribute("data-slide-to",i);
        i= 0 ? li.setAttribute('class','active'):li.setAttribute('class','');
        // li.classList.add(i === 0 ? "active" : "");
        let indicatorsContainer = carouselId.querySelector('.carousel-indicators');
        if (indicatorsContainer) {
            indicatorsContainer.appendChild(li);
        }
    }  
    // $(`#${carouselIdatr}.carousel`).on("slid.bs.carousel", function (event) {
    //     currentIndex = $(`#${carouselIdatr} .item.active`).index() + 1;
    //     $(`#${carouselIdatr} .carousel_active_no`).html(" " + currentIndex + " / " + totalItems);
    // })   
}


const carouselcall=document.querySelectorAll('.carousel');
if(carouselcall){
    carouselcall.forEach((carouselcls)=>{
        carouselDesign(carouselcls);         
        carouselcls.querySelector('.carousels-arrows').addEventListener('click',function(){
            setTimeout(()=>{
                carouselDesign(carouselcls);   
            },1000);
        });
    });
    
} 