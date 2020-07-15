var validObj = {
    FullName: false,
    Age: false,
    Phone: false,
    Email: false,
}
function checkField(filedName, filedEmpty, filedIncorrect) {

    let inputType = filedName;
    let emptyClassList = document.getElementById(filedEmpty);
    let incorrectClassList = document.getElementById(filedIncorrect);
    filedElement = document.getElementById(filedName);
    filedName = filedElement.value;
    if (filedName.length > 0) {
        checkCorection(filedName, emptyClassList, incorrectClassList, inputType);
    }
    else {
        emptyClassList.style.display = "block";
        incorrectClassList.style.display = "none";
        filedElement.classList.add('is-invalid');
        validObj[inputType] = false;
    }
    checkAllFilds();
}

function checkCorection(filedName, emptyClassList, incorrectClassList, inputType) {
    let reg = new RegExp('^([^0-9]*)$');
    var test = reg.test(filedName);
    if (filedName.length < 8 || filedName.length > 30 || !test) {
        incorrectClassList.style.display = "block";
        emptyClassList.style.display = "none";
        filedElement.classList.add('is-invalid');
        validObj[inputType] = false;
    } else {
        emptyClassList.style.display = "none";
        incorrectClassList.style.display = "none";
        filedElement.classList.remove('is-invalid');
        validObj[inputType] = true;
    }
}

function validateEmail() {
    let emptyClassList = document.getElementById('emailEmpty');
    let incorrectClassList = document.getElementById('emailIncorrect');
    filedElement = document.getElementById('Email');
    mail = filedElement.value;
    let emailReg = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
    var test = emailReg.test(mail);
    if (mail.length > 0) {
        if (test) {
            emptyClassList.style.display = "none";
            incorrectClassList.style.display = "none";
            filedElement.classList.remove('is-invalid');
            validObj['Email'] = true;
        } else {
            incorrectClassList.style.display = "block";
            emptyClassList.style.display = "none";
            filedElement.classList.add('is-invalid');
            validObj['Email'] = false;
        }
    }
    else {
        emptyClassList.style.display = "block";
        incorrectClassList.style.display = "none";
        filedElement.classList.add('is-invalid');
        validObj['Email'] = false;
    }
    checkAllFilds();
}
function validateAge() {
    let emptyClassList = document.getElementById('ageEmpty');
    let incorrectClassList = document.getElementById('ageIncorrect');
    filedElement = document.getElementById('Age');
    Age = filedElement.value;
    if (Age < 1) {
        console.log(2);
        emptyClassList.style.display = "block";
        incorrectClassList.style.display = "none";
        filedElement.classList.add('is-invalid');
        validObj['Age'] = false;
    }
    else if (Age > 35 || Age < 16) {
        incorrectClassList.style.display = "block";
        emptyClassList.style.display = "none";
        filedElement.classList.add('is-invalid');
        validObj['Age'] = false;
    } else {
        incorrectClassList.style.display = "none";
        emptyClassList.style.display = "none";
        filedElement.classList.add('is-invalid');
        validObj['Age'] = true;
    }
    checkAllFilds();
}

function validatePhone() {
    let emptyClassList = document.getElementById('phoneEmpty');
    let incorrectClassList = document.getElementById('phoneIncorrect');
    filedElement = document.getElementById('Phone');
    phone = filedElement.value;
    let phoneReg = new RegExp(/^[0-9]{9}$/);
    var test = phoneReg.test(phone);
    if (phone.length > 0) {
        if (test) {
            incorrectClassList.style.display = "none";
            emptyClassList.style.display = "none";
            filedElement.classList.add('is-invalid');
            validObj['Phone'] = true;
        }
        else {
            incorrectClassList.style.display = "block";
            emptyClassList.style.display = "none";
            filedElement.classList.add('is-invalid');
            validObj['Phone'] = false;
        }
    }
    else {
        emptyClassList.style.display = "block";
        incorrectClassList.style.display = "none";
        filedElement.classList.add('is-invalid');
        validObj['Phone'] = false;
    }
    checkAllFilds();
}

function checkAllFilds() {
    let arr = [];
    for (obj in validObj) {
        arr.push(validObj[obj])
    }
    if (arr.indexOf(false) == -1) {
        document.getElementById("submitBtn").disabled = false;
    } else {
        document.getElementById("submitBtn").disabled = true;
    }
}


