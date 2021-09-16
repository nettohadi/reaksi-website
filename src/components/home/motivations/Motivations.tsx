export default function Motivations() {
   return (
      <div className='wrapper flex-column secondary-font-color primary-bg-color'>
         <div className='inner-wrapper'>
            <h1>Our Motivation</h1>
            <div class='secondary-bg-color primary-font-color rounded-container'>
               <p style={styles.p}>
                  We know that JavasScript ecosystem is already very crowded
                  with UI libraries. And you know what, we're not trying to
                  compete with them or to be the next big thing.
               </p>
               <p style={styles.p}>
                  So, why do this ? Well, it's simple. We build Reaksi to learn
                  about React and JavaScript in general. Its codebase is still
                  very simple, quite easy to read and follow. If you're like us,
                  willing to understand how React works under the hood, you can
                  join us. fork us on github, and make your own UI library.
               </p>
            </div>
         </div>
      </div>
   );
}

const styles = {
   p: {
      fontSize: 21,
      fontWeight: '500',
      lineHeight: 30,
   },
};
