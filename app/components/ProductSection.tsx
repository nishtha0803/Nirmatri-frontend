import { ShoppingCart, Star } from "lucide-react";
import { Card } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";

export function ProductSection({
  title,
  subtitle,
  products,
}: {
  title: string;
  subtitle?: string;
  products: any[];
}) {
  return (
    <section className="py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-semibold mb-2">{title}</h2>
        {subtitle && (
          <p className="text-gray-600 mb-8">{subtitle}</p>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p) => (
            <Card
              key={p.id}
              className="group hover:shadow-xl transition-all"
            >
              <img
                src={p.image}
                className="h-56 w-full object-cover rounded-t-xl"
              />

              <div className="p-4 space-y-2">
                <h3 className="line-clamp-2 min-h-[48px]">
                  {p.name}
                </h3>

                <div className="flex items-center gap-2">
                  <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                  <span className="text-sm">{p.rating}</span>
                </div>

                <div className="flex gap-2 items-center">
                  <span className="text-xl font-semibold">
                    ₹{p.price}
                  </span>
                  {p.originalPrice && (
                    <span className="line-through text-gray-500 text-sm">
                      ₹{p.originalPrice}
                    </span>
                  )}
                </div>

                <Button className="w-full mt-2">
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  Add to Cart
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
