const Footer = () => {
  return (
    <footer className='bg-transparent w-full'>
      <p className='p-4 w-fit mx-auto text-sm md:text-base text-dark dark:text-light'>
        &copy; {new Date().getFullYear()} by&nbsp;
        <span className='text-primary'>Stefano Christian Wiryana</span>
      </p>
    </footer>
  );
};

export default Footer;
