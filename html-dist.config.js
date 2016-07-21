import {script} from 'html-dist';
 
export default {
  outputFile: 'index.html',
  // minify: true,
  body: {
    remove: 'script',
    appends: [
      script({
        src: 'js/app.min.js'
      })
    ]
  }
}