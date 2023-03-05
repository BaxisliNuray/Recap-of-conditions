
let FINcodearray = []
FINcodearray[0] ="1AXTX0";
FINcodearray[1]= "7NVBAYH";
FINcodearray[2] ="7NAR9NU";
FINcodearray[3] ="3INARO6";

let flag=true;
let FINcode =windows.alert("FIN kodu daxil edin");
const regex=/([0-9]{1}+[^IOa-z]{6})/;
do{
 if(regex.test(FINcode)){
 for(let i=0; i<FINcodearray;i++){

     if(FINcode!=FINcodearray[i]){
        windows.alert("Fin kod yoxdur");
     }
     else if(regex.test(FINcode)){
        for(let i=0; i<FINcodearray;i++){

            if(FINcode==FINcodearray[i]){
                windows.alert("Istifadeci tapilmisdir:+i");
            }
            else {
                windows.alert("wrong format");
     }
     }
 }
 }
}
}
 while(flag);