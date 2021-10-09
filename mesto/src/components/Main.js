import avatar from '../images/Avatar.jpg';
import React from 'react';

function Main({onEditProfile, onAddPlace, onEditAvatar}) {
    return(
<>
<main className="content">
      {/* <!-- профайл --> */}
      <section className="profile">
        <div className="profile__avatar-plus-info">
          <div className="profile__avatar-container">
            <img src={avatar} alt="Аватар" className="profile__avatar" />
            <button  onClick={onEditAvatar}  type = "button" aria-label = "Обновить аватар" title="Обновить аватар" className="profile__avatar-button"></button>
          </div>
          <div className="profile__info">
            <div className="profile__button-plus-name">
              <h1 className="profile__name">Жак-Ив Кусто</h1>
              <button onClick={onEditProfile}  type = "button" aria-label = "Редактировать профиль" title="Редактировать профиль" className="profile__edit-button"></button>
            </div>
            <p className="profile__profession">Исследователь океана</p>
          </div>
        </div>
        <button type="button" className="profile__add-button" onClick={onAddPlace} aria-label = "Новое место" title="Новое место"></button>
      </section>
      {/* <!-- карточки --> */}
      <section className="cards">
      </section>
    </main>
</>
    );
}

export default Main;