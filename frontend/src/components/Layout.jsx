// src/components/Layout.jsx
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="pt-12 flex flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;