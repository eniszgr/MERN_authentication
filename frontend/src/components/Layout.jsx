// src/components/Layout.jsx
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col min-w-full">
   
    <Header />

      <main className="flex-1 w-full pt-12 flex flex-col">
        {children}
      </main>

      <Footer />
    </div>
  );
};

export default Layout;