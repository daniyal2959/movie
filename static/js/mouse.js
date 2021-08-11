document.onmousemove = (event)=>{
    let mouseDiv = document.querySelector('div.mouse');
    mouseDiv.style.left = event.pageX - 40 + 'px';
    mouseDiv.style.top = event.pageY - 40 + 'px';
}