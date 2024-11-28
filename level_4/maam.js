// Given two dates as strings "JAN-12-2024", "FEB-12-1900" return the date that comes chronologically first i.e. FEB-12-1900

function str(a){
   for(i=0;i<a.length;i++){
      let neW = a[i].split("-")
      let year= parseInt(neW[2],10)
      if(a[i]>neW[2]){
             console.log(a[i])
      }
    }
   
}str(["JAN-12-2024", "FEB-12-1900"])
