function check(Value) {
    let input = Value.trim();

    if (input === "") {
        document.getElementById("count").innerText = "Password Length: 0";
        document.getElementById("count6").style.color = "#fff";
        document.getElementById("fa-check6").style.color = "#abcbf5";
        return;
    }

    document.getElementById("count").innerText = "Password Length: " + input.length;

    if (input.length >= 5) {
        document.getElementById("count1").style.color = "#50f20af4";
        document.getElementById("fa-check1").style.color = "#50f20af4";
    } else {
        document.getElementById("count1").style.color = "#fff";
        document.getElementById("fa-check1").style.color = "#abcbf5";
    }

    if (input.length <= 15) {
        document.getElementById("count2").style.color = "#50f20af4";
        document.getElementById("fa-check2").style.color = "#50f20af4";
    } else {
        document.getElementById("count2").style.color = "#fff";
        document.getElementById("fa-check2").style.color = "#fff";
    }

    if (input.match(/[0-9]/gi)) {
        document.getElementById("count3").style.color = "#50f20af4";
        document.getElementById("fa-check3").style.color = "#50f20af4";
    } else {
        document.getElementById("count3").style.color = "#fff";
        document.getElementById("fa-check3").style.color = "#abcbf5";
    }

    if (input.match(/[A-Z]/)) {
        document.getElementById("count4").style.color = "#50f20af4";
        document.getElementById("fa-check4").style.color = "#50f20af4";
    } else {
        document.getElementById("count4").style.color = "#fff";
        document.getElementById("fa-check4").style.color = "#abcbf5";
    }

    if (input.match(/[^A-Za-z0-9'']/i)) {
        document.getElementById("count5").style.color = "#50f20af4";
        document.getElementById("fa-check5").style.color = "#50f20af4";
    } else {
        document.getElementById("count5").style.color = "#fff";
        document.getElementById("fa-check5").style.color = "#abcbf5";
    }

    document.getElementById("count6").style.color = "#50f20af4";
    document.getElementById("fa-check6").style.color = "#50f20af4";
}

