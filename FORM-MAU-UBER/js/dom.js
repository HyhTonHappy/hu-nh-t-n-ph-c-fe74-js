
document.getElementById("btnTotal").onclick = function (){
    var check1 =  document.getElementById("uberX").checked;
    var check2 = document.getElementById("uberSUV").checked;
    var check3 = document.getElementById("uberBlack").checked;
    var kilometers = document.getElementById("txtkm").value * 1;
    var timeWait = document.getElementById("txtTime").value *1 ;
    var loaiXe = "";
    var tienCho;
    var tienXe;
    if(check1 || check2 || check3){

    }else{
        alert("vui long chon loai xe");
        return;
    }
    if(kilometers == "" ||timeWait=="" ){
        alert("vui long nhap vao o trong");
        return;
    }
if(check1){
    loaiXe = "Uber X";
    tienCho = timeWait * 2000;
    if(kilometers <=1 ){
tienXe = 8000;
    }
    if(kilometers > 1 && kilometers < 20){
        tienXe = 12000 * (kilometers -1) + 8000;
    }
    if(kilometers>=20){
        tienXe = 8000 + ( kilometers-20)*10000+ 19*12000;
    }
    
}
 if(check2){
    loaiXe = "Uber SUV";
    tienCho = timeWait * 3000;
    if(kilometers <=1 ){
        tienXe = 9000;
            }
            if(kilometers > 1 && kilometers < 20){
                tienXe = 14000 * (kilometers -1) + 9000;
            }
            if(kilometers>=20){
                tienXe = 8000 + ( kilometers-20)*12000+ 19*14000;
            } 
           
}
if(check3){
    loaiXe = "Uber Black";
    tienCho = timeWait * 4000;
    if(kilometers <=1 ){
        tienXe = 10000;
            }
            if(kilometers > 1 && kilometers < 20){
                tienXe = 16000 * (kilometers -1) + 8000;
            }
            if(kilometers>=20){
                tienXe = 8000 + ( kilometers-20)*14000+ 19*16000;
            }
}
var total = tienXe + tienCho;
var result = "Tong so tien la: " + total;
document.getElementById("pNoti").innerHTML = result;
document.getElementById("pNoti").className = "noti";
document.getElementById("pNoti").style.backgroundColor = "#e0c04d";
}

document.getElementById("txtModal").onclick = function(){
    var check1 =  document.getElementById("uberX").checked;
    var check2 = document.getElementById("uberSUV").checked;
    var check3 = document.getElementById("uberBlack").checked;
    var kilometers = document.getElementById("txtkm").value * 1;
    var timeWait = document.getElementById("txtTime").value *1 ;
    var tienCho;
    var tienXe;
    if(check1 || check2 || check3){

    }else{
        alert("vui long chon loai xe");
        return;
    }
    if(kilometers == "" ||timeWait=="" ){
        alert("vui long nhap vao o trong");
        return;
    }
    if(check1){
        loaiXe = "Uber X";
        tienCho = timeWait * 2000;
        if(kilometers <=1 ){
    tienXe = 8000;
        }
        if(kilometers > 1 && kilometers < 20){
            tienXe = 12000 * (kilometers -1) + 8000;
        }
        if(kilometers>=20){
            tienXe = 8000 + ( kilometers-20)*10000+ 19*12000;
        }
        
    }
     if(check2){
        loaiXe = "Uber SUV";
        tienCho = timeWait * 3000;
        if(kilometers <=1 ){
            tienXe = 9000;
                }
                if(kilometers > 1 && kilometers < 20){
                    tienXe = 14000 * (kilometers -1) + 9000;
                }
                if(kilometers>=20){
                    tienXe = 8000 + ( kilometers-20)*12000+ 19*14000;
                } 
               
    }
    if(check3){
        loaiXe = "Uber Black";
        tienCho = timeWait * 4000;
        if(kilometers <=1 ){
            tienXe = 10000;
                }
                if(kilometers > 1 && kilometers < 20){
                    tienXe = 16000 * (kilometers -1) + 8000;
                }
                if(kilometers>=20){
                    tienXe = 8000 + ( kilometers-20)*14000+ 19*16000;
                }
    }
    if(check1){
        if(kilometers <= 1){
            var hoaDon1 = "UBER X " +"\t"+kilometers+ " km" + "\t"+" 8000" + "\t" +"8000";  
            document.getElementById("mdtext1").innerHTML = hoaDon1;
            var hoaDon2 = "UBER X " +"\t"+ "0 km" + "\t"+" 12000" + "\t" +"0";  
            document.getElementById("mdtext2").innerHTML = hoaDon2;
            var hoaDon3 = "UBER X " +"\t"+ "0 km" + "\t"+" 10000" + "\t" +"0";  
            document.getElementById("mdtext3").innerHTML = hoaDon3;
            var hoaDon4 = "Thoi gian cho " +"\t"+timeWait + " phut" + "\t"+ "2000" + "\t" +tienCho  ;  
            document.getElementById("mdtext4").innerHTML = hoaDon4;
            var Total = "Total \t \t \t \t \t " + tienXe;
            document.getElementById("mdtotal").innerHTML = Total;
        }
        if(kilometers > 1 && kilometers < 20){
            var hoaDon1 = "UBER X " +"\t"+ "1 km" + "\t"+" 8000" + "\t" +"8000";  
            document.getElementById("mdtext1").innerHTML = hoaDon1;
            var hoaDon2 = "UBER X " +"\t"+(kilometers - 1)+ " km" + "\t"+" 12000" + "\t" + (kilometers -1) * 12000;  
            document.getElementById("mdtext2").innerHTML = hoaDon2;
            var hoaDon3 = "UBER X " +"\t"+ "0 km" + "\t"+" 10000" + "\t" +"0";  
            document.getElementById("mdtext3").innerHTML = hoaDon3;
            var hoaDon4 = "Thoi gian cho " +"\t"+timeWait + " phut" + "\t"+ "2000" + "\t" +tienCho  ;  
            document.getElementById("mdtext4").innerHTML = hoaDon4;
            var Total = "Total \t \t \t \t \t " + tienXe;
            document.getElementById("mdtotal").innerHTML = Total;
        }if(kilometers>=20){
            var hoaDon1 = "UBER X " +"\t"+ "1 km" + "\t"+" 8000" + "\t" +"8000";  
            document.getElementById("mdtext1").innerHTML = hoaDon1;
            var hoaDon2 = "UBER X " +"\t"+ "19 km" + "\t"+" 12000" + "\t" +(19 * 12000);  
            document.getElementById("mdtext2").innerHTML = hoaDon2;
            var hoaDon3 = "UBER X " +"\t"+(kilometers - 20) +" km" + "\t"+" 10000" + "\t" + (kilometers -20)*10000;  
            document.getElementById("mdtext3").innerHTML = hoaDon3;
            var hoaDon4 = "Thoi gian cho " +"\t"+timeWait + " phut" + "\t"+ "2000" + "\t" +tienCho  ;  
            document.getElementById("mdtext4").innerHTML = hoaDon4;
            var Total = "Total \t \t \t \t \t " + tienXe;
            document.getElementById("mdtotal").innerHTML = Total;
        }
    }
    if(check2){
        if(kilometers <= 1){
            var hoaDon1 = "UBER SUV " +"\t"+kilometers+ " km" + "\t"+" 9000" + "\t" +"9000";  
            document.getElementById("mdtext1").innerHTML = hoaDon1;
            var hoaDon2 = "UBER SUV " +"\t"+ "0 km" + "\t"+" 14000" + "\t" +"0";  
            document.getElementById("mdtext2").innerHTML = hoaDon2;
            var hoaDon3 = "UBER SUV " +"\t"+ "0 km" + "\t"+" 12000" + "\t" +"0";  
            document.getElementById("mdtext3").innerHTML = hoaDon3;
            var hoaDon4 = "Thoi gian cho " +"\t"+timeWait + " phut" + "\t"+ "3000" + "\t" +tienCho  ;  
            document.getElementById("mdtext4").innerHTML = hoaDon4;
            var Total = "Total \t \t \t \t \t " + tienXe;
            document.getElementById("mdtotal").innerHTML = Total;
        }
        if(kilometers > 1 && kilometers < 20){
            var hoaDon1 = "UBER SUV " +"\t"+ "1 km" + "\t"+" 9000" + "\t" +"9000";  
            document.getElementById("mdtext1").innerHTML = hoaDon1;
            var hoaDon2 = "UBER SUV " +"\t"+(kilometers - 1)+ " km" + "\t"+" 14000" + "\t" + (kilometers -1)*14000;  
            document.getElementById("mdtext2").innerHTML = hoaDon2;
            var hoaDon3 = "UBER SUV " +"\t"+ "0 km" + "\t"+" 12000" + "\t" +"0";  
            document.getElementById("mdtext3").innerHTML = hoaDon3;
            var hoaDon4 = "Thoi gian cho " +"\t"+timeWait + " phut" + "\t"+ "3000" + "\t" +tienCho  ;  
            document.getElementById("mdtext4").innerHTML = hoaDon4;
            var Total = "Total \t \t \t \t \t " + tienXe;
            document.getElementById("mdtotal").innerHTML = Total;
        }if(kilometers>=20){
            var hoaDon1 = "UBER SUV " +"\t"+ "1 km" + "\t"+" 9000" + "\t" +"9000";  
            document.getElementById("mdtext1").innerHTML = hoaDon1;
            var hoaDon2 = "UBER SUV " +"\t"+ "19 km" + "\t"+" 14000" + "\t" +(19 * 14000);  
            document.getElementById("mdtext2").innerHTML = hoaDon2;
            var hoaDon3 = "UBER SUV " +"\t"+(kilometers - 20) +" km" + "\t"+" 12000" + "\t" + (kilometers -20)*12000;  
            document.getElementById("mdtext3").innerHTML = hoaDon3;
            var hoaDon4 = "Thoi gian cho " +"\t"+timeWait + " phut" + "\t"+ "3000" + "\t" +tienCho  ;  
            document.getElementById("mdtext4").innerHTML = hoaDon4;
            var Total = "Total \t \t \t \t \t " + tienXe;
            document.getElementById("mdtotal").innerHTML = Total;
        }
    }
    if(check3){
        if(kilometers <= 1){
            var hoaDon1 = "UBER BLACK " +"\t"+kilometers+ " km" + "\t"+" 10000" + "\t" +"10000";  
            document.getElementById("mdtext1").innerHTML = hoaDon1;
            var hoaDon2 = "UBER BACK " +"\t"+ "0 km" + "\t"+" 16000" + "\t" +"0";  
            document.getElementById("mdtext2").innerHTML = hoaDon2;
            var hoaDon3 = "UBER BLACK " +"\t"+ "0 km" + "\t"+" 14000" + "\t" +"0";  
            document.getElementById("mdtext3").innerHTML = hoaDon3;
            var hoaDon4 = "Thoi gian cho " +"\t"+timeWait + " phut" + "\t"+ "4000" + "\t" +tienCho  ;  
            document.getElementById("mdtext4").innerHTML = hoaDon4;
            var Total = "Total \t \t \t \t \t " + tienXe;
            document.getElementById("mdtotal").innerHTML = Total;
        }
        if(kilometers > 1 && kilometers < 20){
            var hoaDon1 = "UBER BLACK " +"\t"+ "1 km" + "\t"+" 10000" + "\t" +"10000";  
            document.getElementById("mdtext1").innerHTML = hoaDon1;
            var hoaDon2 = "UBER BLACK " +"\t"+(kilometers - 1)+ " km" + "\t"+" 16000" + "\t" + (kilometers -1)*16000;  
            document.getElementById("mdtext2").innerHTML = hoaDon2;
            var hoaDon3 = "UBER BLACK " +"\t"+ "0 km" + "\t"+" 14000" + "\t" +"0";  
            document.getElementById("mdtext3").innerHTML = hoaDon3;
            var hoaDon4 = "Thoi gian cho " +"\t"+timeWait + " phut" + "\t"+ "4000" + "\t" +tienCho  ;  
            document.getElementById("mdtext4").innerHTML = hoaDon4;
            var Total = "Total \t \t \t \t \t " + tienXe;
            document.getElementById("mdtotal").innerHTML = Total;
        }if(kilometers>=20){
            var hoaDon1 = "UBER BLACK " +"\t"+ "1 km" + "\t"+" 10000" + "\t" +"10000";  
            document.getElementById("mdtext1").innerHTML = hoaDon1;
            var hoaDon2 = "UBER BLACK " +"\t"+ "19 km" + "\t"+" 16000" + "\t" +(19 * 16000);  
            document.getElementById("mdtext2").innerHTML = hoaDon2;
            var hoaDon3 = "UBER BLACK " +"\t"+(kilometers - 20) +" km" + "\t"+" 14000" + "\t" + (kilometers -20)*14000;  
            document.getElementById("mdtext3").innerHTML = hoaDon3;
            var hoaDon4 = "Thoi gian cho " +"\t"+timeWait + " phut" + "\t"+ "4000" + "\t" +tienCho  ;  
            document.getElementById("mdtext4").innerHTML = hoaDon4;
            var Total = "Total \t \t \t \t \t " + tienXe;
            document.getElementById("mdtotal").innerHTML = Total;
        }
    }
}
