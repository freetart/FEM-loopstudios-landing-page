import './Preloader.scss';

const Preloader = () => {
  return (
    <div className='preloader'>
      <div className='preloader-content'>
        <h2 className='preloader-heading'>HABIBDEV</h2>
      </div>
      <div className='preloader-spinner'>
        <div className='preloader-half-circle'></div>
        <div className='preloader-half-circle'></div>
      </div>
    </div>
  );
};

export default Preloader;
