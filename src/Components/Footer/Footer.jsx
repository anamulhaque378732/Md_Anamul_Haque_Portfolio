const Footer = () => {
  return (
    <>
      <footer className="footer  sm:footer-horizontal footer-center bg-base-300 text-base-content p-4">
        <aside>
          <p>© {new Date().getFullYear()} Anamul. All right reserved.</p>
        </aside>
      </footer>
    </>
  );
};

export default Footer;
