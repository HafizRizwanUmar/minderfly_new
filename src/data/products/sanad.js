const sanad = {
  slug: 'sanad',
  name: 'Sanad PDF Editor',
  tagline: 'Edit, Annotate & Transform PDFs with Professional Precision',
  shortDesc: 'The most powerful PDF editor designed for professionals. Edit text, annotate, merge, split, compress, convert and sign PDFs — all in one elegant app.',
  heroColor: '#00572a',
  accentColor: '#34d399',
  logo: '/products/logo/sanad.png',
  screenshot: '/products/sanad_screenshot.jpg',
  appStoreLink: '#',
  playStoreLink: '#',
  category: 'Productivity',
  rating: 4.7,
  reviews: 19800,
  version: '4.5.2',
  size: '52 MB',
  platforms: ['macOS', 'iOS', 'Windows', 'Android'],

  sections: [
    {
      id: 'overview',
      title: 'What is Sanad PDF Editor?',
      body: `Sanad PDF Editor is a comprehensive, professional-grade PDF editing and management application designed for users who demand complete control over their PDF documents. The name "Sanad" — meaning "support" or "document" in Arabic — reflects the app's mission: to be the foundational document tool that professionals rely on every day. From editing text and images directly inside a PDF, to annotating reports with markup tools, to converting between document formats, Sanad covers the complete spectrum of PDF workflows that modern professionals encounter.

The PDF format was invented by Adobe in the early 1990s as a way to share documents that look the same on every device and operating system, regardless of what fonts or software the recipient has installed. Over three decades, PDF has become the universal standard for professional document exchange — contracts, invoices, reports, academic papers, government forms, technical manuals, and thousands of other document types are distributed as PDFs every day. Despite this ubiquity, truly editing a PDF has always been far more difficult than it should be.

Sanad changes this. With Sanad's direct PDF editing engine, you can click on any text in a PDF and edit it as naturally as you would in a word processor. Sanad identifies text blocks, preserves the original font and formatting, and allows you to correct typos, update information, and rewrite entire paragraphs. Image editing is equally fluid — click on any image in a PDF to replace it, resize it, reposition it, or apply adjustments. Even complex table structures can be edited directly, with rows and columns adding and reflow automatically.

Beyond pure editing, Sanad is a complete PDF management suite. You can merge multiple PDFs into a single document, split a large PDF into individual pages or chapter-by-chapter subsets, reorder pages by drag and drop, rotate pages, crop page margins, and delete unnecessary pages. These organizational tools are indispensable for professionals who regularly work with multi-document report packages, combined contract sets, or book-length technical documents.

Sanad's annotation toolkit is one of the richest available in any PDF application. You can highlight text, add sticky note comments, draw freehand markup using a stylus or mouse, insert text boxes, stamp documents with approved or reviewed marks, and use geometric shapes to draw attention to specific areas. All annotations are standards-compliant and visible in any PDF reader, including Adobe Acrobat, making Sanad-annotated documents fully compatible with any recipient's workflow.

The application is equally at home on a MacBook trackpad, an iPad with Apple Pencil, a Windows desktop with a mouse, or an Android tablet with a stylus. Sanad's interface adapts intelligently to each platform and input method, providing the optimal experience for each context. On iPad with Apple Pencil, Sanad transforms into a near-physical document markup experience — annotating a PDF feels as natural as marking up a paper printout, but with the permanence and sharing capabilities of digital documents.`,
    },
    {
      id: 'features',
      title: 'Complete PDF Editing — Every Tool You Need',
      body: `Sanad offers an extraordinarily comprehensive set of PDF tools organized into logical workflow categories. Here is a detailed exploration of everything Sanad can do.

**Direct Text Editing**
Sanad's most powerful differentiating capability is direct text editing inside PDFs. Using advanced font matching and text block detection algorithms, Sanad identifies editable text regions throughout a document and allows you to click and edit them directly. When you click on a text block, Sanad identifies the font, size, color, and spacing used for that text and provides an editing cursor that matches these properties. As you type, the new text flows naturally within the original text block boundaries. If your changes require more or less space than the original text, Sanad intelligently reflows the paragraph, maintaining proper line spacing and margins.

For documents that were created from scanned paper originals (rather than digital originals), Sanad's OCR (Optical Character Recognition) engine first converts the scanned image to searchable, selectable text before enabling editing. The OCR engine supports 187 languages and achieves recognition accuracy rates exceeding 99.5% for clean, well-printed documents.

**Comprehensive Annotation Toolkit**
The annotation toolkit in Sanad is professional-grade and covers every markup scenario. Highlighting comes in eight preset colors with adjustable opacity. Underline and strikethrough markups are available for academic and editorial review. Sticky note comments can be placed anywhere on a page and collapsed to a small icon when not being read. Freehand drawing allows natural markup with any pointing device, with pressure sensitivity support for Apple Pencil and compatible styluses. Callout shapes draw attention to specific areas with lines connecting annotations to their referenced content. Stamps provide pre-designed and customizable approved, rejected, confidential, draft, and reviewed marks.

All annotations include metadata — the annotator's name (from your account profile), the date and time of annotation, and any reply comments from collaborators. This annotation threading system makes Sanad suitable for multi-reviewer document workflows where legal, compliance, and editorial teams need to coordinate feedback on shared documents.

**Form Creation and Filling**
Sanad is a complete PDF form solution. For existing PDF forms (government forms, tax documents, job applications), Sanad's intelligent form field detection automatically recognizes text fields, checkboxes, radio buttons, dropdown menus, and signature fields, allowing you to fill them digitally without printing. For creating new forms, Sanad's form designer provides drag-and-drop placement of all form field types with full configuration options — field names, default values, required/optional status, character limits, and validation rules.

Filled forms can be saved as PDF/A (the archival PDF standard required by many government and legal contexts) to ensure long-term accessibility. For businesses that need to distribute forms for completion and then collect and aggregate the responses, Sanad's form data export feature compiles all submitted form data into a structured CSV or Excel file.

**PDF Conversion — Every Direction**
Converting to and from PDF is a daily task for most professionals, and Sanad handles every conversion direction with exceptional quality. PDF to Word conversion preserves tables, bullet lists, columns, headers and footers, embedded images, and font formatting with near-perfect accuracy. PDF to Excel extracts tabular data while maintaining cell structure and formulas where detectable. PDF to PowerPoint reconstruction is available for presentation slides. PDF to JPG, PNG, TIFF, and BMP image export allows you to extract individual pages as high-resolution images.

Conversion to PDF is equally comprehensive. Word, Excel, PowerPoint, HTML, Markdown, RTF, and text files can all be converted to PDF. Image files (JPG, PNG, HEIC, WebP, TIFF) can be converted to PDF individually or combined into a multi-page PDF. For bulk conversion, Sanad's Watch Folder feature monitors a specified folder and automatically converts any files dropped into it, making it a powerful server-side PDF production tool for offices that generate PDFs at scale.

**Document Organization and Page Management**
Managing PDF pages in Sanad is as simple as drag and drop. The page panel (displayed as a scrollable thumbnail strip alongside the main document view) shows every page in the document and allows you to reorder pages, delete pages, rotate pages, insert blank pages, and extract specific pages to a new document. Merging multiple PDFs is as simple as dragging them into the page panel or using the File > Merge menu.

For large documents, Sanad's bookmark manager allows you to create a navigable table of contents by adding bookmarks that link to specific pages. Bookmarks can be nested to create hierarchical chapter and section structures, making long technical documents or legal agreements much more navigable.

**Password Protection and Security**
Protecting sensitive PDF documents is straightforward in Sanad. You can apply password protection at two levels: an open password (required to view the document) and an owner password (required to make changes, print, or copy content). For each permission category, you can independently allow or deny printing, high-resolution printing, content copying, annotation, form filling, and page extraction. Sanad uses AES-256 encryption for all password-protected documents, the highest available security level in the PDF specification.

Digital signatures are also supported. You can apply your Sanad-stored digital signature certificate to a PDF to create a legally binding, tamper-evident signed document. If you have received a signed PDF, Sanad's signature verification panel confirms the validity of all signatures and alerts you to any document modifications made after signing.

**Cloud Integration and Collaboration**
Sanad connects to all major cloud storage services — iCloud Drive, Google Drive, Dropbox, OneDrive, and Box. Documents stored in the cloud are accessible directly from within Sanad, with automatic sync keeping your local and cloud copies in perfect sync. For team environments, Sanad's shared folder integration allows multiple team members to access and annotate the same document simultaneously, with all annotations synced in real time.`,
    },
    {
      id: 'ocr',
      title: 'World-Class OCR Technology',
      body: `One of Sanad's most significant technical capabilities is its optical character recognition engine, which converts scanned documents and image-based PDFs into fully searchable, editable text. Understanding the scope and quality of this OCR system is important for anyone dealing with legacy documents, scanned archives, or PDFs generated from physical paper.

**Recognition Accuracy and Language Support**
Sanad's OCR engine achieves industry-leading recognition accuracy: over 99.5% for clean, high-resolution documents printed in standard fonts, and over 97% for lower-quality scans, handwritten documents (printed handwriting only), and documents with complex layouts. The engine supports 187 languages including all major Roman script languages, Arabic (with proper right-to-left text flow reconstruction), Hebrew, Chinese (Simplified and Traditional), Japanese, Korean, Devanagari (for Hindi, Sanskrit, and other Indic languages), Cyrillic, Greek, Thai, and many others.

Multi-language document support is particularly sophisticated — Sanad can detect when a single document contains text in multiple languages (a common scenario in international business documents) and applies the appropriate recognition model for each language block independently.

**Layout Analysis and Reconstruction**
Recognizing individual characters is only half the OCR challenge. The other half is understanding the document's layout — distinguishing between columns of text, data tables, image captions, footnotes, headers, and other structural elements — and reconstructing this layout in the resulting editable document. Sanad's layout analysis engine uses a machine learning model trained on millions of diverse document layouts to classify text regions and reconstruct the document structure with high fidelity.

For complex multi-column layouts (common in academic journals, legal publications, and newspapers), Sanad correctly identifies column boundaries and ensures that text flows within each column rather than across the page. Tables are reconstructed as actual table structures with proper cell alignment, not just as multiple lines of aligned text. These structural reconstructions are essential for producing clean, usable output from OCR.

**Batch OCR Processing**
For organizations with large archives of scanned documents that need to be converted to searchable PDFs, Sanad's batch OCR feature is transformative. You can select any number of PDF files or image files, configure the OCR settings (language, accuracy vs. speed trade-off, output format), and Sanad will process the entire batch in background — continuing even if the application is in the background or the screen is locked. Progress is tracked in a processing queue panel, and completed files are automatically saved to your specified output location.`,
    },
    {
      id: 'faq',
      title: 'Frequently Asked Questions',
      body: '',
    },
  ],

  faqs: [
    {
      q: 'Can Sanad edit text inside any PDF?',
      a: 'Sanad can directly edit text in PDFs created from digital sources (Word, Excel, InDesign, etc.). For scanned PDFs, Sanad first runs OCR to recognize the text, then makes it editable. Font matching ensures edited text blends seamlessly with the original.',
    },
    {
      q: 'Does Sanad support Apple Pencil?',
      a: 'Yes. On iPad, Sanad has full Apple Pencil support with pressure sensitivity for freehand drawing and annotation. Hovering the Apple Pencil over the page previews the annotation stroke before you touch. Palm rejection ensures your hand resting on the screen does not interfere with Pencil input.',
    },
    {
      q: 'Can I convert PDF to Word while preserving formatting?',
      a: 'Yes. Sanad\'s PDF-to-Word conversion engine preserves tables, images, columns, font styles, headers, footers, and page layout with very high fidelity. Complex documents with multiple columns, embedded tables, and mixed formatting are handled intelligently.',
    },
    {
      q: 'Is Sanad compliant with PDF/A for archival?',
      a: 'Yes. Sanad can save documents as PDF/A-1b, PDF/A-2b, and PDF/A-3b — the ISO standards for long-term PDF archival. PDF/A documents embed all fonts and color profiles, ensuring they display identically in perpetuity regardless of operating system or font availability.',
    },
    {
      q: 'How many languages does the OCR engine support?',
      a: 'Sanad\'s OCR engine supports 187 languages, including Arabic, Chinese, Japanese, Korean, Hebrew, Thai, Devanagari script languages, and all major European languages. Multi-language documents are automatically detected and processed with the appropriate recognition model for each language block.',
    },
    {
      q: 'Can multiple people annotate the same PDF simultaneously?',
      a: 'Yes, with Sanad\'s cloud collaboration feature. When a document is stored in a shared cloud folder (iCloud, Dropbox, Google Drive, or OneDrive), multiple users can open and annotate it simultaneously. Annotations are synced in real time with conflict resolution.',
    },
  ],

  news: [
    {
      slug: 'sanad-ai-editing',
      title: 'Sanad Introduces AI Writing Assistant — Edit PDFs with Natural Language Commands',
      date: 'July 5, 2026',
      summary: 'Sanad\'s new AI Writing Assistant lets you edit PDF text using plain English commands: "Make this paragraph more formal", "Translate this section to Spanish", "Summarize this page into three bullet points."',
      readTime: '14 min read',
      category: 'Product Update',
      body: `The challenge of PDF editing has always been fundamentally a challenge of friction. Editing text inside a PDF has been technically possible for years, but the tools have always been cumbersome — clicking precisely on text blocks, wrestling with font matching, dealing with reflowing text that disrupts your layout. Even with the best PDF editor available, making meaningful changes to a complex PDF document has required patience, precision, and a certain tolerance for frustration.

Today, Sanad is fundamentally changing this dynamic with the introduction of the AI Writing Assistant — a natural language interface for PDF editing that allows you to describe what you want done in plain English and watch Sanad execute it. This is not autocomplete. This is not a chatbot that explains your document. This is a genuine AI editing agent that understands your document's content and structure, interprets your editing instructions, and makes precise, contextually appropriate changes to the actual PDF text.

## How the AI Writing Assistant Works

The AI Writing Assistant is accessible from the new floating AI panel (the sparkle icon in the right sidebar). When you open the panel, Sanad processes your entire document using a large language model that has been fine-tuned specifically for document editing tasks. This processing creates a semantic understanding of your document — not just the words, but their context, meaning, relationships, and structure.

Once the document has been processed (typically 2-5 seconds for most business documents), you can type natural language commands in the AI prompt field and press Enter. Here are some examples of what you can ask:

"Fix all grammatical errors in Section 3." — Sanad identifies Section 3 based on heading structure, analyzes each sentence for grammatical issues, and makes precise corrections, showing you a tracked-changes view so you can review and accept or reject each change.

"Make the tone of the executive summary more formal and professional." — Sanad rewrites the executive summary with elevated vocabulary and more formal sentence construction, while preserving the factual content and key points.

"Translate the conclusion paragraph to French." — Sanad identifies the conclusion paragraph, translates it to French using the integrated translation model, and replaces the English text with the French translation in the same font and formatting.

"Summarize this 20-page report into a 5-bullet executive summary and insert it at the top of the document." — Sanad reads the entire document, identifies the key points, generates a concise 5-bullet summary, creates a new page at the beginning of the document, and inserts the summary with formatting that matches the document's style.

"Find all instances of the old company name 'Apex Corp' and replace them with 'Nexus Group'." — A smarter find-and-replace that understands context, correctly handling possessives (Apex Corp's becomes Nexus Group's), avoiding changes inside quoted text if appropriate, and maintaining proper capitalization.

## AI-Powered Table Generation

One of the most impressive AI Writing Assistant features is its ability to generate tables from unstructured text. If your PDF contains a paragraph listing product specifications, pricing information, or comparison data in prose form, you can select the text and ask the AI to "Convert this information into a formatted table." Sanad extracts the data from the text, determines appropriate column headers, creates a properly formatted table, and replaces the selected text with the table — a task that would previously require manual data entry and table formatting.

The reverse operation — converting a table back to prose — is equally powerful. Entire complex data tables can be described as flowing narrative text with a single command.

## Privacy and Data Security

The AI Writing Assistant processes document content to provide its features. We understand that for many Sanad users, document confidentiality is paramount. To address this, Sanad offers two AI processing modes:

Cloud Processing (default): Documents are sent to Sanad's secure AI servers for processing. Data is encrypted in transit and at rest, not stored permanently, and never used for model training. Processing is faster and the AI model is larger and more capable.

On-Device Processing (privacy mode): For users with sensitive documents, Sanad 4.5 includes an on-device AI model (compressed for local inference) that processes documents entirely on your device, with no data ever leaving your Mac or iPad. Processing is somewhat slower, but absolute privacy is guaranteed.

The AI Writing Assistant is available today in Sanad 4.5 on all plans. Basic AI features (grammar correction, tone adjustment) are included in the free tier. Advanced features (translation, summarization, table generation) require a Pro subscription.`,
    },
  ],
};

export default sanad;
