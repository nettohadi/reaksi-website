import Reaksi from "reaksi";
import Header from "./Header";
import Footer from "./Footer";

type props = {
  children?: {};
};
export default function Layout({ children }: props) {
  return (
    <Reaksi.Fragment>
      <Header />
      <main>{children}</main>
    </Reaksi.Fragment>
  );
}
