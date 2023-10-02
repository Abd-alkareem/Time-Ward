//left sider
let leftSliders = document.querySelectorAll(".main-holder .left .holder .slide");
let LscroleWidth = leftSliders[0].clientWidth;
let leftHolder = document.querySelector(".main-holder .left .holder");

//mid top

let MTopSliders = document.querySelectorAll(".main-holder .mid .top .holder .slide");
let MTscroleWidth = MTopSliders[0].clientWidth;
let MTeftHolder = document.querySelector(".main-holder .mid .top .holder");


//mid bottom
let MBopSliders = document.querySelectorAll(".main-holder .mid .bottom .holder .slide");
let MBscroleWidth = MBopSliders[0].clientWidth;
let MBeftHolder = document.querySelector(".main-holder .mid .bottom .holder");

//right
let RopSliders = document.querySelectorAll(".main-holder .right .holder .slide");
let RscroleWidth = RopSliders[0].clientWidth;
let ReftHolder = document.querySelector(".main-holder .right .holder");

// genarale
let pageNum = 1;
let number = document.querySelector(".main-holder .right .number");
number.textContent = `0${pageNum}`;

// 
let prev = document.querySelectorAll(".right .controle i")[0];
let next = document.querySelectorAll(".right .controle i")[1];
// 


//the array of mini image
let miniImg = ["img/modern.jpg","img/castak.jpeg","img/met2.jpg","img/trainagl.jpg"];
document.querySelector(".more .right .image").style.cssText = `background : url(${miniImg[pageNum - 1]});background-size: cover;`;
// document.querySelector(".more .right .image").classList.add(`op${pageNum }`);

next.addEventListener("click",function(){
    leftHolder.scrollLeft += LscroleWidth ;
    ReftHolder.scrollLeft += RscroleWidth;
    MTeftHolder.scrollLeft += MTscroleWidth
    MBeftHolder.scrollLeft += MBscroleWidth
    if(pageNum < 4)
    pageNum++;
    number.textContent = `0${pageNum}`;
document.querySelector(".more .right .image").style.cssText = `background : url(${miniImg[pageNum - 1]});background-size: cover;`;
    // document.querySelector(".more .right .image").classList.remove(`op${pageNum - 1}`)
    // document.querySelector(".more .right .image").classList.add(`op${pageNum }`)

})
prev.addEventListener("click",function(){
    leftHolder.scrollLeft -= LscroleWidth;
    ReftHolder.scrollLeft -= RscroleWidth;
    MTeftHolder.scrollLeft -= MTscroleWidth
    MBeftHolder.scrollLeft -= MBscroleWidth
    if(pageNum > 1)
    pageNum--;
    number.textContent = `0${pageNum}`;
    // 
    // document.querySelector(".more .right .image").classList.remove(`op${pageNum + 1}`)
    // document.querySelector(".more .right .image").classList.add(`op${pageNum }`)
    document.querySelector(".more .right .image").style.cssText = `background : url(${miniImg[pageNum - 1]});background-size: cover;`;


})


// formating see more
let moreBtn = document.querySelectorAll(".mid .bottom .slide button");

moreBtn.forEach(function(btn){
    btn.addEventListener("click",function(){
        document.querySelector(".main-holder .more").classList.add("open");
        document.querySelector(".main-holder .lay-out").classList.add("open");
    })
});

document.querySelector(".main-holder .more .close").addEventListener("click",function(){
            document.querySelector(".main-holder .more").classList.remove("open");
            document.querySelector(".main-holder .lay-out").classList.remove("open");

})
document.querySelector(".main-holder .more .add").addEventListener("click",function(){
            document.querySelector(".main-holder .more").classList.remove("open");
            document.querySelector(".main-holder .lay-out").classList.remove("open");

})
document.querySelector(".main-holder .more .buy").addEventListener("click",function(){
            document.querySelector(".main-holder .more").classList.remove("open");
            document.querySelector(".main-holder .lay-out").classList.remove("open");

})


// format sing-up btn
    //chose sing
    document.querySelector(".main-holder .right .sing-up").addEventListener("click",function(){
        document.querySelector(".chose-sing").classList.add("open")
    })
    document.querySelector(".main-holder .chose-sing .close").addEventListener("click",function(){
        document.querySelector(".chose-sing").classList.remove("open")
    })
    document.querySelectorAll(".main-holder .chose-sing button")[0].addEventListener("click",function(){
        document.querySelector(".chose-sing").classList.remove("open")
    })
    document.querySelectorAll(".main-holder .chose-sing button")[1].addEventListener("click",function(){
        document.querySelector(".chose-sing").classList.remove("open")
    })

    // sing-up
    document.querySelectorAll(".main-holder .chose-sing button")[0].addEventListener("click",function(){
        document.querySelector(".sing-up-page").classList.add("open");
    })
    document.querySelector(".main-holder .sing-up-page .close").addEventListener("click",function(){
        document.querySelector(".sing-up-page").classList.remove("open");
    })
    //log-in
    document.querySelectorAll(".main-holder .chose-sing button")[1].addEventListener("click",function(){
        document.querySelector(".log-in-page").classList.add("open");
    })
    document.querySelector(".main-holder .log-in-page .close").addEventListener("click",function(){
        document.querySelector(".log-in-page").classList.remove("open");
    })
