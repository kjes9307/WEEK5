
      window.onload =() =>{
        var out = document.querySelectorAll('#nav-control .ck a')

        for(var i = 0; i<out.length; i++){
          out[i].onclick= show
        }

        function show(e){
          for(var i = 0 ; i<out.length ; i++){
            out[i].classList.remove("nav-toggle-active")
          }
          e.target.classList.add("nav-toggle-active");

        }
      }
