!function(){"use strict";const o=function(o){const n=[1,3,4];return[1,2,3,4,5,6,7,8].filter(((o,c)=>n.includes(c)))}();console.log(o),function(){const o=document.querySelector(".mobile-nav-btn"),n=document.querySelector(".mobile-nav"),c=document.querySelector(".nav-icon");o.onclick=function(){n.classList.toggle("mobile-nav--open"),c.classList.toggle("nav-icon--active"),document.body.classList.toggle("no-scroll")}}()}();