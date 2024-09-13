import Image from 'next/image';

const LogoSection = () => {
  return (
    <div className="logo-section">
      {/* Logo for Light Mode */}
      <Image
        src="/images/Asset 15.png"
        alt="Web Developers Logo"
        width={60}  // Adjust the width as needed
        height={60}  // Adjust the height as needed
        className="block dark:hidden"  // Visible in light mode, hidden in dark mode
      />

      {/* Logo for Dark Mode */}
      <img 
        src="./set 13.png" 
        alt="Web Developers Logo" 
        className="hidden dark:block"  // Hidden in light mode, visible in dark mode
        width={60}
      />
    </div>
  );
};

export default LogoSection;
