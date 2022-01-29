import { ref } from "vue"
import { donate, wallet } from "@/services/near"

const isLoading = ref(false)

export const useDonate = () => {
  const accountId = wallet.getAccountId()
  const donation = ref(null)
  const donations = ref(0)
  const err = ref(null)

  const handleDonate = async () => {
    isLoading.value = true
    try {
      await donate(donation.value)
      isLoading.value = false
    } catch (e) {
      err.value = e
      alert(err.value)
      isLoading.value = false
    }
  }

  return {
    accountId,
    isLoading,
    donation,
    donations,
    handleDonate
}
}
