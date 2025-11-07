import { Product } from "@/types/product";

export const initialProducts: Product[] = [
  {
    id: "1",
    name: "Ball Valves",
    category: "Ball Valves",
    description: "High-performance ball valves for precise flow control in demanding applications.",
    specifications: [
      "Size Range: ¼\" to 4\"",
      "Material: SS316, SS304, Brass",
      "Pressure Rating: Up to 6000 PSI",
      "Type: 2-way / 3-way / Full Bore / Reduced Bore",
      "Applications: Oil & Gas, Chemical Processing, Water Treatment",
    ],
  },
  {
    id: "2",
    name: "Needle Valves",
    category: "Needle Valves",
    description: "Precision needle valves for fine flow control and high-pressure applications.",
    specifications: [
      "Size Range: 1/8\" to 2\"",
      "Material: SS316, SS304, Brass",
      "Pressure Rating: Up to 10000 PSI",
      "Connection: NPT, BSP, Compression End",
      "Applications: Instrumentation, Hydraulic Systems",
    ],
  },
  {
    id: "3",
    name: "Check Valves",
    category: "Check Valves",
    description: "Reliable check valves to prevent backflow and protect your systems.",
    specifications: [
      "Type: Inline / Spring Loaded / Non-return",
      "Material: SS316, SS304",
      "Pressure Rating: Up to 6000 PSI",
      "Applications: Pumping Systems, Pipeline Protection",
    ],
  },
  {
    id: "4",
    name: "Pipe Fittings",
    category: "Pipe Fittings",
    description: "Complete range of pipe fittings for versatile piping configurations.",
    specifications: [
      "Types: Elbows, Tees, Couplings, Reducers",
      "Material: SS316, SS304, Brass",
      "Size Range: 1/8\" to 2\"",
      "Connection: NPT, BSP, Socket Weld",
    ],
  },
  {
    id: "5",
    name: "Double Ferrule Fittings",
    category: "Double Ferrule Fittings",
    description: "Leak-proof double ferrule compression fittings for instrumentation systems.",
    specifications: [
      "Types: Union, Elbow, Tee, Bulkhead, Adapter",
      "Material: SS316, Brass",
      "Features: Leak-proof design for instrumentation",
      "Pressure Rating: Up to 10000 PSI",
    ],
  },
  {
    id: "6",
    name: "JIC Fittings",
    category: "JIC Fittings",
    description: "High-pressure JIC fittings for hydraulic and instrumentation systems.",
    specifications: [
      "Pressure Rating: Up to 15000 PSI",
      "Material: SS316, Steel",
      "Application: High-pressure instrumentation systems",
      "Standard: SAE J514",
    ],
  },
  {
    id: "7",
    name: "Autoclave Fittings",
    category: "Autoclave Fittings",
    description: "Ultra-high pressure fittings for hydraulic and test equipment.",
    specifications: [
      "Material: SS316",
      "Pressure Rating: Up to 20000 PSI",
      "Application: Hydraulic and test equipment",
      "Temperature Range: -40°F to 400°F",
    ],
  },
  {
    id: "8",
    name: "Manifold Valves",
    category: "Manifold Valves",
    description: "Multi-way manifold valves for complex instrumentation and control systems.",
    specifications: [
      "Configuration: 2-way, 3-way, 5-way Manifold Valves",
      "Size Range: 1/8\" to 2\"",
      "Material: SS316, SS304, Brass",
      "Pressure Rating: Up to 10000 PSI",
      "Connection: NPT, BSP, Compression",
    ],
  },
];
