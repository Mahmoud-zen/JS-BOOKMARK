var siteName = document.getElementById("siteName");
var siteUrl = document.getElementById("siteUrl");


var siteList=[];

if(localStorage.getItem('siteList') !=null ){
  siteList= JSON.parse( localStorage.getItem('siteList') )  ;
  display(siteList)
}

function submit() {

  if(validateSiteName()==true && validateSiteUrl()==true) {
    var site={    
      namo:siteName.value ,
      url:siteUrl.value ,
  }
  siteList.push(site);
  localStorage.setItem('siteList', JSON.stringify(siteList));
  display(siteList);
  clearForm();
  siteName.classList.remove("is-valid")
  siteUrl.classList.remove("is-valid")

}
else{

  var modal = document.getElementById('customAlert');
  // var message = 'This is a custom alert!';

  // document.getElementById('alertMessage').innerHTML = message;
  modal.style.display = 'block';
}


}

function closeAlert() {
  var modal = document.getElementById('customAlert');
  modal.style.display = 'none';
}


function display(arry) {

  var cartoona = ""
  for(i=0 ; i<arry.length ; i++){
    cartoona+=`<tr >
    <td class="p-2">${i+1}</td>
    <td class="p-2">${arry[i].namo}</td>
    <td class="p-2"><a href="${arry[i].url}" target="_blank"><button class="btn btn-success"><i class="fa-regular fa-eye"></i> Visit</button></a></td>
    <td class="p-2"><button onclick="deleteSite(${i});" class="btn btn-danger" ><i class="fa-solid fa-trash-can"></i> Delete</button></td>
  </tr>`
}
document.getElementById("tableBody").innerHTML= cartoona
}

function clearForm(){
  siteName.value=""
  siteUrl.value=""
}

function deleteSite(siteIndex) {
siteList.splice(siteIndex,1)
display(siteList)
localStorage.setItem('siteList', JSON.stringify(siteList));
}



function validateSiteName(){
var regex=/^[a-zA-Z]{3,}$/
if (regex.test(siteName.value)==true){
siteName.classList.replace("is-invalid","is-valid");

return true
}
else{
siteName.classList.add("is-invalid")
console.log(regex.test(siteName.value));

return false 
}
}



function validateSiteUrl(){
var regex=/^(https?|ftp):\/\/(www\.)?[a-zA-Z0-9-]+(\.[a-zA-Z]{2,})+(\S*)$/
if (regex.test(siteUrl.value)==true){
siteUrl.classList.replace("is-invalid","is-valid")

return true 
}
else{
  siteUrl.classList.add("is-invalid")
  console.log(regex.test(siteUrl.value));

  return false 
}
}


// ========================custom alert=================

// ^(https?|ftp)?(:\/\/)?[^\s\/$.?#].[^\s]*$











