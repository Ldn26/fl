var form = document.getElementById("search")
var input = document.getElementById("q")
var err = document.getElementById("err")
var bubbleImg = document.getElementById("bubble-img")
var msg = document.getElementById("msg")

// secret words, try typing them lol
var words = {
  droid: "These aren't the droids you're looking for.",
  jedi: "The Force is strong with this one.",
  octocat: "You found me! Now go find your page."
}

form.addEventListener("submit", function(e) {
  if (input.value.trim() == "") {
    e.preventDefault()
    err.hidden = false
    input.classList.add("error")

    // remove and add again so the shake plays evry time
    input.classList.remove("shake")
    void input.offsetWidth
    input.classList.add("shake")
    input.focus()
  }
})

input.addEventListener("input", function() {
  err.hidden = true
  input.classList.remove("error")
  input.classList.remove("shake")

  var text = input.value.toLowerCase()
  var found = null

  for (var w in words) {
    if (text.includes(w)) {
      found = w
      break
    }
  }

  if (found) {
    bubbleImg.src = "images/error-bubble.png"
    msg.innerText = words[found]
    msg.hidden = false
  } else {
    bubbleImg.src = "images/error-text.png"
    msg.hidden = true
  }
  //console.log(found)
})
