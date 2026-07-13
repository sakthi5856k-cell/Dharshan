import {
  Home,
  Building2,
  Truck,
  Bike,
  Car,
  Package,
} from "lucide-react";

const services = [
  {
    icon: <Home size={40} />,
    title: "House Shifting",
    desc: "Safe & Secure Home Relocation",
  },
  {
    icon: <Building2 size={40} />,
    title: "Office Shifting",
    desc: "Corporate Office Relocation",
  },
  {
    icon: <Bike size={40} />,
    title: "Bike Transport",
    desc: "Door to Door Bike Delivery",
  },
  {
    icon: <Car size={40} />,
    title: "Car Transport",
    desc: "Fully Insured Vehicle Moving",
  },
  {
    icon: <Package size={40} />,
    title: "Packing Service",
    desc: "Premium Packing Materials",
  },
  {
    icon: <Truck size={40} />,
    title: "Gayatri Transport",
    desc: "Full Load & Part Load Service",
  },
];

export default function Services() {
  return (
    <section className="py-20 bg-slate-100">

      <div className="max-w-7xl mx-auto">

        <h2 className="text-5xl text-center font-bold mb-14">
          Our Services
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {services.map((item, index) => (

            <div
              key={index}
              className="bg-white rounded-3xl shadow-xl p-8 hover:scale-105 duration-300"
            >

              <div className="text-yellow-500 mb-5">
                {item.icon}
              </div>

              <h3 className="text-2xl font-bold">
                {item.title}
              </h3>

              <p className="mt-3 text-gray-600">
                {item.desc}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}
