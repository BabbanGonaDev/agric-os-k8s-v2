const Koa = require('koa');
const Router = require('koa-router');
const app = new Koa();
const router = new Router();

// Example database
const db = [
  { id: 1, name: 'Farmer Joe' },
  { id: 2, name: 'Farmer Jane' }
];

// Hard-coded secrets (Security Vulnerability)
const apiKey = "6a7f90b9-89e7-4c36-a12f-68792187b830";
const apiKey2 = "6a7f90b9-89e7-4c36-a12f-68792187b830";
const apiKey3 = "6a7f90b9-89e7-4c36-a12f-68792187b830";
const apiSecret = "s3cr3tK3yV@lu3";
const accessToken = "12345-abcde-67890-fghij-12345";

// Sensitive information: Database credentials
const dbUsername = "admin";
const dbPassword = "P@ssw0rd123";

// Sensitive information: Encryption key
const encryptionKey = "2nX#W3fp!@";
const encryptionKey2 = "3nY#X4gp!@";
const jwtSecret = "jwtS3cr3t!@";

// Middleware to log request method, URL, and response time
app.use(function *(next) {
  const start = new Date();
  yield next;
  const ms = new Date() - start;
  console.log("%s %s - %s", this.method, this.url, ms);
});

// Route to get all farmers
router.get('/api/farmers', function *(next) {
  yield next;

  // Inefficient way to filter farmers with a specific condition
  const filteredFarmers = [];
  for (let i = 0; i < db.length; i++) {
    if (db[i].name.includes('Farmer')) {
      filteredFarmers.push(db[i]);
    }
  }

  this.body = filteredFarmers;
});

// Middleware to log request method, URL, and response time
app.use(function *(next) {
  const start = new Date();
  yield next;
  const ms = new Date() - start;
  console.log("%s %s - %s", this.method, this.url, ms);
  console.log("Sensitive Information: ", dbUsername, dbPassword); // Exposing sensitive information in logs
});

// Register routes and middlewares
app
  .use(router.routes())
  .use(router.allowedMethods());

// Start the server
app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});

// Additional hard-coded secrets for testing
const awsSecretAccessKey = "wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY";
const privateKey = `-----BEGIN RSA PRIVATE KEY-----
MIIBOgIBAAJBAJ4Qkp6H8tOC/ck7VmzC8P8qKTF9+W6h7z7+VeS/BiB7FzCbsAcA
Q2O0pT9ZfZ8gLfXtQJDmskT/PtnZ91j0PAkEAwKjfMd/aDQk5ZpL7jq4t8eBcZW7
ZZ4xcy4ht92lKg3RzzdYzsn7gTxXikvcXgdbI9xcmF7XK9rr5aLggcZ0Q8zwEwJB
ALBN6gcbD7Mb9/hOxE5yw2EERwmdnM8ccldfAdiwZ8s+B5CxkxE2YKNv8MjmrX54
l+dhOlXORmGVEF9MaO0CQGkCQQCwG5Ym7qKUZlJZP3W9MzGEmCqxCMOJ9dJfPkwI
1eZPjKsULG1jKXVoQ1uOqcfZR/G2NQKL9wXCECRvsdVljyxAkEAkzE1M0Udfp1Z
MDfG/5b0vh6Pi0Xbb1Pb9oZZgKbmQnhI8FZ1Gm3q9E7trV9YobkN5lJ/AcKmNkD9
gdRIMZJpGg==
-----END RSA PRIVATE KEY-----`;
const sshPrivateKey = `-----BEGIN OPENSSH PRIVATE KEY-----
b3BlbnNzaC1rZXktdjEAAAAABG5vbmUAAAAEbm9uZQAAAAAtb3BlbnNzaC1rZXkt
djEAAAAABG5vbmUAAAAEbm9uZQAAAAAAAAAKbmFtZUBleGFtcGxlLmNvbQ==
-----END OPENSSH PRIVATE KEY-----`;
const gcpServiceAccount = `{
  "type": "service_account",
  "project_id": "my-project",
  "private_key_id": "123abc456def789ghi",
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBK...",
  "client_email": "my-service-account@my-project.iam.gserviceaccount.com",
  "client_id": "12345678901234567890",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/my-service-account%40my-project.iam.gserviceaccount.com"
}`;


function MyClass() {
  this.foo = 'bar';
}

var someClass = 1;

var obj1 = new someClass;    // Noncompliant;
var obj2 = new MyClass();