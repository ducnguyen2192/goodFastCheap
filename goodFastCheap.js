
function uncheck(check){
    let a = document.getElementById("good");
    let b = document.getElementById("cheap");
    let c = document.getElementById("fast");
    if (a.checked === true && b.checked === true){
        if(check === 3){
            b.checked = false;
        }
    }
    if (a.checked === true && c.checked === true){
        if(check === 2)        {
            a.checked = false;
        }
    }
    if (b.checked === true && c.checked === true){
        if(check === 1){
            c.checked = false;
        }
    }
}