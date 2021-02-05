export const updateFoodtruckForm = (formData) => {
  return {
    type: "UPDATE_FOODTRUCK_FORM",
    formData,
  };
};

export const resetFoodtruckForm = () => {
  return {
    type: "RESET_FOODTRUCK_FORM",
  };
};
