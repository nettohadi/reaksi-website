import { useRouter } from 'reaksi';

export default function GetStarted() {
   const router = useRouter();
   return (
      <div className='wrapper flex-column primary-font-color secondary-bg-color'>
         <div className='inner-wrapper'>
            <h1 style={{ fontSize: 35 }}>Are you interested ?</h1>
            <p style={{ fontSize: 20 }}>
               Read our short documentation to get familiar with Reaksi
            </p>
            <div style={{ textAlign: 'center' }}>
               <button
                  className='primary-button big'
                  onclick={() => router.push('/docs/v1/reaksi')}
               >
                  Go to documentation
               </button>
            </div>
         </div>
      </div>
   );
}
