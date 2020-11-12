$(document).ready(function() {
  console.log("Document has loaded");

  rowAddBtn.addEventListener("click", function() {
    var td1 = document.createElement('td');
    var td2 = document.createElement('td');
    var td3 = document.createElement('td');
    var td4 = document.createElement('td');
    var tr = document.createElement('tr');
    td1.innerHTML = document.getElementById('input1').value;
    td2.innerHTML = document.getElementById('input2').value;
    td3.innerHTML = document.getElementById('input3').value;
    td4.innerHTML = document.getElementById('input4').value;
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    table.appendChild(tr);
  });

  rowRemBtn.addEventListener("click", function() {
    var rowNum = document.getElementById('input5').value;
    document.getElementById("table").deleteRow(rowNum);
  })

});
