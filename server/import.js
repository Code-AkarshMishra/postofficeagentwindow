const path = require("path");
const mongoose = require("mongoose");
require("dotenv").config();

const { importCustomersFromFile } = require("./utils/customerImport");

async function main() {
  const filePath = path.resolve(process.argv[2] || path.join(__dirname, "data.json"));

  await mongoose.connect(process.env.MONGO_URI);

  const result = await importCustomersFromFile(filePath);

  console.log("Import complete");
  console.log(`File: ${result.file}`);
  console.log(`Rows: ${result.rows}`);
  console.log(`Valid customers: ${result.valid}`);
  console.log(`Inserted: ${result.inserted}`);
  console.log(`Updated: ${result.updated}`);

  await mongoose.disconnect();
}

main()
  .then(() => process.exit(0))
  .catch(async (err) => {
    console.error("Import failed:", err.message);
    await mongoose.disconnect();
    process.exit(1);
  });
