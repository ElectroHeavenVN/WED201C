/*Name this external file gallery.js*/

function upDate(previewPic) {
    let imageDiv = document.getElementById("image");
    imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
    imageDiv.innerHTML = "<span><strong>" + previewPic.alt + "</strong></span>";
}

function unDo() {
    let imageDiv = document.getElementById("image");
    imageDiv.style.backgroundImage = "";
    imageDiv.innerHTML = "<span>Hover over an image below to display here.</span>";
}

function addTabindex() {
    let images = document.getElementsByTagName("img");
    for (let i = 0; i < images.length; i++) {
        images[i].setAttribute("tabindex", i + 1);
        //add keyboard event listeners
        images[i].onfocus = (event) => upDate(event.target);
        images[i].onblur = unDo;
    }
}

onload = addTabindex;