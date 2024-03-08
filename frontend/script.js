const submitbtn = document.getElementById("submit");
let input = document.getElementById("input-text"); // Change the id to "input-text"
let select = document.getElementById("selction");
let dataBox = document.getElementById("data");

submitbtn.addEventListener("click", async () => {
    try {
        let res = await fetch(`http://localhost:8080/${select.value}?type=${input.value}`)
        let data = await res.json();
        console.log(data.result);
        dataBox.innerHTML = "";
        dataBox.append(data.result);
    } catch (error) {
        console.log(error);
    }
});


