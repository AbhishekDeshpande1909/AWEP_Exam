function comment()
{
    let username = document.querySelector("#uname").value;
    let email = document.querySelector("#mail").value;
    let password = document.querySelector("#pass").value;

    let cloneDiv = document.querySelector("#childDiv").cloneNode(true);
    document.querySelector("#uname").style.visible;

    cloneDiv.innerHTML=username;


    let ParDiv= document.querySelector("#parentDiv").value;

    ParDiv.insertBefore(ParDiv,CloneDiv.children[0]);

}