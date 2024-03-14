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
let forms = document.getElementById("form-display").innerHTML;
if (form_ex != null) {
  forms += form_ex;
}

  // ES10+
const form = document.getElementById('from-action');

function genatareFroms() {

}

try {
 
  if(form == null) {
    console.log('form is null');
  }else {

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
  }
} catch (error) {
  console.error(error);
  // Expected output: ReferenceError: nonExistentFunction is not defined
  // (Note: the exact output may be browser-dependent)
}

const xhr = new XMLHttpRequest();
xhr.open("POST", "https://jsonplaceholder.typicode.com/posts");
xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
const body = JSON.stringify({
  title: "Hello World",
  body: "My POST request",
  userId: 900,
});
xhr.onload = () => {
  // if (xhr.readyState == 4 && xhr.status == 201) {
  //   console.log(JSON.parse(xhr.responseText));
  // } else {
  //   console.log(`Error: ${xhr.status}`);
  // }

  //
  window.addEventListener("", (event) => {
    console.log("ok--")
});

  fetch('https://jsonplaceholder.typicode.com/posts', {
	//method: 'GET'
  }).then(function (response) {
    // The API call was successful!
    //console.log(response.json());
    if (response.ok) {
      //console.log(JSON.parse(xhr.responseText));
      return response.json();
    } else {
      return Promise.reject(response);
    }
  }).then(function (data) {
    // This is the JSON from our response
    const outputElement = document.getElementById('posts');
    const posts = JSON.stringify((data));
    
    //console.log(posts);
    const obj = JSON.parse(posts);
    console.log(obj);
    obj.forEach(function(data) {  
      outputElement.innerHTML += `<p> ID:  ${data.id}</p>`;
      outputElement.innerHTML += `<p> Title: ${data.title}</p>`;
      outputElement.innerHTML += `<p> Body: ${data.body}</p>`;
    }); 
    
  }).catch(function (err) {
    // There was an error
    console.warn('Something went wrong.', err);
  });
};

xhr.send(body);


// fetch('https://jsonplaceholder.typicode.com/posts').then(function (response) {
// 	// The API call was successful!
// 	//console.log(response);
// }).catch(function (error) {
// 	// There was an error
// 	console.warn(error);
// });
