/**
 * Proposed editable service categories.
 * Descriptions are general guidance only — confirm availability with the salon.
 * Images in /public/images are PLACEHOLDER stock photos; replace with authentic salon photos.
 */
export const services = [
  {
    id: "box-braids",
    name: "Box Braids",
    description:
      "Classic protective braids with a neat, polished finish for everyday wear or special occasions.",
    image: "/images/box-braids.jpg",
    alt: "Woman wearing long, neatly parted box braids",
  },
  {
    id: "knotless-braids",
    name: "Knotless Braids",
    description:
      "A lighter-feeling braid style with a natural-looking start, ideal for comfortable, long-lasting wear.",
    image: "/images/knotless-braids.jpg",
    alt: "Woman with flowing knotless braids",
  },
  {
    id: "cornrows",
    name: "Cornrows",
    description:
      "Cleanly parted cornrow styles ranging from classic patterns to creative designs.",
    image: "/images/cornrows.jpg",
    alt: "Close view of neatly styled cornrows",
  },
  {
    id: "senegalese-twists",
    name: "Senegalese Twists",
    description:
      "Elegant rope-like twists that offer a soft, protective look with beautiful movement.",
    image: "/images/twists.jpg",
    alt: "Woman with long Senegalese twist style",
  },
  {
    id: "crochet-braids",
    name: "Crochet Braids",
    description:
      "Versatile crochet styles that can deliver length, volume and a wide range of finished looks.",
    image: "/images/crochet-braids.jpg",
    alt: "Woman with voluminous crochet braid style",
  },
  {
    id: "micro-braids",
    name: "Micro Braids",
    description:
      "Fine, detailed braids for clients who prefer a smaller braid size and refined finish.",
    image: "/images/micro-braids.jpg",
    alt: "Woman with fine micro braids",
  },
  {
    id: "kids-braids",
    name: "Kids’ Braids",
    description:
      "Gentle braiding styles for children, designed with comfort and neat results in mind.",
    image: "/images/kids-braids.jpg",
    alt: "Young person with neatly braided hair",
  },
  {
    id: "braided-updos",
    name: "Braided Updos",
    description:
      "Elevated braided styles suitable for events, celebrations and polished everyday looks.",
    image: "/images/braided-updo.jpg",
    alt: "Woman wearing an elegant braided updo",
  },
  {
    id: "touch-ups",
    name: "Touch-Ups and Maintenance",
    description:
      "Refresh and maintain your existing braids so your style continues to look neat and intentional.",
    image: "/images/touch-ups.jpg",
    alt: "Close-up of professionally maintained braided hair",
  },
] as const;
