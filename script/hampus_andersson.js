


function validate() {
    const name = document.getElementById('fname').value;
    const surname = document.getElementById('lname').value;
    const email = document.getElementById('email').value;
    const telephone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;
    
    //Regex rules copied from internet
    const namecheck = /^[a-zA-Zé]+$/;
    const emailcheck = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/; //https://stackoverflow.com/questions/46155/whats-the-best-way-to-validate-an-email-address-in-javascript
    const telephonecheck = /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/; //https://stackoverflow.com/questions/19395503/regular-expression-for-10-digits-or-11-digits
    

    let error = 0;
    if(!namecheck.test(name)){
        error++;
        alert('Please enter a valid name.');
    };
    if(!namecheck.test(surname)){
        error++;
        alert('Please enter a valid surname.');
    };
    if(!emailcheck.test(email)){
        error++;
        alert('Please enter a valid email.');
    };
    if(!telephonecheck.test(telephone)){
        error++;
        alert('Please enter a valid telephone number.');
    };
    if (message == ""){
        error++;
        alert('No message provided.');
    };
    if (error == 0){
        window.location.href="home.html";
        alert('Message Sent!')
    };
}

/*
function wordCount{
    const text = document.getElementById("messagebox").value;
    let counter = 0;
    text.forEach(letter => {
        if (letter === " ") {
            counter += 1
        };
    counter += 1; //To add the last word.
    document.getElementById("counter").innerHTML = counter;
}};
*/