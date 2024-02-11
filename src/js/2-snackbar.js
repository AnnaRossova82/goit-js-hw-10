import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

document.querySelector('.form').addEventListener('submit', (e) => {
    e.preventDefault();
  
    const delay = parseInt(document.querySelector('input[name="delay"]').value);
    const state = document.querySelector('input[name="state"]:checked').value;
  
    const promise = new Promise((resolve, reject) => {
      if (state === 'fulfilled') {
        setTimeout(() => {
          resolve(delay);
        }, delay);
      } else if (state === 'rejected') {
        setTimeout(() => {
          reject(delay);
        }, delay);
      }
    });
  
    promise
      .then((delay) => {
        console.log(`✅ Fulfilled promise in ${delay}ms`);
        iziToast.success({
          title: 'Fulfilled Promise',
          message: `✅ Fulfilled promise in ${delay}ms`
        });
      })
      .catch((delay) => {
        console.log(`❌ Rejected promise in ${delay}ms`);
        iziToast.error({
          title: 'Rejected Promise',
          message: `❌ Rejected promise in ${delay}ms`
        });
      });
  });