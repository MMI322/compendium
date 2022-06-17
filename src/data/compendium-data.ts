export interface goldBrand {
  brand: string;
  numberName: string;
  probe: string;
  percentage: {
    gold: string;
    silver?: string;
    copper?: string;
  };
  density?: string;
  temperature?: string;
  hardness?: {
    hard?: number;
    soft?: number;
  };
  color?: string;
  imageSrc?: string;
}

export const compendiumData: goldBrand[] = [
  {
    brand: "ЗлСрМ 375-20",
    numberName: "375-20",
    probe: "375",
    percentage: {
      gold: "37,5 - 38,0",
      silver: "1,7 - 2,3",
      copper: "Ост.",
    },
    density: "11,24",
    temperature: "965-985",
    hardness: {
      hard: 235,
      soft: 130,
    },
    color: "Ярко-желтый",
    imageSrc: "/assets/375-20.png",
  },
  {
    brand: "ЗлСрМ 375-100",
    numberName: "375-100",
    probe: "375",
    percentage: {
      gold: "37,5 - 38,0",
      silver: "9,5 - 10,5",
      copper: "Ост.",
    },
  },
  {
    brand: "ЗлСрМ 375-160",
    numberName: "375-160",
    probe: "375",
    percentage: {
      gold: "37,5 - 38,0",
      silver: "15,5 - 16,5",
      copper: "Ост.",
    },
  },
  {
    brand: "ЗлСрМ 375-250",
    numberName: "375-250",
    probe: "375",
    percentage: {
      gold: "37,5 - 38,0",
      silver: "24,5 - 25,5",
      copper: "Ост.",
    },
  },
  {
    brand: "ЗлСрМ 500-100",
    numberName: "500-100",
    probe: "500",
    percentage: {
      gold: "50,0 - 50,5",
      silver: "9,5 - 10,5",
      copper: "Ост.",
    },
  },
  {
    brand: "ЗлСр 585-415",
    numberName: "585-415",
    probe: "585",
    percentage: {
      gold: "58,5 - 59,0",
      silver: "Ост.",
    },
  },
  {
    brand: "ЗлСрМ 585-80",
    numberName: "585-80",
    probe: "585",
    percentage: {
      gold: "58,5 - 59,0",
      silver: "7,5 - 8,5",
      copper: "Ост.",
    },
  },
  {
    brand: "ЗлСрМ 585-200",
    numberName: "585-200",
    probe: "585",
    percentage: {
      gold: "58,5 - 59,0",
      silver: "19,5 - 20,5",
      copper: "Ост.",
    },
  },
  {
    brand: "ЗлСрМ 585-300",
    numberName: "585-300",
    probe: "585",
    percentage: {
      gold: "58,5 - 59,0",
      silver: "29,5 - 30,5",
      copper: "Ост.",
    },
  },
  {
    brand: "ЗлСр 750-250",
    numberName: "750-250",
    probe: "750",
    percentage: {
      gold: "75,0 - 75,5",
      silver: "24,5 - 25,5",
    },
  },
  {
    brand: "ЗлСрМ 750-125",
    numberName: "750-125",
    probe: "750",
    percentage: {
      gold: "75,0 - 75,5",
      silver: "12,0 - 13,0",
      copper: "Ост.",
    },
  },
  {
    brand: "ЗлСрМ 750-150",
    numberName: "750-150",
    probe: "750",
    percentage: {
      gold: "75,0 - 75,5",
      silver: "14,5 - 15,5",
      copper: "Ост.",
    },
  },
  {
    brand: "ЗлСрМ 958-20",
    numberName: "958-20",
    probe: "958",
    percentage: {
      gold: "95,8 - 96,3",
      silver: "1,7 - 2,3",
      copper: "Ост.",
    },
  },
  {
    brand: "Зл 999,9",
    numberName: "999,9",
    probe: "999,9",
    percentage: {
      gold: "99,99",
    },
  },
];

export const compendiumPageData = compendiumData.map((i) => i.numberName);
