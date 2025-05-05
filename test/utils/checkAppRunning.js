const fs = require('fs');
const path = require('path');
const wdio = require('webdriverio');

(async () => {
  const opts = {
    path: '/wd/hub',
    port: 4723,
    capabilities: {
      platformName: 'Android',
      deviceName: 'emulator-5554',
      platformVersion: '11.0',
      automationName: 'UiAutomator2',
      appPackage: 'com.wdiodemoapp',
      appActivity: 'com.wdiodemoapp.MainActivity',
      noReset: true,
    }
  };

  const client = await wdio.remote(opts);
  const currentActivity = await client.getCurrentActivity();
  console.log(`📱 Activity atual: ${currentActivity}`);

  if (currentActivity !== 'com.wdiodemoapp.MainActivity') {
    console.error(`❌ App NÃO está na activity esperada. Obtido: ${currentActivity}`);

    // Criar diretório se não existir
    const screenshotDir = path.resolve(__dirname, '../../screenshots');
    if (!fs.existsSync(screenshotDir)) {
      fs.mkdirSync(screenshotDir);
    }

    // Tirar screenshot
    const screenshot = await client.takeScreenshot();
    const filePath = path.join(screenshotDir, `invalid-activity-${Date.now()}.png`);
    fs.writeFileSync(filePath, screenshot, 'base64');
    console.log(`📸 Screenshot salvo em: ${filePath}`);

    await client.deleteSession();
    process.exit(1); // Falha a pipeline
  }

  console.log('✅ App está aberto na activity esperada.');
  await client.deleteSession();
})();
