function showErrorMsg(error) {
    const header = document.querySelector("header");
      const errorEl = document.createElement("h2");
      errorEl.innerHTML = error;
      errorEl.classList.add("error");
      header.after(errorEl);
  }