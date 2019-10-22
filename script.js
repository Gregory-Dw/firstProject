let bouton = document.getElementById("bouton");
let bouton2 = document.getElementById("bouton2");
let accepter = document.getElementById("accepter");

bouton.onclick = function()
{
    $( "#dialog" ).dialog( "close" );
    accepter.innerText = "Vous avez accepter";

}
bouton2.onclick = function()
{
  $( "#dialog" ).dialog( "close" );
  accepter.innerText = "Vous avez refuser";
}