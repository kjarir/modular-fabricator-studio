-- Seed initial products from the catalog
INSERT INTO public.products (name, category, description, specifications) VALUES
  (
    'Ball Valves',
    'Ball Valves',
    'High-performance ball valves for precise flow control in demanding applications.',
    '["Size Range: ¼\" to 4\"", "Material: SS316, SS304, Brass", "Pressure Rating: Up to 6000 PSI", "Type: 2-way / 3-way / Full Bore / Reduced Bore", "Applications: Oil & Gas, Chemical Processing, Water Treatment"]'::jsonb
  ),
  (
    'Needle Valves',
    'Needle Valves',
    'Precision needle valves for fine flow control and high-pressure applications.',
    '["Size Range: 1/8\" to 2\"", "Material: SS316, SS304, Brass", "Pressure Rating: Up to 10000 PSI", "Connection: NPT, BSP, Compression End", "Applications: Instrumentation, Hydraulic Systems"]'::jsonb
  ),
  (
    'Check Valves',
    'Check Valves',
    'Reliable check valves to prevent backflow and protect your systems.',
    '["Type: Inline / Spring Loaded / Non-return", "Material: SS316, SS304", "Pressure Rating: Up to 6000 PSI", "Applications: Pumping Systems, Pipeline Protection"]'::jsonb
  ),
  (
    'Pipe Fittings',
    'Pipe Fittings',
    'Complete range of pipe fittings for versatile piping configurations.',
    '["Types: Elbows, Tees, Couplings, Reducers", "Material: SS316, SS304, Brass", "Size Range: 1/8\" to 2\"", "Connection: NPT, BSP, Socket Weld"]'::jsonb
  ),
  (
    'Double Ferrule Fittings',
    'Double Ferrule Fittings',
    'Leak-proof double ferrule compression fittings for instrumentation systems.',
    '["Types: Union, Elbow, Tee, Bulkhead, Adapter", "Material: SS316, Brass", "Features: Leak-proof design for instrumentation", "Pressure Rating: Up to 10000 PSI"]'::jsonb
  ),
  (
    'JIC Fittings',
    'JIC Fittings',
    'High-pressure JIC fittings for hydraulic and instrumentation systems.',
    '["Pressure Rating: Up to 15000 PSI", "Material: SS316, Steel", "Application: High-pressure instrumentation systems", "Standard: SAE J514"]'::jsonb
  ),
  (
    'Autoclave Fittings',
    'Autoclave Fittings',
    'Ultra-high pressure fittings for hydraulic and test equipment.',
    '["Material: SS316", "Pressure Rating: Up to 20000 PSI", "Application: Hydraulic and test equipment", "Temperature Range: -40°F to 400°F"]'::jsonb
  ),
  (
    'Manifold Valves',
    'Manifold Valves',
    'Multi-way manifold valves for complex instrumentation and control systems.',
    '["Configuration: 2-way, 3-way, 5-way Manifold Valves", "Size Range: 1/8\" to 2\"", "Material: SS316, SS304, Brass", "Pressure Rating: Up to 10000 PSI", "Connection: NPT, BSP, Compression"]'::jsonb
  );