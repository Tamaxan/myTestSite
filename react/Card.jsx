import React from 'react';

// BEGIN (write your solution here)
class Card extends React.Component {
  render() {
    const { title, text } = this.props;
    const dom = (
      <div className="card">
        <div className="card-body">
          <h4 className="card-title">{title}</h4>
          <p className="card-text">{text}</p>
        </div>
      </div>
    );
    return dom;
  }
};

Card.defaultProps = {
  title: 'title',
  text: 'text',
};
export default Card;