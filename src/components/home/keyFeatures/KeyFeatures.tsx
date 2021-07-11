import Feature from '../feature/Feature';
import './KeyFeatures.css';
// @ts-ignore
import react from '@root/assets/images/react.png';
// @ts-ignore
import redux from '@root/assets/images/redux.png';
// @ts-ignore
import router from '@root/assets/images/router.png';

export default function KeyFeatures() {
   return (
      <div className='wrapper flex-row' style={{ paddingBottom: 0 }}>
         <Feature
            key={1}
            icon={react}
            title='Very similar to React'
            subtitle={`Reaksi follows React API very closely. 
            So an experienced React user will have zero learning curve`}
         />
         <Feature
            key={2}
            icon={redux}
            title='Built-in Support for Redux'
            subtitle={`You can start using Redux with Reaksi without installing
            additional plugin.`}
         />
         <Feature
            key={3}
            icon={router}
            title='Includes Router'
            subtitle={`Also, no need to install separate Routing library 
            when you want to create multi pages website`}
         />
      </div>
   );
}
