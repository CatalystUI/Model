<!--
این ترجمه توسط ChatGPT ایجاد شده و باید توسط مترجم انسانی بازبینی شود.
پس از تأیید ترجمه، این خطوط را در یک pull request حذف کنید.
-->

# 6.5 Connectors :: Surface

## بحث عمیق

### از Renderer به Window

اتصال‌دهنده **Surface** میان **Layer 3: Renderers** و **Layer 2: Windows** قرار دارد. وظیفه آن انتقال خروجی آماده renderer به زمینه boundedای است که window فراهم می‌کند.

Renderer داده را به شکل آماده خروجی تبدیل می‌کند، اما هنوز باید جایی برای ارائه آن وجود داشته باشد. Window این زمینه را فراهم می‌کند. Surface نقطه‌ای است که خروجی renderer با window پیوند می‌خورد.

### Surface چیست

در رابط بصری، surface ممکن است back buffer، swapchain، framebuffer، drawing context یا هر سازوکاری باشد که renderer بتواند روی آن خروجی تولید کند و window بتواند آن را نمایش دهد. در دامنه صوتی، surface می‌تواند به بافر یا کانال خروجی‌ای شبیه باشد که renderer صوتی داده را به آن تحویل می‌دهد. در دامنه‌های دیگر نیز همین نقش مفهومی برقرار است.

Surface را نباید فقط یک شیء گرافیکی دانست. این connector مرز تحویل میان renderer و window است.

### حفظ استقلال Renderer و Window

Surface اجازه می‌دهد renderer مجبور نباشد تمام جزئیات window را بداند، و window هم مجبور نباشد منطق rendering را در خود داشته باشد. Renderer خروجی آماده می‌کند؛ window زمینه تحویل را دارد؛ Surface بین آن‌ها قرارداد عملی برقرار می‌کند.

این جداسازی مخصوصاً در پلتفرم‌های مختلف مهم است. ممکن است یک renderer روی چند نوع window کار کند، یا یک window چند backend rendering را پشتیبانی کند. Surface جایی است که تفاوت‌ها متمرکز می‌شوند.

### چرخه ارائه

در بسیاری از سیستم‌ها، Surface با چرخه presentation درگیر است: آماده‌سازی frame، تحویل buffer، swap، flush، submit یا signal. جزئیات به domain و پلتفرم بستگی دارد. مفهوم اصلی این است که خروجی renderer باید از حالت آماده به حالت قابل تحویل در window برسد.

### مسیر interaction

Surface معمولاً در مسیر interaction نقش کوچک‌تری دارد، اما گاهی مهم می‌شود. اندازه surface، scaling، DPI، orientation یا mapping میان output و window می‌تواند بر تفسیر interaction اثر بگذارد. بنابراین Surface ممکن است اطلاعات زمینه‌ای لازم برای تبدیل مختصات یا bounds را نیز فراهم کند.
