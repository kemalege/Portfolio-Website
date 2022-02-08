
    document.getElementById("cv").addEventListener("click",gettert)

    document.getElementById("cv").addEventListener("click",getrevert);

// document.getElementById("edit").addEventListener("click",myedit);

// function myedit(){
//     let a = document.querySelector(".timeline-wrapper p").innerHTML = "sadsa";
//     console.log(a);

// }


function gettert(){
    console.log("ege");
    const xhr = new XMLHttpRequest();

    xhr.open("GET", "bd.json" ,true);
    

    xhr.onload = function(){
        
        let displaystyle = "none"; //
        
        
        if (this.status === 200 ) {

            let b =document.getElementById("wrt");
            const cv = JSON.parse(this.responseText);
            
            
            cv.forEach(function(a){
                console.log(a);
                b.innerHTML += 
                `<tr>
                    <td>${a.name}</td>
                    <td>${a.age}</td>
                    <td>${a.salary}</td>

                </tr>
                `
            });
            
            
        }
    }
    xhr.send();
}
function getrevert(){
    console.log("kemal");
    let b =document.getElementById("wrt");
    b.innerHTML = "";
}
// function myFunction() {
//     let x = document.getElementsById("wrt");
//     if (x.style.display === "block") {
//       x.style.display = "none";
//     } else {
//       x.style.display = "block";
//     }
//   }
