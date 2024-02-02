function get() {
    const btnser = document.getElementById("btnser");


    btnser.addEventListener("click", () => {
        const serVal = document.querySelector("input").value;
        if (serVal == "") {
            alert("enetr a value frist")
        } else {
            console.log(serVal);
        }

    })
    return serVal;
}
module.exports = get;