function adsBrain(data) {
  const { business, goal, budget } = data;

  let result = {};

  // RESTAURANT
  if (business === "restaurant") {
    if (goal === "whatsapp") {
      result = {
        campaign: "Click to WhatsApp",
        audience: "3-5 KM radius",
        creative: "Food + Offer",
        timing: "12-3 PM & 6-10 PM",
      };
    }
  }

  // SCHOOL
  if (business === "school") {
    result = {
      campaign: "Lead Generation",
      audience: "Parents 25-45",
      creative: "Child Future",
      timing: "Morning + Evening",
    };
  }

  // BUDGET RULE
  if (budget < 500) {
    result.setup = "Single Ad Setup";
  } else if (budget < 1500) {
    result.setup = "Test + Main Ads";
  } else {
    result.setup = "Scaling Setup";
  }

  return result;
}

module.exports = adsBrain;
