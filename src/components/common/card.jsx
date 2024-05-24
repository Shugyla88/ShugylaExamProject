import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./styles/card.css";

// HOC для добавления стилей к компоненту Card
const withCardStyles = (WrappedComponent) => {
  return (props) => (
    <div className="card">
      <WrappedComponent {...props} />
    </div>
  );
};

const Card = (props) => {
  const { icon, title, body } = props;
  return (
    <div className="card-container">
      <div className="card-header">
        <div className="card-icon">
          <FontAwesomeIcon icon={icon} />
        </div>
        <div className="card-title">{title}</div>
      </div>
      <div className="card-body">
        {body} {/* Вызываем функцию Body */}
      </div>
    </div>
  );
};

// Применяем HOC к компоненту Card
export default withCardStyles(Card);
