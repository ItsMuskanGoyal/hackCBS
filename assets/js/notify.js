// import { readFileSync, writeFileSync } from 'fs';
const form = document.getElementById("notify_form");
const email_input = document.getElementById("email");
// console.log(form);
var user_email = ""
var csvRows = [];
var array;
// const data = readFileSync('emails.json');
form.addEventListener("submit",function formdata(){
    user_email = email_input.textContent;
    
})


// console.log(array);

const csvmaker = function (data) {
    console.log(data);
    // Empty array for storing the values
    
    // Headers is basically a keys of an object
    // which is id, name, and profession
    const headers = data;
    
    // As for making csv format, headers must
    // be separated by comma and pushing it
    // into array
    csvRows.push(headers);
    
    // Pushing Object values into array
    // with comma separation
    // const values = data.join(',');
    // csvRows.push(values)
    
    // Returning the array joining with new line 
    return csvRows.join('\n')
}

array = csvmaker(user_email);
console.log(array);