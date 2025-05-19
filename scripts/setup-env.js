const fs = require('fs');
const path = require('path');

// Check if .env file exists
const envPath = path.join(__dirname, '..', '.env');
if (!fs.existsSync(envPath)) {
  console.log('Creating .env file...');
  fs.writeFileSync(envPath, `# Google OAuth Credentials
GOOGLE_CLIENT_ID=your-client-id
GOOGLE_CLIENT_SECRET=your-client-secret
`);
  console.log('Created .env file. Please update it with your actual credentials.');
} else {
  console.log('.env file already exists.');
}

// Check if environment variables are set
const requiredVars = ['GOOGLE_CLIENT_ID', 'GOOGLE_CLIENT_SECRET'];
const missingVars = requiredVars.filter(varName => !process.env[varName]);

if (missingVars.length > 0) {
  console.log('Warning: The following environment variables are not set:');
  missingVars.forEach(varName => console.log(`- ${varName}`));
  console.log('\nPlease set these variables in your .env file or environment.');
} 