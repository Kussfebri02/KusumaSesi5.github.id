    document.getElementById("formReg").style.display = "none";
    document.getElementById("box").style.display = "none";

    function reg(params) {
      if(params == "reg") {
        document.getElementById("formReg").style.display = "block";
        document.getElementById("formLog").style.display = "none";
      }
      if (params == "log") {
        document.getElementById("formReg").style.display = "none";
        document.getElementById("formLog").style.display = "block";
      }
    }

    // USERNAME, PASSWORD, SELECT REGISTER
    var uReg = document.getElementById("uReg");
    var passReg = document.getElementById("passReg");
    var as = document.getElementById("as");

    function daf() {
      if(uReg.value == '' && passReg.value == '') {
        alert('Input username and password')
      } else {
        localStorage.setItem("uReg", uReg.value);
        localStorage.setItem("password", passReg.value);
        localStorage.setItem("as", as.value);
        alert("Sign Up Success");
        document.getElementById("formReg").style.display = "none";
        document.getElementById("formLog").style.display = "block";
      }
    }

    function onLog() {
      // INPUT NAMA DAN PW LOGIN
      var uLog = document.getElementById("uLog").value;
      var passLog = document.getElementById("passLog").value;

      if(uLog == localStorage.getItem("uReg") && passLog == localStorage.getItem("password")) {
        document.querySelector("#usName").innerHTML = localStorage.getItem("uReg");
        document.querySelector("#sbg").innerHTML = localStorage.getItem("as");
        document.querySelector("#box").style.display = "flex";
        document.getElementById("formLog").style.display = "none";
      } else {
        alert("Account not found");
      }
    }

    function onOut() {
      localStorage.clear();
      location.reload();
    }
