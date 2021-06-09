(function() {

    function timeConvert(n) {
var num = n;
var hours = (num / 60);
var rhours = Math.floor(hours);
var minutes = (hours - rhours) * 60;
var rminutes = Math.round(minutes);
return /*num + " minutes = " +*/ rhours + " hour(s) and " + rminutes + " minute(s).";
}

    let hisx = parseInt($('#content_value > table > tbody > tr > td:nth-child(1) > table:nth-child(1) > tbody > tr:nth-child(3) > td:nth-child(2)').text().split('|')[0])
    let hisy = parseInt($('#content_value > table > tbody > tr > td:nth-child(1) > table:nth-child(1) > tbody > tr:nth-child(3) > td:nth-child(2)').text().split('|')[1])

    let myx = parseInt($('#menu_row2 > td:nth-child(4) > b').text().split('|')[0].split('(')[1])
    let myy = parseInt($('#menu_row2 > td:nth-child(4) > b').text().split('|')[1].split('(')[0])

    let distance = Math.sqrt(Math.pow((hisx - myx), 2) + Math.pow((hisy - myy), 2) )

    console.log('running')
    console.log(distance)
    $('<tr><td>Distance</td><td>'+distance.toFixed(1)+'</td></tr><tr><td>Noble</td><td>'+timeConvert(distance.toFixed(1) * 35) +'</td></tr><tr><td>Scout</td><td>'+timeConvert(distance.toFixed(1) * 9) +'</td></tr>').appendTo('#content_value > table > tbody > tr > td:nth-child(1) > table:nth-child(1) > tbody')
})();
