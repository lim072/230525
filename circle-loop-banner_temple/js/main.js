const banner_ul = document.querySelector(".banner ul");
const banners = banner_ul.children;
const btns = document.querySelector(".btns");
const [prev, next] = btns.children;
const pop = document.querySelector(".pop")
const close = pop.querySelector(".close")
const opens = banner_ul.querySelectorAll("a")

console.log(banner_ul)
console.log(banners)

// banner_ul.prepend(banner_ul.lastElementChild);
// banner_ul.prepend(banner_ul.lastElementChild);
// banner_ul.prepend(banner_ul.lastElementChild);

//초기화 작업
for(let i=0; i < 3; i ++){
    banner_ul.prepend(banner_ul.lastElementChild);
}

// prev.addEventListener('click', ()=>{
//     banner_ul.prepend(banner_ul.lastElementChild);
// })
// next.addEventListener('click', ()=>{
//     banner_ul.prepend(banner_ul.firstElementChild);
// })

prev.addEventListener('click', movePrev)
next.addEventListener('click', moveNext)



//a버튼으 누르게 되면 pop을 활성화 시켜준다 

opens.forEach((el)=>{
    el.addEventListener("click",(e)=>{
        e.preventDefault();
        let txt = e.currentTarget.closest('li').querySelector('h2').innerText;
        pop.querySelector("h2").innerText = txt;
        pop.classList.add('on');
        e.currentTarget.classList.add('off');
        btns.classList.add('off')
    })
})
close.addEventListener("click",()=>{
    pop.classList.remove("on")
    banner_ul.querySelector("li.on a").classList.remove('off')
    btns.classList.remove("off")
})

function active(){
    for(let el of banners) el.classList.remove("on");
    banners[3].classList.add('on');
}






function movePrev(){
    banner_ul.prepend(banner_ul.lastElementChild);
    active();
}

function moveNext(){
    banner_ul.append(banner_ul.firstElementChild);
    active();
}
