var remove_acc  = document.querySelectorAll(".delete-trash")

for (var i = 0; i < remove_acc.length; i++) {
  var button = remove_acc[i]
  button.addEventListener("click", function () {
    var button_acc = event.target
    button_acc.parentElement.parentElement.parentElement.remove()
  })
}