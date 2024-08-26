import Image from 'next/image';

const LogoSection = () => {
  return (
    <div className="logo-section">
      <Image
        src="/images/Asset 15.png"
        alt="Logo"
        width={100}  // Adjust the width as needed
        height={50}  // Adjust the height as needed
      />
    </div>
  );
};

export default LogoSection;
