window.onload = () => {
  const previewElement = document.querySelector("#preview");
  const previewContent = document.querySelector("#preview-content");

  const showPreview = (imageSrc) => {
    const previewImage = document.createElement("img");
    previewImage.src = imageSrc;
    previewImage.className = "project__image preview-showing";

    previewImage.style.width = "75%";

    if (previewContent.firstChild) {
      previewContent.removeChild(previewContent.firstChild);
    }

    previewContent.appendChild(previewImage);

    previewElement.classList.add("fade-in");
    previewElement.classList.remove("fade-out");
    previewElement.style.display = "flex";
    document.body.style.overflow = "hidden";
  };

  const hidePreview = () => {
    previewElement.classList.add("fade-out");
    previewElement.classList.remove("fade-in");

    const previewImage = previewContent.querySelector("img");
    if (previewImage) {
      previewImage.classList.add("preview-hiding");
    }
    setTimeout(() => {
      previewElement.style.display = "none";
      document.body.style.overflow = "auto";
      if (previewImage) {
        previewImage.classList.remove("preview-hiding", "preview-showing");
      }
    }, 150);
  };

  document.querySelectorAll(".project__image").forEach((image) => {
    image.addEventListener("click", (event) => showPreview(event.target.src));
  });

  previewElement.addEventListener("click", (event) => {
    if (event.target === previewElement || event.target === previewContent) {
      hidePreview();
    }
  });
};
