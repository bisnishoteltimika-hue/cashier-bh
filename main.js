const {app,BrowserWindow,Menu}=require('electron');
const path=require('path');
// DevTools dimatikan supaya data/login tidak bisa diutak-atik dari konsol.
// Untuk debugging jalankan: npx electron . --dev
const dev=process.argv.includes('--dev');
app.whenReady().then(()=>{
  Menu.setApplicationMenu(null);
  new BrowserWindow({
    width:1280,height:800,minWidth:520,minHeight:560,
    icon:path.join(__dirname,'icon.png'),
    backgroundColor:'#0f0d1a',
    webPreferences:{devTools:dev}
  }).loadFile('index.html');
});
app.on('window-all-closed',()=>app.quit());
