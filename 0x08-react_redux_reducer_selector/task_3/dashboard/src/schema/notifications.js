import notificationData from "../../../../notifications.json";
import { normalize, schema } from "normalizr";

// Define the schema for entities
const user = new schema.Entity("users");
const message = new schema.Entity("messages", {}, { idAttribute: "guid" });
const notification = new schema.Entity("notifications", {
  author: user,
  context: message,
});

// Normalize the data
const normalizedData = normalize(notificationData, [notification]);

// Function to get all notifications by user
export function getAllNotificationsByUser(userId) {
  const notifications = normalizedData.entities.notifications;
  const messages = normalizedData.entities.messages;
  const output = [];

  // Loop through notifications to find those authored by the given user
  for (const id in notifications) {
    if (notifications[id].author === userId) {
      output.push(messages[notifications[id].context]);
    }
  }

  return output;
}

// Export the normalized data
export const normalized = normalizedData;