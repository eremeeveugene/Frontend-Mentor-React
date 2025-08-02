import "./BlogPreviewCard.scss";

function BlogPreviewCard() {
  return (
    <section className="card">
      <div className="card__qr-code-container">
        <div className="card__ellipse--top-left"></div>
        <div className="card__ellipse--top-right"></div>

        <img
          className="card__qr-code-image"
          src="./images/qr-code.svg"
          alt="QR Code"
        />
      </div>

      <div className="card__description-container">
        <h4 className="card__title">
          Improve your front-end skills by building projects
        </h4>

        <p className="card__description">
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </p>
      </div>
    </section>
  );
}

export default BlogPreviewCard;
