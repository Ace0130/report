import Footer from "./footer";
import Header from "./header";
import "./css/basewrapper.css";

export default function BaseWrapper({ children }) {
  return (
    <div className="BaseWrapper">
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
}
