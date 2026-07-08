<!--
این ترجمه توسط ChatGPT ایجاد شده و باید توسط مترجم انسانی بازبینی شود.
پس از تأیید ترجمه، این خطوط را در یک pull request حذف کنید.
-->

# 6.6 Connectors :: Native

## بحث عمیق

### از Windows به Systems

اتصال‌دهنده **Native** میان **Layer 2: Windows** و **Layer 1: Systems** قرار دارد. وظیفه آن اتصال window به system زیربنایی است تا خروجی تحویل داده شود و interactions از محیط واقعی اجرای برنامه دریافت شوند.

Layer 2 به Stack یک window می‌دهد: یک view، container یا نقطه تحویل bounded. Layer 1 به Stack system را می‌دهد: محیط اجرا، دسترسی سخت‌افزار، سرویس‌ها، دستگاه‌ها و رفتار native که window را ممکن می‌کنند. Native connector نقطه عبور میان این دو لایه است.

### تعریف Bindings

یک **binding** اتصال کنترل‌شده‌ای میان یک لایه و قابلیت‌هایی است که لایه‌ای دیگر فراهم می‌کند. در زمینه Native connector، bindings رفتار system-level را به window در شکلی expose می‌کنند که برنامه بتواند از آن استفاده کند، بدون اینکه window مجبور شود خود system باشد.

این تعریف عمداً ساده است. Binding قرار نیست همه پلتفرم را در interface بالاتر بریزد. Binding باید قابلیت لازم را با مرزی روشن فراهم کند: ساخت window، تغییر اندازه، دریافت events، درخواست focus، دسترسی به clipboard، cursor، device context یا سایر عملیات native.

### چرا Native لازم است

هیچ windowای فقط با خیال وجود ندارد. چیزی باید از system بخواهد آن را ایجاد کند، پیکربندی کند، به‌روزرسانی کند، events را دریافت کند و خروجی را به دستگاه‌ها برساند. Native connector این «چیزی» است.

بدون Native، Layer 2 نمی‌تواند واقعاً با پلتفرم ارتباط بگیرد. با Native، window می‌تواند روی Windows، macOS، Linux، مرورگر، console یا محیط embedded به شکل مناسب همان system کار کند.

### پنهان کردن تفاوت‌های پلتفرم

پلتفرم‌ها رفتارهای متفاوتی دارند. پنجره‌ها، event loopها، مجوزها، device APIs، DPI، focus، input methodها و lifecycleها در هر سیستم می‌توانند فرق کنند. Native connector این تفاوت‌ها را در مرزی مشخص نگه می‌دارد تا لایه‌های بالاتر لازم نباشد همه چیز را مستقیم بشناسند.

### مسیر پایین به بالا

Native در مسیر interaction نیز بسیار مهم است. system رویداد واقعی را دریافت می‌کند، اما Native آن را به window و سپس Stack منتقل می‌کند. key press، pointer move، touch، resize، close request، device signal یا platform message همه می‌توانند از این مسیر وارد شوند.

### Binding نه نشت abstraction

هدف bindings این نیست که تمام جزئیات native به لایه‌های بالاتر نشت کند. هدف این است که قابلیت‌های لازم با نام، شکل و قرارداد کنترل‌شده در دسترس باشند. اگر binding بی‌نظم باشد، کل Stack دوباره به «هر پلتفرم برای خودش» برمی‌گردد. اگر binding تمیز باشد، portability و clarity حفظ می‌شود.
