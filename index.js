document.querySelector(".col-2").addEventListener("click",()=>{
    // document.querySelector(".ee").checked=true;
      document.querySelector(".col-2").classList.toggle("tog");
      document.querySelector(".main").classList.toggle("light-top");
      // document.querySelectorAll(".box").classList.toggle("light-card");
      // document.querySelectorAll(".box-2").classList.toggle("light-card");
      $(".box").toggleClass("light-card");
      $(".box-2").toggleClass("light-card");
      $(".js-text").toggleClass("light-text");
      $(".js-text-1").toggleClass("light-text-1");
      $(".js-text-4").toggleClass("light-text-1");
      $(".dashboard").toggleClass("border-light");
      // document.querySelector(".col-2").classList.toggle("tog");
      document.body.classList.toggle("light");
  });