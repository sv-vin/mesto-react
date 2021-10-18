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
  const [isImagePopupOpen, setImagePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({ link: '', name: '' });
  const [isDeletePopupOpen, setIsDeletePopupOpen] = React.useState(false);


  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true)
  }
  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true)
  }
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true)
  }

  const handleDeleteClick = () => {
    setIsDeletePopupOpen(true);
  }

  const handleClick = (card) => {
    setSelectedCard(card);
    setImagePopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setImagePopupOpen(false);
    setIsDeletePopupOpen(false);
    setSelectedCard({ name: '', link: '' })
  }

  return (
    <>
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleClick}
        onDelete={handleDeleteClick}
      />
      <Footer />


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

      <ImagePopup
        onClose={closeAllPopups}
        isOpen={isImagePopupOpen}
        card={selectedCard}
      />
    </>
  );
}

export default App;