/* eslint-disable guard-for-in */
/* eslint-disable no-continue */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-await-in-loop */
/* eslint-disable no-restricted-syntax */
const { Expo } = require("expo-server-sdk");

function notifyGroup(pushTokens, msg) {
  // Create new Expo SDK client
  const expo = new Expo({ accessToken: process.env.EXPO_ACCESS_TOKEN });
  const notifications = [];
  let pnBody;
  if (msg.file) {
    pnBody = `${msg.author} sent a file`;
  } else {
    pnBody = `${msg.author}: ${msg.text}`;
  }
  for (const token of pushTokens) {
    notifications.push({
      to: token,
      sound: "default",
      body: pnBody,
      data: {},
    });
  }
  const chunks = expo.chunkPushNotifications(notifications);
  const tickets = [];
  (async () => {
    // Send the chunks to the Expo push notification service. There are
    // different strategies you could use. A simple one is to send one chunk at a
    // time, which nicely spreads the load out over time:
    for (const chunk of chunks) {
      try {
        const ticketChunk = await expo.sendPushNotificationsAsync(chunk);
        tickets.push(...ticketChunk);
        // NOTE: If a ticket contains an error code in ticket.details.error, you
        // must handle it appropriately. The error codes are listed in the Expo
        // documentation:
        // https://docs.expo.io/push-notifications/sending-notifications/#individual-errors
      } catch (error) {
        console.error(error);
      }
    }
  });
  const receiptIds = [];
  for (const ticket of tickets) {
    // NOTE: Not all tickets have IDs; for example, tickets for notifications
    // that could not be enqueued will have error information and no receipt ID.
    if (ticket.id) {
      receiptIds.push(ticket.id);
    }
  }

  const receiptIdChunks = expo.chunkPushNotificationReceiptIds(receiptIds);
  (async () => {
    // Like sending notifications, there are different strategies you could use
    // to retrieve batches of receipts from the Expo service.
    for (const chunk of receiptIdChunks) {
      try {
        const receipts = await expo.getPushNotificationReceiptsAsync(chunk);

        // The receipts specify whether Apple or Google successfully received the
        // notification and information about an error, if one occurred.
        for (const receiptId in receipts) {
          const { status, message, details } = receipts[receiptId];
          if (status === "ok") {
            continue;
          } else if (status === "error") {
            console.error(
              `There was an error sending a notification: ${message}`,
            );
            if (details && details.error) {
              // The error codes are listed in the Expo documentation:
              // https://docs.expo.io/push-notifications/sending-notifications/#individual-errors
              // You must handle the errors appropriately.
              console.error(`The error code is ${details.error}`);
            }
          }
        }
      } catch (error) {
        console.error(error);
      }
    }
  });
}

module.exports = {
  notifyGroup,
};
