$(function () {
  $("#submit").on("click", function() {

    let city1Name = $("#city1").val().trim();
    let city2Name = $("#city2").val().trim();
    let city3Name = $("#city3").val().trim();
    let city4Name = $("#city4").val().trim();
    let city5Name = $("#city5").val().trim();
    
    let vacaInfo = {
      city1: city1Name,
      city2: city2Name,
      city3: city3Name,
      city4: city4Name,
      city5: city5Name
    }

    console.log("This is creategroups city1 "+ city1Name);
    $.ajax({
      url: '/api/vacations',
      method: 'POST',
      data: vacaInfo
    })
    .then(() => {
      location.reload();
    })
    .catch(err => console.log(err));
  });
  
});

