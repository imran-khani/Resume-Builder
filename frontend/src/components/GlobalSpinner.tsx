import { TailSpin } from 'react-loader-spinner';

const GlobalSpinner = () => {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-black/50 flex items-center justify-center">
      <TailSpin color="#00BFFF" height={80} width={80} />
    </div>
  );
};

export default GlobalSpinner;
