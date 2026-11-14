/**
 * AB-CHIP & Huidu Technology Hardware Specification Catalog
 * Standardized data repository for offline & online operation (No CORS fetch needed)
 */

const HARDWARE_CATALOG = [
  // ==========================================
  // 1. VIDEO PROCESSORS (HD-VP SERIES)
  // ==========================================
  {
    id: "hd-vp1620",
    model: "HD-VP1620",
    category: "video-processors",
    categoryName: "Video Processors",
    tagline: "4K Flagship Ultra-HD 16-Port LED Video Processor",
    maxPixels: 10400000,
    pixelFormatted: "10.4M Pixels",
    maxResolution: "Width ≤ 16,000 px | Height ≤ 3,840 px",
    keySpecs: {
      ports: "16× Gigabit RJ45 Outputs",
      inputs: "HDMI 2.0 ×1 (4K@60Hz), DP 1.2 ×1, DVI ×1, VGA ×1, 3G-SDI ×1",
      outputs: "RJ45 ×16 (Gigabit Network), Audio Out 3.5mm ×1",
      features: "4K input hard decoding, Dual-Window PIP/POP, Seamless fade switching, One-key black/freeze screen",
      control: "Wi-Fi mobile app (LedArt), Gigabit LAN, RS232 serial command protocol",
      power: "AC 100~240V, 50/60Hz, 65W Max",
      dimensions: "482mm × 300mm × 66mm (Standard 1.5U 19-inch rackmount)"
    },
    specsTable: [
      { param: "Control Range", val: "10,400,000 Pixels max (W: 16,000 max, H: 3,840 max)" },
      { param: "Video Inputs", val: "1× HDMI 2.0 (4K@60Hz), 1× DP 1.2, 1× DVI, 1× VGA, 1× 3G-SDI" },
      { param: "Network Outputs", val: "16× Gigabit Ethernet RJ45 ports (Direct cascade to receiving cards)" },
      { param: "Multi-Windowing", val: "Dual-picture overlay (PIP), side-by-side (POP), arbitrary roaming" },
      { param: "Audio Matrix", val: "3.5mm independent input & output, HDMI audio de-embedding support" },
      { param: "Firmware Engine", val: "Dual FPGA hardware processing, 60Hz real-time zero-frame lag" },
      { param: "Operating Temp", val: "-20°C to +60°C | Working Humidity: 10% - 90% RH Non-condensing" }
    ],
    recommendedFor: "Command centers, broadcast TV studios, arena centerhung displays, 4K stadium screens",
    badge: "16-Port 4K Flagship",
    badgeColor: "primary"
  },
  {
    id: "hd-vp1220",
    model: "HD-VP1220",
    category: "video-processors",
    categoryName: "Video Processors",
    tagline: "7.8M High-Definition 12-Port Integrated Video Processor",
    maxPixels: 7800000,
    pixelFormatted: "7.8M Pixels",
    maxResolution: "Width ≤ 16,000 px | Height ≤ 3,840 px",
    keySpecs: {
      ports: "12× Gigabit RJ45 Outputs",
      inputs: "HDMI 2.0 ×1 (4K), DP ×1, DVI ×1, VGA ×1, 3G-SDI ×1",
      outputs: "RJ45 ×12 (Gigabit Network), 3.5mm Audio Output ×1",
      features: "Hardware sync sending, multi-scene preset recall, 4K hardware downscaling, PIP layout",
      control: "LAN, Wi-Fi, RS232, Front OLED display & physical rotary encoder",
      power: "AC 100~240V, 50/60Hz, 50W Max",
      dimensions: "482mm × 280mm × 44mm (1U 19-inch rackmount)"
    },
    specsTable: [
      { param: "Control Range", val: "7,800,000 Pixels max (W: 16,000 max, H: 3,840 max)" },
      { param: "Video Inputs", val: "HDMI 2.0 ×1, DP ×1, DVI ×1, VGA ×1, 3G-SDI ×1" },
      { param: "Network Outputs", val: "12× Gigabit Ethernet RJ45 ports" },
      { param: "Preset Channels", val: "16 user-defined multi-window layout presets with rapid recall" },
      { param: "Transition Effect", val: "Instant cut, smooth fade-in/fade-out (0.5s ~ 2.0s duration)" },
      { param: "Operating Temp", val: "-20°C to +60°C" }
    ],
    recommendedFor: "Auditoriums, enterprise conference halls, theatre proscenium walls",
    badge: "12-Port 4K Pro",
    badgeColor: "primary"
  },
  {
    id: "hd-vp820",
    model: "HD-VP820",
    category: "video-processors",
    categoryName: "Video Processors",
    tagline: "5.2M Mid-to-Large Scale 8-Port 2-in-1 LED Video Processor",
    maxPixels: 5200000,
    pixelFormatted: "5.2M Pixels",
    maxResolution: "Width ≤ 8,000 px | Height ≤ 3,840 px",
    keySpecs: {
      ports: "8× Gigabit RJ45 Outputs",
      inputs: "HDMI 2.0 ×1 (4K), DP ×1, DVI ×1, VGA ×1, 3G-SDI ×1, USB ×1",
      outputs: "RJ45 ×8 Gigabit Ethernet, 3.5mm Audio Out ×1",
      features: "Direct U-disk video decoding, multi-source PIP, audio-video synchronization, freeze mode",
      control: "Front OLED + rotary dial, LAN, Wi-Fi mobile App (LedArt), RS232",
      power: "AC 100~240V, 50/60Hz, 40W Max",
      dimensions: "482mm × 265mm × 44mm (1U rackmount)"
    },
    specsTable: [
      { param: "Control Range", val: "5,200,000 Pixels max (W: 8,000 max, H: 3,840 max)" },
      { param: "Video Inputs", val: "HDMI ×1, DP ×1, DVI ×1, VGA ×1, 3G-SDI ×1, USB Playback ×1" },
      { param: "Network Outputs", val: "8× Gigabit Ethernet RJ45 ports" },
      { param: "U-Disk Decode", val: "Hardware MP4/AVI/MKV 4K playback directly without external PC" },
      { param: "PIP Architecture", val: "2 independent graphic windows with scaling & position offset" },
      { param: "Operating Temp", val: "-20°C to +60°C" }
    ],
    recommendedFor: "Hotel ballrooms, outdoor perimeter screens, rental stage backdrops",
    badge: "Best Seller 8-Port",
    badgeColor: "green"
  },
  {
    id: "hd-vp620",
    model: "HD-VP620",
    category: "video-processors",
    categoryName: "Video Processors",
    tagline: "3.9M Dual-Picture 6-Port Integrated LED Video Processor",
    maxPixels: 3900000,
    pixelFormatted: "3.9M Pixels",
    maxResolution: "Width ≤ 8,000 px | Height ≤ 3,840 px",
    keySpecs: {
      ports: "6× Gigabit RJ45 Outputs",
      inputs: "HDMI ×1, DVI ×1, VGA ×1, USB ×1, CVBS ×1 (Optional SDI)",
      outputs: "RJ45 ×6 Gigabit Ethernet, 3.5mm Audio Out ×1",
      features: "Integrated synchronous sender + video processor, seamless cut, audio matrix switch",
      control: "Front navigation keys, LAN, Wi-Fi app, RS232",
      power: "AC 100~240V, 50/60Hz, 30W Max",
      dimensions: "482mm × 250mm × 44mm (1U rackmount)"
    },
    specsTable: [
      { param: "Control Range", val: "3,900,000 Pixels max (W: 8,000 max, H: 3,840 max)" },
      { param: "Video Inputs", val: "HDMI ×1, DVI ×1, VGA ×1, CVBS ×1, USB ×1" },
      { param: "Network Outputs", val: "6× Gigabit RJ45 Ethernet ports" },
      { param: "Seamless Switch", val: "Fast cut or fade between any 2 input channels with zero black frame" },
      { param: "Wi-Fi Module", val: "Built-in 2.4GHz AP mode for direct smartphone control via LedArt" }
    ],
    recommendedFor: "Commercial exhibition halls, indoor P2.5/P3 video walls, houses of worship",
    badge: "6-Port Standard",
    badgeColor: "primary"
  },
  {
    id: "hd-vp410",
    model: "HD-VP410",
    category: "video-processors",
    categoryName: "Video Processors",
    tagline: "2.6M Commercial 4-Port 2-in-1 LED Video Processor",
    maxPixels: 2600000,
    pixelFormatted: "2.6M Pixels",
    maxResolution: "Width ≤ 3,840 px | Height ≤ 1,920 px",
    keySpecs: {
      ports: "4× Gigabit RJ45 Outputs",
      inputs: "HDMI ×1, DVI ×1, VGA ×1, CVBS (AV) ×1, USB Direct ×1",
      outputs: "RJ45 ×4 Gigabit Network, 3.5mm Audio Output ×1",
      features: "U-disk plug and play, arbitrary window scaling, brightness adjustment knob",
      control: "Chassis physical panel, Infrared remote control, USB communication",
      power: "AC 100~240V, 25W Max",
      dimensions: "482mm × 250mm × 44mm (1U rackmount)"
    },
    specsTable: [
      { param: "Control Range", val: "2,600,000 Pixels max (W: 3,840 max, H: 1,920 max)" },
      { param: "Video Inputs", val: "HDMI ×1, DVI ×1, VGA ×1, AV ×1, USB 2.0 ×1" },
      { param: "Network Outputs", val: "4× Gigabit RJ45 ports (Direct cascade to receiving cards)" },
      { param: "Scaling Engine", val: "Hardware bicubic image interpolation with point-to-point map" },
      { param: "Audio Output", val: "3.5mm stereo sync output" }
    ],
    recommendedFor: "Medium retail video walls, educational lecture halls, sports bar video arrays",
    badge: "4-Port High Value",
    badgeColor: "green"
  },
  {
    id: "hd-vp210",
    model: "HD-VP210",
    category: "video-processors",
    categoryName: "Video Processors",
    tagline: "1.3M Compact 2-Port Entry LED Video Processor",
    maxPixels: 1300000,
    pixelFormatted: "1.3M Pixels",
    maxResolution: "Width ≤ 3,840 px | Height ≤ 1,920 px",
    keySpecs: {
      ports: "2× Gigabit RJ45 Outputs",
      inputs: "HDMI ×1, DVI ×1, VGA ×1, CVBS ×1, USB ×1",
      outputs: "RJ45 ×2 Gigabit Network, 3.5mm Audio Out ×1",
      features: "Entry-level all-in-one unit, hardware scale, freeze screen, direct USB video playback",
      control: "Front button interface, USB-PC control, IR remote",
      power: "AC 100~240V, 20W Max",
      dimensions: "482mm × 230mm × 44mm (1U rackmount)"
    },
    specsTable: [
      { param: "Control Range", val: "1,300,000 Pixels max (W: 3,840 max, H: 1,920 max)" },
      { param: "Network Outputs", val: "2× Gigabit RJ45 ports" },
      { param: "Video Inputs", val: "HDMI, DVI, VGA, CVBS, USB" },
      { param: "U-Disk Decode", val: "H.264 1080P hardware decoding directly" }
    ],
    recommendedFor: "Meeting room small video walls, storefront window LED posters, kiosk displays",
    badge: "2-Port Entry",
    badgeColor: "neutral"
  },

  // ==========================================
  // 2. SYNCHRONOUS CONTROLLERS (T-SERIES)
  // ==========================================
  {
    id: "hd-t902x1",
    model: "HD-T902x1",
    category: "synchronous",
    categoryName: "Synchronous Controllers",
    tagline: "2.6M Enterprise Synchronous Sending Box with DVI & Cascading",
    maxPixels: 2600000,
    pixelFormatted: "2.6M Pixels",
    maxResolution: "Width ≤ 3,840 px | Height ≤ 2,048 px",
    keySpecs: {
      ports: "4× Gigabit RJ45 Outputs",
      inputs: "DVI-I Input ×1, 3.5mm Audio Input ×1, USB-B Control ×1",
      outputs: "RJ45 ×4 Gigabit Network Outputs, DVI Loop-through ×1",
      features: "Multi-card hardware cascading, ultra-low frame latency (<1ms), multi-screen stitching",
      control: "USB-B communication with PC (HDPlayer software), RS232 serial",
      power: "AC 100~240V internal industrial power supply, 15W Max",
      dimensions: "Metal enclosure: 245mm × 160mm × 45mm"
    },
    specsTable: [
      { param: "Control Range", val: "2,600,000 Pixels max (W: 3,840, H: 2,048)" },
      { param: "Signal Interface", val: "DVI-D / DVI-I digital video synchronous source" },
      { param: "Network Ports", val: "4× Gigabit RJ45 ethernet ports (Port 1-4 balance output)" },
      { param: "Cascade Capability", val: "Supports infinite multi-card cascading for ultra-wide pixel stitching" },
      { param: "Clock Synchronization", val: "Hardware pixel clock up to 165MHz, zero tearing" },
      { param: "Audio Transmission", val: "Synchronous audio packetization over Gigabit Cat5e/Cat6 cable" }
    ],
    recommendedFor: "Live concert staging, broadcast production trucks, sports arena perimeter ribbons",
    badge: "Synchronous Pro",
    badgeColor: "primary"
  },
  {
    id: "hd-t901",
    model: "HD-T901",
    category: "synchronous",
    categoryName: "Synchronous Controllers",
    tagline: "1.3M Synchronous Sending Card (PCI-E / Standalone)",
    maxPixels: 1300000,
    pixelFormatted: "1.3M Pixels",
    maxResolution: "Width ≤ 3,840 px | Height ≤ 2,048 px",
    keySpecs: {
      ports: "2× Gigabit RJ45 Outputs",
      inputs: "DVI Video Input ×1, 3.5mm Stereo Audio ×1, USB-B Control ×1",
      outputs: "RJ45 ×2 Gigabit Ethernet Outputs",
      features: "PCI-E plug-in or DC 5V external power, low latency, color temperature adjustment",
      control: "HDPlayer synchronous playback management system",
      power: "DC 5V (from PC PCI-E slot or terminal block), 5W",
      dimensions: "140mm × 105mm PCI standard profile"
    },
    specsTable: [
      { param: "Control Range", val: "1,300,000 Pixels max (W: 3,840, H: 2,048)" },
      { param: "Video Sync Input", val: "DVI standard signal (1920×1080@60Hz native)" },
      { param: "Network Outputs", val: "2× Gigabit RJ45 ports (650,000 px per port capacity)" },
      { param: "Form Factor", val: "Standard PC PCI-E bracket card or standalone chassis mount" },
      { param: "Refresh Matching", val: "Automatic refresh rate matching with GPU graphics card" }
    ],
    recommendedFor: "PC workstation integration, direct GPU live video feeding, control consoles",
    badge: "1.3M Sync Card",
    badgeColor: "primary"
  },
  {
    id: "hd-t901b",
    model: "HD-T901B",
    category: "synchronous",
    categoryName: "Synchronous Controllers",
    tagline: "1.3M Enclosed Standalone Synchronous Sending Box",
    maxPixels: 1300000,
    pixelFormatted: "1.3M Pixels",
    maxResolution: "Width ≤ 3,840 px | Height ≤ 2,048 px",
    keySpecs: {
      ports: "2× Gigabit RJ45 Outputs",
      inputs: "DVI Input ×1, Audio 3.5mm ×1, USB-B Port ×1",
      outputs: "RJ45 ×2 Gigabit Ethernet Outputs",
      features: "Rugged aluminum industrial enclosure, integrated AC 110-240V power module",
      control: "HDPlayer software via USB-B or LAN",
      power: "AC 100~240V 50/60Hz direct input (No external brick needed)",
      dimensions: "210mm × 145mm × 42mm"
    },
    specsTable: [
      { param: "Control Range", val: "1,300,000 Pixels max (W: 3,840, H: 2,048)" },
      { param: "Interface", val: "DVI ×1, Audio ×1, USB-B ×1, RJ45 ×2" },
      { param: "Enclosure", val: "Matte-black aluminum chassis with status LEDs" },
      { param: "Cascade Support", val: "UART serial cascade in/out for multi-box clusters" }
    ],
    recommendedFor: "Fixed rack installs where PC PCI slots are unavailable, AV distribution rooms",
    badge: "Self-Powered Box",
    badgeColor: "green"
  },

  // ==========================================
  // 3. ASYNCHRONOUS PLAYERS & WI-FI SERIES (A, C, D, W-SERIES)
  // ==========================================
  {
    id: "hd-a6",
    model: "HD-A6",
    category: "asynchronous",
    categoryName: "Asynchronous & Cloud Hubs",
    tagline: "2.3M Flagship Dual-Mode (Sync + Async) 4K Cloud Player Box",
    maxPixels: 2300000,
    pixelFormatted: "2.3M Pixels",
    maxResolution: "Width ≤ 3,840 px | Height ≤ 4,096 px",
    keySpecs: {
      ports: "4× Gigabit RJ45 Outputs",
      inputs: "HDMI In (Sync live feed) ×1, USB 2.0 ×2, USB 3.0 ×1, Sensor Port ×1",
      outputs: "RJ45 ×4 Gigabit Network, HDMI Loop/Out ×1, 3.5mm Audio Out ×1",
      features: "Dual-mode sync/async seamless auto-switch, 8GB onboard flash (exp. 128GB), 4K video hard decode",
      control: "Cloud CMS platform, Wi-Fi standard, Optional 4G IoT module, HDPlayer / LedArt",
      power: "DC 12V 2A industrial terminal & jack, 20W Max",
      dimensions: "260mm × 165mm × 40mm"
    },
    specsTable: [
      { param: "Control Range", val: "2,300,000 Pixels max (W: 3,840 max, H: 4,096 max)" },
      { param: "Dual-Mode Logic", val: "Auto-detects live HDMI signal; plays local cloud playlist if HDMI drops" },
      { param: "Internal Storage", val: "8GB High-speed eMMC (expandable via USB Flash Drive / SSD)" },
      { param: "Video Codecs", val: "Hardware decoding for H.265/HEVC, H.264, VP9, MPEG-4, 4K@30fps" },
      { param: "Network Telemetry", val: "Gigabit LAN + 2.4G/5G Dual Wi-Fi + Optional 4G LTE Netcom" },
      { param: "Sensor Interface", val: "Direct plug-in for S107 brightness, S108 weather, GPS sync" }
    ],
    recommendedFor: "Outdoor LED billboards, commercial plaza flagships, airport digital mega-screens",
    badge: "Dual-Mode 4-Port",
    badgeColor: "primary"
  },
  {
    id: "hd-a5",
    model: "HD-A5",
    category: "asynchronous",
    categoryName: "Asynchronous & Cloud Hubs",
    tagline: "1.3M Dual-Mode Asynchronous Cloud Display Box",
    maxPixels: 1300000,
    pixelFormatted: "1.3M Pixels",
    maxResolution: "Width ≤ 3,840 px | Height ≤ 2,048 px",
    keySpecs: {
      ports: "2× Gigabit RJ45 Outputs",
      inputs: "HDMI Input (Live video sync) ×1, USB ×2, Sensor socket ×1",
      outputs: "RJ45 ×2 Gigabit Outputs, Audio 3.5mm ×1",
      features: "Sync & Async auto-selection, 8GB onboard storage, Wi-Fi antenna, Cloud multi-screen cluster",
      control: "LedArt App (iOS/Android), Web Cloud CMS, HDPlayer PC",
      power: "DC 12V 2A, 18W Max",
      dimensions: "215mm × 150mm × 38mm"
    },
    specsTable: [
      { param: "Control Range", val: "1,300,000 Pixels max (W: 3,840 max, H: 2,048 max)" },
      { param: "Network Outputs", val: "2× Gigabit RJ45 network lines" },
      { param: "Video Input", val: "HDMI standard input for synchronous switching" },
      { param: "Wireless Sync", val: "Built-in Wi-Fi station & AP mode + GPS module header" }
    ],
    recommendedFor: "Highway DOOH billboards, hotel exterior façades, school auditoriums",
    badge: "Dual-Mode 2-Port",
    badgeColor: "green"
  },
  {
    id: "hd-c35c",
    model: "HD-C35C",
    category: "asynchronous",
    categoryName: "Asynchronous & Cloud Hubs",
    tagline: "524K Asynchronous Sending + Receiving All-in-One Card",
    maxPixels: 524288,
    pixelFormatted: "524K Pixels",
    maxResolution: "Width ≤ 1,024 px | Height ≤ 1,024 px",
    keySpecs: {
      ports: "10× Onboard HUB75E Interfaces",
      inputs: "RJ45 LAN ×1, USB 2.0 ×1, Sensor port ×1",
      outputs: "HUB75E ×10 headers directly drive modules, RJ45 Gigabit cascade out ×1, Audio ×1",
      features: "Can eliminate receiving cards for small screens, 4GB flash memory, 60Hz frame output",
      control: "Wi-Fi (via external Wi-Fi antenna), 4G optional, LAN, U-disk direct plug",
      power: "DC 5V terminal block, 15W Max",
      dimensions: "160mm × 100mm industrial board"
    },
    specsTable: [
      { param: "Control Range", val: "524,288 Pixels (W: 1024, H: 1024 max)" },
      { param: "Onboard HUB75E", val: "10 standard 16-pin HUB75E connectors (No receiving card needed!)" },
      { param: "Flash Memory", val: "4GB onboard storage (over 4 hours of HD video playback)" },
      { param: "Cascade Ability", val: "1× Gigabit RJ45 output allows connecting downstream R512S receiving cards" },
      { param: "Scan Frequency", val: "Supports static up to 1/64 scan modules" }
    ],
    recommendedFor: "Smart city street lamp pole screens, bus stop smart kiosks, small indoor advertising screens",
    badge: "All-in-One 10xHUB75",
    badgeColor: "green"
  },
  {
    id: "hd-c16c",
    model: "HD-C16C",
    category: "asynchronous",
    categoryName: "Asynchronous & Cloud Hubs",
    tagline: "122K Ultra-Compact All-in-One Controller Board",
    maxPixels: 122880,
    pixelFormatted: "122K Pixels",
    maxResolution: "Width ≤ 1,024 px | Height ≤ 512 px",
    keySpecs: {
      ports: "10× Onboard HUB75E Interfaces",
      inputs: "RJ45 LAN ×1, USB ×1, Sensor input ×1",
      outputs: "HUB75E ×10 headers, 3.5mm Audio Output ×1",
      features: "Micro-form factor, 4GB memory, real-time weather & sensor display, mobile APP direct connect",
      control: "Wi-Fi module standard, 4G support, LedArt",
      power: "DC 5V 2A terminal block, 10W",
      dimensions: "140mm × 90mm"
    },
    specsTable: [
      { param: "Control Range", val: "122,880 Pixels (W: 1024, H: 512 max)" },
      { param: "Connectors", val: "10× standard HUB75E onboard headers" },
      { param: "Audio Output", val: "3.5mm stereo jack for music and voice sync" },
      { param: "Multi-Sensor", val: "Supports S107 brightness, temp/humidity probes" }
    ],
    recommendedFor: "Pharmacy cross signs, vehicle mounted LED roof screens, commercial signage",
    badge: "Compact All-in-One",
    badgeColor: "neutral"
  },
  {
    id: "hd-w64",
    model: "HD-W64",
    category: "asynchronous",
    categoryName: "Asynchronous & Cloud Hubs",
    tagline: "Full-Color Wi-Fi + U-Disk High-Capacity Banner Controller",
    maxPixels: 131072,
    pixelFormatted: "131K Pixels",
    maxResolution: "Width ≤ 1,024 px | Height ≤ 128 px",
    keySpecs: {
      ports: "8× HUB75E Ports",
      inputs: "USB 2.0 port ×1, Wi-Fi antenna terminal",
      outputs: "8× HUB75E headers for direct RGB module connection",
      features: "High-density full-color door lintel display controller, dynamic borders, multi-language text",
      control: "Wireless Wi-Fi smartphone update via LedArt, USB Flash drive update",
      power: "DC 5V standard terminal, 5W",
      dimensions: "115mm × 65mm"
    },
    specsTable: [
      { param: "Control Range", val: "1024×128 px / 512×256 px (Full Color RGB)" },
      { param: "Interface", val: "8 sets of standard HUB75E headers onboard" },
      { param: "Wireless Range", val: "Wi-Fi coverage up to 30 meters LOS" },
      { param: "Text Effects", val: "Over 40 text motion effects, rainbow fonts, animated GIF support" }
    ],
    recommendedFor: "Storefront full-color lintel screens, gas station price boards, bank ticker tickers",
    badge: "Wi-Fi Full Color",
    badgeColor: "green"
  },
  {
    id: "hd-w62",
    model: "HD-W62",
    category: "asynchronous",
    categoryName: "Asynchronous & Cloud Hubs",
    tagline: "Full-Color Wi-Fi Storefront Lintel Controller (4x HUB75)",
    maxPixels: 65536,
    pixelFormatted: "65.5K Pixels",
    maxResolution: "Width ≤ 1,024 px | Height ≤ 64 px",
    keySpecs: {
      ports: "4× HUB75E Ports",
      inputs: "USB 2.0 port, Wi-Fi antenna",
      outputs: "4× standard HUB75E headers",
      features: "Cost-effective full-color driver, time/date/dial clock, wireless cluster group control",
      control: "Mobile APP (LedArt), PC HD2020 via Wi-Fi",
      power: "DC 5V, 4W",
      dimensions: "95mm × 55mm"
    },
    specsTable: [
      { param: "Control Range", val: "1024×64 px / 512×128 px" },
      { param: "Interface", val: "4× HUB75E connectors" },
      { param: "Supported Modules", val: "P2.5, P3, P4, P5, P6, P10 full-color modules" }
    ],
    recommendedFor: "Shop door lintel banners, supermarket aisle tickers, counter advertising displays",
    badge: "Storefront Best Seller",
    badgeColor: "neutral"
  },
  {
    id: "hd-w03",
    model: "HD-W03",
    category: "asynchronous",
    categoryName: "Asynchronous & Cloud Hubs",
    tagline: "Single & Dual Color Wi-Fi Controller (3x HUB12 + 1x HUB08)",
    maxPixels: 24576,
    pixelFormatted: "24.5K Pixels",
    maxResolution: "Width ≤ 512 px | Height ≤ 48 px",
    keySpecs: {
      ports: "3× HUB12 + 1× HUB08 Ports",
      inputs: "Wi-Fi wireless antenna, USB port",
      outputs: "3× HUB12 (single color) + 1× HUB08 (dual color)",
      features: "Ultra-fast text transmission, temperature probe interface, clock & timer functions",
      control: "LedArt Mobile APP, HD2018 / HD2020 PC",
      power: "DC 5V (4.2V - 5.5V tolerance), 3W",
      dimensions: "75mm × 45mm ultra mini"
    },
    specsTable: [
      { param: "Control Range", val: "Single color: 512×48, 1024×24 | Dual color: 256×48" },
      { param: "HUB Interface", val: "3× HUB12 (08T/12T) + 1× HUB08" },
      { param: "Features", val: "Countdown timers, real-time digital/analog clock, border patterns" }
    ],
    recommendedFor: "Single-color red/green/white text tickers, pharmacy sign banners, vehicle notice boards",
    badge: "Single/Dual Color",
    badgeColor: "neutral"
  },

  // ==========================================
  // 4. RECEIVING CARDS (HD-R SERIES)
  // ==========================================
  {
    id: "hd-r512s",
    model: "HD-R512S",
    category: "receiving-cards",
    categoryName: "Receiving Cards",
    tagline: "Industry Standard 12-Port HUB75E High-Refresh Receiving Card",
    maxPixels: 131072,
    pixelFormatted: "131K Pixels (Up to 256×512)",
    maxResolution: "Width ≤ 256 px | Height ≤ 512 px (Static to 1/64 scan)",
    keySpecs: {
      ports: "12× Onboard HUB75E Headers (24 Groups RGB Data)",
      inputs: "Gigabit Ethernet RJ45 Input ×1",
      outputs: "Gigabit Ethernet RJ45 Output ×1 (Loop-through cascade)",
      features: "Full support for PWM driver ICs (ICN2153, MBI5153, Chipone, etc.), 3840Hz refresh, low-gray calibration",
      control: "Compatible with all HD Video Processors (VP series), Senders (T901/T902), Async boxes (A/C)",
      power: "DC 3.8V ~ 5.5V, 4W Max",
      dimensions: "140mm × 85mm"
    },
    specsTable: [
      { param: "Control Range", val: "Recommended: 256×256 pixels | Maximum: 256×512 pixels" },
      { param: "Data Groups", val: "24 groups of parallel RGB data (12× HUB75E standard headers)" },
      { param: "Driver IC Support", val: "Conventional ICs, Double-latch ICs, High-refresh PWM driver ICs" },
      { param: "Scan Frequency", val: "Static to 1/64 scan modes arbitrarily programmable via RCFG" },
      { param: "Color Depth", val: "8-bit / 10-bit / 12-bit grayscale depth with low-light compensation" },
      { param: "Cabinet Calibration", val: "Supports pixel-by-pixel chroma and brightness correction coefficient storage" }
    ],
    recommendedFor: "Standard rental & fixed indoor/outdoor LED cabinets (500×500mm, 500×1000mm, 640×480mm)",
    badge: "Industry Benchmark",
    badgeColor: "primary"
  },
  {
    id: "hd-r516",
    model: "HD-R516",
    category: "receiving-cards",
    categoryName: "Receiving Cards",
    tagline: "High-Density 16-Port HUB75E Receiving Card (32 Groups RGB)",
    maxPixels: 262144,
    pixelFormatted: "262K Pixels (Up to 512×512)",
    maxResolution: "Width ≤ 512 px | Height ≤ 512 px (16× HUB75E)",
    keySpecs: {
      ports: "16× Onboard HUB75E Headers (32 Groups RGB Data)",
      inputs: "Dual Gigabit RJ45 Ethernet ports with automatic backup loop",
      outputs: "HUB75E ×16 headers directly connect up to 16 rows of LED modules",
      features: "Dual RJ45 cable backup redundancy, 3840Hz+ refresh rate, smart module configuration",
      control: "Huidu HDPlayer / LedArt ecosystem",
      power: "DC 3.8V ~ 5.5V, 5W Max",
      dimensions: "145mm × 92mm"
    },
    specsTable: [
      { param: "Control Range", val: "Up to 512×512 pixels (with PWM IC) | High density standard" },
      { param: "Data Output", val: "32 groups of RGB parallel data outputs (16× 16-pin HUB75E)" },
      { param: "Dual Backup", val: "Dual RJ45 ports support seamless primary/redundant network loop switching" },
      { param: "Special Functions", val: "Module flash memory storage (stores cabinet calibration values)" }
    ],
    recommendedFor: "High-density indoor P1.56, P1.86, P2.0 cabinets, broadcast stage backgrounds",
    badge: "16x HUB75 Pro",
    badgeColor: "green"
  },
  {
    id: "hd-r612",
    model: "HD-R612",
    category: "receiving-cards",
    categoryName: "Receiving Cards",
    tagline: "Ultra-High Refresh 12-Port Flagship Receiving Card",
    maxPixels: 262144,
    pixelFormatted: "262K Pixels (512×512)",
    maxResolution: "Width ≤ 512 px | Height ≤ 512 px",
    keySpecs: {
      ports: "12× HUB75E Headers",
      inputs: "Dual Gigabit RJ45 (In / Out)",
      outputs: "12× HUB75E, 24 groups RGB",
      features: "Advanced color management, HDR10 optical processing, low-gray non-linear correction, 7680Hz support",
      control: "Unified firmware update via HDPlayer, remote cabinet telemetry",
      power: "DC 4.0V ~ 5.5V, 4.5W",
      dimensions: "140mm × 85mm"
    },
    specsTable: [
      { param: "Control Range", val: "512×512 pixels max capacity" },
      { param: "Color Precision", val: "18-bit grayscale processing for zero banding in dark shadows" },
      { param: "HDR Standard", val: "HDR10 & HLG high dynamic range support" },
      { param: "Refresh Rate", val: "Up to 7680Hz ultra-high camera shoot refresh rate" }
    ],
    recommendedFor: "xR Virtual Production studios, film studio LED volumes, premium television broadcast",
    badge: "HDR / xR Studio Grade",
    badgeColor: "primary"
  },
  {
    id: "hd-r5s",
    model: "HD-R5S",
    category: "receiving-cards",
    categoryName: "Receiving Cards",
    tagline: "Fine-Pitch & Transparent Glass Display Dedicated Receiving Card",
    maxPixels: 262144,
    pixelFormatted: "262K Pixels",
    maxResolution: "Width ≤ 512 px | Height ≤ 512 px (High-density board-to-board)",
    keySpecs: {
      ports: "Dual 120-Pin High-Density Board-to-Board Connectors",
      inputs: "Dual Gigabit RJ45 (or integrated motherboard traces)",
      outputs: "2× 120-Pin connectors (supports 32 parallel / 64 serial data channels)",
      features: "Ultra-slim 3.2mm profile, designed for direct mating with transparent glass screen PCB frames",
      control: "All Huidu sending systems",
      power: "DC 3.8V ~ 5.5V, 4W",
      dimensions: "100mm × 50mm slimline form factor"
    },
    specsTable: [
      { param: "Control Range", val: "256×512 / 512×512 pixels" },
      { param: "Interface", val: "2× 120-Pin board-to-board high-speed headers (Zero ribbon cable clutter)" },
      { param: "Thickness", val: "Ultra-low component height < 4mm for glass encapsulation" }
    ],
    recommendedFor: "Architectural transparent glass LED displays, creative film screens, ultra-thin posters",
    badge: "Transparent Screen",
    badgeColor: "neutral"
  },
  {
    id: "hd-r508",
    model: "HD-R508",
    category: "receiving-cards",
    categoryName: "Receiving Cards",
    tagline: "Standard 8-Port HUB75E Value Receiving Card",
    maxPixels: 131072,
    pixelFormatted: "131K Pixels (256×256)",
    maxResolution: "Width ≤ 256 px | Height ≤ 256 px",
    keySpecs: {
      ports: "8× HUB75E Headers (16 Groups RGB Data)",
      inputs: "Gigabit Ethernet RJ45 ×1",
      outputs: "Gigabit Ethernet RJ45 Cascade ×1",
      features: "Cost-optimized receiving card for standard pitch cabinets (P3.91, P4.81, P5, P10)",
      control: "HDPlayer, LedArt, VP Series",
      power: "DC 5V, 3.5W",
      dimensions: "130mm × 75mm"
    },
    specsTable: [
      { param: "Control Range", val: "256×256 pixels standard load" },
      { param: "Outputs", val: "8× HUB75E onboard connectors" },
      { param: "Scan Support", val: "Static to 1/32 scan modules" }
    ],
    recommendedFor: "Outdoor standard billboards, commercial advertising displays, rental touring frames",
    badge: "Value 8-Port",
    badgeColor: "neutral"
  },
  {
    id: "hd-r320",
    model: "HD-R320",
    category: "receiving-cards",
    categoryName: "Receiving Cards",
    tagline: "Compact Economical Receiving Card for Commercial Panels",
    maxPixels: 65536,
    pixelFormatted: "65.5K Pixels",
    maxResolution: "Width ≤ 256 px | Height ≤ 256 px",
    keySpecs: {
      ports: "8× HUB75E Ports",
      inputs: "RJ45 Gigabit Ethernet",
      outputs: "RJ45 Loop",
      features: "Basic full-color receiving, high reliability, compact PCB layout",
      control: "Standard Huidu system controllers",
      power: "DC 5V, 3W",
      dimensions: "120mm × 70mm"
    },
    specsTable: [
      { param: "Control Range", val: "256×256 pixels" },
      { param: "Ports", val: "8× HUB75E" }
    ],
    recommendedFor: "Budget-conscious indoor displays, information boards, replacement parts",
    badge: "Budget Standard",
    badgeColor: "neutral"
  },

  // ==========================================
  // 5. ACCESSORIES & TELEMETRY SENSORS
  // ==========================================
  {
    id: "sensor-s107",
    model: "HD-S107",
    category: "accessories",
    categoryName: "Accessories & Sensors",
    tagline: "Industrial Optical Ambient Brightness Sensor Probe",
    maxPixels: 0,
    pixelFormatted: "N/A (Telemetry Sensor)",
    maxResolution: "Linear Lux Detection (0 ~ 65,535 Lux)",
    keySpecs: {
      ports: "4-Pin Waterproof Quick-Connect Terminal",
      inputs: "Ambient light optical collector head",
      outputs: "RS485 / Analog telemetry data stream to controller",
      features: "Automatic daylight-to-night screen dimming, energy saving up to 45%, anti-glare protection",
      control: "Directly configured via LedArt / HDPlayer with custom lux curve",
      power: "Supplied directly by controller board (DC 5V), 0.2W",
      dimensions: "Waterproof probe: 35mm diameter × 60mm length, 5-meter UV cable"
    },
    specsTable: [
      { param: "Detection Range", val: "0 to 65,535 Lux with high optical linearity" },
      { param: "Protection Class", val: "IP67 fully sealed waterproof & UV resistant housing" },
      { param: "Cable Length", val: "Standard 5 meters (extendable up to 50 meters via twisted pair)" },
      { param: "Compatibility", val: "A30+, A4, A5, A6, C16C, C35C, HD-VP Series, HD-S208" }
    ],
    recommendedFor: "Outdoor highway billboards, airport exterior walls, architectural façades",
    badge: "Auto-Dimming Probe",
    badgeColor: "green"
  },
  {
    id: "sensor-s108",
    model: "HD-S108",
    category: "accessories",
    categoryName: "Accessories & Sensors",
    tagline: "Integrated Temperature, Humidity & Brightness 3-in-1 Sensor",
    maxPixels: 0,
    pixelFormatted: "N/A (Telemetry Sensor)",
    maxResolution: "Temp: -40°C~+125°C | Hum: 0~100% RH | Lux: 0~65K",
    keySpecs: {
      ports: "4-Pin Aviation / Terminal Cable",
      inputs: "Multi-parameter environmental sensors inside vented housing",
      outputs: "Digital serial sensor bus",
      features: "Displays live weather, ambient temperature, relative humidity on LED display screens automatically",
      control: "Integrated widget in HDPlayer / LedArt software",
      power: "DC 5V, 0.5W",
      dimensions: "80mm × 55mm × 30mm louvered case"
    },
    specsTable: [
      { param: "Temperature Accuracy", val: "±0.3°C across -40°C to +85°C operating range" },
      { param: "Humidity Accuracy", val: "±2% RH across 10% to 90% RH" },
      { param: "Brightness Range", val: "0 to 65,535 Lux integrated sensor" }
    ],
    recommendedFor: "Smart city street screens, bus shelters, municipal weather information walls",
    badge: "3-in-1 Weather Probe",
    badgeColor: "primary"
  },
  {
    id: "sensor-s208",
    model: "HD-S208",
    category: "accessories",
    categoryName: "Accessories & Sensors",
    tagline: "Multi-Function Meteorological Environmental Hub Box",
    maxPixels: 0,
    pixelFormatted: "N/A (Weather Hub)",
    maxResolution: "Wind Speed, Wind Direction, Noise, PM2.5, PM10, Temp, Humidity",
    keySpecs: {
      ports: "RS485 Industrial Modbus RTU Interfaces",
      inputs: "Anemometer (Wind Speed), Wind Vane (Direction), Noise Decibel probe, Laser PM2.5 sensor",
      outputs: "Single RS485 communication link to Huidu player",
      features: "Complete outdoor meteorological data acquisition hub for smart city installations",
      control: "Modbus RTU protocol, automatic screen overlay rendering",
      power: "DC 12V 1A industrial power input, 6W",
      dimensions: "160mm × 120mm × 55mm IP65 enclosure"
    },
    specsTable: [
      { param: "Wind Speed Range", val: "0 to 60 m/s (Accuracy: ±0.3 m/s)" },
      { param: "Wind Direction", val: "360° 16-direction azimuth monitoring" },
      { param: "Air Quality", val: "Laser PM2.5 / PM10 (0 ~ 999 μg/m³)" },
      { param: "Noise Sensor", val: "30 to 120 dB acoustic precision sensor" }
    ],
    recommendedFor: "Smart poles, highway weather advisory boards, public park information towers",
    badge: "Weather Station Hub",
    badgeColor: "primary"
  },
  {
    id: "mod-4g",
    model: "HD-4G Full Netcom",
    category: "accessories",
    categoryName: "Accessories & Sensors",
    tagline: "4G LTE Cellular IoT Cloud Telemetry Module",
    maxPixels: 0,
    pixelFormatted: "N/A (Cloud Comms)",
    maxResolution: "LTE-FDD / LTE-TDD / WCDMA / GSM Global Bands",
    keySpecs: {
      ports: "Mini PCI-e / Dedicated 8-Pin header",
      inputs: "Standard Micro SIM Card Slot",
      outputs: "SMA High-Gain Magnetic Antenna connector",
      features: "Allows remote wireless cloud cluster program updating, screen power on/off, GPS positioning",
      control: "Huidu Cloud CMS (XiaoHui Cloud)",
      power: "DC 3.8V ~ 5V from host card, 2W",
      dimensions: "50mm × 30mm module + 3-meter magnetic antenna"
    },
    specsTable: [
      { param: "Cellular Standards", val: "LTE Cat 4 (150 Mbps DL / 50 Mbps UL)" },
      { param: "SIM Compatibility", val: "Supports Global 4G Micro-SIM cards (Carrier unlocked)" },
      { param: "Cloud Latency", val: "Instant program push (< 2 seconds via XiaoHui Cloud platform)" }
    ],
    recommendedFor: "Fleet vehicle screens, remote highway billboards where wired internet is unavailable",
    badge: "Global 4G IoT",
    badgeColor: "green"
  },
  {
    id: "relay-k524",
    model: "HD-K524",
    category: "accessories",
    categoryName: "Accessories & Sensors",
    tagline: "High-Current Industrial Power Relay Distribution Hub",
    maxPixels: 0,
    pixelFormatted: "N/A (Power Management)",
    maxResolution: "4-Channel Isolated AC Power Switching (30A per channel)",
    keySpecs: {
      ports: "4-Channel High-Current Screw Terminals",
      inputs: "RS485 Control Signal from Controller Board",
      outputs: "4× 250V AC 30A High-Capacity Relays",
      features: "Sequential power-on (prevents inrush current tripping main circuit breaker), timed power off",
      control: "Automatic scheduler via LedArt / HDPlayer or manual remote override",
      power: "DC 12V operation, handles up to 4× 6.6kW AC load (26kW total)",
      dimensions: "180mm × 110mm × 60mm DIN-rail mountable"
    },
    specsTable: [
      { param: "Relay Capacity", val: "4× 30A / 250V AC heavy-duty sealed relays" },
      { param: "Step Delay", val: "1s ~ 5s programmable sequential power step delay" },
      { param: "Protection", val: "Optocoupler isolated signal lines to protect controller against surges" }
    ],
    recommendedFor: "Large outdoor stadium screens, billboard clusters, high-power LED installations",
    badge: "Smart Power Relay",
    badgeColor: "neutral"
  },

  // ==========================================
  // 6. LED DISPLAY PANELS & MODULAR CABINETS
  // ==========================================
  {
    id: "panel-p125",
    model: "AB-P1.25 UHD",
    category: "panels",
    categoryName: "LED Display Cabinets",
    tagline: "Fine-Pitch 1.25mm Ultra-High Definition 16:9 Die-Cast Cabinet",
    maxPixels: 129600,
    pixelFormatted: "129.6K Px / Cabinet",
    maxResolution: "480 × 270 px per 600×337.5mm Cabinet (Native 16:9)",
    keySpecs: {
      ports: "HUB320 / High-Speed Board-to-Board Internal Interface",
      inputs: "Gigabit Ethernet RJ45 via integrated receiving card",
      outputs: "Dual RJ45 loop cascade",
      features: "True 16:9 golden ratio cabinet, easily builds 2K/4K/8K displays, 3840Hz refresh, true black SMD",
      control: "Compatible with HD-VP1620, HD-VP820, HD-R612",
      power: "AC 110~240V, 150W Average / 450W Peak per sqm",
      dimensions: "600mm (W) × 337.5mm (H) × 45mm (D), Die-Cast Magnesium Alloy, 6.5kg"
    },
    specsTable: [
      { param: "Pixel Pitch", val: "1.25mm (SMD 1010 Black Body LEDs)" },
      { param: "Cabinet Resolution", val: "480 × 270 pixels per cabinet" },
      { param: "Aspect Ratio", val: "Exact 16:9 (4 cabinets = 960×540, 16 cabinets = 1920×1080 2K FHD)" },
      { param: "Brightness & Contrast", val: "600 ~ 800 nits adjustable | 5,000:1 high contrast" },
      { param: "Refresh Rate", val: "≥ 3,840 Hz (PWM high-refresh driver IC)" },
      { param: "Viewing Angles", val: "Horizontal 160° / Vertical 160°" }
    ],
    recommendedFor: "Military command rooms, broadcasting control studios, luxury boardroom video walls",
    badge: "UHD Fine Pitch",
    badgeColor: "primary"
  },
  {
    id: "panel-p250",
    model: "AB-P2.5 INDOOR",
    category: "panels",
    categoryName: "LED Display Cabinets",
    tagline: "Standard Commercial 2.5mm Indoor Die-Cast Aluminum Cabinet",
    maxPixels: 49152,
    pixelFormatted: "49.1K Px / Cabinet",
    maxResolution: "256 × 192 px per 640×480mm Cabinet",
    keySpecs: {
      ports: "HUB75E Standard 16-Pin Headers",
      inputs: "RJ45 Gigabit Ethernet",
      outputs: "RJ45 Loop",
      features: "High contrast SMD2121 LEDs, front or rear service access, fanless silent operation",
      control: "HD-VP series, T901, HD-R512S",
      power: "AC 110~240V, 180W Avg / 550W Peak per sqm",
      dimensions: "640mm (W) × 480mm (H) × 65mm (D), Die-Cast Aluminum, 7.8kg"
    },
    specsTable: [
      { param: "Pixel Pitch", val: "2.5mm (Nationstar SMD2121 Black LEDs)" },
      { param: "Cabinet Resolution", val: "256 × 192 pixels" },
      { param: "Cabinet Size", val: "640mm × 480mm standard 4:3 cabinet" },
      { param: "Brightness", val: "800 ~ 1,200 nits" },
      { param: "Refresh Rate", val: "1,920Hz ~ 3,840Hz configurable" }
    ],
    recommendedFor: "Auditoriums, shopping malls, corporate reception halls, hotel banquet rooms",
    badge: "Commercial Best Value",
    badgeColor: "green"
  },
  {
    id: "panel-p391",
    model: "AB-P3.91 OUTDOOR",
    category: "panels",
    categoryName: "LED Display Cabinets",
    tagline: "IP65 Weatherproof 3.91mm Rental & Fixed Outdoor Cabinet",
    maxPixels: 32768,
    pixelFormatted: "32.7K Px / Cabinet",
    maxResolution: "128 × 256 px per 500×1000mm Cabinet",
    keySpecs: {
      ports: "Seetronic Waterproof RJ45 & PowerCON True1 Connectors",
      inputs: "Waterproof Gigabit RJ45 In",
      outputs: "Waterproof Gigabit RJ45 Out",
      features: "IP65 front and rear waterproof, quick-lock rigging latches, corner protectors, high brightness 5,500 nits",
      control: "HD-A5 / HD-A6 / HD-VP Series, HD-R512S",
      power: "AC 110~240V, 220W Avg / 750W Peak per sqm",
      dimensions: "500mm (W) × 1000mm (H) × 80mm (D), Die-Cast Aluminum, 12.5kg"
    },
    specsTable: [
      { param: "Pixel Pitch", val: "3.91mm (SMD1921 Outdoor High-Brightness)" },
      { param: "Cabinet Resolution", val: "128 × 256 pixels per 500×1000mm cabinet" },
      { param: "Waterproof Ingress", val: "IP65 Rated Front & Rear sealed modules" },
      { param: "Brightness", val: "≥ 5,500 nits (Full daylight visible under direct sun)" },
      { param: "Maintenance Mode", val: "Quick magnetic front module service or rear screw service" }
    ],
    recommendedFor: "Stage rental concert tours, church sanctuaries, outdoor festivals, sports stadiums",
    badge: "IP65 Rental & Tour",
    badgeColor: "primary"
  },
  {
    id: "panel-p100",
    model: "AB-P10 OUTDOOR",
    category: "panels",
    categoryName: "LED Display Cabinets",
    tagline: "Ultra-Bright 10mm Heavy-Duty Iron / Aluminum Outdoor Billboard",
    maxPixels: 9216,
    pixelFormatted: "9.2K Px / Cabinet",
    maxResolution: "96 × 96 px per 960×960mm Standard Waterproof Cabinet",
    keySpecs: {
      ports: "HUB75 / Standard Ribbon Headers",
      inputs: "RJ45 Ethernet with surge suppressor",
      outputs: "RJ45 Loop",
      features: "Ultra-high 7,500 nits brightness, extreme weather durability (-40°C to +75°C), dual fans",
      control: "HD-A6 / A5 Asynchronous with 4G module and S107 sensor",
      power: "AC 220V, 300W Avg / 850W Peak per sqm",
      dimensions: "960mm (W) × 960mm (H) × 150mm (D), Heavy-Duty Steel/Aluminum, 32kg"
    },
    specsTable: [
      { param: "Pixel Pitch", val: "10.0mm (SMD3535 or DIP346 High Power)" },
      { param: "Cabinet Resolution", val: "96 × 96 pixels per 960×960mm cabinet" },
      { param: "Brightness", val: "7,500 ~ 9,000 nits ultra-bright sunlight punch" },
      { param: "Viewing Distance", val: "10 meters to 300+ meters" }
    ],
    recommendedFor: "Highway DOOH billboards, building rooftop signs, stadium perimeter scoreboards",
    badge: "Heavy Billboard",
    badgeColor: "neutral"
  }
];

// Helper lookup methods
const HardwareData = {
  getAll: () => HARDWARE_CATALOG,
  getById: (id) => HARDWARE_CATALOG.find(p => p.id === id),
  getByCategory: (category) => {
    if (!category || category === "all") return HARDWARE_CATALOG;
    return HARDWARE_CATALOG.filter(p => p.category === category);
  },
  getVideoProcessors: () => HARDWARE_CATALOG.filter(p => p.category === "video-processors"),
  getReceivingCards: () => HARDWARE_CATALOG.filter(p => p.category === "receiving-cards")
};
