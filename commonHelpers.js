import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{f as h,i as S}from"./assets/vendor-77e16229.js";let u,c;const g={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){u=e[0],u<=new Date?(S.error({title:"Error",message:"Please choose a date in the future"}),toggleButtonState(!1)):(t.disabled=!1,l())}};h("#datetime-picker",g);document.querySelector("[data-start]").addEventListener("click",l);function l(){if(c){location.reload();return}const e=document.querySelector(".timer"),o=u.getTime();c=setInterval(()=>{const m=new Date().getTime(),r=o-m;if(r<=0){clearInterval(c),e.textContent="00:00:00:00",t.disabled=!1;return}const{days:f,hours:a,minutes:s,seconds:i}=p(r);e.querySelector("[data-days]").textContent=n(f),e.querySelector("[data-hours]").textContent=n(a),e.querySelector("[data-minutes]").textContent=n(s),e.querySelector("[data-seconds]").textContent=n(i)},1e3),t.disabled=!0,t.removeEventListener("click",l)}const d=document.getElementById("datetime-picker"),t=document.querySelector("[data-start]");t.disabled=!0;d&&d.addEventListener("input",function(){d.value.trim()!==""?t.disabled=!1:t.disabled=!0});function p(e){const a=Math.floor(e/864e5),s=Math.floor(e%864e5/36e5),i=Math.floor(e%864e5%36e5/6e4),y=Math.floor(e%864e5%36e5%6e4/1e3);return{days:a,hours:s,minutes:i,seconds:y}}function n(e){return e.toString().padStart(2,"0")}
//# sourceMappingURL=commonHelpers.js.map
