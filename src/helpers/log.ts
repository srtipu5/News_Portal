export function log(message: any, level: "info" | "warn" | "error" = "info"): void {
    const timestamp = new Date().toISOString();
    const formattedMessage = `[${timestamp}] [${level.toUpperCase()}]: ${message}`;
  
    switch (level) {
      case "info":
        console.log(formattedMessage);
        break;
      case "warn":
        console.warn(formattedMessage);
        break;
      case "error":
        console.error(formattedMessage);
        break;
    }
  }
  