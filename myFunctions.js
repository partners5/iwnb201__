function hide0() {
    var div = document.getElementById("id0");
    if (div.style.display === "none") {
        div.style.display = "block";
    } else {
        div.style.display = "none"
    }
}
function hide1() {
    var div = document.getElementById("id1");
    if (div.style.display === "none") {
        div.style.display = "block";
    } else {
        div.style.display = "none"
    }
}
function hide2() {
    var div = document.getElementById("id2");
    if (div.style.display === "none") {
        div.style.display = "block";
    } else {
        div.style.display = "none"
    }
}
function hide3() {
    var div = document.getElementById("id3");
    if (div.style.display === "none") {
        div.style.display = "block";
    } else {
        div.style.display = "none"
    }
}function hide4() {
    var div = document.getElementById("id4");
    if (div.style.display === "none") {
        div.style.display = "block";
    } else {
        div.style.display = "none"
    }
}function hide5() {
    var div = document.getElementById("id5");
    if (div.style.display === "none") {
        div.style.display = "block";
    } else {
        div.style.display = "none"
    }
}
function hide6() {
    var div = document.getElementById("id6");
    if (div.style.display === "none") {
        div.style.display = "block";
    } else {
        div.style.display = "none"
    }
}function hide7() {
    var div = document.getElementById("id7");
    if (div.style.display === "none") {
        div.style.display = "block";
    } else {
        div.style.display = "none"
    }
}function hide8() {
    var div = document.getElementById("id8");
    if (div.style.display === "none") {
        div.style.display = "block";
    } else {
        div.style.display = "none"
    }
}
function hide9() {
    var div = document.getElementById("id9");
    if (div.style.display === "none") {
        div.style.display = "block";
    } else {
        div.style.display = "none"
    }
}




function buy() {
    const FullName = document.getElementById('name_form').value;
    const nationalNumber = document.getElementById('nationalNumber').value;
    const mobile_number = document.getElementById('mobile_number').value;
    const email = document.getElementById('email').value;
    const isFullNameValid = validateFullName(FullName);
    const isnationalNumberValid = validatenationalNumber(nationalNumber);
    const ismobile_numberValid = validatemobile_number(mobile_number);
    const isEmailValid = validateEmail(email); 
    {
        const error_Message = 'يرجى التحقق من النموذج للأخطاء.';
        alert(error_Message);
    }
}

function validateFullName(FullName) {
    const Arabic = /^[\u0600-\u06FF\s]+$/;

    if (Arabic.test(FullName.trim())) {
        return true;
    } else {
        alert('يرجى إدخال اسم كامل صالح يحتوي على أحرف عربية فقط.');
        return false;
    }
}

function validatenationalNumber(nationalNumber) {
    if (nationalNumber.length === 11 && nationalNumber.substring(0, 2) >= '01' && nationalNumber.substring(0, 2) <= '14') {
        return true;
    } else {
        alert('يرجى إدخال رقم وطني صالح.');
        return false;
    }
}

function validatemobile_number(mobile_number) {
    const syriatelR = /^(095|098|099|093)\d{7}$/;
    const mtnR = /^(096|094)\d{7}$/;

    if (syriatelR.test(mobile_number) || mtnR.test(mobile_number)) {
        return true;
    } else {
        alert('يرجى إدخال رقم هاتف صالح لسيرياتل أو إم تي إن.');
        return false;
    }
}

function validateEmail(email) {
    const emailR = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailR.test(email)) {
        return true;
    } else {
        alert('يرجى إدخال عنوان بريد إلكتروني صالح.');
        return false;
    }
}
//*********** */

let captcha;
let alphabets = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz";
let St = document.getElementById('St');


generate = () => {
    let first = alphabets[Math.floor(Math.random() * alphabets.length)];
    let second = Math.floor(Math.random() * 10);
    let third = Math.floor(Math.random() * 10);
    let fourth = alphabets[Math.floor(Math.random() * alphabets.length)];
    let fifth = alphabets[Math.floor(Math.random() * alphabets.length)];
    let sixth = Math.floor(Math.random() * 10);
    captcha = first.toString() + second.toString() + third.toString() + fourth.toString() + fifth.toString() + sixth.toString();
    document.getElementById('generated-captcha').value = captcha;
    document.getElementById("text_cap").value = '';

}

check = () => {
    let userValue = document.getElementById("text_cap").value;
    if (userValue == captcha) {
        St.innerText = "Correct!!"
    } else {
        St.innerText = "error"
        document.getElementById("text_cap").value = '';
    }
}

function validateCaptcha(userEnteredCaptcha, captchaChallenge) {
    if (userEnteredCaptcha === captchaChallenge) {
        return true;
    } else {
        alert('فشل التحقق من الكابتشا. يرجى المحاولة مرة أخرى.');
        return false;
    }
}
// 



function showBuyForm() {

    var Div_Form = document.getElementById("form");
    if (Div_Form.style.display === "none") {

        Div_Form.style.display = "block";

    } else {
        Div_Form.style.display = "none";
    }
}
function cancel() {

    var Div_Form = document.getElementById("form");
    if (Div_Form.style.display === "none") {

        Div_Form.style.display = "block";

    } else {
        Div_Form.style.display = "none";
    }
}

