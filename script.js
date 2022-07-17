let addBtn = document.querySelector('.add-btn');
let modalCont = document.querySelector('.modal-cont');
let mainCont = document.querySelector('.main-cont');
let addFlag = false;
 addBtn.addEventListener("click", function() {

    // Display Modal
    // Generate ticket
    
    // AddFlag, true ->Modal Display
    // AddFlag. False -> Modal none
    addFlag = !addFlag;
    if(addFlag){
      modalCont.Style.display = "flex";
    }
    else{
      modalCont.style.display = "none";
    }
   })

   modalCont.addEventListener("keydown",(e)=>{
      let key = e.key;
      if(key==="shift"){
         createticket();
      }
   })

   function createticket(){
      let ticketCont = document.querySelector('div');
      ticketCont.setAttribute('class', 'ticket-cont');
      ticketCont.innerHTML= `
      <div class="ticket-color"></div>
            <div class="ticket-id"></div>
            <div class="task-area">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, dolorum facere? Accusamus dolores tempore a corrupti expedita sequi!
            </div>`;
   
   mainCont.appendChild(createticket());
   }
