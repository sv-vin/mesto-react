import React from 'react';

function Card(props) {

    function handleClick() {
        props.onCardClick(props.card);
    }

    // const onDelete = () => {
    //     props.onDelete();
    //   }


    function handleDeleteClick() {
        props.onDelete();
    }

    return (
        <article className="card">
            <img className="card__img" onClick={handleClick} src={props.card.link} alt={props.card.name} />
            <button onClick={handleDeleteClick} type="button" className="card__delete-button" aria-label="Удалить" ></button>
            <div className="card__description">
                <h2 className="card__text">{props.card.name}</h2>
                <div className="card__like-containet">
                    <button type="button" className="card__like" aria-label="Нравится"></button>
                    <p className="card__like-counter">{props.card.likes.length}</p>
                </div>
            </div>
        </article>
    );
}

export default Card;