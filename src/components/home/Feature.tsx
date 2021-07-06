import "./Feature.css";

type props = {
  icon: string;
  title: string;
  subtitle: string;
  key: number;
};

export default function Feature({ icon, title, subtitle }: props) {
  return (
    <div className="feature primary-font-color">
      <img src={icon} alt="" />
      <h2>{title}</h2>
      <h4>{subtitle}</h4>
    </div>
  );
}
