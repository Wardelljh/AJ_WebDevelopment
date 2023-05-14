window.addEventListener('load', function() {
    var header = document.querySelector('#cookie-header');
    header.style.color = '#f7f16d';
  });


  window.addEventListener('load', function() {
    var cookieList = document.querySelectorAll('#cookie-jar .cookie');
    var cookieCount = cookieList.length;
    var countElement = document.querySelector('#cookie-count');
    countElement.textContent = `${cookieCount}! There are ${cookieCount} cookie(s) in the cookie jar!`;
    countElement.style.color = '#f7f16d';
  });
  


  window.addEventListener('load', function() {
    var cookieList = document.querySelectorAll('#cookie-jar .cookie');
    var countElement = document.querySelector('#cookie-count');
  
function removeCookie() {
      if (cookieList.length > 0) {
        cookieList[cookieList.length - 1].remove();
        cookieList = document.querySelectorAll('#cookie-jar .cookie');
        var cookieCount = cookieList.length;
        countElement.textContent = `${cookieCount}! There are ${cookieCount} cookie(s) in the cookie jar!`;
      }
    }
    
    setInterval(removeCookie, 30000);
  });

  
