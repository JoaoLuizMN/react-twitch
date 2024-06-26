import { ChannelProps } from "./components/sidebar/Channel";

export const ICON_SIZES = { xsmall: 15, small: 20, medium: 25, large: 30 };

export const IMAGES_SIZES = {
  small: 200,
  medium: 600,
  large: 900,
};

export const channels: ChannelProps[] = [
  {
    image: "/images/csharp.png",
    name: "João",
    category: "Programming",
    viewers: 3500,
    isLive: true,
    description: "Salve galera sejam todos bem-vindos ao meu canal",
    title: "Tudojunto",
  },
  {
    image: "/images/Angular.png",
    name: "Pedro",
    category: "Dark Souls",
    viewers: 6700,
    isLive: true,
    description: "10k delikes",
    title: "Tudojunto",
  },
  {
    image: "/images/Crow.jpg",
    name: "Alfonço",
    category: "Kirby",
    viewers: 101000,
    isLive: true,
    description: "10k delikes",
    title: "Tudojunto",
  },
  {
    image: "/images/django-logo.png",
    name: "Mercedes",
    category: "Dragons Dogma",
    viewers: 6000,
    isLive: true,
    description: "10k delikes",
    title: "Tudojunto",
  },
  {
    image: "/images/React.png",
    name: "Matheus",
    category: "IRL",
    viewers: 7500,
    isLive: true,
    description: "10k delikes",
    title: "Tudojunto",
  },
  {
    image: "/images/Haskell-Logo.png",
    name: "Fasmatal",
    category: "EuroTruck",
    viewers: 700,
    isLive: true,
    description: "Live Até o gaz acabar",
    title: "Rodovia sem buraco?",
  },
  {
    image: "/images/r.jpg",
    name: "Emannuuuuuuueul",
    category: "IRL",
    viewers: 600,
    isLive: false,
    description: "10k delikes",
    title: "Tudojunto",
  },
];
