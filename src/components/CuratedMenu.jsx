import "./CuratedMenu.css";
import page1Url from '../assets/Curated_Menu/1.svg';
import page2Url from '../assets/Curated_Menu/2.svg';
import page3Url from '../assets/Curated_Menu/3.svg';



const CuratedMenu = () => {
  return (
    <div className="curated-menu">
    <div className="pages">
      <img src={page1Url} className='page' alt='' />
      <img src={page2Url} className='page' alt='' />
      <img src={page3Url} className='page' alt='' />
    </div>
     </div>
  );
}

export default CuratedMenu;