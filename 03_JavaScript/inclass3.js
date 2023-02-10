function itHasChanged() {
    alert('it has changed');
}

window.addEventListener("load", (event) => {

    const el = document.getElementById("username");
    el.addEventListener("change", itHasChanged);

});