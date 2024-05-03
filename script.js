
document.getElementById("open").addEventListener("click", function() {

    document.querySelector(".info_container").style.display = "block";

    document.getElementById("open").disabled = true;

    document.getElementById("closed").disabled = false;
});


document.getElementById("closed").addEventListener("click", function () {

    document.querySelector(".info_container").style.display = "none";

    document.getElementById("closed").disabled = true;

    document.getElementById("open").disabled = false;
});
