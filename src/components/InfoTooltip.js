import luck from ".././images/icons/luck.svg";
import fail from ".././images/icons/fail.svg";

function InfoTooltip({ isOpen, onClose, isSuccess }) {
  return (
    <div className={`popup popup_notification ${isOpen && "popup_opened"}`}>
      <div className="popup__container">
        <button
          type="button"
          className="popup__button-close opacity-hover"
          onClick={onClose}
        ></button>
        <img className="popup__icon" src={isSuccess ? luck : fail} alt="оповещение" />
        <h3 className="popup__title popup__title_notification">
          {isSuccess
            ? "Вы успешно зарегистрировались!"
            : "Что-то пошло не так! Попробуйте ещё раз."}
        </h3>
      </div>
    </div>
  );
}

export default InfoTooltip;
