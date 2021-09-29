import { ref, onMounted } from "vue";
import {
    getBalance,
    getRecipients,
    getMessages,
    sendMessage
  } from "../services/near";

  export const useRecipients = () => {
      const recipients = ref([]);
      const messages = ref([]);
      const balance = ref(0);
      const err = ref(null);

      onMounted(async () => {
          try {
              recipients.value = await getRecipients()
              messages.value = await getMessages()
          }
          catch (e) {
              err.value = e;
              console.log(e.value);
          }
      })

      const handleSendMessage = async ({message,anonymous,attachedDeposit}) => {
          sendMessage({message,anonymous,attachedDeposit});
      };

      const handleGetBalance = ({accountName}) => {
           return getBalance({accountName})
      }

      return {
          recipients,
          messages,
          getBalance:handleGetBalance,
          sendMessage:handleSendMessage,
      };
  };