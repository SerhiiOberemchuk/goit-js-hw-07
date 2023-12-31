import { galleryItems } from "./gallery-items.js";

/* Creating and rendering markup based on the galleryItems data array
 and the provided gallery item template.*/

const boxForImg = document.querySelector(".gallery");
const markup = galleryItems
  .map(
    (item) =>
      `<li class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</li>`
  )
  .join("");

boxForImg.innerHTML = markup;
boxForImg.addEventListener("click", modalHandle);
function modalHandle(e) {
  e.preventDefault();
  if (!e.target.classList.contains("gallery__image")) return;
  const instance = basicLightbox.create(
    `<img src="${e.target.dataset.source}">`,
    {
      onShow: () => window.addEventListener("keydown", closeByEsc),
      onClose: () => window.removeEventListener("keydown", closeByEsc),
    }
  );

  const closeByEsc = (e) => e.code === "Escape" && instance.close();
  instance.show();
}

// boxForImg.addEventListener("click", onclick);
// function onclick(evt) {
//   evt.preventDefault();
//   if (!evt.target.classList.contains("gallery__image")) {
//     return;
//   }
//   // const instance = basicLightbox.create(`
//   //     <img src="${evt.target.dataset.source}" width="800" height="600">
//   // `);
//   // instance.show();
//   // // console.log(basicLightbox);
//   // document.addEventListener("keydown", onPres);
//   // function onPres(evt) {
//   //   if (evt.code === "Escape") {
//   //     instance.close();
//   //     document.removeEventListener("keydown", onPres);
//   //   }
//   //   // console.log(evt.code);
//   // }
//   const instance = basicLightbox.create(
//     `<img src="${evt.target.dataset.source}" width="800" height="600">`,
//     {
//       onShow: (instance) => {
//         document.addEventListener("keydown", onPres);
//       },
//       onClose: (instance) => {
//         document.removeEventListener("keydown", onPres);
//       },
//     }
//   );
//   instance.show();
//   function onPres(event) {
//     if (event.key === "Escape") {
//       instance.close();
//     }
//   }
// }
