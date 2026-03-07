import { Scheme } from "@/types/scheme"

export async function getSchemes(): Promise<Scheme[]> {

  return [

    {
      id: "1",
      name: "PM-KISAN",
      category: "Financial Support",
      description: "Direct income support of ₹6,000 per year to farmer families",
      benefits: [
        "₹2,000 every 4 months",
        "No application fee",
        "Direct bank transfer"
      ]
    },

    {
      id: "2",
      name: "Pradhan Mantri Fasal Bima Yojana",
      category: "Insurance",
      description: "Crop insurance providing financial support in case of crop failure",
      benefits: [
        "Low premium rates",
        "Pre-sowing to post-harvest coverage",
        "Quick claim settlement"
      ]
    },

    {
      id: "3",
      name: "Soil Health Card Scheme",
      category: "Training & Support",
      description: "Free soil testing with customized fertilizer recommendations",
      benefits: [
        "Free soil analysis",
        "Personalized recommendations",
        "Improves yield"
      ]
    }

  ]

}