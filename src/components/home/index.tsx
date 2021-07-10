import { useEffect, useState } from 'reaksi';
import './index.css';
import KeyFeatures from './keyFeatures/KeyFeatures';
import Differences from './differences/Differences';
import Motivations from './motivations/Motivations';
import GetStarted from './getStarted/GetStarted';

export default function Home() {
   const [count, setCount] = useState(0);

   useEffect(() => {
      console.log('rendered Home');
   });

   return (
      <div>
         <div className='banner primary-bg-color secondary-font-color'>
            <div>
               <div className='big-logo-wrapper'>
                  <div className='big-logo'></div>
                  <h1>Reaksi JS</h1>
               </div>
               <h3>A Simple React-like Library</h3>
               <div style={{ marginTop: 20 }}>
                  <button className='secondary-button big'>Get Started</button>
                  <button className='primary-button big'>GitHub</button>
               </div>
            </div>
         </div>
         <KeyFeatures />
         <Differences />
         <Motivations />
         <GetStarted />
         <div style={{ height: 100 }}></div>
      </div>
   );
}
