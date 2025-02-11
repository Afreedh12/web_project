let phone=document.getElementById("phone"),
email = document.getElementById("email"),
phone_btn=document.getElementById("contact-phone"),
email_btn=document.getElementById("contact-email");

phone_btn.addEventListener("click",()=>{
    if(phone_btn.checked){
        phone.style.display='inline-block';
        email.style.display='none'
    }
})

email_btn.addEventListener("click",()=>{
    if(email_btn.checked){
        phone.style.display='none';
        email.style.display='inline-block';
    }
})


