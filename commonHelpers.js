import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{f as h,i as S}from"./assets/vendor-77e16229.js";let d,u;const b={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,enableMinutes:!0,enableHours:!0,onClose(e){d=e[0],d<=new Date?(S.error({title:"Error",message:"Please choose a date in the future"}),toggleButtonState(!1)):(t.disabled=!1,l())}};h("#datetime-picker",b);document.querySelector("[data-start]").addEventListener("click",l);function l(){if(u){location.reload();return}const e=document.querySelector(".timer"),o=d.getTime();u=setInterval(()=>{const m=new Date().getTime(),r=o-m;if(r<=0){clearInterval(u),e.textContent="00:00:00:00",t.disabled=!1;return}const{days:f,hours:a,minutes:s,seconds:i}=g(r);e.querySelector("[data-days]").textContent=n(f),e.querySelector("[data-hours]").textContent=n(a),e.querySelector("[data-minutes]").textContent=n(s),e.querySelector("[data-seconds]").textContent=n(i)},1e3),t.disabled=!0,t.removeEventListener("click",l)}const c=document.getElementById("datetime-picker"),t=document.querySelector("[data-start]");t.disabled=!0;c&&c.addEventListener("input",function(){c.value.trim()!==""?t.disabled=!1:t.disabled=!0});function g(e){const a=Math.floor(e/864e5),s=Math.floor(e%864e5/36e5),i=Math.floor(e%864e5%36e5/6e4),y=Math.floor(e%864e5%36e5%6e4/1e3);return{days:a,hours:s,minutes:i,seconds:y}}function n(e){return e.toString().padStart(2,"0")}
//# sourceMappingURL=commonHelpers.js.map
