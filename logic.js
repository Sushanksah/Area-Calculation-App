const btn = document.querySelector("#btn");
const para1 = document.querySelector("#para1");
const para2 = document.querySelector("#para2");
const para3 = document.querySelector("#para3");


btn.addEventListener("click", (event) => {
    console.log("jahbf");
    event.preventDefault();
    const length = parseInt(document.querySelector("#length").value);
    const breadth = parseInt(document.querySelector("#breadth").value);
    const result = document.querySelector("#result");
    if(length === " " || length < 0 || isNaN(length)) {
        result.innerHTML = "Please enter valid length";
    } else if (breadth === " " || breadth < 0 || isNaN(breadth)) {
        result.innerHTML = "Please enter valid length";
    } else {
        const area = (length * breadth).toFixed(2);
        result.innerHTML = `Area =  ${area}`;
        highlight(area);
    }
    
});

const highlight = (area) => {
    if(area > 0 && area < 100) {
        para1.style.color = "red";
        para2.style.color = "black";
        para3.style.color = "black";
    }else if(area > 100 && area < 500) {
        para1.style.color = "black";
        para2.style.color = "red";
        para3.style.color = "black";
    }else if (area > 500) {
        para1.style.color = "black";
        para2.style.color = "black";
        para3.style.color = "red";
    }else {
        para1.style.color = "black";
        para2.style.color = "black";
        para3.style.color = "black";
    }
};