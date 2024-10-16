var {existsSync:exists,writeFileSync:write,mkdirSync:mkdir,readdirSync:readdir,statSync:stat,unlinkSync:del,readFileSync:read} = require('fs');
var {join,parse} = require('path');
var {execSync:exec} = require('child_process');
var readline = require('readline');
var {log} = console;

// config
STORE_DIR = 'C:/Users/NYC/.showtracker';
OUTPUT_SHORTCUT_DIR = '$env:USERPROFILE/desktop/'
OUTPUT_SHORTCUT_CLI = 'C:/Program Files/DAUM/PotPlayer/PotPlayerMini64.exe';
OUTPUT_SHORTCUT_NAME_DEFAULT = 'watch';

// setup
var store = STORE_DIR;
if (!exists(store)) mkdir(store);
var showDirLink = store+'/showDirLink';
var showDirPath = store+'/showDirPath.txt';
var shortcutName = store+'/shortcutName.txt';

// set up currently watching show
var [showDir, shctName=OUTPUT_SHORTCUT_NAME_DEFAULT] = process.argv.slice(2);
if (showDir) {
	write(showDirPath, showDir);
	write(shortcutName, shctName);
	var showDirLinkWin = join(showDirLink); // join() is used to get windows-style path
	if (exists(showDirLink)) exec(`rmdir ${join(showDirLinkWin)} /s/q`);
	exec(`mklink /d "${showDirLinkWin}" "${showDir}"`);
}

// abort if no current show is set up
if (!exists(showDirLink)) {
	log('');
	log('Show directory has not been set!');
	log('First, set up a folder as currently watching show.');
	log('e.g. `node . "D:\\The Americans\\Season 1"');
	return;
}

(async () => {
// ask user for episode number and time
var [markEpisode, markTime] = await promptForUserInput();
markEpisode = +markEpisode;
if (!markEpisode) markEpisode = 1;
if (!markTime) markTime = '00:00:00';




// start main operation
dir = showDirLink;
	
files = readdir(dir).filter(i =>
	stat(join(dir,i)).isFile() &&
	['.mkv','.mp4','.avi'].includes(parse(i).ext)
);

filenamesByEpisode = new Map(files.map(filename => {
	var [,mid] = filename.split(' - ');
	var [,ep] = mid.split('x');
	if (/-/.test(ep)) ep = ep.split('-')[0];
	return [+ep, filename];
}));

selectedEpisodeFilename = filenamesByEpisode.get(markEpisode);
if (!selectedEpisodeFilename) {
	var possibleEpisodes = [...filenamesByEpisode.keys()];
	log(`
No such episode exists!
Episodes are:
    ${ possibleEpisodes.join(',') }
`);
	return;
}
outputShortcutCliArgs = `""${dir}/${selectedEpisodeFilename}"" /seek=${markTime}`; // quotes must be exactly like this
outputShortcutName = read(shortcutName, 'utf8');
outputShortcutPath = `${OUTPUT_SHORTCUT_DIR}/${outputShortcutName}.lnk`; // executes in powershell

// must create .ps file first, cuz invoking `powershell -c "..."` is not possible due to escaping issue
psContent = `
$s = (New-Object -COM WScript.Shell).CreateShortcut("${outputShortcutPath}");
$s.TargetPath = "${OUTPUT_SHORTCUT_CLI}";
$s.Arguments = "${outputShortcutCliArgs}";
$s.Save();
`;

psFile = 'script.ps1';
write(psFile, psContent);
exec(`powershell -File ${psFile}`);
del(psFile);

log(`
Shortcut created:
    Show:      "${read(showDirPath,'utf8')}"
    Episode:   "${selectedEpisodeFilename}"
    Timeline:  "${markTime}" 
`);

})();




function promptForUserInput() { return new Promise(resolve => {
	var rl = readline.createInterface({input:process.stdin, output:process.stdout});
	var showname = parse(read(showDirPath,'utf8')).base;
	log('You are currently watching:', showname);
	var q1 = 'Episode number: ';
	var q2 = 'Time hhmmss:    ';
	rl.question(q1, episode => {
		if (!episode) episode = 1;
		rl.question(q2, time => {
			if (!time) time = '000000';
			time = [[-6,-4],[-4,-2],[-2]].map(i=>(i=time.slice(...i),i?i<10?'0'+i:i:'00')).join(':');
			rl.close();
			resolve([episode, time, shctName]);
		});
	});
})}


/** usage

node . "D:\TVShow\The Wire\Season 1"

node .
	Episode number: 2
	Time hhmmss:    2212

node .
	Episode number: 4
	Time hhmmss:    3701

*/
