var  blockCost = 5000,
     pageCost = 12000;

var tabLefts = document.getElementById("tab-lefts"),
      tabRight = document.getElementById("rights-lefts"),
      blocksBlock = document.getElementById("blocks-block"),
      pagesBlock = document.getElementById("pages-block"),
      hour = document.getElementById("couter-hours"),
      cos = document.getElementById("couter-rate"),
    checkbox_2 = document.getElementById("changes-cms"),
    checkbox_1 = document.getElementById("changes-check"),
    inputBlock = document.getElementById("couter-block"),
    inputPage = document.getElementById("couter-pages"),


      totalValue = document.getElementById("total-value"),
      input = document.getElementsByClassName("counter"),
      chetbox = document.getElementsByClassName("checkbox");




window.addEventListener('DOMContentLoaded', function () {
    inputBlock.oninput = function(){
        totalValue.innerHTML = inputBlock.value * 500 ;
    };
    inputPage.oninput = function(){
        totalValue.innerHTML = inputPage.value * 2000 ;
    };


    checkbox_1.onclick = function(){
        if(checkbox_1.checked == true){
            totalValue.innerHTML = Number(totalValue.innerHTML) + 1000;
        }else{
            totalValue.innerHTML = Number(totalValue.innerHTML) - 1000;
        }
    };
    checkbox_2.onclick = function(){
        if(checkbox_2.checked == true){
            totalValue.innerHTML = Number(totalValue.innerHTML) + 1000;
        }else{
            totalValue.innerHTML = Number(totalValue.innerHTML) - 1000;
        }
    };


    tabLefts.onclick  = function () {
        tabLefts.classList.add("active");
        tabRight.classList.remove("active");
        blocksBlock.style.display = "flex";
        pagesBlock.style.display = "none";
        for(var i = 0; i < input.length; i++){
            input[i].value = '';
        };
        for(var i = 0; i < chetbox.length; i++){
            if(chetbox[i].checked){
                chetbox[i].checked = false;
            };
        };
        totalValue.innerHTML = 5000;
    };
    tabRight.onclick  = function () {
        tabLefts.classList.remove('active');
        tabRight.classList.add('active');
        blocksBlock.style.display = "none";
        pagesBlock.style.display = "flex";
        for(var i = 0; i < input.length; i++){
            input[i].value = '';
        };
        for(var i = 0; i < chetbox.length; i++){
            if(chetbox[i].checked){
                chetbox[i].checked = false;
            };
        };
        totalValue.innerHTML = 12000;
    }

})