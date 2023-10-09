import winston from "winston";

// Define a custom format for console log
const consoleFormat = winston.format.printf(({ level, message, timestamp }) => {
  return `${timestamp} [${level}]: ${message}`;
});

// Create a Winston logger
let logger = winston.createLogger({
  transports: [
    new winston.transports.Console({
      level: process.env.LOG_LEVEL, // Set the log level based on an environment variable
      handleExceptions: true,
      format: winston.format.combine(
        winston.format.timestamp(),
        consoleFormat
      ),
    }),
  ],
});

// Print any unknown error
logger.on("error", (error) => {
  console.log("Unknown error in Winston logger");
  console.log(error.message);
});

export default logger;
