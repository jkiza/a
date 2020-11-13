$(document).ready(function() {
  console.log("Document has loaded");

  //event listener for when mouse enters area over the heading - change colour to purple
  let heading = document.getElementById('heading');
  heading.addEventListener("mouseover", function(event) {
    event.target.style.color = "purple";
  });

  //event listener for when mouse is not over the heading anymore - change colour to default (black)
  heading.addEventListener("mouseout", function(event) {
    event.target.style.color = "";
  });

  //get button by id and assign it to a variable
  let rowAddBtn = document.getElementById('rowAddBtn');
  //event listener for when rowAddBtn is clicked
  rowAddBtn.addEventListener("click", function() {
    //change button font colour to black
    this.style.color = "black";
    //create td and tr elements and assign them to variables
    var td1 = document.createElement('td');
    var td2 = document.createElement('td');
    var td3 = document.createElement('td');
    var td4 = document.createElement('td');
    var tr = document.createElement('tr');
    //get user's input values
    td1.innerHTML = document.getElementById('input1').value;
    td2.innerHTML = document.getElementById('input2').value;
    td3.innerHTML = document.getElementById('input3').value;
    td4.innerHTML = document.getElementById('input4').value;
    //insert the values into a table row
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    //insert the row into the table
    table.appendChild(tr);
  });

  //get rowRemBtn button by id and assign it to a variable
  let rowRemBtn = document.getElementById('rowRemBtn');
  //event listener for when rowRemBtn is clicked
  rowRemBtn.addEventListener("click", function() {
    //change button font colour to black
    this.style.color = "black";
    //get user's input
    var rowNum = document.getElementById('input5').value;
    //delete selected row from the table
    document.getElementById('table').deleteRow(rowNum);
  });

  //get rowCountBtn button by id and assign it to a variable
  let rowCountBtn = document.getElementById('rowCountBtn');
  //event listener for when rowCountBtn is clicked
  rowCountBtn.addEventListener("click", function() {
    //change button font colour to black
    this.style.color = "black";
    //variables needed for the function to calculate row number
    var total = 0;
    var rowCount = 0;
    var table = document.getElementById('table');
    var rows = table.getElementsByTagName('tr');
    //calculate row number
    for (var i = 0; i < rows.length; i++) {
      total++;
      if (rows[i].getElementsByTagName('td').length > 0) {
        rowCount++;
      }
    }
    //alert message with row count displayed to user
    window.alert("This table has " + rowCount + " rows in its body");
  });

  //validate row field function
  function validate() {
    //get element by id 'row' and assign it to a rowField variable
    let rowField = $("#row")[0];
    //get element by id 'row' and 'error' which is span's class
    let rowError = $("#row + span.error")[0];
    //check validity of field input
    if (!rowField.validity.valid) {
      //print error message if user does not input any value in row field
      if (rowField.validity.valueMissing) {
        rowError.textContent = 'You need to enter a number.';
      }
    }
    else {
      rowError.textContent = "";
    }
  };

});
