// eslint-disable-next-line no-undef
const socket = io.connect();

socket.on("messages", (data) => {
  document.getElementById("messages").innerHTML = data
    .map(
      (entry) => `<div>
                    <strong>${entry.author}</strong>
                    <em>${entry.text}</em>
                  </div>`
    )
    .join(" ");
  clearInputs();
});

function clearInputs() {
  document.getElementById("username").value = "";
  document.getElementById("texto").value = "";
}

// eslint-disable-next-line no-unused-vars
function addMessage() {
  const message = {
    author: document.getElementById("username").value,
    text: document.getElementById("texto").value,
  };
  
  socket.emit("new-message", message);

  return false;
}
