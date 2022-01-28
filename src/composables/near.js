import { ref, onMounted } from "vue";
import { getPets, getAdopters, adopt, addPet } from "../services/near";

export const usePets = () => {
  const pets = ref([]);
  //   const adopters = ref([]);
  const err = ref(null);

  onMounted(async () => {
    try {
      pets.value = await getPets();
      console.log(pets.value);
    } catch (e) {
      err.value = e;
      console.log(e.value);
    }
  });

  const handleAddPet = async (pet) => {
    addPet(pet.value);
  };

  return {
    pets,
    addPet: handleAddPet,
  };
};
