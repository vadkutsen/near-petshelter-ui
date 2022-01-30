import { ref, onMounted } from "vue"
import { donate, getDonations, wallet } from "@/services/near"

const isLoading = ref(false)
const donations = ref(0)

export const useDonate = () => {
  const accountId = wallet.getAccountId()
  const donation = ref(null)
  const err = ref(null)

  onMounted(async () => {
    try {
      donations.value = await getDonations()
    } catch (e) {
      err.value = e
      alert(err.value)
    }
  })


  const handleDonate = async () => {
    try {
      isLoading.value = true
      await donate(donation.value)
      donations.value = await getDonations()
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
