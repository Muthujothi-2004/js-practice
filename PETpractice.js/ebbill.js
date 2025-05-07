function ebbill(units){
if(units<=100){
    let unit=units*10
    console.log(unit)
}

else if(units<=200){
    let unit=(100*10)+(units-100)*15
    console.log(unit)
}

else {
    let unit=(100*10)+(100*15)+(units-200)*20
    console.log(unit)
}

}
ebbill(320)