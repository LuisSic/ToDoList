import Loader from 'react-loader-spinner';
export const Spinner = () => {
  return (
    <>
      <div className="loader-container">
        <div className="loader" role="status">
          <Loader type="Puff" color="#00BFFF" height={100} width={100} />
        </div>
      </div>
    </>
  );
};
