import './index.css';
import { VNodeType } from 'reaksi';

type PropsType = {
   children?: VNodeType;
};

export default function Blockquote({ children }: PropsType) {
   return (
      <blockquote className='warning-wrapper'>
         <h4 className='title'>
            <i class='fas fa-exclamation-triangle'></i>
            <span className='title-text'>Warning</span>
         </h4>
         <div>{children}</div>
      </blockquote>
   );
}
