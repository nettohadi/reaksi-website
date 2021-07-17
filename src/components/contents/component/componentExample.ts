const functionalComponent = `
   import Reaksi from 'reaksi'
   
   function Component(props) {
     return <div>This is {props.name}.</div>;
   }
   
   // Usage
   const App = <Component name="My First Component" />;
      
   Reaksi.render(App, document.body);
   
   // Result: <div>This is My First Component.</div>
   
`;

const fragment = `
   import Reaksi from 'reaksi';
   
   function TodoItems() {
     return (
       <Reaksi.Fragment>
         <li>1.Buy Milk</li>
         <li>2.Pay Bill</li>
         <li>3.Study</li>
       </Reaksi.Fragment>
     )
   }
   
   const App = (
     <ol>
       <TodoItems />
       <li>Exercise</li>
     </ol>
   );
   
   Reaksi.render(App, container);
   
   // Result :
   // <ul>
   //   <li>1.Buy Milk</li>
   //   <li>2.Pay Bill</li>
   //   <li>3.Study</li>
   //   <li>4.Exercise</li>
   // </ul>
`;

const fragmentAlias = `
   import Reaksi from 'reaksi';
   
   function TodoItems() {
     return (
     // Shorter syntax
       <>
         <li>1.Buy Milk</li>
         <li>2.Pay Bill</li>
         <li>3.Study</li>
       </>
     )
   }
   
   const App = (
     <ol>
       <TodoItems />
       <li>Exercise</li>
     </ol>
   );
   
   Reaksi.render(App, container);
   
   // Result :
   // <ul>
   //   <li>1.Buy Milk</li>
   //   <li>2.Pay Bill</li>
   //   <li>3.Study</li>
   //   <li>4.Exercise</li>
   // </ul>
`;

const componentExample = {
   functionalComponent,
   fragment,
   fragmentAlias,
};

export default componentExample;
