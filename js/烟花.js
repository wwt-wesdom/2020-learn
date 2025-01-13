javascript:!(function () {
 var imgs = document.getElementsByTagName("img");
  for (let i = 0; i < imgs.length; i++) {
    const img = imgs[i];
    img.style.display = "none";
  }
})();