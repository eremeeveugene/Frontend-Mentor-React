import "./QrCodeComponent.css";

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

      <h4 className="text-preset-1 title">
        Improve your front-end skills by building projects
      </h4>

      <p className="text-preset-2 caption">
        Scan the QR code to visit Frontend Mentor and take your coding skills to
        the next level
      </p>
    </div>
  );
}

export default QrCodeComponent;
