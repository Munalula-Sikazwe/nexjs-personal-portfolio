import classes from './footer.module.scss';

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.socialMedia}>
        <a href='#' target='_blank' rel='noreferrer'>
          <i className='fab fa-github'></i>
        </a>
        <a href='#' target='_blank' rel='noreferrer'>
          <i className='fab fa-linkedin'></i>
        </a>
      </div>
      <div>Every great developer you know got there by solving problems they were unqualified to solve until they actually did it.</div>
      <small>
        Icons by{' '}
        <a href='https://www.flaticon.com/' target='_blank' rel='noreferrer'>
          Flaticon
        </a>{' '}
        &{' '}
        <a href='https://fontawesome.com/' target='_blank' rel='noreferrer'>
          Font Awesome
        </a>
      </small>
    </footer>
  );
};
export default Footer;
