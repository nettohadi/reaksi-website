import "./Header.css";

export default function Header() {
  return (
    <header className="secondary-bg-color">
      <div className="logo_wrapper">
        <div className="logo"></div>
        <h2 className="primary-font-color">Reaksi JS</h2>
      </div>
      <nav className="primary-font-color">
        <ul>
          <li>Home</li>
          <li>Hooks</li>
          <li>Router</li>
          <li>Redux</li>
          <li>GitHub</li>
        </ul>
      </nav>
    </header>
  );
}
