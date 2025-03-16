function plus(){
    const id=document.querySelectorAll(".plus")
    id.forEach(element=>{
        element.innerHTML=`
                              <svg class="" width="8.160156" height="8.160156" viewBox="0 0 8.16016 8.16016" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                <desc>
                                    Created with Pixso.
                                </desc>
                                  <defs/>
                                  <path id="+" d="M4.92 4.84L8.16 4.84L8.16 3.31L4.92 3.31L4.92 0L3.23 0L3.23 3.31L0 3.31L0 4.84L3.23 4.84L3.23 8.16L4.92 8.16L4.92 4.84Z" fill="#18181B" fill-opacity="1.000000" fill-rule="evenodd"/>
                              </svg>

                          `;
       element.setAttribute("data-sign","+");

       element.addEventListener("click",()=>{
                   
                    if(element.getAttribute("data-sign")==='+'){
                        clear();
                        element.innerHTML=`
                                    <svg width="6.578125" height="1.535156" viewBox="0 0 6.57812 1.53516" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                        <desc>
                                                Created with Pixso.
                                        </desc>
                                        <defs/>
                                        <path id="−" d="M6.57 0L6.57 1.53L0 1.53L0 0L6.57 0Z" fill="#18181B" fill-opacity="1.000000" fill-rule="evenodd"/>
                                    </svg>

                            `;
                    element.parentElement.nextElementSibling.style.display="block";
                    element.setAttribute("data-sign","-");
                    }
                    else{  clear();}
          });
    });

   function clear(){
      id.forEach(element=>{
        if(element.getAttribute("data-sign")==='-'){
            element.innerHTML=`
                              <svg class="" width="8.160156" height="8.160156" viewBox="0 0 8.16016 8.16016" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                <desc>
                                    Created with Pixso.
                                </desc>
                                  <defs/>
                                  <path id="+" d="M4.92 4.84L8.16 4.84L8.16 3.31L4.92 3.31L4.92 0L3.23 0L3.23 3.31L0 3.31L0 4.84L3.23 4.84L3.23 8.16L4.92 8.16L4.92 4.84Z" fill="#18181B" fill-opacity="1.000000" fill-rule="evenodd"/>
                              </svg>

                          `;
          element.parentElement.nextElementSibling.style.display="none";
          element.setAttribute("data-sign","+");
         }
      });
   }
}