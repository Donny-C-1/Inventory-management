"use strict";
configureDialog();
function configureDialog() {
  const dialog = document.getElementsByClassName("dialog")[0];
  const closeDialog = dialog.getElementsByClassName("close-dialog")[0];
  const showDialog = document.getElementsByClassName("show-dialog")[0];

  closeDialog.onclick = (e) => dialog.classList.add("fade");
  showDialog.onclick = (e) => dialog.showModal();
  dialog.ontransitionend = (e) => {
    if (e.target !== e.currentTarget) return;
    if (e.propertyName !== "opacity") return;
    dialog.close();
    dialog.classList.remove("fade");
  };
}
