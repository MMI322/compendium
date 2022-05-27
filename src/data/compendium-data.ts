export interface goldBrand {
    brand: string
    probe: string
    percentage: {
        gold: string
        silver?: string
        platinum?: string
        palladium?: string
        nickel?: string
        copper?: string
        zinc?: string
        cadmium?: string
    }
    density?: string
    temperature?: string
    hardness?: {
        hard?: number
        soft?: number 
    } 
    color?: string
}

export const compendiumData: goldBrand[] = [
    {
        brand: "ЗлСрМ 375-20",
        probe: "375",
        percentage: {
            gold: "37,5 - 38,0",
            silver: "1,7 - 2,3",
            copper: "Ост."
        },
        density: "11,24",
        temperature: "965-985",
        hardness: {
            hard: 235,
            soft: 130
        },
        color: "Ярко-желтый"
    },
    {
        brand: "ЗлСрМ 375-100",
        probe: "375",
        percentage: {
            gold: "37,5 - 38,0",
            silver: "9,5 - 10,5",
            copper: "Ост."
        }
        
    },
    {
        brand: "ЗлСрМ 375-160",
        probe: "375",
        percentage: {
            gold: "37,5 - 38,0",
            silver: "15,5 - 16,5",
            copper: "Ост."
        }
        
    },
    {
        brand: "ЗлСрМ 375-250",
        probe: "375",
        percentage: {
            gold: "37,5 - 38,0",
            silver: "24,5 - 25,5",
            copper: "Ост."
        }
        
    },
    {
        brand: "ЗлСрПдМ 375-100-38",
        probe: "375",
        percentage: {
            gold: "37,5 - 38,0",
            silver: "9,5 - 10,5",
            copper: "Ост.",
            palladium: "3,5 - 4,1"
        }
    },
    {
        brand: "ЗлСрМ 500-100",
        probe: "500",
        percentage: {
            gold: "50,0 - 50,5",
            silver: "9,5 - 10,5",
            copper: "Ост.",
        }
    },
    {
        brand: "ЗлСр 585-415",
        probe: "585",
        percentage: {
            gold: "58,5 - 59,0",
            silver: "Ост."
        }
    },
    {
        brand: "ЗлСрМ 585-80",
        probe: "585",
        percentage: {
            gold: "58,5 - 59,0",
            silver: "7,5 - 8,5",
            copper: "Ост."
        }
    },
    {
        brand: "ЗлСрМ 585-200",
        probe: "585",
        percentage: {
            gold: "58,5 - 59,0",
            silver: "19,5 - 20,5",
            copper: "Ост."
        }
    },
    {
        brand: "ЗлСрМ 585-300",
        probe: "585",
        percentage: {
            gold: "58,5 - 59,0",
            silver: "29,5 - 30,5",
            copper: "Ост."
        }
    },
    {
        brand: "ЗлСрПд 585-225-160",
        probe: "585",
        percentage: {
            gold: "58,5 - 59,0",
            silver: "25,0 - 26,0",
            palladium: "Ост."
        }
    },
    {
        brand: "ЗлСрПдЦ 585-287-100",
        probe: "585",
        percentage: {
            gold: "58,5 - 59,0",
            silver: "28,2 - 29,2",
            palladium: "9,5 - 10,5",
            zinc: "Ост."
        }
    },
    {
        brand: "ЗлСрПдКД 585-280-100",
        probe: "585",
        percentage: {
            gold: "58,5 - 59,0",
            silver: "27,5 - 28,5",
            palladium: "9,5 - 10,5",
            cadmium: "Ост."
        }
    },
    {
        brand: "ЗлСрНЦМ 585-80-8,2-2,5",
        probe: "585",
        percentage: {
            gold: "58,5 - 59,0",
            silver: "7,5 - 8,5",
            nickel: "7,7 - 8,7",
            copper: "Ост.",
            zinc: "2,2 - 2,8",
        }
    },
    {
        brand: "ЗлНЦМ 585-12,5-4",
        probe: "585",
        percentage: {
            gold: "58,5 - 59,0",
            nickel: "12,0 - 13,0",
            copper: "Ост.",
            zinc: "3,6 - 4,4",
        }
    },
    {
        brand: "ЗлСр 750-250",
        probe: "750",
        percentage: {
            gold: "75,0 - 75,5",
            silver: "24,5 - 25,5"
        }
    },
    {
        brand: "ЗлСрМ 750-125",
        probe: "750",
        percentage: {
            gold: "75,0 - 75,5",
            silver: "12,0 - 13,0",
            copper: "Ост."
        }
    },
    {
        brand: "ЗлСрМ 750-150",
        probe: "750",
        percentage: {
            gold: "75,0 - 75,5",
            silver: "14,5 - 15,5",
            copper: "Ост."
        }
    },
    {
        brand: "ЗлСрНЦ 750-150-7,5",
        probe: "750",
        percentage: {
            gold: "75,0 - 75,5",
            silver: "14,5 - 15,5",
            nickel: "7,0 - 8,0",
            zinc: "Ост."
        }
    },
    {
        brand: "ЗлСрПд 750-100-150",
        probe: "750",
        percentage: {
            gold: "75,0 - 75,5",
            silver: "14,5 - 15,5",
            palladium: "Ост."
        }
    },
    {
        brand: "ЗлСрПлМ 750-80-90",
        probe: "750",
        percentage: {
            gold: "75,0 - 75,5",
            silver: "7,5 - 8,5",
            platinum: "7,5 - 9,5",
            copper: "Ост."
        }
    },
    {
        brand: "ЗлСрПдН 750-90-140",
        probe: "750",
        percentage: {
            gold: "75,0 - 75,5",
            silver: "8,5 - 9,5",
            palladium: "13,5 - 14,5",
            nickel: "Ост."
        }
    },
    {
        brand: "ЗлСрПдН 750-70-140",
        probe: "750",
        percentage: {
            gold: "75,0 - 75,5",
            silver: "6,5 - 7,5",
            palladium: "13,5 - 14,5",
            nickel: "Ост."
        }
    },
    {
        brand: "ЗлСрПдНКд 750-90-85-4",
        probe: "750",
        percentage: {
            gold: "75,0 - 75,5",
            silver: "8,5 - 9,5",
            palladium: "8,0 - 9,0",
            nickel: "3,5 - 4,5",
            cadmium: "Ост."
        }
    },
    {
        brand: "ЗлНЦМ 750-7,5-2,5",
        probe: "750",
        percentage: {
            gold: "75,0 - 75,5",
            nickel: "7,0 - 8,0",
            copper: "Ост.",
            zinc: "2,1 - 2,9"
        }
    },
    {
        brand: "ЗлСрМ 958-20",
        probe: "958",
        percentage: {
            gold: "95,8 - 96,3",
            silver: "1,7 - 2,3",
            copper: "Ост."
        }
    },
    {
        brand: "Зл 999,9",
        probe: "999,9",
        percentage: {
            gold: "99,99"
        }
    }
]