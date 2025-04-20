
const Footer = () => {
  return (
    <footer className="py-8 bg-black/30 glass-card">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="text-black text-sm">
            &copy; {new Date().getFullYear()} Hari Krishnan R. All rights reserved.
          </p>
          <p className="text-black text-xs mt-2">
            Designed with ❤️
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
