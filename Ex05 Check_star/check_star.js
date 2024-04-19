function checkStar(str){
    let star = ['Polaris','Aldebaran','Deneb','Vega','Altair','Dubhe','Regulus']
    let constellation = ['Ursa Minor','Tarurus','Cygnus','Lyra','Aquila','Ursa Major','Leo'];
    let index = star.indexOf(str);
    // console.log(index);
    for (let i = 0; i < star.length ; i++) {
        if (index !== -1){
            str = constellation[index];
        } else {
            str='Not found';
        }
    }
    return str;
}

let str = prompt('Please enter star name');
document.write(checkStar(str));