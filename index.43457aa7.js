let e=new IntersectionObserver((function(e){e.forEach((e=>{e.isIntersecting?e.target.classList.add("element-show"):e.target.classList.remove("element-show")}))}),{threshold:[.5]}),t=document.querySelectorAll(".element-animation");for(let s of t)e.observe(s);
//# sourceMappingURL=index.43457aa7.js.map
