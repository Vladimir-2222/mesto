const profileEditBattonEl = document.querySelector('.profile__edit-batton');//кнопка открывания 
const closePopupButtonEl = document.querySelector('.popup__close-button');//кнопка закрытия
const popupEl = document.querySelector('.popup');//сам popup
const profileTitleEl = document.querySelector('.profile__title');//name2
const nameInputEl = document.querySelector('#name-input');//имя\
const profileFormEl = document.querySelector('.profile__subtitle');//занятие2
const aboutInputEl = document.querySelector('#about-input');//занятие
const editFormEl = document.querySelector('#edit-form');//форма


profileEditBattonEl.addEventListener('click', function () {
  openPopup(popupEl);
  nameInputEl.value = profileTitleEl.textContent;
  aboutInputEl.value = profileFormEl.textContent;
});

closePopupButtonEl.addEventListener('click', function () {
  closePopup(popupEl);
});


editFormEl.addEventListener('submit', function (event) {
  event.preventDefault();

  profileTitleEl.textContent = nameInputEl.value;
  profileFormEl.textContent = aboutInputEl.value;

  closePopup(popupEl);
});

function openPopup(popupEl) {
  popupEl.classList.add('popup_is-opened');
}

function closePopup(popupEl) {
  popupEl.classList.remove('popup_is-opened');
}