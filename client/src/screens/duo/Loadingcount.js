import logo from '../../assets/logo.png';
import { useStateProvider } from '../../utils/StateProvider';
import animation from "../../assets/animation.gif"

function Loadingcount(props) {

  const [{ userInfo }] = useStateProvider();


  return (
      <div className="absolute bg-black z-10 w-full h-full flex flex-col justify-center items-center">
        <div className='flex justify-center items-center'>
          <div className="flex flex-col items-center">
            <div className="w-48 h-48 rounded-full overflow-hidden bg-slate-100" style={{ aspectRatio: '1/1' }}>
              <img src={userInfo?.image} alt="Profile" className="w-full h-full object-cover" />
            </div>
            <p className="text-white mt-2">{userInfo?.userName}</p>
          </div>
          <img src={logo} className='w-20 h-20 mx-4' alt="mainlogo"/>
          <div className="flex flex-col items-center">
            <div className="w-48 h-48 rounded-full overflow-hidden bg-slate-100" style={{ aspectRatio: '1/1' }}>
              <img src={animation} alt="Profile" className="w-full h-full object-cover" />
            </div>
            <p className="text-white mt-2">{props.othersusername}</p>
          </div>
        </div>
        
        <div className="mt-8">(
            <>
              <h2 className="text-white text-2xl">Matching<span className="absolute animate-pulse animate-ping after:content-'. . .'">...</span></h2>
            </>
          )
        </div>
      </div>

  );
}

export default Loadingcount;
