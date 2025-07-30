import "./QrCodeComponent.scss";

function QrCodeComponent() {
  return (
    <div className="card">
      <div className="image-card">
        <div className="ellipse ellipse--top-left"></div>
        <div className="ellipse ellipse--bottom-right"></div>

        <img
          className="qr-code-image"
          src="/images/qr-code.svg"
          alt="QR Code"
        />
      </div>

      <div className="description-container">
        <h4 className="title">
          Improve your front-end skills by building projects
        </h4>

        <p className="description">
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </p>
      </div>
    </div>
  );
}

export default QrCodeComponent;
