import './Button.scss';

const Button = ({ text }) => {
  return (
    <a href='#!' className='btn'>
      {text}
    </a>
  );
};

export default Button;
