var msg = "welcome to the page"

function showAnswer(answer, id){
    console.log(answer);
    //alert(answer);
    document.getElementById(id).innerHTML = answer;
}