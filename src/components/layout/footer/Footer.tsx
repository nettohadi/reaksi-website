import './Footer.css';

export default function Footer() {
   const currentYear = new Date().getFullYear();
   return (
      <footer>
         <div className='big-logo'></div>
         <h4>This website is built using Reaksi</h4>
         <h3>Copyright © {currentYear} Abdul Hadi Syahbal</h3>
      </footer>
   );
}
