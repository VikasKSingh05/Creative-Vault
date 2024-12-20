var crsr = document.querySelector("#cursor")
var blur = document.querySelector("#cursor-blur")
document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x+"px";
    crsr.style.top = dets.y+"px";
    blur.style.left = dets.x - 250 + "px";
    blur.style.top = dets.y- 250 +"px";

})

// var h4all= document.querySelectorAll("#nav a");
// h4all.forEach(function(elem){
//     elem.addEventListener("mouseenter",function(){
//         crsr.style.scale = 3
//         crsr.style.border = "1px solid #fff"
//         crsr.style.backgroundColor = "transparent"
//     })
//     elem.addEventListener("mouseleave",function(){
//         crsr.style.scale = 1
//         crsr.style.border = "0px solid #95C11E"
//         crsr.style.backgroundColor = "#95C11E"
//     })
// })

// gsap.from("#about img,#aboutin",{
//     y:90,
//     opacity:0,
//     duration:1,
//     scrollTrigger:{
//         trigger:"#about,",
//         scroller:"body",
//         start:"top 60%",
//         end:"top 55%",
//         scrub:3
//     }

// })

gsap.from("#page4 h1",{
    y:50,
    scrollTrigger:{
            trigger:"#page4 h1",
            scroller:"body",
            start:"top 70%",
            end:"top 70%",
            scrub:2
        }
    })


gsap.to("#nav",{
    backgroundColor : "#000",
    height:"40px",
    duration:0.5,
    scrollTrigger:{
        trigger:"#nav",
        scroller: "body",
        start:"top -10%",
        end: "top -11%",
        scrub:1

    }
})

gsap.to("#main",{
    backgroundColor: "#000",
    scrollTrigger: {
        trigger:"#main",
        scroller: "body",
        start: "top -30%",
        end: "top -70%",
        scrub:2

    }
})