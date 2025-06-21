export const general_questions = [
  {
    "id": 1,
    "question": "Nombre de punto de venta",
    "type": "text",
    "section": "informacion_general"
  },
  {
    "id": 2,
    "question": "Central de abastos",
    "type": "single-choice",
    "options": [
      "ECATEPEC",
      "IZTAPALAPA",
      "MERCED",
      "ATIZAPAN",
      "TULTITLAN",
      "TLALNEPANTLA",
      "PUEBLA",
      "LEON",
      "MERCADO ESTRELLA",
      "MORELIA",
      "IRAPUATO",
      "MONTERREY"
    ],
    "section": "informacion_general"
  },
  {
    "id": 3,
    "question": "Ubicación",
    "type": "single-choice",
    "options": [
      "CDMX",
      "PUEBLA",
      "LEON",
      "MORELIA",
      "IRAPUATO",
      "MONTERREY"
    ],
    "section": "informacion_general"
  },
  {
    "id": 4,
    "question": "Tipo de cliente",
    "type": "single-choice",
    "options": [
      "CREMERIA",
      "ABARROTE",
      "CASH AND CARRY"
    ],
    "section": "informacion_general"
  }
]

export const analisis_de_penetracion_questions = [
  {
    "id": 5,
    "question": "¿Tienen la categoria de Quesos?",
    "type": "single-choice",
    "options": ["SI", "NO"],
    "section": "analisis_de_penetracion"
  },
  {
    "id": 6,
    "question": "¿Qué tipo de queso manejan?",
    "type": "multi-choice",
    "options": [
      "Quesos naturales (Ej: Fresco, Panela, Oaxaca, Manchego)",
      "Quesos de imitación (Ej: Tipo Mozzarella, Tipo Manchego, Tipo Panela)",
      "Quesos procesados (Ej: Amarillo tipo americano, Queso para hamburguesa)",
      "Quesos veganos (Ej: Queso de almendra, Queso de coco, Queso de anacardo)",
      "Otros"
    ],
    "section": "analisis_de_penetracion"
  },
  {
    "id": 7,
    "question": "¿Qué porcentaje (%) le asignarías a cada tipo de queso? (La suma debe ser 100%)",
    "type": "percentages-sum-100",
    "options": [
      "Quesos naturales (Ej: Fresco, Panela, Oaxaca, Manchego)",
      "Quesos de imitación (Ej: Tipo Mozzarella, Tipo Manchego, Tipo Panela)",
      "Quesos procesados (Ej: Amarillo tipo americano, Queso para hamburguesa)",
      "Quesos veganos (Ej: Queso de almendra, Queso de coco, Queso de anacardo)",
      "Otros"
    ],
    "section": "analisis_de_penetracion"
  },
  {
    "id": 8,
    "question": "¿Cuáles son los 5 quesos con mayor venta? (Ordena de mayor a menor)",
    "type": "ordered-list",
    "count": 5,
    "options": [
      "PANELA",
      "OAXACA",
      "MANCHEGO",
      "AMARILLO REBANADA",
      "AMARILLO LIQUIDO",
      "MOZZARELLA"
    ],
    "section": "analisis_de_penetracion"
  },
  {
    "id": 9,
    "question": "¿Qué porcentaje (%) le asignas al tipo de cliente que te compra quesos? (La suma debe ser 100%)",
    "type": "percentages-sum-100",
    "options": [
      "Comerciante (tienditas, mercados)",
      "Restaurantes o fondas económicas",
      "Otros"
    ],
    "section": "analisis_de_penetracion"
  },
  {
    "id": 10,
    "question": "¿Quién abastece el inventario?, ¿A quién le compras?",
    "type": "multi-choice",
    "options": [
      "Directo a la marca",
      "Mayorista",
      "Distribuidor",
      "Club de precios"
    ],
    "section": "analisis_de_penetracion"
  }
]

export const analisis_de_las_7ps_questions = [
  {
    "id": 11,
    "question": "¿Hay queso con grasa animal y grasa vegetal (imitación) de la misma marca del mismo tipo de quesos (Panela, Oaxaca, Manchego, Amarillo rebanada y liquido, Mozzarella)?",
    "type": "single-choice",
    "options": ["SI", "NO"],
    "section": "analisis_de_las_7ps"
  },
  {
    "id": 12,
    "question": "¿Qué porcentaje (%) del total de quesos es queso imitación?",
    "type": "number",
    "suffix": "%",
    "max": 100,
    "section": "analisis_de_las_7ps"
  },
  {
    "id": 13,
    "question": "¿Cuál es el precio promedio por Kg de Queso Panela NO IMITACIÓN?",
    "type": "number",
    "section": "analisis_de_las_7ps"
  },
  {
    "id": 14,
    "question": "¿Qué rango de precio por kg tiene mayor rotación en quesos de imitación Tipo Panela?",
    "type": "single-choice",
    "options": ["$20-$40", "$40-$60", "$60-$80", "Más de $80"],
    "section": "analisis_de_las_7ps"
  },
  {
    "id": 15,
    "question": "¿Cuál es el precio promedio por Kg de Queso Oaxaca NO IMITACIÓN?",
    "type": "number",
    "section": "analisis_de_las_7ps"
  },
  {
    "id": 16,
    "question": "¿Qué rango de precio por kg tiene mayor rotación en quesos de imitación Tipo Oaxaca?",
    "type": "single-choice",
    "options": ["$20-$40", "$40-$60", "$60-$80", "Más de $80"],
    "section": "analisis_de_las_7ps"
  },
  {
    "id": 17,
    "question": "¿Cuál es el precio promedio por Kg de Queso Manchego NO IMITACIÓN?",
    "type": "number",
    "section": "analisis_de_las_7ps"
  },
  {
    "id": 18,
    "question": "¿Qué rango de precio por kg tiene mayor rotación en quesos de imitación Tipo Manchego?",
    "type": "single-choice",
    "options": ["$20-$40", "$40-$60", "$60-$80", "Más de $80"],
    "section": "analisis_de_las_7ps"
  },
  {
    "id": 19,
    "question": "¿Cuál es el precio promedio por Kg de Queso Amarillo rebanada NO IMITACIÓN?",
    "type": "number",
    "section": "analisis_de_las_7ps"
  },
  {
    "id": 20,
    "question": "¿Qué rango de precio por kg tiene mayor rotación en quesos de imitación Tipo Amarillo rebanada?",
    "type": "single-choice",
    "options": ["$20-$40", "$40-$60", "$60-$80", "Más de $80"],
    "section": "analisis_de_las_7ps"
  },
  {
    "id": 21,
    "question": "¿Cuál es el precio promedio por Kg de Queso Amarillo Líquido NO IMITACIÓN?",
    "type": "number",
    "section": "analisis_de_las_7ps"
  },
  {
    "id": 22,
    "question": "¿Qué rango de precio por kg tiene mayor rotación en quesos de imitación Tipo Amarillo Líquido?",
    "type": "single-choice",
    "options": ["$20-$40", "$40-$60", "$60-$80", "Más de $80"],
    "section": "analisis_de_las_7ps"
  },
  {
    "id": 23,
    "question": "¿Cuál es el precio promedio por Kg de Queso Mozzarella o para pizza NO IMITACIÓN?",
    "type": "number",
    "section": "analisis_de_las_7ps"
  },
  {
    "id": 24,
    "question": "¿Qué rango de precio por kg tiene mayor rotación en quesos de imitación Tipo Mozzarella o para pizzas?",
    "type": "single-choice",
    "options": ["$20-$40", "$40-$60", "$60-$80", "Más de $80"],
    "section": "analisis_de_las_7ps"
  },
  {
    "id": 25,
    "question": "¿Qué tipo de formatos ofrecen en queso tipo Panela?",
    "type": "multi-choice",
    "options": [
      "Paquete mayor a 2 kg.",
      "Paquete individual.",
      "Venta Detalle o granel."
    ],
    "section": "analisis_de_las_7ps"
  },
  {
    "id": 26,
    "question": "¿Qué tipo de formatos ofrecen en queso tipo Oaxaca?",
    "type": "multi-choice",
    "options": [
      "Paquete mayor a 2 kg.",
      "Paquete individual.",
      "Venta Detalle o granel."
    ],
    "section": "analisis_de_las_7ps"
  },
  {
    "id": 27,
    "question": "¿Qué tipo de formatos ofrecen en queso tipo Manchego?",
    "type": "multi-choice",
    "options": [
      "Paquete mayor a 2 kg.",
      "Paquete individual.",
      "Venta Detalle o granel."
    ],
    "section": "analisis_de_las_7ps"
  },
  {
    "id": 28,
    "question": "¿Qué tipo de formatos ofrecen en queso tipo Amarillo rebanado?",
    "type": "multi-choice",
    "options": [
      "Paquete mayor a 2 kg.",
      "Paquete individual.",
      "Venta Detalle o granel."
    ],
    "section": "analisis_de_las_7ps"
  },
  {
    "id": 29,
    "question": "¿Qué tipo de formatos ofrecen en queso tipo Amarillo líquido?",
    "type": "multi-choice",
    "options": [
      "Paquete mayor a 2 kg.",
      "Paquete individual.",
      "Venta Detalle o granel."
    ],
    "section": "analisis_de_las_7ps"
  },
  {
    "id": 30,
    "question": "¿Qué tipo de formatos ofrecen en queso tipo Mozzarella o para pizzas?",
    "type": "multi-choice",
    "options": [
      "Paquete mayor a 2 kg.",
      "Paquete individual.",
      "Venta Detalle o granel."
    ],
    "section": "analisis_de_las_7ps"
  },
  {
    "id": 31,
    "question": "¿Tiene promociones por compra?",
    "type": "single-choice",
    "options": ["SI", "NO"],
    "section": "analisis_de_las_7ps"
  },
  {
    "id": 32,
    "question": "¿Entregan degustación?",
    "type": "single-choice",
    "options": ["SI", "NO"],
    "section": "analisis_de_las_7ps"
  },
  {
    "id": 33,
    "question": "¿Hay comunicación visual de la categoría?",
    "type": "single-choice",
    "options": ["SI", "NO"],
    "section": "analisis_de_las_7ps"
  },
  {
    "id": 34,
    "question": "¿Compran el queso rebanado?",
    "type": "single-choice",
    "options": ["SI", "NO"],
    "section": "analisis_de_las_7ps"
  },
  {
    "id": 35,
    "question": "¿Cuáles son los quesos infaltables en una Tiendita?",
    "type": "multi-choice",
    "options": [
      "Panela",
      "Oaxaca",
      "Manchego",
      "Amarillo rebanada",
      "Amarillo Líquido",
      "Mozzarella"
    ],
    "section": "analisis_de_las_7ps"
  },
  {
    "id": 36,
    "question": "¿Cuáles son los quesos infaltables en un Restaurante o fonda o transformador?",
    "type": "multi-choice",
    "options": [
      "Panela",
      "Oaxaca",
      "Manchego",
      "Amarillo rebanada",
      "Amarillo Líquido",
      "Mozzarella"
    ],
    "section": "analisis_de_las_7ps"
  },
  {
    "id": 37,
    "question": "¿Cuál consideras que es la frecuencia de compra de quesos en tienditas?",
    "type": "single-choice",
    "options": [
      "1 vez semana",
      "2 veces",
      "3 o + veces semana"
    ],
    "section": "analisis_de_las_7ps"
  },
  {
    "id": 38,
    "question": "¿Cuál consideras que es la frecuencia de compra de quesos en Restaurante o fonda o transformador?",
    "type": "single-choice",
    "options": [
      "1 vez semana",
      "2 veces",
      "3 o + veces semana"
    ],
    "section": "analisis_de_las_7ps"
  },
  {
    "id": 39,
    "question": "¿Cuál consideras que es el motivo de compra de Tenderos?",
    "type": "multi-choice",
    "options": [
      "Precio",
      "Marca",
      "Sabor",
      "Tamaño",
      "Color"
    ],
    "section": "analisis_de_las_7ps"
  },
  {
    "id": 40,
    "question": "¿Cuál consideras que es el motivo de compra de Restaurante o fonda o transformador?",
    "type": "multi-choice",
    "options": [
      "Precio",
      "Marca",
      "Sabor",
      "Tamaño",
      "Color"
    ],
    "section": "analisis_de_las_7ps"
  },
  {
    "id": 41,
    "question": "¿Cuánto es el volumen promedio (EN KILOS) estimado que compra de queso imitación?",
    "type": "number",
    "suffix": "Kg",
    "section": "analisis_de_las_7ps"
  }
]
