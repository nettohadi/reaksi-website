export default function GetStarted() {
  return (
    <div className="wrapper flex-column primary-font-color secondary-bg-color">
      <div className="inner-wrapper">
        <h1>Are you interested ?</h1>
        <p style={{ fontSize: 17 }}>
          Read our short documentation to get familiar with Reaksi
        </p>
        <div style={{ textAlign: "center" }}>
          <button className="primary-button big">Go to documentation</button>
        </div>
      </div>
    </div>
  );
}
