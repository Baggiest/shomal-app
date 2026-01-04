export function ProductShowcase() {
  return (
    <section className="relative">
      <img
        src="https://ext.same-assets.com/2455557907/4283118843.jpeg"
        alt="Factory View"
        className="w-full h-[500px] object-cover"
      />
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
        <div className="container mx-auto">
          <div className="flex items-end justify-between">
            <div className="text-white max-w-2xl text-right">
              <h2 className="text-2xl font-bold mb-2">LJB 1S</h2>
              <p className="text-sm leading-relaxed">
                سوئیچ قطع و وصل کنترلی سلکتوری مدل LJB1-S شرکت ماشین سازی شمال برای
                انتخاب و تغییر حالت بین چندین وضعیت یا مدار مختلف در یک سیستم الکتریکی
                استفاده می‌شود. این سوئیچ‌ها به طور گسترده در سیستم‌های کنترلی و صنعتی برای
                تغییر وضعیت تجهیزات، مدارها یا فرآیندها به کار می‌روند.
              </p>
            </div>
            <img
              src="https://ext.same-assets.com/2455557907/3250288881.png"
              alt="LJB 1S Product"
              className="h-32 w-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

