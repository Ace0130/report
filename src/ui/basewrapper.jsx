import Footer from './footer';
import Header from './header';
import './css/basewrapper.css';

export default function BaseWrapper({ children }) {
  return (
    <div className="htmlWrapper">
      <Header />
      <div className="bodyContent">{children}</div>
      <Footer />
    </div>
  );
}
