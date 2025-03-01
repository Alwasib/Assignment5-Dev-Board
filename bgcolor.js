
let bgcolor=function(){
    return Math.floor(Math.random() * 256);
};
let color=function(){
    let randomColor=`rgb(${bgcolor()},${bgcolor()},${bgcolor()})`;
    document.body.style.backgroundColor=randomColor;
}
document.getElementById("logo").addEventListener('click',color);