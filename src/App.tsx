import Home from "./components/home";
import Layout from "./components/layout";

export default function App() {
  console.log("rendered App");
  return (
    <Layout>
      <Home />
    </Layout>
  );
}
