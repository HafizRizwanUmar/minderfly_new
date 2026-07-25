const framefly = {
  slug: 'framefly',
  name: 'FrameFly',
  tagline: 'View, Convert & Manage HEIC Images with Effortless Beauty',
  shortDesc: 'The fastest, most beautiful HEIC image viewer for Windows and macOS. Open any HEIC, HEIF, or Apple image format instantly. Convert to JPG, PNG, WebP and more.',
  heroColor: '#3d1a6b',
  accentColor: '#c084fc',
  logo: '/products/logo/framefly.png',
  screenshot: '/products/screenshot/framefly - HEIC Image Viewer.png',
  appStoreLink: '#',
  playStoreLink: '#',
  category: 'Photos & Graphics',
  rating: 4.7,
  reviews: 22100,
  version: '2.4.0',
  size: '18 MB',
  platforms: ['Windows'],

  sections: [
    {
      id: 'overview',
      title: 'What is FrameFly?',
      body: `FrameFly is the definitive application for viewing, managing, and converting HEIC (High Efficiency Image Container) and HEIF (High Efficiency Image Format) images on Windows and macOS. Since Apple adopted HEIC as the default photo format for iPhone cameras starting with iOS 11 in 2017, hundreds of millions of iPhone users have been capturing their photos in this format — and encountering frustrating compatibility issues when trying to view, edit, or share those photos on non-Apple devices and platforms.

The HEIC format was developed by the Moving Picture Experts Group (MPEG) as a successor to JPEG, and it delivers remarkable improvements in compression efficiency: a HEIC photo typically takes up about half the storage space of an equivalent-quality JPEG. This is why Apple chose HEIC for iPhone cameras — it allows iPhones to store dramatically more photos without increasing storage costs. Despite these advantages, HEIC's proprietary nature and the royalty structure of its underlying HEVC codec created significant adoption barriers, leaving Windows users in particular unable to open HEIC files without additional software.

FrameFly solves this problem comprehensively and elegantly. When you receive HEIC photos from an iPhone user, or transfer photos from your own iPhone to your Windows PC, FrameFly opens them instantly — no conversion necessary, no lengthy processing time, no degraded quality. The photos appear in their full resolution and quality exactly as they were captured, with accurate color reproduction and proper orientation handling.

The application goes far beyond simple file opening. FrameFly is a complete photo management tool with a library view, smart album organization, comprehensive metadata display, professional-grade conversion capabilities, and a batch processing engine that can convert entire photo libraries with configurable quality and naming settings. For photographers who shoot on iPhone and need to integrate their photos into a Windows-based workflow, FrameFly is the missing piece that makes the iPhone-to-PC workflow seamless.

FrameFly also handles HEIF sequences — the Live Photos format used by iPhone — displaying both the still image and the short video component. Portrait mode photos with depth data are handled correctly, displaying at the appropriate depth-of-field effect. HDR photos captured on modern iPhones (which are stored as HEIF with HDR metadata) are tone-mapped appropriately for standard dynamic range displays, preserving the enhanced brightness and detail that HDR capture provides.

The application has been designed with speed as a primary objective. HEIC decoding is computationally more demanding than JPEG decoding, and poorly optimized HEIC viewers create a sluggish experience where photos take several seconds to appear. FrameFly uses hardware-accelerated HEIC decoding on compatible GPUs and a sophisticated pre-loading system to ensure photos appear essentially instantaneously — even at full resolution on modern high-megapixel iPhone sensors.`,
    },
    {
      id: 'features',
      title: 'Complete HEIC Viewing and Management',
      body: `FrameFly is packed with features that address every aspect of working with HEIC and HEIF images. Here is a comprehensive look at the tools available.

**Instant HEIC Opening — No Conversion Required**
The most fundamental value FrameFly provides is the ability to open HEIC files instantly without converting them first. Double-click any HEIC file and FrameFly opens it immediately, displaying the photo at full resolution with accurate colors and proper orientation. On a modern computer with a compatible GPU, even a 48-megapixel ProRAW-quality HEIC from the latest iPhone appears in under half a second. The first time you use FrameFly after coming from a system where HEIC files just showed as unrecognizable icons, the experience is genuinely remarkable.

**Beautiful Gallery and Library View**
FrameFly's library mode provides a visually rich photo management experience for organizing and browsing HEIC collections. Photo thumbnails are generated from the embedded preview included in every HEIC file (no need to decode the full file for thumbnail generation), making the library load extremely quickly even for large collections. Photos can be organized in the timeline view (by date taken), folder view (mirroring your file system structure), or in custom albums that you create by dragging photos from any source.

Smart albums automatically organize your photos by criteria you define — all photos from a specific date range, all photos above a certain resolution, all portrait mode photos, all panorama photos. As new photos are added to your library, smart albums update automatically.

**EXIF Metadata and Camera Information**
Every iPhone photo contains rich EXIF metadata — technical camera settings, GPS coordinates, device information, and much more. FrameFly's metadata panel displays this information in a clear, organized format: camera make and model (which iPhone and lens were used), exposure settings (aperture, shutter speed, ISO), focal length, GPS coordinates (with an interactive map preview), the date and time the photo was taken down to the second, the specific app that was used to take the photo (if applicable), and image technical specifications (dimensions, color space, bit depth, file size).

For photographers who care about their capture data, this metadata display is invaluable. Tapping on the GPS coordinates opens an interactive map showing exactly where the photo was taken. The exposure triangle display (aperture, shutter speed, ISO) shown graphically makes it easy to understand the camera's exposure decisions at a glance.

**Professional-Grade Format Conversion**
While FrameFly allows viewing HEIC files without conversion, conversion to more universally compatible formats is sometimes necessary — for sharing via services that don't support HEIC, for importing into applications that don't support HEIC, or for long-term archival in a more stable format. FrameFly's conversion engine supports output to JPEG (with quality control from 1-100), PNG (lossless), WebP (modern web format with excellent compression), TIFF (professional archival and editing), BMP, and GIF.

Conversion quality settings in FrameFly are more sophisticated than most competing tools. For JPEG conversion, you can specify the exact quality level on a 1-100 scale, with a file size estimate updated in real time. For all formats, you can choose to preserve or strip EXIF metadata. Color space conversion handles HEIC files in Display P3 color space (which iPhone uses for HDR photos) to sRGB (the standard for web and most applications) with proper gamut mapping that preserves as much color information as possible.

**Batch Conversion with Advanced Naming**
Batch conversion is where FrameFly truly shines for power users. Select any number of HEIC files (or entire folders) and FrameFly converts them all with a single operation. Batch conversion settings let you specify the output format, quality, destination folder, and file naming pattern.

The naming pattern system is particularly powerful. You can define a naming template using tokens like {original_name} (original filename without extension), {date_taken} (date photo was taken), {year}, {month}, {day}, {hour}, {minute}, {width}, {height}, {sequence} (sequential number), and literal text. This allows you to produce perfectly organized, consistently named output files without any manual renaming. For example, the pattern "iPhone_{year}-{month}-{day}_{original_name}" would produce files named "iPhone_2026-07-15_IMG_4521.jpg".

**Live Photo and Portrait Mode Support**
HEIC is not just a format for still photos — it is also used for iPhone's Live Photos (photos with a brief video component) and Portrait mode photos (photos with embedded depth data). FrameFly handles both correctly.

For Live Photos, FrameFly displays the still image frame by default, but you can hover over the image or press a keyboard shortcut to play the motion component, seeing the brief before-and-after animation that iPhone captures. When converting Live Photos, you can choose to export just the still frame, just the video component, or both separately.

For Portrait mode photos, FrameFly renders the photo with the appropriate depth-of-field bokeh effect as captured by the camera. The depth slider in the metadata panel allows you to adjust the apparent depth of field interactively, seeing how the photo looks with more or less background blur. When exporting Portrait mode photos, you can choose whether to export the standard portrait-effect render, a flat version without the depth effect, or both.

**Slideshow and Presentation Mode**
For reviewing or presenting photo collections, FrameFly's slideshow mode displays photos full-screen in sequence with configurable timing, transitions, and background music. Transitions include classic cross-dissolve, Ken Burns (slow pan and zoom), flip, and push. Photos can be advanced manually or automatically. The slideshow is available for any selection of photos — an entire library, a single album, or just the photos you have selected in the library view.

**Windows File Explorer Integration**
FrameFly integrates deeply with Windows File Explorer to provide the smoothest possible native experience. The FrameFly shell extension enables thumbnail previews for HEIC files directly in File Explorer — instead of showing a generic icon, your HEIC photos display as recognizable thumbnails. The properties panel in File Explorer shows key EXIF metadata for HEIC files. Right-click context menu integration allows you to convert selected HEIC files to JPEG or PNG directly from File Explorer without opening FrameFly's main interface.`,
    },
    {
      id: 'performance',
      title: 'Blazing Performance for Every Workflow',
      body: `Performance is at the heart of FrameFly's design. HEIC is a computationally demanding format — decoding a full-resolution 12-50 megapixel HEIC file requires significantly more computation than decoding an equivalent JPEG. FrameFly employs multiple strategies to make HEIC as fast and responsive as possible.

**Hardware-Accelerated Decoding**
On Windows PCs with compatible GPUs (Intel integrated graphics from 10th generation+, AMD RX 400 series and newer, NVIDIA GTX 1000 series and newer), FrameFly uses hardware-accelerated HEVC decoding for HEIC files, offloading the heavy decoding computation from the CPU to the GPU's dedicated media decoder. Hardware decoding is 5-10x faster than software decoding and generates far less heat, meaning your computer stays quiet and responsive while FrameFly is working.

For computers without hardware HEVC decoding support, FrameFly uses a highly optimized software decoder that leverages all available CPU cores in parallel. Even in software decoding mode, FrameFly opens a 12 MP HEIC file in under 1 second on a typical modern PC.

**Predictive Pre-Loading**
In gallery mode, FrameFly continuously pre-loads the next several photos in the background as you browse. By the time you navigate to the next photo, it is already decoded and ready to display instantly. This predictive pre-loading creates the illusion that HEIC photos open as fast as JPEG photos, even though the actual decoding work takes longer.

**Progressive Display**
For very large HEIC files (particularly ProRAW or ProRes formats from the latest Pro iPhones), FrameFly uses progressive display — showing a lower-resolution preview immediately while the full-resolution decode completes in the background. The transition from preview to full resolution is smooth and nearly imperceptible, ensuring that you can always see your photo immediately without waiting for the full decode.

**Lightweight System Footprint**
Despite its feature richness, FrameFly maintains a minimal system footprint. The application installs in under 20 MB, uses minimal RAM when idle (typically under 50 MB), and adds no background processes or startup items when not in use. Unlike some photo applications that run background syncing and analysis tasks constantly, FrameFly is completely inactive when you are not using it, respecting your system resources.`,
    },
    {
      id: 'faq',
      title: 'Frequently Asked Questions',
      body: '',
    },
  ],

  faqs: [
    {
      q: 'Does FrameFly support Windows 11?',
      a: 'Yes, FrameFly fully supports Windows 10 (version 1903 and later) and Windows 11. The Windows 11 version takes advantage of improved DirectX 12 Ultimate features for enhanced GPU-accelerated decoding performance.',
    },
    {
      q: 'Does opening HEIC files in FrameFly reduce image quality?',
      a: 'No. FrameFly displays HEIC images in their original quality without any re-encoding or quality loss. Only when you explicitly convert a file (e.g., to JPEG) is any encoding applied, and you control the quality settings for that conversion.',
    },
    {
      q: 'Can FrameFly convert entire iPhone photo libraries?',
      a: 'Yes. FrameFly\'s batch conversion can handle entire photo libraries with thousands of files. You can point it at any folder (or folder tree with subfolders) and it will convert all HEIC files, preserving the folder structure in the output location. Processing speed is typically 30-100 photos per minute depending on your hardware.',
    },
    {
      q: 'Does FrameFly preserve GPS and metadata during conversion?',
      a: 'Yes by default. All EXIF metadata including GPS coordinates, camera settings, date/time, and device information is preserved in converted files. You can optionally choose to strip metadata (for privacy when sharing photos online).',
    },
    {
      q: 'Can FrameFly open RAW files from iPhone?',
      a: 'Yes. FrameFly supports Apple ProRAW (.dng) files from iPhone 12 Pro and later. ProRAW files contain significantly more image data than standard HEIC files and allow for more extensive editing in post-processing applications.',
    },
    {
      q: 'Is there a macOS version of FrameFly?',
      a: 'Yes. FrameFly is available for both Windows and macOS. On macOS, many HEIC features are built into the operating system, but FrameFly provides its superior gallery view, batch conversion, advanced metadata display, and Live Photo management that the built-in macOS apps lack.',
    },
  ],

  news: [
    {
      slug: 'framefly-windows11-optimized',
      title: 'FrameFly 2.4 — Fully Optimized for Windows 11 with New AI Enhancement Engine',
      date: 'July 12, 2026',
      summary: 'FrameFly 2.4 brings native Windows 11 optimization including Snap Layouts support, the new AI Enhancement Engine for improving low-quality HEIC photos, and expanded HEIF format coverage.',
      readTime: '12 min read',
      category: 'Product Update',
      body: `Windows 11 has brought a fresh visual language and a set of productive new features to the Windows ecosystem, and today we are proud to announce that FrameFly 2.4 is the first dedicated HEIC viewer to be fully optimized and certified for Windows 11. This release goes far beyond cosmetic updates — it includes deep Windows 11 integration, a groundbreaking AI Enhancement Engine, and comprehensive support for the latest HEIF format extensions.

## Native Windows 11 Integration

FrameFly 2.4 has been rebuilt to take full advantage of Windows 11's new capabilities and design language. The application now uses the Fluent Design System with Mica material backgrounds that adapt to your Windows 11 accent color and transparency settings, creating a UI that feels native and polished on Windows 11 while remaining fully functional on Windows 10.

Snap Layouts — Windows 11's enhanced window snapping feature — works perfectly with FrameFly. You can snap FrameFly's gallery view on one side of your screen alongside a document or other application, using the thumbnail grid to select photos while simultaneously working in another application. The gallery view is also optimized for Windows 11's improved multi-monitor support, correctly handling different scaling factors on different monitors.

FrameFly 2.4 integrates with Windows 11's new Share sheet, allowing you to share HEIC files or converted images directly to apps, contacts, and cloud services from within FrameFly. Right-click any photo in FrameFly and select "Share" to access the Windows 11 sharing interface. The Send To menu has also been enhanced with quick convert options — "Send to JPEG" and "Send to PNG" appear directly in the right-click context menu without needing to open the full conversion dialog.

## The AI Enhancement Engine

The most significant new feature in FrameFly 2.4 is the AI Enhancement Engine — an on-device machine learning model that can intelligently improve the quality of suboptimal HEIC photos. This is not a simple filter or slider adjustment — it is a genuine AI model trained on millions of paired low-quality/high-quality photos that understands how to recover detail, reduce noise, correct exposure, and improve sharpness in a way that looks natural.

The AI Enhancement Engine offers four enhancement modes:

**Noise Reduction**: Removes digital noise (the grainy appearance common in photos taken in low light) while preserving fine detail and edge sharpness. The model has been specifically trained on iPhone sensor noise patterns, making it unusually effective for iPhone-captured HEIC photos.

**Super Resolution**: Increases the apparent resolution of a photo by intelligently predicting the detail that would have been captured at a higher resolution. This is particularly useful for cropped photos where you have zoomed in digitally, or for older iPhone photos with lower megapixel counts.

**Low Light Enhancement**: Brightens photos taken in dim conditions while simultaneously removing the noise that low-light capture introduces. The model understands the difference between intentional deep shadows (which should be preserved) and muddy dark areas due to underexposure (which should be brightened).

**Color Restoration**: Corrects color casts, improves saturation, and enhances white balance for photos that look pale, yellow-tinted, or washed out. Particularly effective for indoor photos taken under artificial lighting.

All enhancements are applied non-destructively — you always see a before/after comparison slider, and the original unenhanced file is preserved. When you are satisfied with the enhancement, you can save it as a new file or replace the original. Enhancement processing happens entirely on your device using Windows ML APIs for hardware-accelerated inference, with no photos sent to any server.

## Expanded HEIF Format Support

The HEIF format container is used for more than just still photos — it also stores image sequences, depth maps, high-dynamic range images, and other next-generation image types. FrameFly 2.4 expands its HEIF support to cover several new variants:

AVIF (AV1 Image Format) is an emerging image format that uses the AV1 codec (instead of HEVC) inside the HEIF container, offering even better compression than HEIC while being entirely royalty-free. As web browsers and cameras adopt AVIF, FrameFly now supports opening, viewing, and converting AVIF images alongside HEIC files.

HEIF sequences — multiple still images stored in a single HEIF file — are now displayed as an animated sequence, similar to an animated GIF but with much higher quality. This is used by some cameras and computational photography apps to store burst photos and focus stacks.

These format expansions position FrameFly as the universal viewer for the entire HEIF ecosystem, not just the Apple-specific HEIC variant.

FrameFly 2.4 is available today as a free update for all existing FrameFly users. New users can download FrameFly from our website with a 30-day free trial.`,
    },
  ],
};

export default framefly;
