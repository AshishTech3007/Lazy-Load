let options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.25
};

const divitem = document.querySelector('.checkelement'); // Define divitem outside of the callbacks
const sectionall = document.querySelectorAll('.min-height');
const imageContainer = document.querySelectorAll('.imagecont');
let callback = (entries, observer) => {
    entries.forEach(element => {
        if (element.target.classList.contains('checkelement')) {
            divitem.innerText = (element.isIntersecting) ? 'completely visible' : 'not completely visible';
        }
    });
}
let callback3 = (entries, observer) => {
    entries.forEach(element => {
        // element.target.classList.toggle("show",element.isIntersecting);  
        // console.log(element.target);   p
        if (element.isIntersecting && element.target.className === 'image') {
            let parentdiv = element.target.closest(".imagecont");
            function loaded() {
                parentdiv.classList.add("loaded");
            }

            if (element.target.complete) {
                setTimeout(() => {
                    // to allow fully load images 
                    loaded();
                }, 1000)
            }
            else {
                // once the image gets download it calls this loaded function 
                element.target.addEventListener('load', loaded);
                element.target.addEventListener('error', loaded);
            }
            // parentdiv.classList.add('loaded');
            let imageUrl = element.target.getAttribute('data-img');
            if (imageUrl) {
                element.target.src = imageUrl;
                observer3.unobserve(element.target);
            }
        }
    });
}

let callback2 = (entries, observer) => {
    entries.forEach(element => {
        const isSection = element.target.classList.contains('min-height');
        // using ternary operator
        // element.isIntersecting && isSection
        // ? (alert('hi'), element.target.classList.add('activesection'))
        // : (alert('out'), element.target.classList.remove('activesection'));
        // element.target.classList.toggle('activesection', (element.isIntersecting) && isSection);
        if ((element.isIntersecting) && isSection) {
            //    alert('hi');
            element.target.classList.add('activesection');
        } else {
            // alert('out');
            element.target.classList.remove('activesection');
        }
    });
}

let observer = new IntersectionObserver(callback, options);
observer.observe(divitem);


let observer2 = new IntersectionObserver(callback2, options);
sectionall.forEach((sectionentry) => {
    observer2.observe(sectionentry);
});


let observer3 = new IntersectionObserver(callback3, options);
imageContainer.forEach((divimgcont) => {
    const img = divimgcont.querySelector('img');
    observer3.observe(img);
});

// let observer3 = new IntersectionObserver(callback3, options);
// const blurload=document.querySelectorAll('.imagecont');
// blurload.forEach(div=>{
//     const img=div.querySelector('img');
//     function loaded(){
//         // debugger;
//         console.log(img.src)
//         div.classList.add("loaded");
//         observer3.observe(img);
//     }
//     if(img.complete){
//         loaded();
//     }
//     else{
//         // once the image gets download it calls this loaded function
//         img.addEventListener('load',loaded);
//     }
// });

let skeletontext_div = `
<div class="loadingskeletoncontent">
    <div class="skeletonheader">
        <div class="skeletontext"></div>
        <div class="skeletontext"></div>
    </div>
    <div class="skeletonbody">
        <div class="skeletontext"></div>
        <div class="skeletontext"></div>
        <div class="skeletontext"></div>
    </div>
</div>`;

 imageContainer.forEach((localdiv) => {
    // Check if any child of localdiv has the class 'loadingskeletoncontent'
    const hasLoadingSkeletonContent = Array.from(localdiv.children).some(
      (child) => child.classList.contains("loadingskeletoncontent")
    );
  
    if (!hasLoadingSkeletonContent) {
      // Insert the HTML string as the first child of the target element
      localdiv.insertAdjacentHTML("afterbegin", skeletontext_div);
    }
  });





