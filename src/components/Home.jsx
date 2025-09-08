import './Home.css';
import page1Url from "../assets/Home/1.svg";  
import page2Url from "../assets/Home/2.svg";
import page3Url from "../assets/Home/3.svg";
import page4Url from "../assets/Home/4.svg";
import page5Url from "../assets/Home/5.svg";
import page6Url from "../assets/Home/6.svg";
import page7Url from "../assets/Home/7.svg";
import page8Url from "../assets/Home/8.svg";
import page9Url from "../assets/Home/9.svg";
import page10Url from "../assets/Home/10.svg";
import page11Url from "../assets/Home/11.svg";
import page12Url from "../assets/Home/12.svg";
import page13Url from "../assets/Home/13.svg";
import page14Url from "../assets/Home/14.svg";
import page15Url from "../assets/Home/15.svg";
import page16Url from "../assets/Home/16.svg";

const Home = () => {
  return (
    <div className='home'>
     <div className="pages">
            <img src={page1Url} className='page' alt='' />
            <img src={page2Url} className='page' alt='' />
            <img src={page3Url} className='page' alt='' />
            <img src={page4Url} className='page' alt='' />
            <img src={page5Url} className='page' alt='' />
            <img src={page6Url} className='page' alt='' />
            <img src={page7Url} className='page' alt='' />
            <img src={page8Url} className='page' alt='' />
            <img src={page9Url} className='page' alt='' />
            <img src={page10Url} className='page' alt='' />
            <img src={page11Url} className='page' alt='' />
            <img src={page12Url} className='page' alt='' />
            <img src={page13Url} className='page' alt='' />
            <img src={page14Url} className='page' alt='' />
            <img src={page15Url} className='page' alt='' />
            <img src={page16Url} className='page' alt='' />
     </div>
    </div>
  );
}

export default Home;