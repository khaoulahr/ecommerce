import heroimg from "../assets/hero.png";
import sneaker1 from "../assets/s1.png";
import sneaker2 from "../assets/s4.png";
import sneaker3 from "../assets/s6.png";
import sneaker4 from "../assets/s5.png";
import sneaker5 from "../assets/s3.png";
import sneaker6 from "../assets/s7.png";
import Sandales1 from "../assets/sa0.png";
import Sandales2 from "../assets/sa18.jpg";
import Sandales3 from "../assets/sa4.png";
import Sandales4 from "../assets/sa12.jpg";
import Sandales5 from "../assets/sa5.png";
import Sandales6 from "../assets/sa16.jpg";
import Boots0 from "../assets/b2.png";
import Boots1 from "../assets/b1.jpg";
import Boots2 from "../assets/b3.jpg";
import Boots3 from "../assets/b5.jpg";
import Boots4 from "../assets/b9.jpg";
import Boots5 from "../assets/b10.jpg";
import Boots6 from "../assets/b11.png";
import Ballerine1 from "../assets/ba1.png";
import Ballerine2 from "../assets/ba3.png";
import Ballerine3 from "../assets/ba5.png";
import Ballerine4 from "../assets/ba6.png";
import Ballerine5 from "../assets/ba8.png";
import Ballerine6 from "../assets/ba14.png";

import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";
import twitter from "../assets/twitter.svg";
import youtube from "../assets/youtube.svg";
import messenger from "../assets/messenger.svg";

const herodata = {
  title: "",
  subtitle: "CHAUSSURES POUR FEMME",
  img: heroimg,
  btntext: "boutique en ligne",
  sociallinks: [
    { icon: facebook },
    { icon: messenger },
    { icon: instagram },
    { icon: twitter },
    { icon: youtube },
  ],
};

const Sneakers = {
  title: "Baskets",
  items: [
    {
      id: "0M0x1",
      title: "Baskets",
      text: " noir",
      rating: "5+",
      btn: "Acheter",
      img: sneaker1,
      price: "100 ",
      color: "from-gray-900 to-gray-800",
      shadow: "shadow-lg shadow-gray-500",
    },
    {
      id: "0M0x2",
      title: "Baskets",
      text: "rose",
      rating: "5+",
      btn: "Acheter",
      img: sneaker2,
      price: "115",
      color: "from-pink-800 to-pink-700",
      shadow: "shadow-lg shadow-pink-500",
    },
    {
      id: "0M0x3",
      title: "Baskets",
      text: "blanc",
      rating: "4.5",
      btn: "Acheter",
      img: sneaker3,
      price: "90",
      color: "from-gray-300 to-white-500",
      shadow: "shadow-lg shadow-white-500",
    },
    {
      id: "0M0x4",
      title: "Baskets",
      text: "rose poudré",
      rating: "5+",
      btn: "Acheter",
      img: sneaker4,
      price: "125",
      color: "from-pink-300 to-pink-200",
      shadow: "shadow-lg shadow-pink-500",
    },
    {
      id: "0M0x5",
      title: "Baskets",
      text: " ",
      rating: "5",
      btn: "Acheter",
      img: sneaker5,
      price: "105",
      color: "from-yellow-500 to-yellow-500",
      shadow: "shadow-lg shadow-yellow-500",
    },
    {
      id: "0M0x6",
      title: "Baskets",
      text: "gris",
      rating: "4.5",
      btn: "Acheter",
      img: sneaker6,
      price: "90",
      color: "from-gray-800 to-gray-700",
      shadow: "shadow-lg shadow-gray-500",
    },
  ],
};

const Boots = {
  title: "Boots",
  items: [
    {
      id: "0M0x1",
      title: "Boots",
      text: " noir",
      rating: "5+",
      btn: "Acheter",
      img: Boots1,
      price: "100",
      color: "from-gray-900 to-gray-900",
      shadow: "shadow-lg shadow-blue-500",
    },
    {
      id: "0M0x2",
      title: "Boots",
      text: "gris",
      rating: "5+",
      btn: "Acheter",
      img: Boots2,
      price: "110",
      color: "from-gray-500 to-gray-500",
      shadow: "shadow-lg shadow-gray-500",
    },
    {
      id: "0M0x3",
      title: "Boots",
      text: "marron",
      rating: "4.5",
      btn: "Acheter",
      img: Boots3,
      price: "70",
      color: "from-yellow-900 to-yellow-500",
      shadow: "shadow-lg shadow-yello-900",
    },
    {
      id: "0M0x4",
      title: "Boots",
      text: "rouge",
      rating: "5",
      btn: "Acheter",
      img: Boots4,
      price: "90",
      color: "from-red-500 to-red-500",
      shadow: "shadow-lg shadow-red-500",
    },
    {
      id: "0M0x5",
      title: "Boots",
      text: "jaune ",
      rating: "5",
      btn: "Acheter",
      img: Boots5,
      price: "100",
      color: "from-yellow-500 to-yellow-500",
      shadow: "shadow-lg shadow-yellow-300",
    },
    {
      id: "0M0x6",
      title: "Boots",
      text: "doré",
      rating: "5",
      btn: "Acheter",
      img: Boots6,
      price: "100",
      color: "from-yellow-300 to-yellow-100",
      shadow: "shadow-lg shadow-yellow-500",
    },
  ],
};

const Sandales = {
  title: "Sandales",
  items: [
    {
      id: "0M0x1",
      title: "Sandale",
      text: " noir",
      rating: "5",
      btn: "Acheter",
      img: Sandales1,
      price: "60",
      color: "from-gray-900 to-gray-900",
      shadow: "shadow-lg shadow-gray-900",
    },
    {
      id: "0M0x2",
      title: "Sandale",
      text: "bleu",
      rating: "5+",
      btn: "Acheter",
      img: Sandales2,
      price: "80",
      color: "from-blue-700 to-blue-600",
      shadow: "shadow-lg shadow-blue-500",
    },
    {
      id: "0M0x3",
      title: "Sandale",
      text: "rose",
      rating: "5+",
      btn: "Acheter",
      img: Sandales3,
      price: "75",
      color: "from-pink-700 to-pink-600",
      shadow: "shadow-lg shadow-pink-500",
    },
    {
      id: "0M0x4",
      title: "Sandale",
      text: "rouge",
      rating: "4.5",
      btn: "Acheter",
      img: Sandales4,
      price: "55",
      color: "from-red-700 to-red-600",
      shadow: "shadow-lg shadow-red-500",
    },
    {
      id: "0M0x5",
      title: "Sandale",
      text: " vert",
      rating: "5+",
      btn: "Acheter",
      img: Sandales5,
      price: "65",
      color: "from-green-900 to-green-700",
      shadow: "shadow-lg shadow-green-500",
    },
    {
      id: "0M0x6",
      title: "Sandale",
      text: "marron",
      rating: "5",
      btn: "Acheter",
      img: Sandales6,
      price: "65",
      color: "from-yellow-700 to-yellow-700",
      shadow: "shadow-lg shadow-yellow-500",
    },
  ],
};

const Ballerines = {
  title: " Ballerines ",
  items: [
    {
      id: "0M0x1",
      title: "Ballerine",
      text: " noir",
      rating: "4+",
      btn: "Acheter",
      img: Ballerine1,
      price: "30",
      color: "from-gray-900 to-gray-900",
      shadow: "shadow-lg shadow-gray-900",
    },
    {
      id: "0M0x2",
      title: "Ballerine",
      text: "gris",
      rating: "4",
      btn: "Acheter",
      img: Ballerine2,
      price: "25",
      color: "from-gray-500 to-gray-500",
      shadow: "shadow-lg shadow-gray-500",
    },
    {
      id: "0M0x3",
      title: "Ballerine",
      text: "blanc",
      rating: "5",
      btn: "Acheter",
      img: Ballerine3,
      price: "35",
      color: "from-yellow-200 to-yallow-100",
      shadow: "shadow-lg shadow-yellow-500",
    },
    {
      id: "0M0x4",
      title: "Ballerine",
      text: "rouge",
      rating: "4.5",
      btn: "Acheter",
      img: Ballerine4,
      price: "30",
      color: "from-red-700 to-red-600",
      shadow: "shadow-lg shadow-red-500",
    },
    {
      id: "0M0x5",
      title: "Ballerine",
      text: " rose poudré ",
      rating: "5+",
      btn: "Acheter",
      img: Ballerine5,
      price: "40",
      color: "from-pink-400 to-pink-300",
      shadow: "shadow-lg shadow-pink-500",
    },
    {
      id: "0M0x6",
      title: "Ballerine",
      text: "jaune",
      rating: "4+",
      btn: "Acheter",
      img: Ballerine6,
      price: "35",
      color: "from-yellow-500 to-yellow-500",
      shadow: "shadow-lg shadow-yellow-500",
    },
  ],
};

const footerAPI = {
  titles: [
    { title: "NOS SERVICES" },
    { title: "NOUS CONTACTER" },
    { title: "INFORMATIONS" },
  ],
  links: [
    [
      { link: "Informations de livraison" },
      { link: "Suivi de commande" },
      { link: "Paiement sécurisé" },
    ],
    [
      { link: "Service client" },
      { link: "FAQ" },
      { link: "Nos adresses" },
      { link: "Blog" },
    ],
    [
      { link: "Mentions légales" },
      { link: "Conditions générales de vente" },
      { link: "Politique de confidentialité des données" },
    ],
  ],
};

export {
  herodata,
  footerAPI,
  Boots,
  Sneakers,
  Sandales,
  Ballerines,
};
