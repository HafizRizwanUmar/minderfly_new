const cinemafly = {
  slug: 'cinemafly',
  name: 'Cinemafly',
  tagline: 'HEVC & 4K Video — Cinema-Grade Playback on Every Screen',
  shortDesc: 'The ultimate 4K HEVC video player for macOS and iOS. Play any video format flawlessly — H.265, 4K, HDR10, Dolby Vision, and more — with hardware-accelerated performance.',
  heroColor: '#2d1b69',
  accentColor: '#00d4ff',
  logo: '/products/logo/cinemafly (2).png',
  screenshot: '/products/screenshot/cinemafly.png',
  appStoreLink: '#',
  playStoreLink: '#',
  category: 'Video & Entertainment',
  rating: 4.9,
  reviews: 28600,
  version: '5.1.0',
  size: '38 MB',
  platforms: ['macOS', 'iOS', 'tvOS'],

  sections: [
    {
      id: 'overview',
      title: 'What is Cinemafly?',
      body: `Cinemafly is the definitive video player for Apple platforms, built from the ground up to deliver cinema-quality video playback with zero compromise on format compatibility, visual fidelity, or performance. Whether you are watching a 4K Blu-ray rip, an HEVC-encoded travel video you shot on your iPhone, a foreign film with subtitle tracks, or a live sporting event in HDR10+, Cinemafly handles every scenario with effortless grace.

The modern video landscape is fragmented and complex. Video files come in dozens of container formats (MKV, MP4, AVI, MOV, M4V, TS, MXF, WebM) and are encoded with an ever-expanding list of codecs (H.264, H.265/HEVC, AV1, VP9, ProRes, DNxHD). Most standard media players struggle with even a fraction of this variety — they either fail to play certain formats, require the installation of additional codecs, or compromise quality by software-decoding video that should be hardware-decoded. The result is stuttering playback, overheating devices, drained batteries, and generally a frustrating viewing experience.

Cinemafly was created specifically to solve this problem. At its core is a sophisticated media playback engine built on a combination of Apple's hardware Video Toolbox framework (for maximum performance on Apple Silicon and Intel Macs), an enhanced version of the FFmpeg library (for universal format support), and Cinemafly's own proprietary rendering pipeline (for superior color accuracy and HDR tone mapping). This three-layer architecture means Cinemafly can play virtually any video file you throw at it, while always choosing the most efficient decoding path for maximum performance and battery life.

On Apple Silicon Macs (M1, M2, M3, M4, and beyond), Cinemafly takes full advantage of the dedicated media engine built into Apple's chips. Playing a 4K HEVC video at maximum quality consumes only a fraction of the CPU resources that software decoding would require, meaning you can watch a two-hour 4K movie on battery power without significantly impacting your laptop's runtime. On Intel Macs, Cinemafly similarly leverages Intel's Quick Sync Video hardware acceleration for supported codecs.

For video creators and content professionals, Cinemafly supports professional codec formats including Apple ProRes (422, 422 HQ, 422 LT, 422 Proxy, 4444, 4444 XQ), Avid DNxHD and DNxHR, RED RAW (with the free REDline SDK plugin), and ARRI LogC formats. This makes Cinemafly not just a consumer media player but a genuine professional preview tool that can be used on set or in post-production for quick, high-quality playback without launching a full editing application.`,
    },
    {
      id: 'features',
      title: 'Every Feature a Video Enthusiast Could Dream Of',
      body: `Cinemafly is packed with features that address every aspect of the video playback experience. Here is an exhaustive look at what makes Cinemafly the video player of choice for millions of users worldwide.

**Universal Format Support — Play Anything**
Cinemafly's format compatibility is unmatched. Container support includes MKV, MP4, M4V, MOV, AVI, WMV, FLV, WebM, TS, M2TS, MXF, OGV, 3GP, and dozens of others. Video codec support includes H.264 (AVC), H.265 (HEVC), AV1, VP8, VP9, MPEG-2, MPEG-4, WMV, DivX, Xvid, Theora, ProRes, DNxHD, DNxHR, and more. For the rare format that Cinemafly doesn't natively support, the built-in codec package manager lets you install additional codecs with one click. If a file exists on your device, Cinemafly will play it.

**4K Ultra HD and 8K Playback**
Cinemafly was designed with 4K as the baseline, not a premium feature. It handles 4K video at 24, 25, 30, 60, and 120 frames per second, as well as 8K video on compatible hardware. For professional users working with high-bitrate 4K footage (100 Mbps or higher), Cinemafly manages buffer management and seek performance with sophisticated algorithms that eliminate the stuttering that many players exhibit with these demanding files.

**HDR10, HDR10+, Dolby Vision, and HLG Support**
High Dynamic Range video delivers a dramatically expanded range of colors and brightness compared to standard dynamic range (SDR) video, and Cinemafly supports every major HDR format. On compatible displays (Apple XDR displays, Pro Display XDR, compatible external monitors), HDR content is displayed with full peak brightness and the complete P3 or BT.2020 color gamut. For SDR displays, Cinemafly's proprietary HDR-to-SDR tone mapping algorithm preserves as much of the HDR content's visual character as possible while adapting it to the display's capabilities — far superior to the harsh clipping that most other players apply.

**Advanced Subtitle System**
Subtitle support in Cinemafly goes far beyond simply displaying text. External subtitle formats supported include SRT, ASS, SSA, VTT, SUB, IDX, SBV, and more. Embedded subtitle tracks in MKV, MP4, and other containers are automatically detected and selectable. Cinemafly's subtitle rendering engine handles complex formatting including italics, bold, color coding, position overrides, and karaoke-style highlighting. For ASS/SSA subtitles used in anime and some foreign films, Cinemafly renders the full spec including animated elements, gradient fills, and precise positioning.

The subtitle preferences panel gives you complete control over font, size, color, outline weight, shadow depth, and position, with a live preview. If you are watching a film in a foreign language and the subtitle track has timing issues, the subtitle delay slider allows you to adjust timing in 100 millisecond increments without pausing playback.

**Multiple Audio Track and Surround Sound Support**
Modern video files often contain multiple audio tracks — different languages, directors' commentaries, audio descriptions for the visually impaired, and different audio formats. Cinemafly lets you switch between all available audio tracks instantly during playback. Audio format support includes Dolby Digital (AC3), Dolby Digital Plus (E-AC3), Dolby TrueHD, DTS, DTS-HD Master Audio, DTS:X, Dolby Atmos passthrough, and uncompressed PCM (up to 32-bit, 192 kHz). On Macs connected to compatible audio receivers or soundbars via HDMI or optical audio, Cinemafly supports full bitstream passthrough for lossless audio formats, delivering the complete Dolby Atmos or DTS:X experience.

**Picture-in-Picture and Split View**
Cinemafly's Picture-in-Picture mode allows you to continue watching a video in a small floating overlay while working in other applications. The PiP window can be resized from a compact thumbnail to a significant portion of your screen, and Cinemafly remembers your preferred size and screen position. On macOS Ventura and later, PiP windows stay on top of even full-screen applications, letting you reference a tutorial video while working in your creative applications. Split View support allows Cinemafly to operate alongside another application in Apple's native Split View mode.

**Playlist Management and Continuous Playback**
Cinemafly includes a full-featured playlist manager for organizing and queueing multiple files. Drag and drop any combination of video files or folders into the playlist, set the order, and Cinemafly will play them continuously. The playlist supports repeat (single, all), shuffle, and bookmarking individual files to resume later. For TV show marathons, the auto-advance feature moves to the next episode automatically after a brief pause, and the system even intelligently detects opening credit sequences and optional episode recaps to offer to skip them.

**Advanced Playback Controls**
Beyond the standard play, pause, and seek controls, Cinemafly offers a complete set of advanced playback features. Frame-by-frame stepping (forward and backward) is essential for video analysis and editing review. Variable playback speed supports 0.25x, 0.5x, 0.75x, 1x, 1.25x, 1.5x, 2x, and 4x speeds. A/B loop allows you to mark a start and end point and loop a specific section of video indefinitely — perfect for language learning, sports analysis, and music video study. Chapter markers embedded in MKV and MP4 files are displayed in a chapter browser panel for easy navigation.

**Video Filters and Adjustments**
Cinemafly includes a comprehensive set of real-time video adjustments that can improve the viewing experience for suboptimal content or match your display's characteristics. Brightness, contrast, saturation, hue, and sharpness can all be adjusted on the fly. The deinterlacing filter converts interlaced video (common in broadcast recordings and older DVD content) to progressive display, eliminating the comb artifacts that make interlaced content look jagged. A noise reduction filter can smooth out grain in old or poorly encoded video. The deband filter removes banding artifacts common in video with insufficient bit depth.

**Library and Media Management**
Cinemafly's library view aggregates all your video files from specified folder locations and displays them in a visually rich grid with automatically fetched poster art, titles, and metadata from online databases. The library organizes your content into categories (Movies, TV Shows, Home Videos), supports custom collections, and tracks your watch history and progress. The smart resume feature picks up exactly where you left off — even if you switched devices — so you never lose your place in a long film or documentary.`,
    },
    {
      id: 'performance',
      title: 'Performance That Defies Belief',
      body: `Performance is not just a feature in Cinemafly — it is a philosophy. Every aspect of the application has been optimized to deliver the smoothest possible playback while using the least possible system resources.

**Hardware Decoding — The Cinemafly Difference**
The single biggest factor in video playback performance is whether the video is decoded by software (the CPU) or hardware (the dedicated media engine or GPU). Software decoding can decode any format but is dramatically more resource-intensive — it heats up your device, drains the battery rapidly, and can cause playback stuttering on complex content. Hardware decoding is far more efficient but is only available for specific codecs supported by your device's hardware.

Cinemafly implements an intelligent decode path selection system that automatically detects which codecs your specific hardware supports for acceleration and always uses the optimal path. On an M3 MacBook Pro, for example, Cinemafly can hardware-decode H.264, H.265, HEVC, VP9, AV1, and ProRes simultaneously while consuming minimal CPU resources. This means you can watch a 4K HEVC video on battery power for hours longer than you could with any other player that uses software decoding.

**Startup and Seek Performance**
Cinemafly opens most video files and begins playback in under one second. For large MKV files that are common for Blu-ray rips (30-50 GB), Cinemafly's intelligent container parser reads the file structure on a background thread while simultaneously beginning to decode and display the first frames, creating the illusion of instantaneous startup even for very large files.

Seeking (jumping to a specific time in a video) is another area where Cinemafly excels. For files with a complete index (most MP4s, MOVs, and well-formed MKVs), seeking is instantaneous. For files without a good index (some AVI files, poorly muxed MKVs, and TS streams), Cinemafly uses a predictive seeking algorithm that dramatically reduces seek times compared to conventional approaches. The result is a fluid, responsive experience when scrubbing through long video files.

**Memory Management**
Cinemafly has been carefully engineered to maintain a minimal memory footprint while delivering maximum performance. The adaptive buffer management system allocates the precise amount of memory needed for current playback conditions — more for high-bitrate content, less for standard definition video. On devices with limited RAM (older Macs or budget iPads), Cinemafly gracefully reduces buffer sizes to avoid memory pressure while maintaining smooth playback.

**Network Streaming Optimization**
When streaming video from a network location (NAS drive, SMB share, or UNC path), Cinemafly employs advanced read-ahead buffering and adaptive chunk sizing to minimize stuttering over imperfect network connections. The streaming performance is particularly impressive on Wi-Fi networks with variable throughput — Cinemafly can sustain smooth 4K HEVC playback over an 80 Mbps Wi-Fi connection with only occasional brief buffering pauses in worst-case conditions.`,
    },
    {
      id: 'use-cases',
      title: 'Who Uses Cinemafly',
      body: `Cinemafly serves a diverse community of users, from casual movie watchers to demanding professional video creators. Here is a look at the key user groups and how Cinemafly fits into their workflow.

**Home Theater Enthusiasts**
The home theater community has long been the core of Cinemafly's user base. These are people who invest in high-quality displays, surround sound systems, and premium video content — and they demand a player that can do justice to that content. For home theater enthusiasts, Cinemafly's combination of bit-perfect audio passthrough, accurate HDR rendering, and support for every format used in the Blu-ray ripping community makes it the unchallenged champion.

**Video Content Creators**
YouTubers, filmmakers, and social media content creators use Cinemafly to preview their footage quickly without the overhead of launching editing software. Cinemafly's support for professional codecs (ProRes, DNxHD) and raw camera formats means that footage from professional cameras can be previewed at full quality directly from camera cards or editing drives. The frame-stepping and A/B loop features are particularly useful for reviewing specific moments in footage before editorial decisions.

**Travelers and Commuters**
For people who travel frequently and want to watch content offline, Cinemafly's efficiency on battery power is a significant advantage. A commuter can watch multiple HD movies during a long flight without worrying about their laptop running out of charge. The automatic bookmark system ensures that pausing to deal with in-flight necessities doesn't lose their place.

**Language Learners**
Watching films and TV shows in a target language is one of the most effective methods for language acquisition, and Cinemafly's advanced subtitle system and A/B loop feature make it an outstanding companion for language study. Language learners use the A/B loop to repeat challenging dialogue sections, and the subtitle preferences to display target language subtitles without mother-tongue subtitles as a crutch.

**Sports Analysts**
Sports coaches and analysts use Cinemafly's frame-stepping, slow motion, and A/B loop features to analyze game footage and player technique with precision. The ability to slow any video down to quarter speed while maintaining smooth playback is particularly valuable for analyzing fast-moving athletic actions like a golf swing, a tennis serve, or a sprint start.`,
    },
    {
      id: 'faq',
      title: 'Frequently Asked Questions',
      body: '',
    },
  ],

  faqs: [
    {
      q: 'Does Cinemafly support Dolby Atmos?',
      a: 'Yes. Cinemafly supports Dolby Atmos passthrough via HDMI or optical audio output to compatible receivers and soundbars. When playing an Atmos-encoded track, the full spatial audio information is passed through to your audio hardware without any processing or downmixing.',
    },
    {
      q: 'Can Cinemafly play 4K HDR video?',
      a: 'Absolutely. Cinemafly supports 4K HDR10, HDR10+, Dolby Vision, and HLG formats. On compatible HDR displays (Apple XDR, Pro Display XDR, compatible external monitors), content is displayed with full peak brightness. On SDR displays, Cinemafly applies intelligent tone mapping.',
    },
    {
      q: 'Does Cinemafly support Apple Silicon?',
      a: 'Yes, Cinemafly is a Universal Binary optimized natively for both Apple Silicon (M1/M2/M3/M4) and Intel Macs. On Apple Silicon, Cinemafly uses the dedicated media engine for maximum efficiency. Playing 4K HEVC consumes approximately 8-12% CPU on Apple Silicon vs 40-60% with software decoding.',
    },
    {
      q: 'Can I play MKV files with Cinemafly?',
      a: 'Yes. MKV is one of the most popular container formats for high-quality video, and Cinemafly has first-class MKV support. All embedded audio tracks, subtitle tracks, and chapter markers are supported.',
    },
    {
      q: 'Does Cinemafly support AirPlay and Apple TV?',
      a: 'Yes. Cinemafly supports AirPlay 2 for streaming video to Apple TV, AirPlay 2-compatible smart TVs, and compatible receivers. For optimal quality over AirPlay, we recommend a 5 GHz Wi-Fi connection.',
    },
    {
      q: 'Is there a Windows or Android version?',
      a: 'Cinemafly is currently available exclusively for Apple platforms (macOS, iOS, and tvOS). We have evaluated Android and Windows versions and may expand platforms in a future release.',
    },
    {
      q: 'Can Cinemafly stream from a NAS or network share?',
      a: 'Yes. Cinemafly can open files directly from SMB network shares, AFP shares (legacy), and UNC paths. The built-in network browser makes it easy to browse and play content from your NAS without mounting it as a network drive first.',
    },
  ],

  news: [
    {
      slug: 'cinemafly-av1-support',
      title: 'Cinemafly Adds Full AV1 Hardware Decoding — Future-Proofing Your Video Library',
      date: 'July 10, 2026',
      summary: 'Cinemafly 5.1 introduces hardware-accelerated AV1 decoding on Apple Silicon, delivering up to 4x better performance for the codec set to dominate the next decade of streaming.',
      readTime: '15 min read',
      category: 'Product Update',
      body: `The history of video compression is a continuous battle between quality and efficiency — codec engineers constantly searching for ways to squeeze more visual quality into fewer bits, enabling higher-quality video at lower bandwidth and storage costs. For the past decade, H.265 (HEVC) has been the dominant high-efficiency codec, delivering roughly twice the compression efficiency of its predecessor H.264 while maintaining equivalent quality. But a new generation of codecs has emerged, and AV1 is poised to define the next decade of digital video.

Today, we are thrilled to announce that Cinemafly 5.1 brings full hardware-accelerated AV1 decoding to all Apple Silicon Macs and the latest iOS devices, making Cinemafly the first third-party media player on Apple platforms to offer hardware AV1 acceleration. This is not a marketing claim — it is a fundamental architectural upgrade that transforms how AV1 content performs in Cinemafly.

## What is AV1 and Why Does It Matter?

AV1 is an open, royalty-free video codec developed by the Alliance for Open Media (AOM), a consortium that includes Google, Apple, Microsoft, Netflix, Amazon, Intel, AMD, ARM, and dozens of other technology and media companies. Released in 2018 and refined continuously since, AV1 offers roughly 30% better compression efficiency than HEVC and approximately 50% better than H.264 — meaning the same visual quality can be delivered in a file that is 30% smaller than an HEVC file, or the same file size delivers noticeably better quality.

For streaming services, this efficiency translates directly to reduced bandwidth costs and the ability to deliver higher-quality video to users with slower internet connections. Netflix, YouTube, Vimeo, and most major streaming platforms have already transitioned a significant portion of their catalog to AV1 encoding, and this transition will accelerate dramatically over the next three to five years. By 2028, industry analysts predict that AV1 will be the dominant codec for internet video delivery, surpassing HEVC.

For offline video content — the kind of high-quality files that Cinemafly's core user base watches — AV1 is also increasingly present. Several Blu-ray ripping communities have begun producing AV1-encoded releases that offer smaller file sizes than HEVC rips with equivalent or better quality. Home video enthusiasts who have been archiving their collections as HEVC files are beginning to explore AV1 re-encoding for additional storage savings.

## The Hardware Acceleration Difference

Until Cinemafly 5.1, AV1 playback in any media player on macOS required software decoding — the CPU had to do all the work of decoding the video frames. For 1080p AV1 content, software decoding is manageable on modern hardware, typically consuming 20-40% of CPU resources. But for 4K AV1 content, software decoding pushes even the fastest Mac CPUs to their limits — we observed 80-100% CPU utilization on M2 Pro MacBook Pros playing 4K AV1 at 30 fps, with significant thermal throttling causing stuttering and frame drops.

Apple Silicon chips starting from M3 include dedicated AV1 hardware decode units in their Neural Engine and Media Engine. These hardware units can decode AV1 video with a fraction of the CPU resources required for software decoding. In our benchmarks, hardware AV1 decoding on an M3 MacBook Pro uses just 8% CPU for 4K AV1 at 30 fps — a 10x improvement over software decoding. Even more impressively, hardware-decoded 4K AV1 at 60 fps — the kind of content that will become increasingly common in the next few years — runs at just 14% CPU utilization.

Beyond CPU efficiency, hardware decoding dramatically reduces heat generation and power consumption, which is critical for laptop users. In our battery life testing, watching a 2-hour 4K AV1 film with software decoding consumed 34% more battery compared to hardware decoding. For a MacBook Pro user with a three-hour battery life, this difference means the difference between finishing the film on battery and having to plug in.

## AV1 in Cinemafly — The Technical Details

Implementing hardware AV1 decoding in Cinemafly required significant engineering work to bridge the gap between the AV1 bitstream (the raw encoded data in the video file) and Apple's Video Toolbox hardware acceleration framework. While Video Toolbox has supported AV1 hardware decoding since macOS Sonoma on M3 hardware, accessing this acceleration for third-party media players requires careful implementation of the correct APIs and proper handling of the many AV1 profile and level variations.

Cinemafly 5.1's AV1 implementation supports the full AV1 specification including Main Profile (8-bit and 10-bit), High Profile (for content with 4:4:4 chroma subsampling), and Professional Profile (for 12-bit content). All AV1 film grain synthesis parameters are respected, delivering the precise cinematic grain texture that filmmakers have encoded. AV1's advanced screen content coding tools, used to make gaming content and screencasts more compressible, are also supported.

For devices without hardware AV1 acceleration (Intel Macs, older Apple Silicon), Cinemafly 5.1 incorporates dav1d, the fastest software AV1 decoder available, compiled with full NEON SIMD optimization for Apple Silicon and SSE4 optimization for Intel. This ensures that even without hardware acceleration, AV1 performance in Cinemafly is as good as technically possible on current software decoding paths.

## AV1 with HDR — The Full Package

AV1 is not just a more efficient codec — it was designed from the ground up with HDR support as a core capability. AV1 natively supports HDR10, HDR10+, and Dolby Vision in the same profile, meaning that a single AV1 bitstream can carry full HDR metadata for all three formats simultaneously, allowing playback devices to select the appropriate HDR format based on their capabilities.

Cinemafly 5.1's AV1 implementation fully supports all AV1 HDR profiles. On Apple Pro Display XDR and Apple M-series MacBooks with Liquid Retina XDR displays, AV1 HDR10 content is rendered with full peak brightness and the complete P3 color gamut. For content with Dolby Vision metadata, Cinemafly can render the Dolby Vision tone curve on supported displays, delivering the creator-intended HDR experience.

## Compatibility and Rollout

Hardware AV1 decoding in Cinemafly 5.1 is available on the following Apple hardware: MacBook Pro and MacBook Air with M3, M3 Pro, M3 Max, M4, M4 Pro, or M4 Max chips; Mac mini with M4 or M4 Pro; iMac with M4; Mac Pro with M2 Ultra (limited to 1080p hardware decode); iPhone 15 Pro, iPhone 15 Pro Max, iPhone 16, iPhone 16 Plus, iPhone 16 Pro, and iPhone 16 Pro Max; iPad Pro 11-inch (M4) and iPad Pro 13-inch (M4).

Software AV1 decoding via dav1d is available on all other supported hardware.

Cinemafly 5.1 is available today as a free update for all existing Cinemafly users. New users can download Cinemafly from the Mac App Store and iOS App Store. The AV1 hardware acceleration features are available on all Cinemafly plans including the free tier.`,
    },
  ],
};

export default cinemafly;
