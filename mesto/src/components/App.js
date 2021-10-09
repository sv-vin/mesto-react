import React from 'react';
import Footer from './Footer';
import Header from './Header';
import ImagePopup from './ImagePopup';
import Main from './Main';
import PopupWithForm from './PopupWithForm'


function App() {
const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
const [isDeletePopupOpen, setIsDeletePopupOpen] = React.useState(false);

function handleEditAvatarClick () {
  setIsEditAvatarPopupOpen(true)
}
function handleEditProfileClick () {
  setIsEditProfilePopupOpen(true)
}
function handleAddPlaceClick () {
  setIsAddPlacePopupOpen(true)
}
function handleDeleteClick () {
  setIsDeletePopupOpen(true)
}

function closeAllPopups() {
  setIsEditAvatarPopupOpen(false)
  setIsEditProfilePopupOpen(false)
  setIsAddPlacePopupOpen(false)
  setIsDeletePopupOpen(false)
}

  return (
    <>
     <Header />
     <Main 
     onEditProfile={handleEditProfileClick}
     onAddPlace={handleAddPlaceClick}
     onEditAvatar={handleEditAvatarClick}
     onDelete={handleDeleteClick}
     />
     <Footer />
     <template className="cards-template">
    <div className="card">
      <img className="card__img" src=" " alt="" />
      <button type="button" className="card__delete-button" aria-label="Удалить"></button>
      <div className="card__description">
        <h2 className="card__text"></h2>
        <div className="card__like-containet">
          <button type="button" className="card__like" aria-label="Нравится"></button>
          <p className="card__like-counter"></p>
        </div>
      </div>
    </div>
  </template>
    {/* <!-- попап профиля --> */}
    <ImagePopup />
<PopupWithForm 
name="prifile" 
className="popup popup_type_edit"
title="Редактировать профиль" 
buttonText="Сохранить" 
isOpen={isEditProfilePopupOpen}
  onClose={closeAllPopups}>
  <section className="popup__input-section">
  <input 
  type="text" 
  name="name" 
  placeholder="Имя"
  className="popup__input popup__input_type_name" required 
  minLength="2"
  maxLength="40" />
  <span className="popup__input-error"></span>
  </section>
  <section className="popup__input-section">
  <input 
  type="text" 
  name="about"
  placeholder="Профессия" 
  className="popup__input popup__input_type_job" required 
  minLength="2"
  maxLength="200" />
  <span className="popup__input-error"></span>
  </section>
</PopupWithForm>

<PopupWithForm 
name='avatar' 
title="Обновить аватар" 
buttonText="Сохранить" 
className="popup popup_type_avatar"
isOpen={isEditAvatarPopupOpen}
onClose={closeAllPopups}>
  <section className="popup__input-section">
              <input type="url" name="link" className="popup__input popup__input_type_link" placeholder="Ссылка на картинку"
                required />
              <span className="popup__input-error"></span>
              </section>
</PopupWithForm>

<PopupWithForm 
name='add'
className="popup popup_type_add" 
title="Новое место" 
buttonText="Сохранить" 
isOpen={isAddPlacePopupOpen}
onClose={closeAllPopups}>
 <section className="popup__input-section">
              <input type="text" name="name" className="popup__input popup__input_type_name" placeholder="Название" required
                minLength="2" maxLength="30" />
              <span className="popup__input-error"></span>
            </section>
            <section className="popup__input-section">
              <input type="url" name="link" className="popup__input popup__input_type_link" placeholder="Ссылка на картинку"
                required />
              <span className="popup__input-error"></span>
            </section>
</PopupWithForm>
<PopupWithForm 
name='delete'
className="popup popup-delete" 
title="Вы уверены?" 
buttonText="Да" 
isOpen={isDeletePopupOpen}
onClose={closeAllPopups}>
</PopupWithForm>
    </>
  );
}

export default App;
