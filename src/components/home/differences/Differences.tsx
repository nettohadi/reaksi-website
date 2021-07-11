export default function Differences() {
   return (
      <div className='wrapper flex-column primary-font-color line-before primary-border-color'>
         <div className='inner-wrapper'>
            <h1>Differences from React</h1>
            <ul>
               <li>
                  <h3>
                     No class component. We don't like class based component, so
                     we decided not to support it in Reaksi.
                  </h3>
               </li>
               <li>
                  <h3>
                     Reaksi does not have synthetic event system like React
                     does. Reaksi uses the browser's native "addEventListener"
                     for event handling internally.
                  </h3>
               </li>
               <li>
                  <h3>
                     Reaksi doesn't support React Native. Reaksi was only
                     designed for the browser with the DOM in mind
                  </h3>
               </li>
               <li>
                  <h3>
                     Even though we're actively working on it, Many of React
                     features may not exist in Reaksi yet.
                  </h3>
               </li>
               <li>
                  <h3>
                     For now, Reaksi does not support server-side rendering.
                  </h3>
               </li>
            </ul>
         </div>
      </div>
   );
}
