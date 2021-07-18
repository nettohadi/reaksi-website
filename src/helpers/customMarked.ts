import marked from 'marked';
import Prism from 'prismjs';

marked.setOptions({
   highlight: function (code, lang) {
      return Prism.languages[lang]
         ? Prism.highlight(code, Prism.languages[lang], lang)
         : code;
   },
});

const parseWarningTag = (markdown: string = '') => {
   const openWarning = `
   <blockquote class='warning-wrapper'>
     <h4 class='title'>
        <i class='fas fa-exclamation-triangle'></i>
        <span class='title-text'>Warning</span>
     </h4>
     <div>
   `;

   const closeWarning = `
    </div>
   </blockquote>
   `;

   markdown = markdown.replaceAll(/<Warning>/gi, openWarning);
   markdown = markdown.replaceAll(/<\/Warning>/gi, closeWarning);

   return markdown;
};

const parseTOCTag = (markdown: string = '') => {
   const openTOC = `
   <blockquote class='table-of-content-wrapper'>
         <h4 class='title'>Table of Contents</h4>
         <div>
   `;

   const closeTOC = `
         </div>    
   </blockquote>
   `;

   markdown = markdown.replaceAll(/<TOC>/gi, openTOC);
   markdown = markdown.replaceAll(/<\/TOC>/gi, closeTOC);

   return markdown;
};

const customMarked = {
   parse: (markdown: string) => {
      markdown = marked.parse(markdown);
      markdown = parseWarningTag(markdown);
      markdown = parseTOCTag(markdown);

      return markdown;
   },
};

export default customMarked;
