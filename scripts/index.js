const profileEditBattonEl = document.querySelector('.profile__edit-batton');//кнопка открывания 
const closePopupButtonEl = document.querySelector('.popup__close-button');//кнопка закрытия
const PopupEl = document.querySelector('.popup');//сам popup
const profileTitleEl = document.querySelector('.profile__title');//name2
const nameInputEl = document.querySelector('#name-input');//имя\
const profileFormEl = document.querySelector('.profile__subtitile');//занятие2
const aboutInputEl = document.querySelector('#about-input');//занятие
const editFormEl = document.querySelector('#edit-form');//форма



profileEditBattonEl.addEventListener('click', function () {
  openPopup(PopupEl);
});

closePopupButtonEl.addEventListener('click', function () {
  closePopup(PopupEl);
});

nameInputEl.value = profileTitleEl.textContent;
aboutInputEl.value = profileFormEl.textContent;

editFormEl.addEventListener('submit', function (event) {
  event.preventDefault();

  profileTitleEl.textContent = nameInputEl.value;
  profileFormEl.textContent = aboutInputEl.value;

  closePopup(PopupEl);
});

function openPopup(popupEl) {
  popupEl.classList.add('popup_is-opened');
}

function closePopup(popupEl) {
  popupEl.classList.remove('popup_is-opened');
}