import { Ship, Package, Clock, Shield } from 'lucide-react';

const service = [
  {
    title: 'Sourcing global',
    description: 'Acesso a uma rede mundial de fornecedores e fabricantes verificados.',
    icon: Ship,
  },
  {
    title: 'Soluções de Importação',
    description: 'Gestão de importação de ponta a ponta, incluindo documentação e desembaraço aduaneiro.',
    icon: Package,
  },
  {
    title: 'Entrega rápida',
    description: 'Logística eficiente e prazos de entrega rápidos para minimizar sua espera.',
    icon: Clock,
  },
  {
    title: 'Garantia de qualidade',
    description: 'Processos rigorosos de controle de qualidade e verificação de produtos.',
    icon: Shield,
  },
];

export default function Services() {
  return (
    <div id="Service" className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Nossos Serviços</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Oferecemos soluções de importação abrangentes adaptadas às necessidades do seu negócios
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
            {service.map((service) => (
              <div key={service.title} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <service.icon className="h-5 w-5 flex-none text-blue-600" aria-hidden="true" />
                  {service.title}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{service.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}