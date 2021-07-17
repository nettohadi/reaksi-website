export default function InstallationDoc() {
   return (
      <div className='doc-wrapper'>
         <h1>Installation</h1>
         <p>
            React and other popular UI frameworks and libraries usually provide
            a CLI to quickly setup development environment for their user. This
            makes getting started on any of them easy and straight forward.
            Unfortunately, Reaksi does not have a CLI yet, but we're planning to
            create one in the future. For now, you can clone our ready made
            template on GitHub to get started using Reaksi.
         </p>
         <p>Here are the 3 steps to get started with Reaksi :</p>
         <h2>1. Clone the GitHub template</h2>
         <p>Run the following command to clone the template</p>
         <pre>
            <code className='sh'>
               npx degit nettohadi/reaksi-template [your-project-name]
            </code>
         </pre>
         <h2>2. Install Dependencies</h2>
         <p>First, cd into [your-project-name] folder</p>
         <pre>
            <code className='sh'>cd [your-project-name]</code>
         </pre>
         <p>
            Once inside the folder, you can run the following command to install
            all the required dependencies.
         </p>
         <pre>
            <code className='sh'>npm install</code>
         </pre>
         <h2>3. Run Local Development Server</h2>
         <p>To run local development server and watch for changes :</p>
         <pre>
            <code className='sh'>npm run start</code>
         </pre>
         <p>
            We've setup Webpack hot module replacement feature in this template,
            so everytime you make changes, the browser will automatically
            refresh.
         </p>
      </div>
   );
}
