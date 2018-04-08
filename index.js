var prev = document.getElementById("previewBox"),
    redRange = document.getElementById("redRange"),
    greenRange = document.getElementById("greenRange"),
    blueRange = document.getElementById("blueRange"),
    disp = document.getElementById("display"),
    //redArr =[],
    //greenArr = [],
    //blueArr = [],
    colorsArr=[];

function changeColor(){
    prev.style.backgroundColor="rgb("+redRange.value+","
    +greenRange.value+","+blueRange.value+")";
};

function pushColor(){
    //redArr.push(parseInt(redRange.value));
    //greenArr.push(parseInt(greenRange.value));
    //blueArr.push(parseInt(blueRange.value));
    
    var obj={
        red:parseInt(redRange.value),
        green:parseInt(greenRange.value),
        blue:parseInt(blueRange.value)
    }
    
    colorsArr.push(obj);
};

function popColor(){
    //redArr.pop();
    //greenArr.pop();
    //blueArr.pop();
    colorsArr.pop();
};

function shiftColor(){
    //redArr.shift();
    //greenArr.shift();
    //blueArr.shift();
    colorsArr.shift();
};

function spliceColor(){
    var startIndex = document.getElementById("spliceIndex").value;
    //redArr.splice(startIndex,1);
    //greenArr.splice(startIndex,1);
    //blueArr.splice(startIndex,1);
    colorsArr.splice(startIndex,1);
};

function createSwatch(){
    /*var ndiv = document.createElement("div");
    ndiv.style.backgroundColor = prev.style.backgroundColor;
    ndiv.className = "swatches";
    disp.appendChild(ndiv);*/
    
    disp.innerHTML ="";
    
    /*for(var i =0; i<redArr.length;i++){
        var ndiv = document.createElement("div");
        ndiv.style.backgroundColor = "rgb("+redArr[i]+","+greenArr[i]+","+blueArr[i]+")";
        ndiv.className = "swatches";
        disp.appendChild(ndiv)
    }*/
    
    for(var i =0; i<colorsArr.length;i++){
        var ndiv = document.createElement("div");
        ndiv.style.backgroundColor = "rgb("+colorsArr[i].red+","+colorsArr[i].green+","+colorsArr[i].blue+")";
        ndiv.className = "swatches";
        disp.appendChild(ndiv)
    }
    
    console.log(colorsArr);
    
    calcAvg();
    calcSum();  
};

function calcAvg(){
    var totalRed=0,
        totalGreen=0,
        totalBlue=0;
    
    for (var i=0;i<colorsArr.length;i++){
        totalRed = colorsArr[i].red+totalRed;
        totalGreen = colorsArr[i].green+totalGreen;
        totalBlue = colorsArr[i].blue+totalBlue;
    }
    
    var roundRed = Math.round(totalRed/colorsArr.length),
        roundGreen = Math.round(totalGreen/colorsArr.length),
        roundBlue = Math.round(totalBlue/colorsArr.length);
    
    document.getElementById("avgBox").style.backgroundColor ="rgb("+roundRed+","+roundGreen+","+roundBlue+")";
    
}

function calcAvgBACKUP(){
    var total =0;
    for(var i=0; i<redArr.length;i++){
        total = total+redArr[i];
    }
    
    var avg = total/redArr.length;
    var roundred = Math.round(avg);
    
    total = 0;
    for(var i=0; i<greenArr.length;i++){
        total = total+greenArr[i];
    }
    
    avg = total/greenArr.length;
    var roundgreen = Math.round(avg);
    
    total = 0;
    for(var i=0; i<blueArr.length;i++){
        total = total+blueArr[i];
    }
    
    avg = total/blueArr.length;
    var roundblue = Math.round(avg);
    
    document.getElementById("avgBox").style.backgroundColor ="rgb("+roundred+","+roundgreen+","+roundblue+")";
    console.log(roundred,roundgreen,roundblue);
};

function calcSum(){
    var totalred=0,
        totalgreen=0,
        totalblue=0;
    
    for(var i =0;i<colorsArr.length;i++){
        totalred = totalred+colorsArr[i].red;
        totalgreen = totalgreen+colorsArr[i].green;
        totalblue = totalblue+colorsArr[i].blue;
    }
    if(totalred>255){
        totalred = 255;
    }
    if(totalgreen>255){
        totalgreen = 255;
    }
    if(totalblue>255){
        totalblue = 255;
    }

    document.getElementById("mixBox").style.backgroundColor="rgb("+totalred+","+totalgreen+","+totalblue+")";
   
    
    console.log(totalred,totalgreen,totalblue);
};



redRange.addEventListener("change",function(){
    changeColor();
});

greenRange.addEventListener("change",function(){
    changeColor();
});

blueRange.addEventListener("change",function(){
    changeColor();
});


document.getElementById("addColor").addEventListener("click",function(){
    pushColor();
    createSwatch();
});

document.getElementById("pop").addEventListener("click",function(){
    popColor();
    createSwatch();
});

document.getElementById("shift").addEventListener("click",function(){
    shiftColor();
    createSwatch();
});

document.getElementById("splice").addEventListener("click",function(){
    spliceColor();
    createSwatch();
});