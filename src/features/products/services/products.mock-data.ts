import type {
  Product,
  ProductOption,
} from "@/features/products/types/product.types";

const volumeOption: ProductOption = {
  id: "volume",
  name: "Select Volume",
  values: ["30 ml", "50 ml", "100 ml"],
  defaultValue: "100 ml",
};

const giftWrappingOption: ProductOption = {
  id: "giftWrapping",
  name: "Complimentary Signature Gift Wrapping",
  values: ["No", "Yes"],
  defaultValue: "No",
};

function volumePrices(basePrice: number): Record<string, number> {
  return {
    "30 ml": Math.round(basePrice * 0.64),
    "50 ml": Math.round(basePrice * 0.84),
    "100 ml": basePrice,
  };
}

export const mockProducts: Product[] = [
  {
    id: "fleur-de-lune",
    name: "Fleur de Lune",
    description:
      "A luminous floral composition that opens with moonlit jasmine and settles into a veil of white musk.",
    notes: "Floral / Jasmine & White Musk",
    price: 195,
    images: [
      "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1615634260167-c8cdede054de?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=800&q=80",
    ],
    category: "pure-extractions",
    scentFamily: "floral",
    occasion: "personal-use",
    options: [volumeOption, giftWrappingOption],
    volumePrices: volumePrices(195),
    availableInAtelier: true,
    scentAnatomy: {
      story:
        "Fleur de Lune blooms at dusk, wrapping the skin in jasmine petals before drying down to a musky, lunar glow.",
      topNotes: "Neroli, Pear Blossom",
      heartNotes: "Jasmine Sambac, Magnolia",
      baseNotes: "White Musk, Soft Cedar",
    },
  },
  {
    id: "santal-parchment",
    name: "Santal Parchment",
    description:
      "Santal Parchment wraps around the skin like vintage vellum paper. It opens with bright top notes, shifting to clean papyrus and warm, rich sandalwood that dry down into dry cardamom and amber.",
    notes: "Woody / Sandalwood & Cardamom",
    price: 220,
    images: [
      "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1615634260167-c8cdede054de?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1523293182086-7651a49978fa?auto=format&fit=crop&w=800&q=80",
    ],
    category: "pure-extractions",
    scentFamily: "woody",
    occasion: "evening",
    options: [volumeOption, giftWrappingOption],
    volumePrices: { "30 ml": 140, "50 ml": 185, "100 ml": 220 },
    availableInAtelier: true,
    scentAnatomy: {
      story:
        "Santal Parchment wraps around the skin like vintage vellum paper. It opens with bright top notes, shifting to clean papyrus and warm, rich sandalwood that dry down into dry cardamom and amber.",
      topNotes: "Sicilian Bergamot, Pink Pepper",
      heartNotes: "Egyptian Jasmine Sambac, Papyrus",
      baseNotes: "West Indian Sandalwood, Cardamom, Amber",
    },
  },
  {
    id: "noir-cocoon",
    name: "Noir Cocoon",
    description:
      "An oriental blend of tobacco and amber that settles into a nocturnal, velvet-warm trail.",
    notes: "Oriental / Tobacco & Amber",
    price: 240,
    images: [
      "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1615634260167-c8cdede054de?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1523293182086-7651a49978fa?auto=format&fit=crop&w=800&q=80",
    ],
    category: "private-reserve",
    scentFamily: "oriental",
    occasion: "wedding",
    options: [volumeOption, giftWrappingOption],
    volumePrices: volumePrices(240),
    availableInAtelier: true,
    scentAnatomy: {
      story:
        "Noir Cocoon unfolds like evening silk: smoky tobacco leaf, molten amber, and a quiet pulse of spice.",
      topNotes: "Bergamot, Cinnamon Bark",
      heartNotes: "Tobacco Blossom, Rose Absolute",
      baseNotes: "Amber, Labdanum, Tonka",
    },
  },
  {
    id: "sol-dor",
    name: "Sol d'Or",
    description:
      "A fresh coastal blend of bergamot and sea salt, bright as late-afternoon light on water.",
    notes: "Fresh / Bergamot & Sea Salt",
    price: 185,
    images: [
      "https://images.unsplash.com/photo-1523293182086-7651a49978fa?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1615634260167-c8cdede054de?auto=format&fit=crop&w=800&q=80",
    ],
    category: "pure-extractions",
    scentFamily: "fresh",
    occasion: "personal-use",
    options: [volumeOption, giftWrappingOption],
    volumePrices: volumePrices(185),
    availableInAtelier: true,
    scentAnatomy: {
      story:
        "Sol d'Or is a sunlit mineral breeze: citrus spray, sea salt, and a golden dry-down of warm woods.",
      topNotes: "Bergamot, Sea Spray",
      heartNotes: "Neroli, Driftwood",
      baseNotes: "White Amber, Vetiver",
    },
  },
  {
    id: "atelier-oud",
    name: "Atelier Oud",
    description:
      "Rich oud deepened with saffron, composed for long evenings and private rooms.",
    notes: "Woody / Rich Oud & Saffron",
    price: 310,
    images: [
      "https://images.unsplash.com/photo-1615634260167-c8cdede054de?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1523293182086-7651a49978fa?auto=format&fit=crop&w=800&q=80",
    ],
    category: "atelier-oils",
    scentFamily: "woody",
    occasion: "gift-sets",
    options: [volumeOption, giftWrappingOption],
    volumePrices: volumePrices(310),
    availableInAtelier: true,
    scentAnatomy: {
      story:
        "Atelier Oud is a concentrated resinous signature: saffron heat over smoldering woods and dark balsams.",
      topNotes: "Saffron, Pink Pepper",
      heartNotes: "Oud, Rose Otto",
      baseNotes: "Patchouli, Ambergris Accord",
    },
  },
  {
    id: "rose-absolute",
    name: "Rose Absolute",
    description:
      "Damask rose balanced with cedar for a floral that feels architectural rather than sweet.",
    notes: "Floral / Damask Rose & Cedar",
    price: 205,
    images: [
      "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1615634260167-c8cdede054de?auto=format&fit=crop&w=800&q=80",
    ],
    category: "private-reserve",
    scentFamily: "floral",
    occasion: "birthday",
    options: [volumeOption, giftWrappingOption],
    volumePrices: volumePrices(205),
    availableInAtelier: true,
    scentAnatomy: {
      story:
        "Rose Absolute is a cultivated bloom: dewy petals, cool cedar, and a lingering powder of musk.",
      topNotes: "Litchi, Pink Pepper",
      heartNotes: "Damask Rose, Peony",
      baseNotes: "Cedar, Soft Musk",
    },
  },
];
