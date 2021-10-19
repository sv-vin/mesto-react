import React from 'react';
import api from '../utils/Api'
import Card from './Card';

function Main(props) {
  const onEditAvatar = () => {
    props.onEditAvatar();
  }

  const onEditProfile = () => {
    props.onEditProfile();
  }

  const onAddPlace = () => {
    props.onAddPlace();
  }

  const [userName, setUserName] = React.useState('Жак-Ив Кусто');
  const [userDescription, setUserDescription] = React.useState('Исследователь океана');
  const [userAvatar, setUserAvatar] = React.useState("Аватар");
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {

    Promise.all([api.getPersonalInfo(), api.getCard()])
      .then(([user, item]) => {
        setUserName(user.name);
        setUserDescription(user.about);
        setUserAvatar(user.avatar);
        setCards(item);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);


  return (
    <main className="content">
      {/* <!-- профайл --> */}
      <section className="profile">
        <div className="profile__avatar-plus-info">
          <div className="profile__avatar-container" onClick={onEditAvatar}>
            <img src={userAvatar} alt="Аватар" className="profile__avatar" style={{ backgroundImage: `url(${userAvatar})` }} />
            <button type="button" aria-label="Обновить аватар" title="Обновить аватар" className="profile__avatar-button"></button>
          </div>
          <div className="profile__info">
            <div className="profile__button-plus-name">
              <h1 className="profile__name">{userName}</h1>
              <button onClick={onEditProfile} type="button" aria-label="Редактировать профиль" title="Редактировать профиль" className="profile__edit-button"></button>
            </div>
            <p className="profile__profession">{userDescription}</p>
          </div>
        </div>
        <button type="button" className="profile__add-button" onClick={onAddPlace} aria-label="Новое место" title="Новое место"></button>
      </section>
      {/* <!-- карточки --> */}
      <section className="cards">
        {cards.map((card) => (
          <Card key={card._id} card={card} onCardClick={props.onCardClick} onDelete={props.onDelete}/>
        ))}
      </section>
    </main>
  );

}

export default Main;