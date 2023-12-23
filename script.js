/**
 * script
 */

//genatare from
function genatareFrom(){
    const from_name = ["id","fname","lname","adress","phone"];
    const from_type = ["number","text","text","textarea","text"];
    const from_placeHolder = ["id","'Frist Name'","'Last Name'","Address","Phone"];
    let count = from_name.length;
    var from = '<h2>Fill Up From</h2>';
    from += '<form method="post" id="from-action">';
    for(i=0;i<=count-1;i++){
        if(from_name[i] == 'id'){
            from +='<input class="digi-input" type="hidden" name='+from_name[i]+' id="" value="1">';
        }else{
            from +='<input class="digi-input" type='+from_type[i]+' name='+from_name[i]+' placeholder='+from_placeHolder[i]+' id="">';
        }
    }
    from +='<input class="digi-input-submit" type="submit" value="Submit" name="submit">';
    from +='</form>';

    return from;
}
var form_ex = genatareFrom();
document.getElementById("form-display").innerHTML += form_ex;

  // ES10+
const form = document.getElementById('from-action');

form.addEventListener('submit', function (event) {
  document.getElementById("alert").innerHTML +='';
  event.preventDefault();

  // 1: get form data
  const formData = new FormData(form);
  console.log(formData);
  // 2: store form data in object
  const jsonObject = Object.fromEntries(formData);
  // 3: convert form data object to a JSON string
  const jsonString = JSON.stringify(jsonObject);

  //console.log(jsonString); // '{"name":"John","email":"john@example.com","age":"30"}'
  const obj = JSON.parse(jsonString);
  //const collection = document.getElementsByClassName("alert");
  //console.log(obj.id);
  document.getElementById("alert").innerHTML = '';
  
  Object.keys(obj).forEach(function(k){
    //console.log(k + ' - ' + obj[k]);
   
    if(obj[k] == ''){
      //console.log(k + ' - ' + obj[k]);
      document.getElementsByClassName('alert')[0].style.display = "block";
      document.getElementById("alert").innerHTML += k + ' - ' + obj[k] + "This is blank";
      
    }
  });

});