const month =document.getElementById("month")
const day = document.getElementById("day")
const date = document.getElementById("date")
const year =document.getElementById("year")

let curdate = new Date();

month.innerText= curdate.toLocaleString("en", {
    month: "long",
  });


day.innerText = curdate.toLocaleString("en", {weekday: "long", });

date.innerText= curdate.getDate();
year.innerText=curdate.getFullYear();