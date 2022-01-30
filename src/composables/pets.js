import { ref, onMounted, reactive } from "vue"
import { wallet, getPets, adopt, addPet, getDonations } from "@/services/near"

const showModal = ref(false)
const pets = ref([])

export const usePets = () => {
  const accountId = wallet.getAccountId()
  const err = ref(null)
  const isLoading = ref(false)
  const form = reactive({
    name: "",
    picture: "",
    age: 0,
    breed: "",
    location: "",
  })

  onMounted(async () => {
    isLoading.value = true
    try {
      pets.value = await getPets()
      isLoading.value = false
    } catch (e) {
      err.value = e
      isLoading.value = false
      alert(err.value)
    }
  })

  const toggleModal = () => {
    showModal.value = !showModal.value
  }

  const handleAddPet = async () => {
    const pet = {
      name: form.name.trim(),
      picture: form.picture.trim(),
      age: form.age,
      breed: form.breed.trim(),
      location: form.location.trim(),
    }
    try {
      isLoading.value = true
      await addPet(pet)
      pets.value = await getPets()
      isLoading.value = false
      showModal.value = false
    } catch (e) {
      err.value = e
      isLoading.value = false
      alert(err.value)
    }
  }

  const handleAdopt = async (props) => {
    try {
      isLoading.value = true
      await adopt(props)
      pets.value = await getPets()
      isLoading.value = false
    } catch (e) {
      err.value = e
      isLoading.value = false
      alert(err.value)
    }
  }

  return {
    accountId,
    pets,
    isLoading,
    form,
    showModal,
    toggleModal,
    handleAddPet,
    handleAdopt,
  }
}
