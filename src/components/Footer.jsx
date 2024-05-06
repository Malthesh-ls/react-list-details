const Footer = ({ title }) => {
  const currentDate = new Date();
  return (
    <div className="footer">
      &copy;
      {currentDate.getFullYear()}
      {' '}
      - {title}
    </div>
  );
}

export default Footer
