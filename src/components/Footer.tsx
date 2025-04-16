
const Footer = () => {
  return (
    <footer className="py-8 bg-black/30 glass-card">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Hari Krishnan R. All rights reserved.
          </p>
          <p className="text-gray-500 text-xs mt-2">
            Designed and built with ❤️
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
