const { exec } = require('child_process');

// Comando a ejecutar
const command = 'npx json-server --watch db.json --port 3001';

// Ejecutar el comando
const child = exec(command);

// Manejar salida estándar
child.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});

// Manejar salida de error
child.stderr.on('data', (data) => {
  console.error(`stderr: ${data}`);
});

// Manejar el cierre del proceso
child.on('close', (code) => {
  console.log(`child process exited with code ${code}`);
});
