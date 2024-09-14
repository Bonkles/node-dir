//Import all the stuff we need to do filesystem-y things.
import * as fs from 'fs';
import * as process from 'process';

//Add any other files you care about to this array! .asp, .txt, whatever. 
const fileExtensionsWeCareAbout = ['html', 'htm'];

/**
 * This method accepts a filename and determines if it's an html file or not. 
 * 'index.html' and 'asp.htm' are both valid filenames. 
 * @param {*} filename 
 * @returns 
 */
function shouldCountFilename (filename) {
    //Split the file into a name and extension. 
    // we don't care about the name, so we assign it to a 
    // 'don't-care' variable of underscore `_` 
    const [_,ext] = filename.split('.');

   //Now check the extension to see if it is something we care about
    return fileExtensionsWeCareAbout.includes(ext);
}

/**
 * 
 * The directory read process in node will 'call' this function when it's done.
 * We'll handle the counting/processing here. 
 * @param {*} err if an error occurred during the file read, details will be in here
 * @param {*} files A listing of filenames found, excluding '.' and '..'.
 */
function callback(err, files) {

    // First, do some error checking. 
    // There are different types of errors, so check and print different stuff accordingly. 
    if (err) {
        if (err instanceof EvalError) {
            console.error(`${err.name}: ${err.message}`);
          } else if (err instanceof RangeError) {
            console.error(`${err.name}: ${err.message}`);
          } else {
            console.error(`Generic ${err.name}: ${err.message}`);
          }
          //Since we received an error, return a negative value. 
          process.exit(-1);
    }


    // We're past the error checking and now have some files to count. 
    console.log(`Total files found: ${files.length}`)

    //Now, filter those files to just the ones that we actually care about. 
    const countedFiles = files.filter(file => shouldCountFilename(file));

    console.log(`Total files we actually care about: ${countedFiles.length}`);

    process.exit(countedFiles.length); 
}

const fsstuff = fs.readdir('./webfiles', null, callback);
